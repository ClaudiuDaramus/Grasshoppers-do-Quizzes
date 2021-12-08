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

module.exports.createTag = async (req, res) => {
    const { title } = req.body;

    try {
        const newTag = await db.Tag.create({
            title
        });

        res.status(201).send(newTag);
    } catch (error) {
        console.error(error);
        res.send({
            error: "Something went wrong",
        });
    }
}

module.exports.updateTag = async (req, res) => {
    const id = req.params.id;
    const { title } = req.body;

    try {
        const tag = await db.Tag.findByPk(id);

        if(!tag) {
            throw `Tag with id ${id} doesn't exist!`;
        }

        tag = await db.Tag.update({
            title,
        }, { where: { id } });

        res.status(200).send(tag);
    } catch (e) {
        console.error(e);
        res.send({
            error: "Something went wrong",
        });
    }
}

module.exports.deleteTag = (req, res) => {
    const { id } = req.params.id;

    try {
        const tag = await db.Tag.findByPk(id);

        if(!tag) {
            throw `Tag with id ${id} doesn't exist!`;
        }

        tag = await db.Tag.destroy({ where: { id } });

        res.status(200).send(tag);
    } catch (e) {
        console.error(e);
        res.send({
            error: "Something went wrong",
        });
    }
}