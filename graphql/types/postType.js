const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
} = require('graphql')
const userType = require('./userType')

const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id: {
            type: GraphQLID,
        },
        title: {
            type: GraphQLString,
        },
        body: {
            type: GraphQLString,
        },
        author: {
            type: userType,
            resolve: async (source) => {
                console.log('source', source)
                return await source.getUser()
            },
        },
    },
})

module.exports = postType
