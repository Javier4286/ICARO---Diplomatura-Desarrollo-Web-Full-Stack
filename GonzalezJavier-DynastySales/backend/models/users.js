"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      isAdmin: DataTypes.BOOLEAN,
      Name: DataTypes.STRING,
      Surname: DataTypes.STRING,
      Email: DataTypes.STRING,
      Address: DataTypes.STRING,
      Password: DataTypes.STRING,
      Telephone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
      timestamps: false,
    }
  );
  return Users;
};
