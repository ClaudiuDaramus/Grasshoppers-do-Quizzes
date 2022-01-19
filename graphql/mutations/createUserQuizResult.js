const UserQuizResult = require('../types/userQuizResultType')
const {createUserQuizResult} = require("../../repository/userQuizResult");
const createUserQuizResultInputType = require("../inputTypes/createUserQuizResultInputType");

module.exports = {
    createUserQuizResult: {
        type: UserQuizResult,
        args: {
            createUserQuizResultInput: {type: createUserQuizResultInputType },
        },
        resolve: async (source, args, context) => {
            return createUserQuizResult(args.createUserQuizResultInput, context);
        }
    }
}