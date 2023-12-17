import { Request, Response } from "express";

// PUT: http://localhost:8080/api/user/update
export const updateUser = async (req: Request, res: Response) => {
  res.json("update user route");
};

// GET: http://localhost:8080/api/user/:username
export const getUser = async (req: Request, res: Response) => {
  res.json("get user route");
};

// GET: http://localhost:8080/api/user/generateOTP
export const generateOTP = async (req: Request, res: Response) => {
  res.json("generateOTP route");
};

// GET: http://localhost:8080/api/user/verifyOTP
export const verifyOTP = async (req: Request, res: Response) => {
  res.json("verifyOTP route");
};

// GET: http://localhost:8080/api/user/createResetSession
export const createResetSession = async (req: Request, res: Response) => {
  res.json("create reset session route");
};

// PUT: http://localhost:8080/api/user/resetPassword
export const resetPassword = async (req: Request, res: Response) => {
  res.json("reset password route");
};
