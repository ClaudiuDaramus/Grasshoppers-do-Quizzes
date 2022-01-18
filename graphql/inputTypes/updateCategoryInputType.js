const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require("graphql");

const updateCategoryInputType = new GraphQLInputObjectType({
  name: 'updateCategoryInput',
  fields: {
    title: {
      type: GraphQLString,
    },
  }
});

module.exports = updateCategoryInputType;