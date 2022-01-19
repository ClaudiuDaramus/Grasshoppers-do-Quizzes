const { GraphQLInputObjectType, GraphQLNonNull, GraphQLID} = require("graphql");

const deleteUserInputType = new GraphQLInputObjectType({
  name: 'deleteUserInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  }
});

module.exports = deleteUserInputType;