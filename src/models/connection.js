/**
 * Módulo de Conexão com o Banco de Dados MySQL
 *
 * Este módulo cria uma conexão com o banco de dados MySQL utilizando o módulo e as variáveis de ambiente configuradas no arquivo .env.
 *
 **/
const mysql = require('mysql2/promise');
require('dotenv').config();

/**
 * Cria uma conexão com o banco de dados MySQL usando as variáveis de ambiente configuradas.
 *
 * @type {Pool}
 * @property {string} host - O endereço do host do banco de dados MySQL.
 * @property {string} user - O nome de usuário para autenticação no banco de dados.
 * @property {string} password - A senha para autenticação no banco de dados.
 * @property {string} database - O nome do banco de dados a ser usado.
 */
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

module.exports = connection;
