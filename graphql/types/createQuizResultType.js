const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql')

const resultType = new GraphQLObjectType({
  name: "CreateQuizResult",
  fields: () => {
    return {
      id: { type: GraphQLNonNull(GraphQLID) },
      title: { type: GraphQLNonNull(GraphQLString) },
      description: { type: GraphQLNonNull(GraphQLString) },
      quizId: { type: GraphQLNonNull(GraphQLID) }
    }
  }
})

module.exports = resultType