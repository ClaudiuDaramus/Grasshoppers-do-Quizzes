const { GraphQLInputObjectType, GraphQLNonNull, GraphQLID } = require("graphql");

const deleteQuizInputType = new GraphQLInputObjectType({
  name: 'DeleteQuizInput',
  fields: {
    id: {
        type: new GraphQLNonNull(GraphQLID),
    }
  }
});

module.exports = deleteQuizInputType;