import express from "express";
import * as userController from "../controllers/userController";
import verifyToken from "../middleware/verifyToken";

const router = express.Router();

router.use(verifyToken);
router.get("/getOneUser", userController.getUserController);

export default router;
