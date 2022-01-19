const { GraphQLString, GraphQLNonNull, GraphQLID } = require('graphql')
const repo = require('../../repository/tag');
const {deleteTag} = require("../../repository/tag");


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
                await deleteTag(tagId, context)
                return "successful"
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },
}