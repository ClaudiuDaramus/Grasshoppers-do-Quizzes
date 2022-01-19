const resultType = require('../graphql/types/resultType');
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

//Because having "fake" result ids in the responses object, in order to create a quiz you will
//need createQuiz and setQuestions
module.exports.createQuiz = async (quiz, results) => {
  const { name, description, userId } = quiz
  const dbQuiz = db.Quiz.build({ name, description, userId })
  const q = await dbQuiz.save()
  let dbResults = []
  let dbPromises = []
  results.forEach(async (result) => {
    const dbResult = db.Result.build({
      title: result.title,
      description: result.description,
      quizId: dbQuiz.id
    })
    const savePromise = dbResult.save()
    dbPromises.push(savePromise)
    const r = await savePromise
    dbResults.push(r)
  });
  await Promise.all(dbPromises)
  return { dbQuiz: q, dbResults }
}

module.exports.setQuestions = async (quizId, questions, userId) => {
  const dbQuiz = await db.Quiz.findByPk(quizId, { include: { model: db.Question, required: true } })
  if(dbQuiz.userId != userId)
  {
    throw "Invalid user"
  }
  deletePromises = []
  dbQuiz.questions.forEach(question => {
    deletePromises.push(question.destroy())
  })
  await Promise.all(deletePromises)
  questionPromises = []
  dbQuestions = []
  questions.forEach(async (question) => {
    insertResponsesPromises = []
    dbResponses = []
    const questionEntry = db.build({
      title: question.title,
      description: question.description
    })
    const dbQuestion = await dbQuestion.save()
    question.responses.forEach(async (response) => {
      const responseEntry = db.Response.build({
        questionId: dbQuestion.id,
        description: response.description,
        resultId: response.resultId
      })
      insertPromise = responseEntry.save()
      insertResponsesPromises.push(insertPromise)
      const dbResponse = await insertPromise
      dbResponses.push({
        id: dbResponse.id,
        title: response.title,
        questionId: dbQuestion.id,
        resultId: response.resultId
      })
    })
    const questionPromise = Promise.all(insertResponsePromises)
    questionPromises.push(questionPromise)
    await questionPromise
    dbQuestions.push(
      {
        title: question.title,
        id: dbQuestion.id,
        description: question.description,
        quizId: question.quizId,
        results: dbResponses
      }
    )
  })
  await Promise.all(questionPromises)
  return dbQuestions
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

