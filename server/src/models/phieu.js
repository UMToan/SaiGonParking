"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Phieu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Phieu.belongsTo(models.OGuiXe, {
        foreignKey: "MaViTriGuiXe",
        as: "phieu",
      });
      Phieu.belongsTo(models.User, {
        foreignKey: "idUser",
        as: "userPhieu",
      });
      Phieu.belongsTo(models.Xe, {
        foreignKey: "BienSoXe",
        as: "xe",
      });
      Phieu.belongsTo(models.HinhThuc, {
        foreignKey: "MaHinhThuc",
        as: "mahinhthucphieu",
      });
    }
  }
  Phieu.init(
    {
      MaViTriGuiXe: DataTypes.STRING,
      BienSoXe: DataTypes.STRING,
      MaHinhThuc: DataTypes.STRING,
      idUser: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Phieu",
    }
  );
  return Phieu;
};
