const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");

const addTagToQuizInputType = new GraphQLInputObjectType({
  name: 'addTagToQuizInput',
  fields: {
    quizId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    tagId: {
        type: new GraphQLNonNull(GraphQLID),
    },
  }
});

module.exports = addTagToQuizInputType;