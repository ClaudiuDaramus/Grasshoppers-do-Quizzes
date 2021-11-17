const { GraphQLString, GraphQLNonNull } = require('graphql')
const {hash, verify} = require('../../crypt/hash')
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
        resolve: async (_, args) => {
            const password = await hash(args.password)
            return await db.User.create({...args, password})
        }
    }
}