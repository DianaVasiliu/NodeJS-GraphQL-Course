import express from 'express'
import bodyParser from 'body-parser'

import handleGreeting from './controllers/greetings.js'
import handleLogin from './controllers/login.js'
import authorizationMiddleware from './middleware/authorization.js'
import port from './config/express.js'
// import dogFacts from './dogFacts.js'
// import books from './books.js'

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.post('/login', handleLogin)

app.get('/hello', authorizationMiddleware, handleGreeting)

app.get('/hello/:name?', authorizationMiddleware, handleGreeting)

// app.get('/dogs', dogFacts)

// app.get('/books', books)

app.listen(port, () => {
    console.log('Server started on port', port)
})
