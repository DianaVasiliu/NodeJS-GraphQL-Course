const { GraphQLObjectType } = require('graphql')
const loginInputType = require('./inputTypes/loginInputType')
const loginResultType = require('./types/loginResultType')
const loginHandler = require('../repository/login')
const userType = require('./types/userType')
const createUserInputType = require('./inputTypes/createUserInputType')
const db = require('../models')
const updateUserInputType = require('./inputTypes/updateUserInputType')
const { createUser, updateUser } = require('../repository/users')

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        login: {
            type: loginResultType,
            args: {
                loginInput: {
                    type: loginInputType,
                },
            },
            resolve: (source, args) => {
                const { email, password } = args.loginInput
                const token = loginHandler(email, password)

                return {
                    token,
                }
            },
        },
        createUser: {
            type: userType,
            args: {
                createUserInput: {
                    type: createUserInputType,
                },
            },
            resolve: async (source, args) => {
                return createUser(args.createUserInput)
            },
        },
        updateUser: {
            type: userType,
            args: {
                updateUserInput: {
                    type: updateUserInputType,
                },
            },
            resolve: async (solve, args, context) => {
                return updateUser(args.updateUserInput, context)
            },
        },
    },
})

module.exports = mutationType
