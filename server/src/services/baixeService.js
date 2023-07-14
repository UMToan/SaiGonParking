import db from "../models";
import { Op } from "sequelize";

//Create new baixe
export const createNewBaiXeService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.BaiXe.create({
        MaKhuVuc: body.MaKhuVuc || null,
        TenBaiXe: body.TenBaiXe || null,
        ViTriBaiXe: body.ViTriBaiXe || null,
        SDTBaiXe: body.SDTBaiXe || null,
        images: JSON.stringify(body.images) || null,
      });
      resolve({
        err: 0,
        msg: "OK",
      });
    } catch (error) {
      reject(error);
    }
  });

//GET ALL BAIXE CRUD
export const getALLCURDBaiXeService = ({ ...query }) =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: query,
        raw: true,
        nest: true,
        distinct: true,
        include: [
          {
            model: db.OGuiXe,
            as: "baixeslot",
            attributes: ["id", "idBaiXe", "TrangThai"],
          },
        ],
        attributes: ["MaKhuVuc", "id", "TenBaiXe", "ViTriBaiXe", "SDTBaixe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "OK" : "Failed to get Baixe",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

//GET ALL BAIXE {/id}
export const getAllBaiXeService = ({ ...query }) =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: query,
        raw: true,
        nest: true,
        distinct: true,
        include: [
          {
            model: db.OGuiXe,
            as: "baixeslot",
            attributes: ["id", "idBaiXe", "TrangThai"],
          },
          {
            model: db.BangGiaGuiXe,
            as: "banggia",
            attributes: ["idBaiXe", "MaLoaiXe", "MaHinhThuc", "MTGia"],
            include: [
              {
                model: db.HinhThuc,
                as: "mahinhthuc",
                attributes: ["TenHinhThuc"],
              },
            ],
          },
        ],
        attributes: ["id", "TenBaiXe", "ViTriBaiXe", "SDTBaixe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "OK" : "Failed to get Baixe",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

/// GET ALL BAI XXE Q1
export const getBaixeService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: { MaKhuVuc: "Q1" },
        raw: true,
        nest: true,
        oder: [["createdAt", "DESC"]],
        include: [
          {
            model: db.KhuVuc,
            as: "khuvuc",
            attributes: ["MaKhuVuc", "TenKhuVuc"],
          },
        ],
        attributes: ["id", "MaKhuVuc", "TenBaiXe", "ViTriBaiXe", "SDTBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "OK" : "Failed to get Baixe",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

// GET ALL BAI XXE SEARCH
export const getBaixeSearchService = ({ name, ...query }) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (name) query.TenBaiXe = { [Op.substring]: name };
      const baixe = await db.BaiXe.findAll({
        where: query,
        raw: true,
        nest: true,
        attributes: ["id", "TenBaiXe", "ViTriBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "OK" : "Failed to get Baixe",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });
};

//GET ALL BAI XE Q2
export const getBaiXeQ2Service = () =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: { MaKhuVuc: "Q2" },
        raw: true,
        nest: true,
        include: [
          {
            model: db.KhuVuc,
            as: "khuvuc",
            attributes: ["MaKhuVuc", "TenKhuVuc"],
          },
        ],
        attributes: ["MaKhuVuc", "TenBaiXe", "ViTriBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "Ok" : "Failed to get BaixeQ2",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

//GET ALL BAI XE QUAN 3
export const getBaiXeq3Service = () =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: { MaKhuVuc: "Q3" },
        raw: true,
        nest: true,
        include: [
          {
            model: db.KhuVuc,
            as: "khuvuc",
            attributes: ["MaKhuVuc", "TenKhuVuc"],
          },
        ],
        attributes: ["MaKhuVuc", "TenBaiXe", "ViTriBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "ok" : "Failed to get BaixeQ3",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getBaiXeq5Service = () =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: { MaKhuVuc: "Q5" },
        raw: true,
        nest: true,
        include: [
          {
            model: db.KhuVuc,
            as: "khuvuc",
            attributes: ["MaKhuVuc", "TenKhuVuc"],
          },
        ],
        attributes: ["MaKhuVuc", "TenBaiXe", "ViTriBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "ok" : "Failed to get BaixeQ5",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getBaiXeq6Service = () =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: { MaKhuVuc: "Q6" },
        raw: true,
        nest: true,
        include: [
          {
            model: db.KhuVuc,
            as: "khuvuc",
            attributes: ["MaKhuVuc", "TenKhuVuc"],
          },
        ],
        attributes: ["MaKhuVuc", "TenBaiXe", "ViTriBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "ok" : "Failed to get BaixeQ6",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getBaiXeq7Service = () =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: { MaKhuVuc: "Q7" },
        raw: true,
        nest: true,
        include: [
          {
            model: db.KhuVuc,
            as: "khuvuc",
            attributes: ["MaKhuVuc", "TenKhuVuc"],
          },
        ],
        attributes: ["MaKhuVuc", "TenBaiXe", "ViTriBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "ok" : "Failed to get BaixeQ7",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getBaiXeq10Service = () =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: { MaKhuVuc: "Q10" },
        raw: true,
        nest: true,
        include: [
          {
            model: db.KhuVuc,
            as: "khuvuc",
            attributes: ["MaKhuVuc", "TenKhuVuc"],
          },
        ],
        attributes: ["MaKhuVuc", "TenBaiXe", "ViTriBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "ok" : "Failed to get BaixeQ10",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getBaiXeq11Service = () =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: { MaKhuVuc: "Q11" },
        raw: true,
        nest: true,
        include: [
          {
            model: db.KhuVuc,
            as: "khuvuc",
            attributes: ["MaKhuVuc", "TenKhuVuc"],
          },
        ],
        attributes: ["MaKhuVuc", "TenBaiXe", "ViTriBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "ok" : "Failed to get BaixeQ11",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getBaiXeqBtService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: { MaKhuVuc: "BT" },
        raw: true,
        nest: true,
        include: [
          {
            model: db.KhuVuc,
            as: "khuvuc",
            attributes: ["MaKhuVuc", "TenKhuVuc"],
          },
        ],
        attributes: ["MaKhuVuc", "TenBaiXe", "ViTriBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "ok" : "Failed to get BaixeQBT",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getBaiXeqGvService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: { MaKhuVuc: "GV" },
        raw: true,
        nest: true,
        include: [
          {
            model: db.KhuVuc,
            as: "khuvuc",
            attributes: ["MaKhuVuc", "TenKhuVuc"],
          },
        ],
        attributes: ["MaKhuVuc", "TenBaiXe", "ViTriBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "ok" : "Failed to get BaixeQGV",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getBaiXeqPnService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const baixe = await db.BaiXe.findAll({
        where: { MaKhuVuc: "PN" },
        raw: true,
        nest: true,
        include: [
          {
            model: db.KhuVuc,
            as: "khuvuc",
            attributes: ["MaKhuVuc", "TenKhuVuc"],
          },
        ],
        attributes: ["MaKhuVuc", "TenBaiXe", "ViTriBaiXe"],
      });
      resolve({
        err: baixe ? 0 : 1,
        msg: baixe ? "ok" : "Failed to get BaixePN",
        baixe,
      });
    } catch (error) {
      reject(error);
    }
  });
