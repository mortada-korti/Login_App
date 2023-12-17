import { Request, Response, Router } from "express";

const router = Router();

// POST Request
router.post("/", (req: Request, res: Response) => {
  res.json("hello");
});

export default router;
