const { GraphQLString, GraphQLNonNull, GraphQLID } = require('graphql')
const {deleteCategory} = require("../../repository/category");

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
                await deleteCategory(categoryId, context)
                return "successful"
            }
            catch(error){
                console.error(error);
                return null;
            }
        }
    },
}