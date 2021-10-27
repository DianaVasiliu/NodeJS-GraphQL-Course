const express = require('express')
const bodyParser = require('body-parser')

const handleGreeting = require('./controllers/greetings')
const handleLogin = require('./controllers/login')
const authorizationMiddleware = require('./middleware/authorization')
const { port } = require('./config/express')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.post('/login', handleLogin)

app.get('/hello', authorizationMiddleware, handleGreeting)

app.get('/hello/:name?', authorizationMiddleware, handleGreeting)

app.listen(port, () => {
    console.log('Server started on port', port)
})
