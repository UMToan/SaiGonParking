"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LoaiXe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LoaiXe.hasMany(models.Xe, {
        foreignKey: "MaLoaiXe",
        as: "loaixe",
      });
      LoaiXe.hasMany(models.BangGiaGuiXe, {
        foreignKey: "MaLoaiXe",
        as: "maloaixe",
      });
      LoaiXe.belongsTo(models.HangSanXuat, {
        foreignKey: "TenHangSX",
        as: "hangsx",
      });
    }
  }
  LoaiXe.init(
    {
      TenHangSX: DataTypes.STRING,
      TenLoaiXe: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "LoaiXe",
    }
  );
  return LoaiXe;
};
