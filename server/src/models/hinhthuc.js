"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HinhThuc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HinhThuc.hasMany(models.BangGiaGuiXe, {
        foreignKey: "MaHinhThuc",
        as: "mahinhthuc",
      });
      HinhThuc.hasMany(models.Phieu, {
        foreignKey: "MaHinhThuc",
        as: "mahinhthucphieu",
      });
    }
  }
  HinhThuc.init(
    {
      TenHinhThuc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "HinhThuc",
    }
  );
  return HinhThuc;
};
