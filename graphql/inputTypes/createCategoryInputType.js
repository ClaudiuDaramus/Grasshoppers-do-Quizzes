const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require("graphql");

const createCategoryInputType = new GraphQLInputObjectType({
  name: 'createCategoryInput',
  fields: {
    title: {
      type: GraphQLString,
    },
  }
});

module.exports = createCategoryInputType;