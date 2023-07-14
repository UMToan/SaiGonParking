import * as khuVucService from "../services/khuvucService";

export const getKhuvucController = async (req, res) => {
  try {
    const khuvuc = await khuVucService.getKhuVucService();
    res.status(200).json(khuvuc);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed at khuvuc controller " + error,
    });
  }
};
