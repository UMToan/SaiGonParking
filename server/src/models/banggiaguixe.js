"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BangGiaGuiXe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BangGiaGuiXe.belongsTo(models.BaiXe, {
        foreignKey: "id",
        as: "banggia",
      });
      BangGiaGuiXe.belongsTo(models.LoaiXe, {
        foreignKey: "MaLoaiXe",
        as: "maloaixe",
      });
      BangGiaGuiXe.belongsTo(models.HinhThuc, {
        foreignKey: "MaHinhThuc",
        as: "mahinhthuc",
      });
    }
  }
  BangGiaGuiXe.init(
    {
      idBaiXe: DataTypes.INTEGER,
      MaLoaiXe: DataTypes.STRING,
      MaHinhThuc: DataTypes.STRING,
      MTGia: DataTypes.STRING,
      Gia: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "BangGiaGuiXe",
    }
  );
  return BangGiaGuiXe;
};
