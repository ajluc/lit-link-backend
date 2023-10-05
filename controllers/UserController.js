const { User, Club, MemberList } = require('../models')

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

const getUserById = async (req, res) => {
    try {
        const { user_id } = req.params
        const user = await User.findByPk(user_id, {
            include: [
                {
                    model: Club,
                    as: 'clubs',
                    through: MemberList,
                    attributes: ['id', 'clubName']
                }
            ]
        })
        res.send(user)
    } catch (error) {
        throw error
    }
}

module.exports = {
    createUser, 
    getAllUsers,
    getUserById
}