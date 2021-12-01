'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Quiz.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      models.Quiz.belongsToMany(models.Tag, {
        through: 'QuizzesTags',
      });
      models.Quiz.belongsToMany(models.Category, {
        through: 'QuizzesCategories',
      });
    }
  };
  Quiz.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};