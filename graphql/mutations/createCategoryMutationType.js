const categoryType = require('../types/categoryType')
const createCategoryInputType = require('../inputTypes/createCategoryInputType');
const {createCategory} = require("../../repository/category");

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
            try{
                return createCategory(args.createCategoryInput, context)
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },
}