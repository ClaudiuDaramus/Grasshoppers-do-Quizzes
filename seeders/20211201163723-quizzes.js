'use strict';
const faker = require('faker');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const allUsers = await db.User.findAll();
    const quizzes = [];
    for(let i = 0; i < 100; i++)
    {
      const userId = Math.floor(Math.random() * (allUsers.length - 1));
      quizzes.push({
        id: i,
        name: faker.animal.insect(),
        description: faker.lorem.sentence(),
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('Quizzes', quizzes , {});
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
     await queryInterface.bulkDelete('Quizzes', null, {});
  }
};
