'use strict';
const faker = require('faker');
const hash = require("../crypt/hash");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [];
    const passwords = ["Parolatare123!", "GrasshoppersDoQuizzes1000000?", "PaRoLaSeCreTa2000!?"];
    console.log(passwords[1]);
    const hashedpasswordspromises = passwords.map(async (i) =>{return hash.hash(i)});
    const hashedpasswords =await Promise.all(hashedpasswordspromises);
    console.log(hashedpasswords[1]);
    for(let i = 0; i < 100; i++) {
      data.push({
        id: i,
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: hashedpasswords[Math.floor(Math.random() * (hashedpasswords.length - 1))],     
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Users', data, {});
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
     await queryInterface.bulkDelete('Users', null, {});
  }
};