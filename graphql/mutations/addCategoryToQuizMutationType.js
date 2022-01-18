const { GraphQLString } = require('graphql')
const addCategoryToQuizInputType = require('../inputTypes/addCategoryToQuizInputType');
const {addCategoryToQuiz} = require("../../repository/quiz");

module.exports = {
    addCategoryToQuiz: {
        type: GraphQLString,
        args: {
            addCategoryToQuizInput: {
                type: addCategoryToQuizInputType,
            }
        },
        resolve: async (source, args, context) => {
                await addCategoryToQuiz(args.addCategoryToQuizInput, context)
                return "successful"
        }
    },
}