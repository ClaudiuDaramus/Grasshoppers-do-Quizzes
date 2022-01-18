const db = require('../models');

module.exports.getAllResults = async () => {
    try {
        const allResults = await db.Result.findAll();
        return allResults;
    } catch (error) {
        console.error('Something went wrong');
        return null;
    }
}

module.exports.getResultById = async (id) => {
    return await db.Result.findByPk(id);
}

module.exports.createResult = async (req, res) => {
    const { title } = req.body;

    try {
        const newResult = await db.Result.create({
            title
        });

        return newResult;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports.updateResult = async (args, context) => {
    const { id, title } = args;

    try {
        let result = await db.Result.findByPk(id);

        if(!result) {
            throw `Result with id ${id} doesn't exist!`;
        }

        await db.Result.update({
            title,
        }, { where: { id } });

        return await db.Result.findByPk(id);
    } catch (e) {
        console.error(e);
        return null;
    }
}

module.exports.deleteResult = async (args, context) => {
    const {id} = args;

    try {
        let result = await db.Result.findByPk(id);

        if (!result) {
            throw `Result with id ${id} doesn't exist!`;
        }

        result = await db.Result.destroy({where: {id}});

        return result;
    } catch (e) {
        console.error(e);
        return null;
    }
}