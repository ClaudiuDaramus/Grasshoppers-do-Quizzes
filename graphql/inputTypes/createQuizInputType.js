const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList, GraphQLInputType } = require("graphql");
const resultType = require("../types/resultType");

const resultInputType = new GraphQLInputObjectType({
  name: "ResultInput",
  fields: () => {
    return {
      title: { type: GraphQLNonNull(GraphQLString) },
      description: { type: GraphQLNonNull(GraphQLString) }
    }
  }
})
const createQuizInputType = new GraphQLInputObjectType({
  name: 'CreateQuizInput',
  fields: {
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    results: {
      type: new GraphQLList(resultInputType)
    }
  }
});

module.exports = createQuizInputType