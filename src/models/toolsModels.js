const connection = require('./connection');
const sql = require('./connection');

const getAllTools = async () => {
  try {
    const [rows] = await sql.execute("SELECT * FROM tools");
    return rows;
  }
  catch (error) {
    throw error;
  };
};

const getToolByTag = async (tag) => {
  const query = 'SELECT * FROM tools WHERE JSON_CONTAINS(tags, ?)';

  try {
    const [rows] = await sql.execute(query, [JSON.stringify(tag)]);
    return rows;
  } catch (error) {
    throw error;
  };
};

const createTool = async (tool) => {
  const { title, link, description, tags } = tool;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO tools(title, link, description, tags, created_at) VALUES (?, ?, ?, ?, ?)';

  try {
    const [rows] = await connection.execute(query, [title, link, description, tags, dateUTC]);
    const createdTool = { title, link, description, tags, id: rows.insertId };

    return createdTool;
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getAllTools,
  getToolByTag,
  createTool,
}

