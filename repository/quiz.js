const db = require('../models');

module.exports.getAllQuizzes = async () => {
    try {
        const allQuizzes = await db.Quiz.findAll();
        return allQuizzes;
    } catch (error) {
        console.error('Something went wrong');
        return null;
    } 
}

module.exports.getQuizById = async (id) => {
    return await db.Quiz.findByPk(id);
}

module.exports.getQuizzesByTag = async (tagId) => {
    const tag = await db.Tag.findByPk(tagId);
    if (!tag){
        throw new Error(`Tag with id ${tagId} doesn't exist!`);
    }
    return await tag.getQuizzes();
}

module.exports.getQuizzesByCategory = async (categoryId) => {
    const category = await db.Category.findByPk(categoryId);
    if (!category){
        throw new Error(`Category with id ${categoryId} doesn't exist!`);
    }
    return await category.getQuizzes();
}

module.exports.createQuiz = async (args, context) => {
    const { name, description, userId } = args;

    try {
        const newQuiz = await db.Quiz.create({
            name,
            description,
            userId
        });

        return newQuiz;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports.addTagToQuiz = async (args, context) => {
    const {quizId, tagId} = args;

    try {
        const quiz = await db.Quiz.findByPk(quizId);
        const tag = await db.Tag.findByPk(tagId);

        if(!quiz) {
            throw new Error(`Quiz with id ${quizId} doesn't exist!`);
        }

        if(!tag) {
            throw new Error(`Quiz with id ${tagId} doesn't exist!`);
        }

        await quiz.setTags(tag);

        const updatedQuiz = await db.Quiz.findByPk(quizId);
        const updatedQuizsTags = await updatedQuiz.getTags();

        return updatedQuizsTags;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports.addCategoryToQuiz = async (args, context) => {
    const {quizId, categoryId} = args;

    try {
        const quiz = await db.Quiz.findByPk(quizId);
        const category = await db.Category.findByPk(categoryId);

        if(!quiz) {
            throw new Error(`Quiz with id ${quizId} doesn't exist!`);
        }

        if(!category) {
            throw new Error(`Quiz with id ${categoryId} doesn't exist!`);
        }

        await quiz.setCategories(category);

        const updatedQuiz = await db.Quiz.findByPk(quizId);
        const updatedQuizsCategories = await updatedQuiz.getCategories();

        return updatedQuizsCategories;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports.updateQuiz = async (args, context) => {
    const { id, name, description, userId } = args;

    try {
        let quiz = await db.Quiz.findByPk(id);

        if(!quiz) {
            throw `Quiz with id ${id} doesn't exist!`;
        }

        await db.Quiz.update({
            name,
            description,
            userId
        }, { where: { id } });

        return await db.Quiz.findByPk(id);
    } catch (e) {
        console.error(e);
        return null
    }
}

module.exports.deleteQuiz = async (args, context) => {
    const { id } = args;

    try {
        let quiz = await db.Quiz.findByPk(id);

        if(!quiz) {
            throw `Quiz with id ${id} doesn't exist!`;
        }

        quiz = await db.Quiz.destroy({ where: { id } });

        return quiz;
    } catch (e) {
        console.error(e);
        return null;
    }
}