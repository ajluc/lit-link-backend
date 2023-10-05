const Router = require('express').Router()
const ClubRouter = require('./ClubRouter')
const UserRouter = require('./UserRouter')

Router.use('/clubs', ClubRouter)
Router.use('/users', UserRouter)

module.exports = Router