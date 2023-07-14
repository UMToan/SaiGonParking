import db from "../models";

//GET ALL KHUVUC
export const getKhuVucService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const khuvuc = await db.KhuVuc.findAll({
        raw: true,
        attributes: ["MaKhuVuc", "TenKhuVuc"],
      });
      resolve({
        err: khuvuc ? 0 : 1,
        msg: khuvuc ? "OK" : "Failed to get KhuVuc",
        khuvuc,
      });
    } catch (error) {
      reject(error);
    }
  });
