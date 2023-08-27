const toolsModels = require('../models/toolsModels');

const getAllTools = async (_req, res) => {
  const tools = await toolsModels.getAllTools();
  return res.status(200).json(tools);
};

module.exports = {
  getAllTools,
}
