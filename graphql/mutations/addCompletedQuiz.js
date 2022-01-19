const UserQuizResult = require('../types/userQuizResultType')
const {addCompletedQuiz} = require("../../repository/userQuizResult");
const addCompletedQuizInputType = require("../inputTypes/addCompletedQuizInputType");

module.exports = {
    addCompletedQuiz: {
        type: UserQuizResult,
        args: {
            addCompletedQuizInput: {type: addCompletedQuizInputType },
        },
        resolve: async (source, args, context) => {
            return addCompletedQuiz(args.addCompletedQuizInput, context);
        }
    }
}