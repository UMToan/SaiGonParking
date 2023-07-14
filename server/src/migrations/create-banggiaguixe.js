"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("BangGiaGuiXes", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      idBaiXe: {
        type: Sequelize.INTEGER,
      },
      MaLoaiXe: {
        type: Sequelize.STRING,
      },
      MaHinhThuc: {
        type: Sequelize.STRING,
      },
      MTGia: {
        type: Sequelize.STRING,
      },
      Gia: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("BangGiaGuiXes");
  },
};
