const { GraphQLObjectType, GraphQLString } = require('graphql')

const helloWorldQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,
            args: {
                name: {
                    type: GraphQLString,
                },
            },
            resolve: (_, { name }) => {
                if (name) {
                    return `Hello, ${name}`
                }
                return 'Hello World'
            },
        },
    },
})

module.exports = helloWorldQueryType
