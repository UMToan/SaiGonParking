import express from "express";
import cors from "cors";
import initRoutes from "./src/routes";
import connectDB from "./src/config/connectDB";

require("dotenv").config(); //có tác dụng lấy các biến bên file dotenv để require

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"], // có nghĩa là web chỉ nhận 4 pthuc CRUD ngoài ra không nhận.
  })
);

app.use(express.json()); // có tác dụng đọc những dư liệu dạng json đưuọc gửi lên từ server
app.use(express.urlencoded({ extended: true })); // đọc dữ liệu dạng form
// tóm lại 2 dòng này là để giúp cái web đọc được api từ client gửi lên

initRoutes(app);
connectDB();

const port = process.env.PORT || 8888; //cho biết server đăng chạy ở cổng PORT ở .env hay cổng 8888
const listener = app.listen(port, () => {
  console.log(`Server is running on the port ${listener.address().port}`);
});
