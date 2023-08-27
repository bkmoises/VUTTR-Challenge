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

module.exports = {
  getTools,
};
