const categoryType = require('../types/categoryType')
const updateCategoryInputType = require('../inputTypes/updateCategoryInputType');
const {updateCategory} = require("../../repository/category");


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
                return updateCategory(args.updateCategoryInput, context)
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },
}