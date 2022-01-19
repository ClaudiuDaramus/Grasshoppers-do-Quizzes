const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID} = require("graphql");

const updateTagInputType = new GraphQLInputObjectType({
  name: 'updateTagInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: GraphQLString,
    },
  }
});

module.exports = updateTagInputType;