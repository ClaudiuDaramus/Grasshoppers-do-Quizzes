const db = require('../models');

module.exports.getAllTags = async () => {
    try {
        const allTags = await db.Tag.findAll();
        return allTags;
    } catch (error) {
        console.error('Something went wrong');
        return null;
    }
}

module.exports.getTagById = async (id) => {
    return await db.Tag.findByPk(id);
}

module.exports.createTag = async (args, context) => {
    const { title } = args;

    try {
        const newTag = await db.Tag.create({
            title
        });

        return newTag;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports.updateTag = async (args, context) => {
    const { id, title } = args;

    try {
        let tag = await db.Tag.findByPk(id);

        if(!tag) {
            throw `Tag with id ${id} doesn't exist!`;
        }

        await db.Tag.update({
            title,
        }, { where: { id } });

        return await db.Tag.findByPk(id);
    } catch (e) {
        console.error(e);
        return null;
    }
}

module.exports.deleteTag = async (args, context) => {
    const {id} = args;

    try {
        let tag = await db.Tag.findByPk(id);

        if (!tag) {
            throw `Tag with id ${id} doesn't exist!`;
        }

        tag = await db.Tag.destroy({where: {id}});

        return tag;
    } catch (e) {
        console.error(e);
        return null;
    }
}