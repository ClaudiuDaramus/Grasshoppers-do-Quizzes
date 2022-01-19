const {deleteQuiz} = require("../../repository/quiz");
const deleteQuizInputType = require("../inputTypes/deleteQuizInputType");
const {GraphQLID} = require("graphql");

module.exports = {
    deleteQuiz: {
        type: GraphQLID,
        args: {
            deleteQuizInput: {type: deleteQuizInputType },
        },
        resolve: async (source, args, context) => {
            return deleteQuiz(args.deleteQuizInput, context);
        }
    }
}