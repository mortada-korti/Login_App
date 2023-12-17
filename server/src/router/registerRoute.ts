import { Router } from "express";
import { register } from "../controllers/registerController";

const router = Router();

// POST Request
router.post("/", register);

export default router;
