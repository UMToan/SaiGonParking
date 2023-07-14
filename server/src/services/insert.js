import db from "../models";
import bcrypt from "bcryptjs";
import { v4 } from "uuid";
import sgparking1 from "../../data/sgparking1.json";
import generateCode from "../ultis/generateCode";
import generateCode1 from "../ultis/generateCode1";
import { generateCodeNum } from "../ultis/generateCode";

require("dotenv").config();

const hashPassword = (matkhau) =>
  bcrypt.hashSync(matkhau, bcrypt.genSaltSync(12));

// export const insertService = async () => {
//   try {
//     // Lấy dữ liệu từ "sgparking" và lưu vào biến (ví dụ: data)
//     const data = sgparking;

//     for (const item of data) {
//       let idOguixe = v4();
//       let idUser = v4();
//       let idBangGia = v4();
//       let idImage = v4();
//       let MaHangSX = generateCode(3);
//       let MaLoaiXe = generateCode(4);
//       let MaHinhThuc = generateCode1(3);
//       let MaPhieu = generateCodeNum(10);

//       await db.KhuVuc.create({
//         MaKhuVuc: item?.khuvuc1?.MaKhuVuc,
//         TenKhuVuc: item?.khuvuc1?.TenKhuVuc,
//       });
//       await db.Image.create({
//         id: idImage,
//         image: JSON.stringify(item?.image1?.hinhanh),
//       });
//       await db.HangSanXuat.create({
//         id: MaHangSX,
//         TenHangSX: item?.hangsx1?.TenHangSX,
//       });
//       await db.User.create({
//         id: idUser,
//         mail: item?.user1?.mail,
//         sdt: item?.user1?.sdt,
//         matkhau: hashPassword("123456"),
//         diachi: item?.user1?.diachi,
//         avatar: JSON.stringify(item?.user1?.avatar),
//         role: item?.user1?.role,
//       });
//       await db.HinhThuc.create({
//         id: MaHinhThuc,
//         TenHinhThuc: item?.hinhthuc1?.TenHinhThuc,
//       });
//       await db.LoaiXe.create({
//         id: MaLoaiXe,
//         MaHangSX,
//         TenHangSX: item?.loaixe1?.TenHangSX,
//         TenLoaiXe: item?.loaixe1?.TenLoaiXe,
//       });
//       await db.Xe.create({
//         MaLoaiXe,
//         BienSoXe: item?.xe1?.BienSoXe,
//       });
//       await db.BaiXe.create({
//         MaKhuVuc: item?.baixe1?.MaKhuVuc,
//         TenBaiXe: item?.baixe1?.TenBaiXe,
//         ViTriBaiXe: item?.baixe1?.ViTriBaiXe,
//         SDTBaiXe: item?.baixe1?.SDTBaiXe,
//         idImage,
//       });
//       await db.OGuiXe.create({
//         id: idOguixe,
//         idBaiXe: item?.oguixe1?.idBaiXe,
//         MaViTriGuiXe: item?.oguixe1?.MaViTriGuiXe,
//       });
//       await db.Phieu.create({
//         id: MaPhieu,
//         MaViTriGuiXe: item?.phieu1?.MaViTriGuiXe,
//         BienSoXe: item?.phieu1?.BienSoXe,
//         MaHinhThuc,
//         idUser,
//       });
//       await db.BangGiaGuiXe.create({
//         id: idBangGia,
//         idBaiXe: item?.banggia1?.idBaiXe,
//         MaLoaiXe,
//         MaHinhThuc,
//         MTGia: JSON.stringify(item?.banggia1?.MTGia),
//         Gia: item?.banggia1?.Gia,
//       });
//     }
//     return "done!";
//   } catch (error) {
//     // Nếu xảy ra lỗi, throw lỗi đó
//     throw error;
//   }
// };

const data = sgparking1.body;

export const insertService = () =>
  new Promise(async (resolve, reject) => {
    {
      try {
        data.forEach(async (item) => {
          let idOguixe = v4();
          let idUser = v4();
          let idBangGia = v4();
          let IdKhuVuc = generateCode1(2);
          let MaHangSX = generateCode(3);
          let MaLoaiXe = generateCode(4);
          let MaHinhThuc = generateCode1(3);
          let MaPhieu = generateCodeNum(7);
          let MaViTriGuiXe = generateCode1(4);

          // await db.User.create({
          //   id: idUser,
          //   mail: item?.user1?.user.find((i) => i.mail === "isAdmin@gmail.com")
          //     ?.mail,
          //   sdt: item?.user1?.user.find((i) => i.sdt === "363397844")?.sdt,
          //   matkhau: hashPassword("123456"),
          //   diachi: item?.user1?.user.find((i) => i.diachi === "Tây Ninh")
          //     ?.diachi,
          //   avatar: item?.user1?.user.find((i) => i.avatar === "")?.avatar,
          //   role: item?.user1?.user.find((i) => i.role === "2")?.role,
          // });

          // await db.BaiXe.create({
          //   IdKhuVuc,
          //   TenBaiXe: item?.baixe1?.baixe.find((i) => i.MaKhuVuc === "Q1")
          //     ?.TenBaiXe,
          //   ViTriBaiXe: item?.baixe1?.baixe.find((i) => i.MaKhuVuc === "Q1")
          //     ?.ViTriBaiXe,
          //   SDTBaiXe: item?.baixe1?.baixe.find((i) => i.MaKhuVuc === "Q1")
          //     ?.SDTBaiXe,
          // });

          await db.KhuVuc.create({
            id: IdKhuVuc,
            TenKhuVuc: item?.overview?.khuvuc.find((i) => i.MaKhuVuc === "Q1")
              ?.tenkhuvuc,
          });
        });

        resolve("done!");
      } catch (error) {
        throw error;
      }
    }
  });
