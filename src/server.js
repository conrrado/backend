const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(3331)

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Remover uma informação no back-end
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros / Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos ":alguma_coisa"
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table("user").select("*")
 */

/**
 * Entidades
 * - ONG
 * - Casos (incident)
 */

/**
 * Funcionalidades
 * - Login de ONG
 * - Logout de ONG
 * - Cadastro de ONG
 * - Cadastrar novos casos
 * - Deletar casos
 * - Listar casos específicos de uma ONG
 * - Listar todos os casos
 * - Entrar em contato com a ONG
 */

/**
 * PAREI EM Video 1 - semana Omnistack 11 - 58:40
 */
