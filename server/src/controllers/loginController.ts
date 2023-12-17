import { Request, Response } from "express";

// POST: http://localhost:8080/api/login
export const login = async (req: Request, res: Response) => {
  res.json("login route");
};
