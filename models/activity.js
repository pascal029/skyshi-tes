"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Activity.init(
    {
      activity_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Activity",
    }
  );
  return Activity;
};
