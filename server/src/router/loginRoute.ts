import { Router } from "express";
import { login } from "../controllers/loginController";
const router = Router();

// POST Request
router.post("/", login);

export default router;
