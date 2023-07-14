"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OGuiXe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OGuiXe.belongsTo(models.BaiXe, {
        foreignKey: "id",
        as: "baixeslot",
      });
      OGuiXe.hasMany(models.Phieu, {
        foreignKey: "MaViTriGuiXe",
        as: "phieu",
      });
    }
  }
  OGuiXe.init(
    {
      idBaiXe: DataTypes.INTEGER,
      TrangThai: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OGuiXe",
    }
  );
  return OGuiXe;
};
