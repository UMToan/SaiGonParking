"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KhuVuc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KhuVuc.hasMany(models.BaiXe, { foreignKey: "MaKhuVuc", as: "khuvuc" });
    }
  }
  KhuVuc.init(
    {
      MaKhuVuc: DataTypes.STRING,
      TenKhuVuc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "KhuVuc",
    }
  );
  return KhuVuc;
};
