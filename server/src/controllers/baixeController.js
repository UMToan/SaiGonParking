import * as baixeService from "../services/baixeService";

//create new bai xe
export const createNewBaiXe = async (req, res) => {
  try {
    const { MaKhuVuc, TenBaiXe, ViTriBaiXe, SDTBaiXe, images } = req.body;
    if (!MaKhuVuc || !TenBaiXe || !ViTriBaiXe || !SDTBaiXe || !images)
      return res.status(400).json({
        err: 1,
        msg: "Missing inputs",
      });
    const baixe = await baixeService.createNewBaiXeService(req.body);
    res.status(200).json(baixe);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed at all baixe controller" + error,
    });
  }
};

//get all BaiXe CRUD
export const getALLCURDBaiXeController = async (req, res) => {
  try {
    const baixe = await baixeService.getALLCURDBaiXeService(req.query);
    res.status(200).json(baixe);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed at all baixe controller" + error,
    });
  }
};

//get all BaiXe
export const getAllBaiXeController = async (req, res) => {
  try {
    const baixe = await baixeService.getAllBaiXeService(req.query);
    res.status(200).json(baixe);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed at all baixe controller" + error,
    });
  }
};

//getBaixeSearch
export const getBaixeSearchController = async (req, res) => {
  try {
    const baixe = await baixeService.getBaixeSearchService(req.query);
    res.status(200).json(baixe);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed at baixe controller " + error,
    });
  }
};

export const getBaixeController = async (req, res) => {
  try {
    const baixe = await baixeService.getBaixeService();
    res.status(200).json(baixe);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed at baixe controller " + error,
    });
  }
};

export const getBaiXeq2Controller = async (req, res) => {
  try {
    const baixe = await baixeService.getBaiXeQ2Service();
    res.status(200).json(baixe);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed at baixe controller" + error,
    });
  }
};

export const getBaiXeq3Controller = async (req, res) => {
  try {
    const baixe = await baixeService.getBaiXeq3Service();
    res.status(200).json(baixe);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "failed at baixe controller" + error,
    });
  }
};

export const getBaiXeq5Controller = async (req, res) => {
  try {
    const baixe = await baixeService.getBaiXeq5Service();
    res.status(200).json(baixe);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "failed at baixe controller" + error,
    });
  }
};

export const getBaiXeq6Controller = async (req, res) => {
  try {
    const baixe = await baixeService.getBaiXeq6Service();
    res.status(200).json(baixe);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "failed at baixe controller" + error,
    });
  }
};

export const getBaiXeq7Controller = async (req, res) => {
  try {
    const baixe = await baixeService.getBaiXeq7Service();
    res.status(200).json(baixe);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "failed at baixe controller" + error,
    });
  }
};

export const getBaiXeq10Controller = async (req, res) => {
  try {
    const baixe = await baixeService.getBaiXeq10Service();
    res.status(200).json(baixe);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "failed at baixe controller" + error,
    });
  }
};

export const getBaiXeq11Controller = async (req, res) => {
  try {
    const baixe = await baixeService.getBaiXeq11Service();
    res.status(200).json(baixe);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "failed at baixe controller" + error,
    });
  }
};

export const getBaiXeqBtController = async (req, res) => {
  try {
    const baixe = await baixeService.getBaiXeqBtService();
    res.status(200).json(baixe);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "failed at baixe controller" + error,
    });
  }
};

export const getBaiXeqGvController = async (req, res) => {
  try {
    const baixe = await baixeService.getBaiXeqGvService();
    res.status(200).json(baixe);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "failed at baixe controller" + error,
    });
  }
};

export const getBaiXeqPnController = async (req, res) => {
  try {
    const baixe = await baixeService.getBaiXeqPnService();
    res.status(200).json(baixe);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "failed at baixe controller" + error,
    });
  }
};
