"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BaiXe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BaiXe.belongsTo(models.KhuVuc, {
        foreignKey: "MaKhuVuc",
        targetKey: "MaKhuVuc",
        as: "khuvuc",
      });
      BaiXe.hasMany(models.OGuiXe, {
        foreignKey: "idBaiXe",
        as: "baixeslot",
      });
      BaiXe.hasMany(models.BangGiaGuiXe, {
        foreignKey: "idBaiXe",
        as: "banggia",
      });
    }
  }
  BaiXe.init(
    {
      MaKhuVuc: DataTypes.STRING,
      TenBaiXe: DataTypes.STRING,
      ViTriBaiXe: DataTypes.STRING,
      SDTBaiXe: DataTypes.INTEGER,
      images: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "BaiXe",
    }
  );
  return BaiXe;
};
