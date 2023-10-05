const { Club, MemberList, User } = require('../models')

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

const addMemberToClub = async (req, res) => {
    try {
        const club = await Club.findByPk(req.params.club_id)
        await club.addMembers([req.body.userId])
        await club.save()
        const response = await Club.findByPk(req.params.club_id, {
            include: [
                {
                    model: User,
                    through: MemberList,
                    as: "members",
                    attributes: ['id', 'firstName', 'lastName']
                }
            ]
        })
        res.send(response)
    } catch (error) {
        throw error
    }
}

module.exports = {
    createClub,
    getAllClubs,
    addMemberToClub
}