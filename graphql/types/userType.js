
const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const userType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
    })
});

module.exports = userType;