const Router = require('express').Router()
const ClubRouter = require('./ClubRouter')
const UserRouter = require('./UserRouter')
const BookRouter = require('./BookRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/clubs', ClubRouter)
Router.use('/users', UserRouter)
Router.use('/books', BookRouter)
Router.use('/auth', AuthRouter)

module.exports = Router