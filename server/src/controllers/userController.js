import * as userService from "../services/userService";

export const getAllUserController = async (req, res) => {
  try {
    const user = await userService.getAllUser();
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at user controller" + error,
    });
  }
};

export const getUserController = async (req, res) => {
  const { id } = res.user; // lấy thông tin user gán cho request
  try {
    const user = await userService.getOneUser(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at user controller" + error,
    });
  }
};
