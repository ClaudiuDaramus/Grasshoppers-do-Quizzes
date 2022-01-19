const { GraphQLInputObjectType, GraphQLNonNull, GraphQLID } = require("graphql");

const createUserQuizResultInputType = new GraphQLInputObjectType({
  name: 'createUserQuizResultInput',
  fields: {
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

module.exports = createUserQuizResultInputType;