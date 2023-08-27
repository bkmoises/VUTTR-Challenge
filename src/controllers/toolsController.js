const toolsModels = require('../models/toolsModels');

const getTools = async (req, res) => {
  try {
    if (req.query.tag) {
      const { tag } = req.query;
      const tools = await toolsModels.getToolByTag(tag);

      if (!tools.length) {
        return res.status(404).json({ message: 'Nenhuma ferramenta encontrada para a tag fornecida.' });
      };

      return res.status(200).json(tools);
    };

    const tools = await toolsModels.getAllTools();
    return res.status(200).json(tools);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao obter as ferramentas.' });
  };
};

const createTool = async (req, res) => {
  try {
    const createdTool = await toolsModels.createTool(req.body);
    return res.status(201).json(createdTool);
  }
  catch (error) {
    return res.status(500).json({ message: 'Erro ao criar uma nova ferramenta.' });
  };
};

const deleteTool = async (req, res) => {
  const { id } = req.params;

  try {
    await toolsModels.deleteTool(id);
    return res.status(200).json({});
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao tentar deletar uma ferramenta.' });
  };
};

const updateTool = async (req, res) => {
  const { id } = req.params;

  try {
    await toolsModels.updateTool(id, req.body);
    return res.status(200).json({});
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getTools,
  createTool,
  deleteTool,
  updateTool
};
