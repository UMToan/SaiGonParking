import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.get("/getAllUser", userController.getAllUserController);

export default router;
