const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");

const updateQuizInputType = new GraphQLInputObjectType({
  name: 'UpdateQuizInput',
  fields: {
    userId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    }
  }
});

module.exports = updateQuizInputType;