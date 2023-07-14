import * as oguixeService from "../services/oguixeService";

export const getOguixeQ1Controller = async (req, res) => {
  try {
    const oguixe = await oguixeService.getoguixeQ1Service();
    res.status(200).json(oguixe);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed at all oguixe controller" + error,
    });
  }
};
