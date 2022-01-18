const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql')

const responseType = new GraphQLObjectType({
  name: "Response",
  fields: () => {
    return {
      id: { type: GraphQLNonNull(GraphQLID) },
      title: { type: GraphQLNonNull(GraphQLString) },
      questionId: { type: GraphQLNonNull(GraphQLID) }
    }
  }
})

module.exports = responseType