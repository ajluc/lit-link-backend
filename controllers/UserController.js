const { User } = require('../models')

// temporary for testing - remove when incorporating auth
const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        res.send(user)
    } catch (error) {
        throw error
    }
}

const getAllUsers = async (req, res) => {
    try {
        const Users = await User.findAll()
        res.send(Users)
    } catch (error) {
        throw error
    }
}

module.exports = {
    createUser, 
    getAllUsers
}