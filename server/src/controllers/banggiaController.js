import * as banggiaService from "../services/banggiaService";

export const getBanggiaQ1Controller = async (req, res) => {
  try {
    const banggia = await banggiaService.getBanggiaQ1Service();
    res.status(200).json(banggia);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed in at banggiaController" + error,
    });
  }
};
