const db = require('../models');

module.exports.getAllResults = async () => {
    try {
        const allResults = await db.Quiz.findAll();
        return allResults;
    } catch (error) {
        console.error('Something went wrong');
        return null;
    } 
}

module.exports.getQuizById = async (id) => {
    return await db.Quiz.findByPk(id);
}

module.exports.createResult= async (req, res) => {
    const { title, description, quizId } = req.body;

    try {
        const newResult= await db.Quiz.create({
            title,
            description,
            quizId
        });

        res.status(201).send(newResult);
    } catch (error) {
        console.error(error);
        res.send({
            error: "Something went wrong",
        });
    }
}

module.exports.updateResult= async (req, res) => {
    const id = req.params.id;
    const { title, description, quizId } = req.body;

    try {
        const result = await db.Quiz.findByPk(id);

        if(!result) {
            throw `Resultwith id ${id} doesn't exist!`;
        }

        result = await db.Quiz.update({
            title,
            description,
            quizId
        }, { where: { id } });

        res.status(200).send(result);
    } catch (e) {
        console.error(e);
        res.send({
            error: "Something went wrong",
        });
    }
}

module.exports.deleteResult= (req, res) => {
    const { id } = req.params.id;

    try {
        const result = await db.Quiz.findByPk(id);

        if(!result) {
            throw `Resultwith id ${id} doesn't exist!`;
        }

        result = await db.Quiz.destroy({ where: { id } });

        res.status(200).send(result);
    } catch (e) {
        console.error(e);
        res.send({
            error: "Something went wrong",
        });;
    }
}