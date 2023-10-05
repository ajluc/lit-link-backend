const Router = require('express').Router()
const controller = require('../controllers')

Router.post('/', controller.BookController.createBook)
Router.get('/', controller.BookController.getAllBooks)
Router.get('/:book_id', controller.BookController.getBookById)

module.exports = Router