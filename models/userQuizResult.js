'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserQuizResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.UserQuizResult.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      models.UserQuizResult.belongsTo(models.Quiz, {
        foreignKey: 'quizId',
      });
      models.UserQuizResult.belongsTo(models.Result, {
        foreignKey: 'resultId',
      });
    }
  };
  UserQuizResult.init({
  }, {
    sequelize,
    modelName: 'UserQuizResult',
  });
  return UserQuizResult;
};