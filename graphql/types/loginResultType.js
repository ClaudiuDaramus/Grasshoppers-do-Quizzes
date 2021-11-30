const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql')

const loginResultType = new GraphQLObjectType({
    name: "Login",
    fields: () => ({
        email: {type: new GraphQLNonNull(GraphQLString)},
        id: {type: new GraphQLNonNull(GraphQLID)},
        token: {type: new GraphQLNonNull(GraphQLString)},
    }),
})

module.exports = loginResultType