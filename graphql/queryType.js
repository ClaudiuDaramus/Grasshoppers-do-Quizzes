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
                    return await db.Quiz.findAll();
                }

            },
            findquizzesbytag: {
                type: new GraphQLList(quizType),
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }) => {
                    const tag = await db.Tag.findByPk(id);
                    return await tag.getQuizzes();
                }

            },
            findquizzesbycategory: {
                type: new GraphQLList(quizType),
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }) => {
                    const category = await db.Category.findByPk(id);
                    return await category.getQuizzes();
                }

            },
            quiz: {
                type: quizType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }) => {
                    return await db.Quiz.findByPk(id);
                }
            },
            results: {
                type: new GraphQLList(resultType),
                resolve: async () => {
                    return await db.Result.findAll();
                }

            },
            result: {
                type: resultType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }) => {
                    return await db.Result.findByPk(id);
                }
            },
            categories: {
                type: new GraphQLList(categoryType),
                resolve: async () => {
                    return await db.Category.findAll();
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
                    return await db.Category.findByPk(id);
                }
            },
            tags: {
                type: new GraphQLList(tagType),
                resolve: async () => {
                    return await db.Tag.findAll();
                }

            },
            tag: {
                type: tagType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: async (source, { id }) => {
                    return await db.Tag.findByPk(id);
                }
            },
        }
    }
})

module.exports = queryType