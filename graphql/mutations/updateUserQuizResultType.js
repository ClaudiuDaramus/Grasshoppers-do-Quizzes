const UserQuizResult = require('../types/userQuizResultType')
const {updateUserQuizResult} = require("../../repository/userQuizResult");
const updateUserQuizResultInputType = require("../inputTypes/updateUserQuizResultInputType");

module.exports = {
    updateUserQuizResult: {
        type: UserQuizResult,
        args: {
            updateUserQuizResultInput: {type: updateUserQuizResultInputType },
        },
        resolve: async (source, args, context) => {
            return updateUserQuizResult(args.updateUserQuizResultInput, context);
        }
    }
}