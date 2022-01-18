const db = require('../../models')
const quizInputType = require('../inputTypes/createQuizInputType')
const quizType = require('../types/quizType')
const createDbQuiz = require('../../repository/quiz').createQuiz
module.exports = {
  createQuiz: {
    type: quizType,
    args: {
      quizInput: {
        type: quizInputType
      }
    },
    resolve: async (_, { quizInput: { userId, description, name, results } }) => {
      console.log("In quiz mutation")
      const quiz = { userId, description, name }
      const { dbQuiz, dbResults } = await createDbQuiz(quiz, results);
      const finalResults = dbResults.map(result => {
        return {
          id: result.id,
          title: result.title,
          description: result.description
        }
      })
      return {
        quiz: {
          id: dbQuiz.id,
          name: dbQuiz.name,
          questions: []
        },
        results: finalResults
      }
    }
  }
}