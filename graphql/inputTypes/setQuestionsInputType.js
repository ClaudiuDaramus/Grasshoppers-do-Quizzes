const {GraphQLInputType, GraphQLID, GraphQLString, GraphQLInputObjectType, GraphQLNonNull, GraphQLList} = require('graphql')

const responseInputType = new GraphQLInputObjectType({
  name: "ResponseInput",
  fields: () => {
    return {
      title: {type: GraphQLNonNull(GraphQLString)},
      description: {type: GraphQLNonNull(GraphQLString)}
    }
  }
})

const questionInputType = new GraphQLInputObjectType({
  name: "QuestionInput",
  fields: () => {
    return {
      title: {type: GraphQLNonNull(GraphQLString)},
      description: {type: GraphQLNonNull(GraphQLString)},
      responses: {type: GraphQLList(responseInputType)}
    }
  }
})
const setQuestionsInput = new GraphQLInputObjectType({
  name: "SetQuestionsInput",
  fields: () => {
    return {
      quizId: { type: GraphQLNonNull(GraphQLID)},
      questions: { type: GraphQLList(questionInputType)}
    }
  }
})

module.exports = setQuestionsInput