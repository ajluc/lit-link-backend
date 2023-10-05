const { Club } = require('../models')

const createClub = async (req, res) => {
    try {
        const club = await new Club(req.body)
        await club.save()
        res.send(club)
    } catch (error) {
        throw error
    }
}

const getAllClubs = async (req, res) => {
    try {
        const clubs = await Club.findAll()
        res.send(clubs)
    } catch (error) {
        throw error
    }
}

module.exports = {
    createClub,
    getAllClubs
}