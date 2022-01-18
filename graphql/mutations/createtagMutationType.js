const { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLID } = require('graphql')
const tagType = require('../types/tagType')
const db = require('../../models');
const createTagInputType = require('../inputTypes/createTagInputType');
const updateTagInputType = require('../inputTypes/updateTagInputType');
const repo = require('../../repository/tag');

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
            const {title} = args.createTagInput;
            try{
                return repo.createTag(args.createTagInput, context)
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },
}