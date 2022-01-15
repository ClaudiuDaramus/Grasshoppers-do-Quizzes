'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {    
    const allCategories = await db.Category.findAll();
    const res= [];
    for(let i = 0; i < 100; i++)
    {
      const categoryId = Math.floor(Math.random() * (allCategories.length - 1));
      res.push({       
        quizId: i,
        categoryId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('QuizzesCategories', res , {});
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
     await queryInterface.bulkDelete('QuizzesCategories', null, {});
  }
};
