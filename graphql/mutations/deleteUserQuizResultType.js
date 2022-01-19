const {deleteUserQuizResult} = require("../../repository/userQuizResult");
const deleteUserQuizResultInputType = require("../inputTypes/deleteUserQuizResultInputType");
const {GraphQLID} = require("graphql");

module.exports = {
    deleteUserQuizResult: {
        type: GraphQLID,
        args: {
            deleteUserQuizResultInput: {type: deleteUserQuizResultInputType },
        },
        resolve: async (source, args, context) => {
            return deleteUserQuizResult(args.deleteUserQuizResultInput, context);
        }
    }
}