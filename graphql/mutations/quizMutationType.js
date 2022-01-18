const { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLID } = require('graphql')
const categoryType = require('../types/categoryType')
const db = require('../../models');
const repo = require('../../repository/quiz')

module.exports = {
    addTagtoQuiz: {
        type: GraphQLString,
        args: {
            TagId:
            {
                type: new GraphQLNonNull(GraphQLID),
            },
            QuizId: {
                type: new GraphQLNonNull(GraphQLID),
            }
        },
        resolve: async (source, args) => {
            const idtag = args.TagId;
            const idquiz = args.QuizId
            try{
                const quiz = await db.Quiz.findByPk(idquiz);
                await quiz.setTags(idtag);
                return "successful";

            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },
    addCategorytoQuiz: {
        type: GraphQLString,
        args: {
            CategoryId:
            {
                type: new GraphQLNonNull(GraphQLID),
            },
            QuizId: {
                type: new GraphQLNonNull(GraphQLID),
            }
        },
        resolve: async (source, args) => {
            const idtag = args.CategoryId;
            const idquiz = args.QuizId
            try{
                const quiz = await db.Quiz.findByPk(idquiz);
                await quiz.setCategories(idtag);
                return "successful";

            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },



}
