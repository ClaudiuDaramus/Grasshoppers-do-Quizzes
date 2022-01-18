const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require("graphql");

const createTagInputType = new GraphQLInputObjectType({
  name: 'createTagInput',
  fields: {
    title: {
      type: GraphQLString,
    },
  }
});

module.exports = createTagInputType;