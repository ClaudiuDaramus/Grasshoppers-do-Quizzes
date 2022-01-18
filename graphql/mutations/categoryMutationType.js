const { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLID } = require('graphql')
const categoryType = require('../types/categoryType')
const db = require('../../models');
const createCategoryInputType = require('../inputTypes/createCategoryInputType');
const updateCategoryInputType = require('../inputTypes/updateCategoryInputType');

module.exports = {
        createCategory:{
            type: categoryType,
            args: {
                createCategoryInput:
                {
                    type: createCategoryInputType,
                }
            },
            resolve: async (source, args) => {
                const {title} = args.createCategoryInput;
                try{
                    const newCategory = await db.Category.create({title});
                    return newCategory;
                }
                catch(error){
                    console.error(error);
                    return null;
                }
            }
        },
        updateCategory: {
            type: categoryType,
            args: {
                updateCategoryInput:
                {
                    type: updateCategoryInputType,
                },
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                }
            },
            resolve: async (source, args) => {
                const categoryId = args.id;
                const {title} = args.updateCategoryInput;
                try{
                    await db.Category.update({
                        title
                    }, {where: {id: categoryId}})
                    return await db.Category.findByPk(categoryId)
                }
                catch(error){
                    console.error(error);
                    return null;
                }
            }
        },
        deleteCategory: {
            type: GraphQLString,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                }
            },
            resolve: async (source, args) => {
                const categoryId = args.id;
                try{
                    await db.Category.destroy(
                    {where: {id: categoryId}})
                    return "deleted"
                }
                catch(error){
                    console.error(error);
                    return null;
                }
            }
        },

    }
