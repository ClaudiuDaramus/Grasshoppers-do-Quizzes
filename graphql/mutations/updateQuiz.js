const quizType = require('../types/quizType')
const updateQuizInputType = require('../inputTypes/updateQuizInputType')
const {updateQuiz} = require("../../repository/quiz");

module.exports = {
    updateQuiz: {
    type: quizType,
    args: {
        updateQuizInput: {type: updateQuizInputType },
    },
    resolve: async (source, args, context) => {
        return updateQuiz(args.updateQuizInput, context);
      }
  }
}