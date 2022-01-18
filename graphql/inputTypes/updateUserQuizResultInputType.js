const { GraphQLInputObjectType, GraphQLID, GraphQLNonNull } = require("graphql");

const updateUserQuizResultInputType = new GraphQLInputObjectType({
  name: 'UpdateUserQuizResultInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    userId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    quizId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    resultId: {
        type: new GraphQLNonNull(GraphQLID),
      }
  }
});

module.exports = updateUserQuizResultInputType;