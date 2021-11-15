
const { GraphQLID, GraphQLString, GraphQLObjectType } = require('graphql');
const userType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
    })
});

module.exports = userType;