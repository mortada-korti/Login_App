import { Request, Response } from "express";

// POST: http://localhost:8080/api/register
export const register = async (req: Request, res: Response) => {
  res.json("register route");
};
