'use strict';
const { lorem } = require('faker');
const faker = require('faker');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const allUsers = await db.User.findAll();
    const allQuizzes = await db.Quiz.findAll();
    const allResults = await db.Result.findAll();
    const res= [];
    for(let i = 0; i < 100; i++)
    {
      const userId = Math.floor(Math.random() * (allUsers.length - 1));
      const quizId = Math.floor(Math.random() * (allQuizzes.length - 1));
      const resultId = Math.floor(Math.random() * (allResults.length - 1));
      res.push({
        userId,
        quizId,
        resultId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('UserQuizResults', res , {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('UserQuizResults', null, {});
  }
};
