const { Club, MemberList, User, ReadingList, Book } = require('../models')

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
    const clubs = await Club.findAll({
      include: [
        {
          model: Book,
          as: 'books',
          through: ReadingList,
          attributes: ['id', 'data']
        }
      ]
    })
    res.send(clubs)
  } catch (error) {
    throw error
  }
}

const getClubById = async (req, res) => {
  try {
    const { club_id } = req.params
    const club = await Club.findByPk(club_id, {
      include: [
        {
          model: Book,
          as: 'books',
          through: ReadingList,
          attributes: ['id', 'data']
        }
      ]
    })
    res.send(club)
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
          as: 'members',
          attributes: ['id', 'firstName', 'lastName']
        }
      ]
    })
    res.send(response)
  } catch (error) {
    throw error
  }
}

const addBookToList = async (req, res) => {
  try {
    const club = await Club.findByPk(req.params.club_id)
    await club.addBooks([req.body.bookId])
    await club.save()
    const response = await Club.findByPk(req.params.club_id, {
      include: [
        {
          model: Book,
          through: ReadingList,
          as: 'books',
          attributes: ['id']
        }
      ]
    })
    res.send(response)
  } catch (error) {
    throw error
  }
}

const removeBookFromList = async (req, res) => {
  try {
    const readingList = await ReadingList.findAll({
      where: {
        bookId: req.params.book_id,
        clubId: req.params.club_id
      }
    })
    await readingList.map((list) => list.destroy())
    res.send({
      msg: 'Book Removed From List',
      payload: req.params.book_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createClub,
  getAllClubs,
  getClubById,
  addMemberToClub,
  addBookToList,
  removeBookFromList
}
