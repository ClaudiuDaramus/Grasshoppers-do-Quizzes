const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
} = require('graphql');
const db = require('../models');

const userType = require('./types/userType');
const loginType = require('./types/auth/loginType')
const login = require('./login')
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            /* users: {
                type: new GraphQLList(userType),
                resolve: async () => await db.User.findAll()
            }, */
            login: {
                type: loginType,
                args: {
                    email: { type: new GraphQLNonNull(GraphQLString) },
                    password: { type: new GraphQLNonNull(GraphQLString) }
                },
                resolve: login
            }
        }
    }
})

module.exports = queryType