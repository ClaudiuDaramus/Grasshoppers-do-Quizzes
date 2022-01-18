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

module.exports.createCategory = async (args, context) => {
    const { title } = args;

    try {
        const newCategory = await db.Category.create({
            title
        });

        return newCategory;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports.updateCategory = async (args, context) => {
    const { id, title } = args;

    try {
        let category = await db.Category.findByPk(id);

        if(!category) {
            throw `Category with id ${id} doesn't exist!`;
        }

        await db.Category.update({
            title,
        }, { where: { id } });

        return await db.Category.findByPk(id);
    } catch (e) {
        console.error(e);
        return null;
    }
}

module.exports.deleteCategory = async (args, context) => {
    const {id} = args;

    try {
        let category = await db.Category.findByPk(id);

        if (!category) {
            throw `Category with id ${id} doesn't exist!`;
        }

        category = await db.Category.destroy({where: {id}});

        return category;
    } catch (e) {
        console.error(e);
        return null;
    }
}