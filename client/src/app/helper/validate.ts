import toast from "react-hot-toast";

// Validate username
export const validateUsername = async (values: { username: string }) => {
  let error = {};
  if (!values.username || values.username.includes(" ")) {
    error = toast.error("Invalid Username !");
  }
  return error;
};

// Validate password
export const validatePassword = async (values: { password: string }) => {
  let error = {};
  const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!values.password || values.password.includes(" ")) {
    error = toast.error("Invalid password !");
  } else if (values.password.length < 4) {
    error = toast.error("Password must be at least 4 characters !");
  } else if (!regex.test(values.password)) {
    error = toast.error("Password must contain special characters !");
  }
  return error;
};

// Validate password
export const validateResetPassword = async (values: {
  password: string;
  confirm_pwd: string;
}) => {
  let error = await validatePassword(values);
  if (Object.keys(error).length == 0 && values.password != values.confirm_pwd) {
    error = toast.error("Passwords do not match !");
  }
  return error;
};
