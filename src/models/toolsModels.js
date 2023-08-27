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

module.exports = {
  getAllTools,
}
