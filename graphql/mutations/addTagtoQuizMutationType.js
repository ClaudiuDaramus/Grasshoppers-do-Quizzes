const { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLID } = require('graphql')
const categoryType = require('../types/categoryType')
const db = require('../../models');
const repo = require('../../repository/quiz');
const addTagToQuizInputType = require('../inputTypes/addTagToQuizInputType');


module.exports = {
    addTagtoQuiz: {
        type: GraphQLString,
        args: {
            addTagToQuizInput: {
                type: addTagToQuizInputType,
            }
        },
        resolve: async (source, args, context) => {
                repo.addTagToQuiz(args.addTagToQuizInput, context)
                return "successful"
            }
        
    },
}