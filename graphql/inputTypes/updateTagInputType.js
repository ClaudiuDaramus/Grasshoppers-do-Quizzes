const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require("graphql");

const updateTagInputType = new GraphQLInputObjectType({
  name: 'updateTagInput',
  fields: {
    title: {
      type: GraphQLString,
    },
  }
});

module.exports = updateTagInputType;