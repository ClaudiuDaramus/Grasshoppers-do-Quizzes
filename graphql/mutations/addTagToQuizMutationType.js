const { GraphQLString } = require('graphql')
const addTagToQuizInputType = require('../inputTypes/addTagToQuizInputType');
const {addTagToQuiz} = require("../../repository/quiz");


module.exports = {
    addTagToQuiz: {
        type: GraphQLString,
        args: {
            addTagToQuizInput: {
                type: addTagToQuizInputType,
            }
        },
        resolve: async (source, args, context) => {
                await addTagToQuiz(args.addTagToQuizInput, context)
                return "successful"
            }
        
    },
}