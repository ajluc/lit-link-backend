const Router = require('express').Router()
const controller = require('../controllers')
const middleware = require('../middleware')


Router.post('/', controller.BookController.createBook)
Router.get('/', controller.BookController.getAllBooks)
Router.get('/:book_id', controller.BookController.getBookById)
Router.delete(
    '/:book_id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.BookController.deleteBook
    )

module.exports = Router