const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");

const addCategoryToQuizInputType = new GraphQLInputObjectType({
  name: 'addCategoryToQuizInput',
  fields: {
    quizId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    categoryId: {
        type: new GraphQLNonNull(GraphQLID),
    },
  }
});

module.exports = addCategoryToQuizInputType;