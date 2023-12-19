import { Request, Response } from "express";
import UserModel from "../model/userModel";
import bcrypt from "bcrypt";

// POST: http://localhost:8080/api/register
export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, email, profile } = req.body;

    UserModel.findOne({ username })
      .then((user) => {
        if (user) {
          throw new Error("Please use a unique username");
        }
        return UserModel.findOne({ email });
      })
      .then((email) => {
        if (email) {
          throw new Error("Please use a unique email");
        }
        return bcrypt.hash(password, 10);
      })
      .then((hashedPassword) => {
        const newUser = new UserModel({
          username,
          email,
          password: hashedPassword,
          profile: profile || "",
        });
        return newUser.save();
      })
      .then((result) =>
        res.status(201).send({ message: "User registered successfully" })
      )
      .catch((err) => res.status(500).send({ message: err.message }));
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
