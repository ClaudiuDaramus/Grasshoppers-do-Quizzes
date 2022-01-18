const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql')

const resultType = new GraphQLObjectType({
  name: "Result",
  fields: () => {
    return {
      id: { type: GraphQLNonNull(GraphQLID) },
      title: { type: GraphQLNonNull(GraphQLString) },
      description: { type: GraphQLNonNull(GraphQLString) }
    }
  }
})

module.exports = resultType