const connection = require('./connection');

/**
 * Obtém todas as ferramentas armazenadas no banco de dados.
 *
 * @async
 * @function
 * @returns {Promise<Array>} - Uma promessa que resolve em um array de objetos representando as ferramentas.
 * @throws {Error} - Lança um erro se ocorrer um problema durante a execução da consulta.
 */
const getAllTools = async () => {
  try {
    const [rows] = await connection.execute("SELECT * FROM tools");
    return rows;
  } catch (error) {
    throw error;
  };
};

/**
 * Obtém todas as ferramentas que contêm uma tag específica.
 *
 * @async
 * @function
 * @param {string} tag - A tag pela qual as ferramentas são filtradas.
 * @returns {Promise<Array>} - Uma promessa que resolve em um array de objetos representando as ferramentas encontradas.
 * @throws {Error} - Lança um erro se ocorrer um problema durante a execução da consulta.
 */
const getToolByTag = async (tag) => {
  const query = 'SELECT * FROM tools WHERE JSON_CONTAINS(tags, ?)';

  try {
    const [rows] = await connection.execute(query, [JSON.stringify(tag)]);
    return rows;
  } catch (error) {
    throw error;
  };
};

/**
 * Cria uma nova ferramenta no banco de dados.
 *
 * @async
 * @function
 * @param {Object} tool - Os detalhes da nova ferramenta a ser criada.
 * @returns {Promise<Object>} - Uma promessa que resolve em um objeto representando a nova ferramenta criada, incluindo seu ID gerado.
 * @throws {Error} - Lança um erro se ocorrer um problema durante a execução da inserção.
 */
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

/**
 * Exclui uma ferramenta do banco de dados com base no seu ID.
 *
 * @async
 * @function
 * @param {number} id - O ID da ferramenta a ser excluída.
 * @returns {Promise<Object>} - Uma promessa que resolve em um objeto vazio em caso de sucesso.
 * @throws {Error} - Lança um erro se ocorrer um problema durante a exclusão.
 */
const deleteTool = async (id) => {
  try {
    const query = 'DELETE FROM tools WHERE id = ?';

    await connection.execute(query, [id]);
    return {};
  } catch (error) {
    throw error;
  };
};

/**
 * Atualiza os detalhes de uma ferramenta no banco de dados com base no seu ID.
 *
 * @async
 * @function
 * @param {number} id - O ID da ferramenta a ser atualizada.
 * @param {Object} tool - Os novos detalhes da ferramenta.
 * @returns {Promise<Object>} - Uma promessa que resolve em um objeto vazio em caso de sucesso.
 * @throws {Error} - Lança um erro se ocorrer um problema durante a atualização.
 */
const updateTool = async (id, tool) => {
  try {
    const { title, link, description, tags } = tool;
    const query = "UPDATE tools SET title = ?, link = ?, description = ?, tags = ? WHERE id = ?";

    await connection.execute(query, [title, link, description, tags, id]);

    return {};
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getAllTools,
  getToolByTag,
  createTool,
  deleteTool,
  updateTool
}

