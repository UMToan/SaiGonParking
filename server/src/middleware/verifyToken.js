import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let accessToken = req.headers.authorization?.split(" ")[1]; // cái token này là ở local (application)
  //verify token không có
  if (!accessToken)
    return res.status(401).json({
      err: 1,
      msg: "missing access token",
    });

  //verify token có
  jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
    if (err)
      return res.status(401).json({
        err: 1,
        msg: "Access token expired",
      });

    res.user = user;
    next();
  });
};

export default verifyToken;
