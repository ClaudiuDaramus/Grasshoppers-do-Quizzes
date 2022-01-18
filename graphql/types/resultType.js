
const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const quizType = require('./quizType');
const resultType = new GraphQLObjectType({
    name: "Result",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
        relatedQuiz: {
            type: new GraphQLNonNull(quizType),
            resolve: async (source) => {
                
            }
        }
    })
});

module.exports = resultType;