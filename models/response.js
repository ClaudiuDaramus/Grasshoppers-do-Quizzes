'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Response.belongsTo(models.Question, {
        foreignKey: 'questionId',
      });
      models.Response.belongsTo(models.Result, {
        foreignKey: 'resultId',
      });
    }
  };
  Response.init({
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Response',
  });
  return Response;
};