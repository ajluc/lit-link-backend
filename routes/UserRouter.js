const Router = require('express').Router()
const controller = require('../controllers')

Router.post('/', controller.UserController.createUser) // temporary for testing - remove when incorporating auth
Router.get('/', controller.UserController.getAllUsers)
Router.get('/:user_id', controller.UserController.getUserById)
Router.delete('/:user_id', controller.UserController.deleteUser)

module.exports = Router