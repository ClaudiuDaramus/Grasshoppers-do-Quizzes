const { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLID } = require('graphql')
const tagType = require('../types/tagType')
const db = require('../../models');
const createTagInputType = require('../inputTypes/createTagInputType');
const updateTagInputType = require('../inputTypes/updateTagInputType');
const repo = require('../../repository/tag');


module.exports = {
    deleteTag: {
        type: GraphQLString,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID),
            }
        },
        resolve: async (source, args, context) => {
            const tagId = args.id;
            try{
                repo.deleteTag(tagId, context)
                return "successful"
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },
}