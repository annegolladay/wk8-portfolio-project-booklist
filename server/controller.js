const books = require('./db.json')
let globalId = 11

module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books)
    },
    deleteBook: (req, res) => {
        const {id} = req.params
        const index = books.findIndex((book) => {
            return book.id === +id
        })
        books.splice(index, 1)
        res.status(200).send(books)
    },
    createBook: (req, res) => {
        const {title, rating, imageURL} = req.body //destructure

        const index = books.findIndex((book) => book.title === title)

        if (index !== -1) {
            res.status(400).send('book already added')
        } else if (!title || !rating || !imageURL) {
            res.status(400).send('incomplete')
        } else {
            const newBook = {
                id: globalId,
                title: title,
                rating: rating,
                imageURL: imageURL
            }
            books.push(newBook)
            res.status(200).send(books)
            globalId++
        }
    },
    updateBook: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        const index = books.findIndex((book) => {
            return book.id === +id
        })

        const currRating = books[index].rating

        if (currRating === 5 && type === 'plus') {
            res.status(400).send('try again')
        } else if (currRating === 0 && type === 'minus') {
            res.status(400).send('try again')
        } else if (type === 'plus') {
            books[index].rating++
            res.status(200).send(books)
        } else if (type === 'minus') {
            books[index].rating--
            res.status(200).send(books)
        } else {
            res.status(400).send('failed to update')
        }
        console.log(currRating)
        console.log(req.body)
    }
}