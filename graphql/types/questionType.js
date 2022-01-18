const responseType = require("./responseType")
const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql')

const questionType = new GraphQLObjectType({
  name: "Question",
  fields: () => {
    return {
      id: { type: GraphQLNonNull(GraphQLID) },
      title: { type: GraphQLNonNull(GraphQLString) },
      quizId: { type: GraphQLNonNull(GraphQLID) },
      responses: { type: GraphQLList(responseType) }
    }
  }
})

module.exports = questionType