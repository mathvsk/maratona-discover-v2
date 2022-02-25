// Uma biblioteca pra criar o sv
const express = require('express')

// var que vai criar as rotas
const routes = express.Router()

// importando o profilecontroller de outra pasta
const ProfileController = require("./controllers/ProfileController")

//importando o arquivo do jobcontroller
const JobController = require("./controllers/JobController")
const DashboardController = require('./controllers/DashboardController')

// req,res (back--end) | // retornando o site para o front
routes.get('/', DashboardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)

module.exports = routes
