const { GraphQLInputObjectType, GraphQLID, GraphQLNonNull } = require("graphql");

const deleteUserQuizResultInputType = new GraphQLInputObjectType({
  name: 'deleteUserQuizResultInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  }
});

module.exports = deleteUserQuizResultInputType;