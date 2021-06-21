const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')

const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//book endpoints
app.get('/api/books', ctrl.getBooks)
app.delete('/api/books/:id', ctrl.deleteBook)
app.post('/api/books', ctrl.createBook)
app.put('/api/books/:id', ctrl.updateBook)


app.listen(4040, () => console.log('Running on port 4040'))