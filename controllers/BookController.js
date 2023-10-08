const { Book, ReadingList } = require('../models')

// temporary for testing - remove when incorporating auth
const createBook = async (req, res) => {
    try {
        const book = await new Book(req.body)
        await book.save()
        res.send(book)
    } catch (error) {
        throw error
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll()
        res.send(books)
    } catch (error) {
        throw error
    }
}

const getBookById = async (req, res) => {
    try {
        const { book_id } = req.params
        const book = await Book.findByPk(book_id)
        res.send(book)
    } catch (error) {
        throw error
    }
}

const deleteBook = async (req, res) => {
    try {
        const readingLists = await ReadingList.findAll({
            where: { bookId: req.params.book_id}
        })
        await readingLists.map((list) => list.destroy())
        await Book.destroy({ where: { id: req.params.book_id}})
        res.send({
            msg: 'Book Deleted',
            payload: req.params.book_id,
            status: 'Ok'
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    createBook, 
    getAllBooks,
    getBookById,
    deleteBook
}