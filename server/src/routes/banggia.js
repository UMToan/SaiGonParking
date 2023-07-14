import express from "express";
import * as banggiaController from "../controllers/banggiaController";

const router = express.Router();

router.get("/getBangGiaQ1", banggiaController.getBanggiaQ1Controller);

export default router;
