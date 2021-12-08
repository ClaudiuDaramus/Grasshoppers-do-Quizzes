'use strict';
const { lorem } = require('faker');
const faker = require('faker');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const allQuestions = await db.Question.findAll();
    const allResults = await db.Result.findAll();
    const res= [];
    for(let i = 0; i < 100; i++)
    {
      const questionId = Math.floor(Math.random() * (allQuestions.length - 1));
      const resultId = Math.floor(Math.random() * (allResults.length - 1));
      res.push({
        id: i,
        content: faker.lorem.word(),
        questionId,
        resultId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('Responses', res , {});
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
     await queryInterface.bulkDelete('Responses', null, {});
  }
};
