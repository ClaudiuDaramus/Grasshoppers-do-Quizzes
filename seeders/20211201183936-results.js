'use strict';
const faker = require('faker');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const allQuizzes = await db.Quiz.findAll();
    const res= [];
    for(let i = 0; i < 100; i++)
    {
      const quizId = Math.floor(Math.random() * (allQuizzes.length - 1));
      res.push({
        id: i,
        title: faker.animal.dog(),
        description: faker.lorem.sentence(),
        quizId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('Results', res , {});
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
     await queryInterface.bulkDelete('Results', null, {});
  }
};
