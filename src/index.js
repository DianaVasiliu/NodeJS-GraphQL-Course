import express from 'express'
import greeting from './greetings.js'
import dogFacts from './dogFacts.js'
import books from './books.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/dogs', dogFacts)

app.get('/books', books)

app.get('/hello/:name?', greeting)

app.listen(port, () => {
    console.log('Server started on port', port)
})
