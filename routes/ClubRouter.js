const Router = require('express').Router()
const controller = require('../controllers')
const middleware = require('../middleware')


Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.ClubController.createClub
  )
Router.get('/', controller.ClubController.getAllClubs)
Router.get('/:club_id', controller.ClubController.getClubById)
Router.post(
  '/:club_id/addUsers', 
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.ClubController.addMemberToClub
  )
  Router.get('/user/:user_id', controller.ClubController.getClubsByUser)
  Router.post(
    '/:club_id/addBooks', 
    // middleware.stripToken,
    // middleware.verifyToken,
    controller.ClubController.addBookToList
    )
    Router.delete(
  '/:club_id/:book_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.ClubController.removeBookFromList
)

module.exports = Router
