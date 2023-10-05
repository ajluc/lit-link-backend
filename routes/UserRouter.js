const Router = require('express').Router()
const controller = require('../controllers')

Router.post('/', controller.UserController.createUser) // temporary for testing - remove when incorporating auth
Router.get('/', controller.UserController.getAllUsers)

module.exports = Router