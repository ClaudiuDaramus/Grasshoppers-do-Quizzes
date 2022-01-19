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

module.exports.addTagToQuiz = async (req, res) => {
  const quizId = req.params.quizId;
  const tagId = req.params.tagId;

  try {
    const quiz = await db.Quiz.findByPk(quizId);
    const tag = await db.Tag.findByPk(tagId);

    if (!quiz) {
      throw new Error(`Quiz with id ${quizId} doesn't exist!`);
    }

    if (!tag) {
      throw new Error(`Quiz with id ${tagId} doesn't exist!`);
    }

    await quiz.setTags(tag);

    const updatedQuiz = await db.Quiz.findByPk(quizId);
    const updatedQuizsTags = await updatedQuiz.getTags();

    const response = {
      ...updatedQuiz.toJSON(),
      tags: updatedQuizsTags,
    }

    res.status(201).send(response);
  } catch (error) {
    console.error(error);
    res.send({
      error: "Something went wrong",
    });
  }
}

module.exports.addCategoryToQuiz = async (req, res) => {
  const quizId = req.params.quizId;
  const categoryId = req.params.categoryId;

  try {
    const quiz = await db.Quiz.findByPk(quizId);
    const category = await db.Category.findByPk(categoryId);

    if (!quiz) {
      throw new Error(`Quiz with id ${quizId} doesn't exist!`);
    }

    if (!category) {
      throw new Error(`Quiz with id ${categoryId} doesn't exist!`);
    }

    await quiz.setCategories(category);

    const updatedQuiz = await db.Quiz.findByPk(quizId);
    const updatedQuizsCategories = await updatedQuiz.getCategories();

    const response = {
      ...updatedQuiz.toJSON(),
      categorys: updatedQuizsCategories,
    }

    res.status(201).send(response);
  } catch (error) {
    console.error(error);
    res.send({
      error: "Something went wrong",
    });
  }
}

module.exports.updateQuiz = async (req, res) => {
  const id = req.params.id;
  const { name, description, userId } = req.body;

  try {
    const quiz = await db.Quiz.findByPk(id);

    if (!quiz) {
      throw `Quiz with id ${id} doesn't exist!`;
    }

    quiz = await db.Quiz.update({
      name,
      description,
      userId
    }, { where: { id } });

    res.status(200).send(quiz);
  } catch (e) {
    console.error(e);
    res.send({
      error: "Something went wrong",
    });
  }
}

module.exports.deleteQuiz = async (req, res) => {
  const { id } = req.params.id;

  try {
    const quiz = await db.Quiz.findByPk(id);

    if (!quiz) {
      throw `Quiz with id ${id} doesn't exist!`;
    }

    quiz = await db.Quiz.destroy({ where: { id } });

    res.status(200).send(quiz);
  } catch (e) {
    console.error(e);
    res.send({
      error: "Something went wrong",
    });;
  }
}
