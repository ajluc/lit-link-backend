const Router = require('express').Router()
const controller = require('../controllers')

Router.post('/', controller.ClubController.createClub)
Router.get('/', controller.ClubController.getAllClubs)

module.exports = Router