const { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLID } = require('graphql')
const categoryType = require('../types/categoryType')
const db = require('../../models');
const createCategoryInputType = require('../inputTypes/createCategoryInputType');
const updateCategoryInputType = require('../inputTypes/updateCategoryInputType');
const repo = require('../../repository/category');

module.exports = {
    createCategory:{
        type: categoryType,
        args: {
            createCategoryInput:
            {
                type: createCategoryInputType,
            }
        },
        resolve: async (source, args, context) => {
            const {title} = args.createCategoryInput;
            try{
                return repo.createCategory(args.createCategoryInput, context)
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },
}