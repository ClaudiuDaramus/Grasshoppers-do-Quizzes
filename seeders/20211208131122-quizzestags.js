'use strict';
const { lorem } = require('faker');
const faker = require('faker');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {    
    const allTags = await db.Tag.findAll();
    const res= [];
    for(let i = 0; i < 100; i++)
    {
      const tagId = Math.floor(Math.random() * (allTags.length - 1));
      res.push({       
        quizId: i,
        tagId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('QuizzesTags', res , {});
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
     await queryInterface.bulkDelete('QuizzesTags', null, {});
  }
};
