const Router = require('express').Router()
const ClubRouter = require('./ClubRouter')
const UserRouter = require('./UserRouter')
const BookRouter = require('./BookRouter')

Router.use('/clubs', ClubRouter)
Router.use('/users', UserRouter)
Router.use('/books', BookRouter)

module.exports = Router