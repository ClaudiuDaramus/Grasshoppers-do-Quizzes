
const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const quizType = new GraphQLObjectType({
    name: "Quiz",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
    })
});

module.exports = quizType;