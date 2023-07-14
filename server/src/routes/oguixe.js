import express from "express";
import * as oguixeController from "../controllers/oguixeController";

const router = express.Router();
router.get("/oguixeQ1", oguixeController.getOguixeQ1Controller);

export default router;
