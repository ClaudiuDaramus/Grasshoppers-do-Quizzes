const tagType = require('../types/tagType')
const updateTagInputType = require('../inputTypes/updateTagInputType');
const {updateTag} = require("../../repository/tag");


module.exports = {
    updateTag: {
        type: tagType,
        args: {
            updateTagInput:
            {
                type: updateTagInputType,
            },
        },
        resolve: async (source, args, context) => {
            try{
                return updateTag(args.updateTagInput, context)
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    }
}