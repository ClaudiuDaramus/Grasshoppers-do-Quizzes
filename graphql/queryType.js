const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
} = require('graphql');
const db = require('../models');

const loginResultType = require('./types/loginResultType')
const login = require('../repository/login')
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            login: {
                type: loginResultType,
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