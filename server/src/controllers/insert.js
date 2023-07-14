import * as insertService from "../services/insert";

export const insert = async (req, res) => {
  try {
    const response = await insertService.insertService();
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
