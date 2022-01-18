const { GraphQLInputObjectType, GraphQLNonNull, GraphQLID, GraphQLList, } = require("graphql");

const addCompletedQuizInputType = new GraphQLInputObjectType({
    name: 'addCompletedQuizInput',
    fields: {
        userId: {
            type: new GraphQLNonNull(GraphQLID),
        },
        quizId: {
            type: new GraphQLNonNull(GraphQLID),
        },
        responseIDList: {
            type: new GraphQLNonNull(GraphQLList(GraphQLID)),
        }
    }
});

module.exports = addCompletedQuizInputType;