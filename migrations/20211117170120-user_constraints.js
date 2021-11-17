'use strict';

//const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn("Users", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    })
    await queryInterface.changeColumn("Users", "password", {
      type: Sequelize.STRING(64),
      allowNull: false
    })
    await queryInterface.changeColumn("Users", "name", {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeConstraint("Users", "user_email_unique_constraint")
    await queryInterface.changeColumn("Users", "password", {
      type: Sequelize.STRING(64),
    })
    await queryInterface.changeColumn("Users", "name", {
      type: Sequelize.STRING,
    }) 
  }
};
