"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Phieu, {
        foreignKey: "idUser",
        as: "userPhieu",
      });
    }
  }
  User.init(
    {
      mail: DataTypes.STRING,
      sdt: DataTypes.STRING,
      matkhau: DataTypes.STRING,
      avatar: DataTypes.BLOB,
      role: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
