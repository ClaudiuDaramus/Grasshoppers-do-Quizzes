const db = require('../models');

module.exports.getAllUserQuizResults = async () => {
    try {
        return await db.UserQuizResult.findAll();
    } catch (error) {
        console.error('Something went wrong');
        return null;
    }
}

module.exports.getUserQuizResultById = async (id) => {
    return await db.UserQuizResult.findByPk(id);
}

module.exports.createUserQuizResult = async (args, context) => {
    const { userId, quizId, resultId } = args;

    try {
        let user = await db.User.findByPk(userId);

        if(!user) {
            throw new Error(`User with id ${userId} doesn't exist!`);
        }

        let quiz = await db.Quiz.findByPk(quizId);

        if(!quiz) {
            throw new Error(`Quiz with id ${quizId} doesn't exist!`);
        }

        let result = await db.Result.findByPk(resultId);

        if(!result) {
            throw new Error(`Result with id ${resultId} doesn't exist!`);
        }

        return await db.UserQuizResult.create({
            userId, quizId, resultId
        });
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports.addCompletedQuiz = async (args, context) => {
    const { userId, quizId, responseIDList } = args;

    try {
        let user = await db.User.findByPk(userId);

        if(!user) {
            throw new Error(`User with id ${userId} doesn't exist!`);
        }

        let quiz = await db.Quiz.findByPk(quizId);

        if(!quiz) {
            throw new Error(`Quiz with id ${quizId} doesn't exist!`);
        }

        responseIDList.map( async (responseID) => {
            let databaseResponse = await db.Response.findByPk(responseID);

            if(!databaseResponse) {
                throw new Error(`Response with id ${responseID} doesn't exist!`);
            }
        })

        const resultList = await db.Result.findAll();

        let frequencyList = new Array(resultList.length).fill(0);

        for(let i = 0; i < responseIDList.length; i++) {
            let response = await db.Response.findByPk(responseIDList[i]);
            let result = await response.getResult();
            frequencyList[result.id]++;
        }

        let resultId = frequencyList.indexOf(Math.max(...frequencyList));

        return await db.UserQuizResult.create({
            userId, quizId, resultId
        });
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports.updateUserQuizResult = async (args, context) => {
    const { id, userId, quizId, resultId } = args;

    try {
        let userQuizResult = await db.UserQuizResult.findByPk(id);

        if(!userQuizResult) {
            throw `UserQuizResult doesn't exist!`;
        }

        await db.UserQuizResult.update({
            userId, quizId, resultId,
        }, { where: { id } });

        return await db.UserQuizResult.findByPk(id);
    } catch (e) {
        console.error(e);
        return null;
    }
}

module.exports.deleteUserQuizResult = async (args, context) => {
    const { id } = args;

    try {
        let userQuizResult = await db.UserQuizResult.findByPk(id);

        if(!userQuizResult) {
            throw `UserQuizResult doesn't exist!`;
        }

        return await db.UserQuizResult.destroy({ where: { id } });
    } catch (e) {
        console.error(e);
        return null;
    }
}