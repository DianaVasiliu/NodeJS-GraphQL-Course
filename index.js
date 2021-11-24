const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql')

const authorizationMiddleware = require('./middleware/authorization')
const { port } = require('./config/express')

const app = express()

app.use(
    '/graphql',
    authorizationMiddleware,
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)

app.listen(port, () => {
    console.log('Server started on port', port)
})
