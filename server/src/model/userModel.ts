import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please provide a unique Username"],
    unique: [true, "Username already exists"],
  },
  email: {
    type: String,
    require: [true, "Please provide a unique email"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
    unique: false,
  },
  mobile: {
    type: Number,
  },
  address: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  profile: {
    type: String,
  },
});

export default mongoose.model("User", UserSchema);
