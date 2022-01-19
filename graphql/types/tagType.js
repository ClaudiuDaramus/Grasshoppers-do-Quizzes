const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const tagType = new GraphQLObjectType({
    name: "Tag",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
    })
});

module.exports = tagType;