'use strict';
const faker = require('faker');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const allQui = await db.Quiz.findAll();
    const questions = [];
    for(let i = 0; i < 100; i++)
    {
      const quizId = Math.floor(Math.random() * (allQui.length - 1));
      questions.push({
        id: i,
        content: faker.lorem.sentence() + "?",
        quizId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('Questions', questions , {});
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
     await queryInterface.bulkDelete('Questions', null, {});
  }
};
