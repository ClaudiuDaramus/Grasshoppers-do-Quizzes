const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
} = require('graphql');
const db = require('../models');

const userType = require('./types/userType');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            users: {
                type: new GraphQLList(userType),
                resolve: async () => await db.User.findAll()
            }
        }
    }
})

module.exports = queryType