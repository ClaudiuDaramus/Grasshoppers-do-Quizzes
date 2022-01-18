const { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLID } = require('graphql')
const tagType = require('../types/tagType')
const db = require('../../models');
const createTagInputType = require('../inputTypes/createTagInputType');
const updateTagInputType = require('../inputTypes/updateTagInputType');
const repo = require('../../repository/tag');


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
                return repo.updateTag(args.updateTagInput, context)
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    }
}