const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");

const updateCategoryInputType = new GraphQLInputObjectType({
  name: 'updateCategoryInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: GraphQLString,
    },
  }
});

module.exports = updateCategoryInputType;