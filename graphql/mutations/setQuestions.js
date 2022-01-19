const db = require('../../models')
const setQuestionsInputType = require('../inputTypes/setQuestionsInputType')
const setQuestionsType = require('../types/setQuestionsType')
const setQuestions = require('../../repository/quiz').setQuestions

module.exports = {
  setQuestions: {
    type: setQuestionsType,
    args: {
      setQuestionsInput: {
        type: setQuestionsInputType
      }
    }
  },
  resolve: async (_, {setQuestionsInput: {quizId, questions}}, context) => {
    return await setQuestions(quizId, questions, context.user.id)
  }
}