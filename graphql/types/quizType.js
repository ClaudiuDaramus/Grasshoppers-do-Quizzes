const {GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLList, GraphQLID} = require('graphql')
const questionType = require('./questionType')
const resultType = require('./resultType')

const quizType = new GraphQLObjectType({
  name: "QuizType",
  fields: () => {
    return {
      id: {type: GraphQLNonNull(GraphQLID)},
      name: { type: GraphQLNonNull(GraphQLString)},
      questions: { type: GraphQLList(questionType) },
      results: { type: GraphQLList(resultType)}
    }
  }
})

module.exports = quizType