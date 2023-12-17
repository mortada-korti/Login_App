import { Router } from "express";
import {
  createResetSession,
  generateOTP,
  getUser,
  resetPassword,
  updateUser,
  verifyOTP,
} from "../controllers/userController";

const router = Router();

// GET Request
router.get("/:username", getUser);

router.get("/generateOTP", generateOTP);

router.get("/verifyOTP", verifyOTP);

router.get("/createResetSession", createResetSession);

// PUT Request
router.put("/update", updateUser);

router.put("/resetPassword", resetPassword);

export default router;
