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
    resolve: async (_, { quizInput: { description, name, results } }, context) => {
      console.log("In quiz mutation")
      const userId = context.user.id
      const quiz = { userId, description, name }
      const { dbQuiz, dbResults } = await createDbQuiz(quiz, results);
      console.log("Len is " + dbResults.length)
      const finalResults = dbResults.map(result => {
        return {
          id: result.id,
          title: result.title,
          description: result.description,
          quizId: dbQuiz.id
        }
      })
      //console.log(dbQuiz)
      return {
        id: dbQuiz.id,
        name: dbQuiz.name,
        questions: [],
        results: finalResults
      }
    }
  }
}