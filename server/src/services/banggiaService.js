import db from "../models";

export const getBanggiaQ1Service = () =>
  new Promise(async (resolve, reject) => {
    try {
      const banggia = await db.BangGiaGuiXe.findAll({
        raw: true,
        nest: true,
        where: { idBaiXe: "1" },
        attributes: ["idBaiXe", "MaLoaiXe", "MaHinhThuc", "MTGia"],
      });
      resolve({
        err: banggia ? 0 : 1,
        msg: banggia ? "ok" : "Failed to get BangGia",
        banggia,
      });
    } catch (error) {
      reject(error);
    }
  });
