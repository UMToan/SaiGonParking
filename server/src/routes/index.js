import authRouter from "./auth";
import insertRouter from "./insert";
import khuvucRouter from "./khuvuc";
import baixeRouter from "./baixe";
import userRouter from "./user";
import oguixeRouter from "./oguixe";
import banggiaRouter from "./banggia";
import getalluserRouter from "./getallUser";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/insert", insertRouter);

  //------KhuVuc-------
  app.use("/api/v1/getKhuvuc", khuvucRouter);

  //------BaiXe--------
  app.use("/api/v1/getBaixe", baixeRouter); // get all bãi xe quận 1

  //------User---------
  app.use("/api/v1/getUser", userRouter);
  app.use("/api/v1/getAllUser", getalluserRouter);

  //-------OGuiXe---------
  app.use("/api/v1/getoguixe", oguixeRouter);

  //-------BangGia---------
  app.use("/api/v1/getBangGia", banggiaRouter);

  return app.use("/", (req, res) => {
    res.send("server on ...");
  });
};

export default initRoutes;
