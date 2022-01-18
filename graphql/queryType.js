const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
} = require('graphql');

const loginResultType = require('./types/loginResultType')
const login = require('../repository/login')
const quizType = require("./types/quizType")
const resultType = require("./types/resultType")
const categoryType = require("./types/categoryType")
const tagType = require("./types/tagType")
const userQuizResultType = require('./types/userQuizResultType');
const {getAllQuizzes, getQuizzesByTag, getQuizzesByCategory, getQuizById} = require("../repository/quiz");
const {getAllResults, getResultById} = require("../repository/result");
const {getAllCategories, getCategoryById} = require("../repository/category");
const {getAllTags, getTagById} = require("../repository/tag");
const {getAllUserQuizResults, getUserQuizResultById} = require("../repository/userQuizResult");


const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            login: {
                type: loginResultType,
                args: {
                    email: { type: new GraphQLNonNull(GraphQLString) },
                    password: { type: new GraphQLNonNull(GraphQLString) }
                },
                resolve: login
            },
            quizzes: {
                type: new GraphQLList(quizType),
                resolve: async () => {
                    return await getAllQuizzes();
                }

            },
            findQuizzesByTag: {
                type: new GraphQLList(quizType),
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }, context) => {
                    return getQuizzesByTag(id)
                }

            },
            findQuizzesByCategory: {
                type: new GraphQLList(quizType),
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }, context) => {
                    return getQuizzesByCategory(id)
                }

            },
            quiz: {
                type: quizType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }, context) => {
                    return await getQuizById(id);
                }
            },
            results: {
                type: new GraphQLList(resultType),
                resolve: async () => {
                    return await getAllResults();
                }

            },
            result: {
                type: resultType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }, result) => {
                    return await getResultById(id);
                }
            },
            categories: {
                type: new GraphQLList(categoryType),
                resolve: async () => {
                    return await getAllCategories();
                }

            },
            category: {
                type: categoryType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }) => {
                    return await getCategoryById(id);
                }
            },
            tags: {
                type: new GraphQLList(tagType),
                resolve: async () => {
                    return await getAllTags();
                }

            },
            tag: {
                type: tagType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }, context) => {
                    return await getTagById(id);
                }
            },
            userQuizResults: {
                type: new GraphQLList(userQuizResultType),
                resolve: async () => {
                    return await getAllUserQuizResults();
                }
            },
            userQuizResult: {
                type: userQuizResultType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }, context) => {
                    return await getUserQuizResultById(id);
                }
            }
        }
    }
})

module.exports = queryType