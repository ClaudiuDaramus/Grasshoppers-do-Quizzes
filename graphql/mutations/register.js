const {GraphQLString, GraphQLNonNull} = require('graphql')
const db = require('../../models')
const userType = require('../types/userType')
module.exports = {
    register: {
        type: userType,
        args: {
            email: { type: new GraphQLNonNull(GraphQLString) },
            name: { type: new GraphQLNonNull(GraphQLString) },
            password: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: async (_, args) => db.User.create(args)
    }
}