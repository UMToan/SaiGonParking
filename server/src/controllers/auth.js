import * as authService from "../services/auth";

export const register = async (req, res) => {
  const { mail, sdt, matkhau } = req.body;
  try {
    if (!mail || !sdt || !matkhau)
      return res.status(400).json({
        // nếu mà nhập thiếu 1 trong 3 cái trên thì sẽ thông báo lỗi
        // err: số âm là lỗi server, số dương lỗi client, số 0 thành công
        err: 1,
        msg: "Missing input!",
      });
    // sau khi check điều kiện null ở trên thì hàm reponse sẽ thực hiện.
    const response = await authService.registerService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    // nếu không map được với db thì catch sẽ được thôn báo
    return res.status(500).json({
      // fail thì gửi cái status 500 dưới dạng jsson
      err: -1,
      msg: "Fail at auth controlller: " + error,
    });
  }
};

export const login = async (req, res) => {
  const { mail, matkhau } = req.body;
  try {
    if (!mail || !matkhau)
      return res.status(400).json({
        err: 1,
        msg: "Missing inputs !",
      });
    const response = await authService.loginService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at auth controller: " + error,
    });
  }
};
