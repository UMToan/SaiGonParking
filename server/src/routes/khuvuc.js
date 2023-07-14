import express from "express";
import * as khuvucController from "../controllers/khuvucController";

const router = express.Router();

router.get("/allKhuvuc", khuvucController.getKhuvucController);

export default router;
