const sqlite3 = require("sqlite3")
const {open} = require ("sqlite")

// configurando a conexao com o banco de dados

// estrutura de arrow function para fazer o open funcionar(conexao com bd)
module.exports = () => open({
    filename: "./database.sqlite",
    driver: sqlite3.Database
  })