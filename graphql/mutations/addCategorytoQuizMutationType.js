const { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLID } = require('graphql')
const categoryType = require('../types/categoryType')
const db = require('../../models');
const repo = require('../../repository/quiz');
const addCategoryToQuizInputType = require('../inputTypes/addCategoryToQuizInputType');

module.exports = {
    addCategorytoQuiz: {
        type: GraphQLString,
        args: {
            addCategoryToQuizInput: {
                type: addCategoryToQuizInputType,
            }
        },
        resolve: async (source, args, context) => {
                repo.addCategorytoQuiz(args.addCategoryToQuizInput, context)
                return "successful"
        }
    },
}