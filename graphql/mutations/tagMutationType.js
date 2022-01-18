const { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLID } = require('graphql')
const tagType = require('../types/tagType')
const db = require('../../models');
const createTagInputType = require('../inputTypes/createTagInputType');
const updateTagInputType = require('../inputTypes/updateTagInputType');

module.exports = {
        createTag:{
            type: tagType,
            args: {
                createTagInput:
                {
                    type: createTagInputType,
                }
            },
            resolve: async (source, args) => {
                const {title} = args.createTagInput;
                try{
                    const newTag = await db.Tag.create({title});
                    return newTag;
                }
                catch(error){
                    console.error(error);
                    return null;
                }
            }
        },
        updateTag: {
            type: tagType,
            args: {
                updateTagInput:
                {
                    type: updateTagInputType,
                },
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                }
            },
            resolve: async (source, args) => {
                const tagId = args.id;
                const {title} = args.updateTagInput;
                try{
                    await db.Tag.update({
                        title
                    }, {where: {id: tagId}})
                    return await db.Tag.findByPk(tagId)
                }
                catch(error){
                    console.error(error);
                    return null;
                }
            }
        },
        deleteTag: {
            type: GraphQLString,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                }
            },
            resolve: async (source, args) => {
                const TagId = args.id;
                try{
                    await db.Tag.destroy(
                    {where: {id: tagId}})
                    return "deleted"
                }
                catch(error){
                    console.error(error);
                    return null;
                }
            }
        },
    }
