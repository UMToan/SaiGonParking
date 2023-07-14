import db from "../models";

export const getoguixeQ1Service = () =>
  new Promise(async (resolve, reject) => {
    try {
      const oguixe = await db.OGuiXe.findAll({
        raw: true,
        nest: true,
        where: { idBaiXe: "1" },
        attributes: ["id", "TrangThai"],
      });
      resolve({
        err: oguixe ? 0 : 1,
        msg: oguixe ? "ok" : "Failed to get Oguixe",
        oguixe,
      });
    } catch (error) {
      reject(error);
    }
  });
