const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const userquizresultType = new GraphQLObjectType({
    name: "UserQuizResult",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        userId: {
            type: new GraphQLNonNull(GraphQLID)
        },
        quizId: {
            type: new GraphQLNonNull(GraphQLID)
        },
        resultId: {
            type: new GraphQLNonNull(GraphQLID)
        },
    })
});

module.exports = userquizresultType;