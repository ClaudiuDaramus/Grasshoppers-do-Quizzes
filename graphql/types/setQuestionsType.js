const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInputObjectType, GraphQLNonNull, GraphQLList} = require('graphql')

const responseType = new GraphQLObjectType({
  name: "SetQuestionsResponse",
  fields: () => {
    return {
      title: {type: GraphQLNonNull(GraphQLString)},
      description: {type: GraphQLNonNull(GraphQLString)}
    }
  }
})

const questionType = new GraphQLObjectType({
  name: "SetQuestionsQuestion",
  fields: () => {
    return {
      title: {type: GraphQLNonNull(GraphQLString)},
      description: {type: GraphQLNonNull(GraphQLString)},
      responses: {type: GraphQLList(responseType)}
    }
  }
})
const setQuestions = new GraphQLObjectType({
  name: "SetQuestions",
  fields: () => {
    return {
      quizId: { type: GraphQLNonNull(GraphQLID)},
      questions: { type: GraphQLList(questionType)}
    }
  }
})

module.exports = setQuestions