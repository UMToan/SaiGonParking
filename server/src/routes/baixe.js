import express from "express";
import * as baixeController from "../controllers/baixeController";
import verifyToken from "../middleware/verifyToken";

const router = express.Router();

router.get("/allBaixeQ1", baixeController.getBaixeController);
router.get("/allBaixeQ2", baixeController.getBaiXeq2Controller);
router.get("/allBaixeQ3", baixeController.getBaiXeq3Controller);
router.get("/allBaixeQ5", baixeController.getBaiXeq5Controller);
router.get("/allBaixeQ6", baixeController.getBaiXeq6Controller);
router.get("/allBaixeQ7", baixeController.getBaiXeq7Controller);
router.get("/allBaixeQ10", baixeController.getBaiXeq10Controller);
router.get("/allBaixeQ11", baixeController.getBaiXeq11Controller);
router.get("/allBaixeQBt", baixeController.getBaiXeqBtController);
router.get("/allBaixeQGv", baixeController.getBaiXeqGvController);
router.get("/allBaixeQPn", baixeController.getBaiXeqPnController);
router.get("/allBaixeSearch", baixeController.getBaixeSearchController);
router.get("/allBaixe", baixeController.getAllBaiXeController);
router.get("/aLLCURDBaixe", baixeController.getALLCURDBaiXeController);

router.use(verifyToken);
router.post("/create-new", baixeController.createNewBaiXe);

export default router;
