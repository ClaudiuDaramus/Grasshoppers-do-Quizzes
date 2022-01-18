const { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLID } = require('graphql')
const categoryType = require('../types/categoryType')
const db = require('../../models');
const createCategoryInputType = require('../inputTypes/createCategoryInputType');
const updateCategoryInputType = require('../inputTypes/updateCategoryInputType');
const repo = require('../../repository/category');

module.exports = {
    deleteCategory: {
        type: GraphQLString,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID),
            }
        },
        resolve: async (source, args, context) => {
            const categoryId = args.id;
            try{
                repo.deleteCategory(categoryId, context)
                return "successful"
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },
}