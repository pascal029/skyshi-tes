'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init({
    activity_goup_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    priority: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};