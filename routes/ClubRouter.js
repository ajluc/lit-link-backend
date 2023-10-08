const Router = require('express').Router()
const controller = require('../controllers')

Router.post('/', controller.ClubController.createClub)
Router.get('/', controller.ClubController.getAllClubs)
Router.get('/:club_id', controller.ClubController.getClubById)
Router.post('/:club_id/addUsers', controller.ClubController.addMemberToClub)
Router.post('/:club_id/addBooks', controller.ClubController.addBookToList)
Router.delete('/:club_id/:book_id', controller.ClubController.removeBookFromList)

module.exports = Router