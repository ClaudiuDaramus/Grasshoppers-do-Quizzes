const db = require('../models');

module.exports.getAllCategories = async () => {
    try {
        const allCategories = await db.Category.findAll();
        return allCategories;
    } catch (error) {
        console.error('Something went wrong');
        return null;
    } 
}

module.exports.getCategoryById = async (id) => {
    return await db.Category.findByPk(id);
}

module.exports.createCategory = async (req, res) => {
    const { title } = req.body;

    try {
        const newCategory = await db.Category.create({
            title
        });

        res.status(201).send(newCategory);
    } catch (error) {
        console.error(error);
        res.send({
            error: "Something went wrong",
        });
    }
}

module.exports.updateCategory = async (req, res) => {
    const id = req.params.id;
    const { title } = req.body;

    try {
        const category = await db.Category.findByPk(id);

        if(!category) {
            throw `Category with id ${id} doesn't exist!`;
        }

        category = await db.Category.update({
            title,
        }, { where: { id } });

        res.status(200).send(category);
    } catch (e) {
        console.error(e);
        res.send({
            error: "Something went wrong",
        });
    }
}

module.exports.deleteCategory = (req, res) => {
    const { id } = req.params.id;

    try {
        const category = await db.Category.findByPk(id);

        if(!category) {
            throw `Category with id ${id} doesn't exist!`;
        }

        category = await db.Category.destroy({ where: { id } });

        res.status(200).send(category);
    } catch (e) {
        console.error(e);
        res.send({
            error: "Something went wrong",
        });
    }
}