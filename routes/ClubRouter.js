const Router = require('express').Router()
const controller = require('../controllers')

Router.post('/', controller.ClubController.createClub)
Router.get('/', controller.ClubController.getAllClubs)
Router.post('/:club_id/addUsers', controller.ClubController.addMemberToClub)

module.exports = Router