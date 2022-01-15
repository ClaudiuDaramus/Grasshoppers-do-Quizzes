'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Responses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Questions'
          },
          key: 'id',
        },
      },
      resultId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Results'
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Responses');
  }
};