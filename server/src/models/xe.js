"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Xe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Xe.hasMany(models.Phieu, {
        foreignKey: "BienSoXe",
        as: "xe",
      });
      Xe.belongsTo(models.LoaiXe, {
        foreignKey: "MaLoaiXe",
        as: "loaixe",
      });
    }
  }
  Xe.init(
    {
      MaLoaiXe: DataTypes.STRING,
      BienSoXe: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Xe",
    }
  );
  return Xe;
};
