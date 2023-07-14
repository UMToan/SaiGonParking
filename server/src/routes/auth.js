import express from "express";
import * as authController from "../controllers/auth";

const router = express.Router();

//file này dùng để viết authen... (đăng nhập)

router.post("/register", authController.register); //routes , gọi hàm
// gửi form dữ liệu từ client thì dùng phương thức post
router.post("/login", authController.login);

export default router;
