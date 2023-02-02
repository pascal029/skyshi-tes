"use strict";
const { Model } = require("sequelize");
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
  Todo.init(
    {
      todo_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      activity_group_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: `activity_group_id cannot be null`,
          },
          notEmpty: {
            msg: `activity_group_id cannot be null`,
          },
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `title cannot be null`,
          },
          notEmpty: {
            msg: `title cannot be null`,
          },
        },
      },
      is_active: DataTypes.BOOLEAN,
      priority: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
