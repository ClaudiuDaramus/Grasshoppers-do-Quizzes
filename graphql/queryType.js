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
        console.log(userType)
        return {
        users: {

            type: new GraphQLList(userType),
            resolve: async (args, parent, context) => {
                return await db.User.findAll();
            }
      }
    }}
})

module.exports = queryType