// codando com JS usando o NODE para criar um servidor

// chamando o pacote express
const express = require("express")

// criando o server
const server = express()

//chamando as rotas
const routes = require("./routes")

// importando "path"
const path = require("path")

// definindo a visualizacao do html
server.set("view engine", "ejs")

//mudar a localizaçao da pasta views
server.set("views", path.join(__dirname, "views"))

// habilitando arquivos estaticos (CSS, Images,) 
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({extended: true}))

// rotas
server.use(routes)

// .listen() = vai ligar/conectar seu sv (front-end)
server.listen(3000, () => {console.log("Rodando")})