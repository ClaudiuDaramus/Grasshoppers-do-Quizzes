const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
} = require('graphql');
const db = require('../models');

const loginResultType = require('./types/loginResultType')
const login = require('../repository/login')
const quizType = require("./types/quizType")
const resultType = require("./types/resultType")
const categoryType = require("./types/categoryType")
const tagType = require("./types/tagType")
const repocat = require("../repository/category")
const repotag = require("../repository/tag")
const repoquiz = require("../repository/quiz")
const reporesult = require("../repository/result");
const repouserquizrez = require("../repository/userquizresult");
const userquizresultType = require('./types/userquizresultType');


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
                    return await repoquiz.getAllQuizzes();
                }

            },
            findquizzesbytag: {
                type: new GraphQLList(quizType),
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }, context) => {
                    return repoquiz.getQuizzesByTag(id)
                }

            },
            findquizzesbycategory: {
                type: new GraphQLList(quizType),
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }, context) => {
                    return repoquiz.getQuizzesByCategory(id)
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
                    return await repoquiz.getQuizById(id);
                }
            },
            results: {
                type: new GraphQLList(resultType),
                resolve: async () => {
                    return await reporesult.getAllResults();
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
                    return await reporesult.getResultById(id);
                }
            },
            categories: {
                type: new GraphQLList(categoryType),
                resolve: async () => {
                    return await repocat.getAllCategories();
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
                    return await repocat.getCategoryById(id);
                }
            },
            tags: {
                type: new GraphQLList(tagType),
                resolve: async () => {
                    return await repotag.getAllTags();
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
                    return await repotag.getTagById(id);
                }
            },
            userquizresults: {
                type: new GraphQLList(userquizresultType),
                resolve: async () => {
                    return await repouserquizrez.getAllUserQuizResults();
                }
            },
            userquizresult: {
                type: userquizresultType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }, context) => {
                    return await repouserquizrez.getUserQuizResultById(id);
                }
            }
        }
    }
})

module.exports = queryType