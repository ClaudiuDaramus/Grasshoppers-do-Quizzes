const tagType = require('../types/tagType')
const createTagInputType = require('../inputTypes/createTagInputType');
const {createTag} = require("../../repository/tag");

module.exports = {
    createTag:{
        type: tagType,
        args: {
            createTagInput:
            {
                type: createTagInputType,
            }
        },
        resolve: async (source, args, context) => {
            try{
                return createTag(args.createTagInput, context)
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },
}