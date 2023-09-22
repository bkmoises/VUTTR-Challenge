const toolsModels = require('../models/toolsModels');

/**
 * Retorna todas as ferramentas ou as ferramentas filtradas por uma tag.
 *
 * @param {Object} req - O objeto de requisição HTTP.
 * @param {Object} res - O objeto de resposta HTTP.
 * @returns {Object} - Retorna uma resposta JSON contendo as ferramentas encontradas ou uma mensagem de erro em caso de falha.
 */
const getTools = async (req, res) => {
  try {
    const { tag } = req.query;

    if (Object.keys(req.query).length) {
      if ('tag' in req.query) {
        const tools = await toolsModels.getToolByTag(tag);
        return res.status(200).json(tools);
      } else {
        return res.status(500).json({ message: 'O parâmetro informado é inválido!' });
      };
    }

    const tools = await toolsModels.getAllTools();
    return res.status(200).json(tools);
  }
  catch (error) {
    return res.status(500).json({ message: "Erro ao obter as ferramentas." });
  };
};

/**
 * Cria uma nova ferramenta com base nos dados fornecidos no corpo da requisição.
 *
 * @param {Object} req - O objeto de requisição HTTP com os dados da nova ferramenta.
 * @param {Object} res - O objeto de resposta HTTP.
 * @returns {Object} - Retorna uma resposta JSON contendo a nova ferramenta criada ou uma mensagem de erro em caso de falha.
 */
const createTool = async (req, res) => {
  try {
    const createdTool = await toolsModels.createTool(req.body);
    return res.status(201).json(createdTool);
  }
  catch (error) {
    return res.status(500).json({ message: 'Erro ao criar uma nova ferramenta.' });
  };
};

/**
 * Remove uma ferramenta com base no ID fornecido como parâmetro na URL.
 *
 * @param {Object} req - O objeto de requisição HTTP com o ID da ferramenta a ser removida.
 * @param {Object} res - O objeto de resposta HTTP.
 * @returns {Object} - Retorna uma resposta JSON vazia em caso de sucesso ou uma mensagem de erro em caso de falha.
 */
const deleteTool = async (req, res) => {
  const { id } = req.params;

  try {
    await toolsModels.deleteTool(id);
    return res.status(200).json({});
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao tentar deletar uma ferramenta.' });
  };
};

/**
 * Atualiza uma ferramenta com base no ID fornecido como parâmetro na URL e nos dados fornecidos no corpo da requisição.
 *
 * @param {Object} req - O objeto de requisição HTTP com o ID da ferramenta a ser atualizada e os novos dados.
 * @param {Object} res - O objeto de resposta HTTP.
 * @returns {Object} - Retorna uma resposta JSON vazia em caso de sucesso ou uma mensagem de erro em caso de falha.
 */
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
