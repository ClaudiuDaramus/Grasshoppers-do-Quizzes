const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql')

const loginType = new GraphQLObjectType({
    name: "Login",
    fields: () => ({
        email: {type: new GraphQLNonNull(GraphQLString)},
        id: {type: new GraphQLNonNull(GraphQLID)},
        token: {type: new GraphQLNonNull(GraphQLString)},
    }),
})

module.exports = loginType