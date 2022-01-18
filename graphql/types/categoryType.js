
const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const categoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
    })
});

module.exports = categoryType;