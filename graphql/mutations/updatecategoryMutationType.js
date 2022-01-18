const { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLID } = require('graphql')
const categoryType = require('../types/categoryType')
const db = require('../../models');
const createCategoryInputType = require('../inputTypes/createCategoryInputType');
const updateCategoryInputType = require('../inputTypes/updateCategoryInputType');
const repo = require('../../repository/category');


module.exports = {
    updateCategory: {
        type: categoryType,
        args: {
            updateCategoryInput:
            {
                type: updateCategoryInputType,
            },
        },
        resolve: async (source, args, context) => {
            try{
                return repo.updateCategory(args.updateCategoryInput, context)
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },
}