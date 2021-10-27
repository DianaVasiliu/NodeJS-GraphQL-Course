const express = require('express')
const bodyParser = require('body-parser')

const handleGreeting = require('./controllers/greetings')
const handleLogin = require('./controllers/login')
const authorizationMiddleware = require('./middleware/authorization')
const { port } = require('./config/express')
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('./controllers/users')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.post('/login', handleLogin)

app.get('/hello', authorizationMiddleware, handleGreeting)

app.get('/hello/:name?', authorizationMiddleware, handleGreeting)

app.get('/users', getAllUsers)

app.get('/users/:id', getUserById)

app.post('/users/', createUser)

app.put('/users/:id', updateUser)

app.delete('/users/:id', deleteUser)

app.listen(port, () => {
    console.log('Server started on port', port)
})
