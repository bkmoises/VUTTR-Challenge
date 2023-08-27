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
  }
};

module.exports = {
  getAllTools,
  getToolByTag,
}
