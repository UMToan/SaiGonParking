"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HangSanXuat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HangSanXuat.hasMany(models.LoaiXe, {
        foreignKey: "TenHangSX",
        as: "hangsx",
      });
    }
  }
  HangSanXuat.init(
    {
      TenHangSX: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "HangSanXuat",
    }
  );
  return HangSanXuat;
};
