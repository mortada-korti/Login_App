"use client";
import React from "react";
import Image from "next/image";
import Avatar from "../../../public/assets/profile.png";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { validateResetPassword } from "../helper/validate";

type Props = {};

const Reset = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: validateResetPassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="min-w-[300px] flex flex-col gap-5 items-center bg-gray-100 py-8 px-2 rounded-xl border-white border-2 shadow-lg h-[90%] sm:h-[65%]">
      <Toaster position="top-center"></Toaster>
      <h1 className="text-5xl text-center font-bold">Reset</h1>
      <span className="text-xl text-gray-500 py-4 text-center w-2/3">
        Enter new password.
      </span>
      <form
        className="flex flex-col gap-5 items-center w-[100%]"
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          placeholder="Password"
          autoComplete="off"
          {...formik.getFieldProps("password")}
          className="pl-2 py-2 w-3/4 rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Repeat password"
          autoComplete="off"
          {...formik.getFieldProps("confirm_pwd")}
          className="pl-2 py-2 w-3/4 rounded-md outline-none"
        />
        <button type="submit" className="btn w-3/4 bg-indigo-500 text-white">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Reset;
