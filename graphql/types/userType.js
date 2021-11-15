
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
        address: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        }
    })
});

module.exports = userType;