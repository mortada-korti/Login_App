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

// Validate register
export const validateRegister = async (values: {
  password: string;
  username: string;
  email: string;
}) => {
  let error = await validateEmail(values);
  error = await validateUsername(values);
  error = await validatePassword(values);
  if (error) {
    return error;
  }
};

// Validate profile
export const validateProfile = async (values: {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  address: string;
}) => {
  let error = await validateEmail(values);
  if (error) {
    return error;
  }
};

// Validate email
export const validateEmail = async (values: { email: string }) => {
  let error = {};
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (
    !values.email ||
    values.email.includes(" ") ||
    !regex.test(values.email)
  ) {
    error = toast.error("Invalid email !");
  }
  return error;
};
