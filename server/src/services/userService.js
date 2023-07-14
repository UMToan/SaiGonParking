import db from "../models";

//GET ALL USER
export const getAllUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findAll({
        raw: true,
        nest: true,
        attributes: ["mail", "sdt", "matkhau", "role"],
      });
      resolve({
        err: user ? 0 : 1,
        msg: user ? "ok" : "Failed to get user",
        user,
      });
    } catch (error) {
      reject(error);
    }
  });

//GET ONE USer
export const getOneUser = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id },
        raw: true,
        attributes: {
          exclude: ["matkhau"],
        },
      });
      resolve({
        err: user ? 0 : 1,
        msg: user ? "ok" : "Failed to get user",
        user,
      });
    } catch (error) {
      reject(error);
    }
  });
