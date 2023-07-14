import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
require("dotenv").config();

const hashPassword = (matkhau) =>
  bcrypt.hashSync(matkhau, bcrypt.genSaltSync(12));

export const registerService = ({ mail, matkhau, sdt }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        //findOrCreate là hàm xử lý nếu có thì thông báo còn không thì sẽ tạo
        where: { mail }, // nếu mail đã có thì thôi còn nếu khong có thì sẽ tạo theo cái default
        defaults: {
          mail,
          sdt,
          matkhau: hashPassword(matkhau),
          id: v4(),
        },
      });
      const token =
        response[1] &&
        jwt.sign(
          { id: response[0].id, mail: response[0].mail, sdt: response[0].sdt },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      //response[1] là phần tử thứ 2 trong mảng user, nếu response[1] đúng thì sẽ thực hiện tiếp phía sau (tạo mới account)
      //       //nêu response[1] là false thì lấy token = response
      resolve({
        err: token ? 0 : 2,
        msg: token
          ? "Register is successfully !"
          : "Phone number has been aldready used !",
        token: token || null,
      });
    } catch (error) {
      // nếu lỗi thì đẩy cái lỗi ra luôn
      reject(error);
    }
  });

export const loginService = ({ mail, matkhau }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { mail },
        raw: true,
      });
      const isCorrectPassword =
        response && bcrypt.compareSync(matkhau, response.matkhau);
      const token =
        isCorrectPassword &&
        jwt.sign(
          { id: response.id, mail: response.mail },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        err: token ? 0 : 2,
        msg: token
          ? "Login is successfully !"
          : response
          ? "Password is wrong !"
          : "mail number not found !",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });
