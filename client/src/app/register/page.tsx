"use client";
import React from "react";
import Image from "next/image";
import Avatar from "../../../public/assets/profile.png";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { validateUsername } from "../helper/validate";

type Props = {};

const Register = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: validateUsername,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="min-w-[85%] sm:min-w-[350px] flex flex-col gap-5 items-center bg-gray-100 py-8 px-2 rounded-xl border-white border-2 shadow-lg h-[90%] sm:h-[65%]">
      <Toaster position="top-center"></Toaster>
      <h1 className="text-5xl text-center font-bold">Register</h1>
      <span className="text-xl text-gray-500 py-4 text-center w-2/3">
        Happy to join you.
      </span>
      <form
        className="flex flex-col gap-5 items-center w-[100%]"
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="profile">
          <div className="w-24 rounded-full bg-white shadow-md">
            <Image src={Avatar} alt="avatar" />
          </div>
          <input type="file" name="profile" id="profile" />
        </label>

        <input
          type="text"
          placeholder="Email"
          {...formik.getFieldProps("email")}
          className="pl-2 py-2 w-3/4 rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Username"
          {...formik.getFieldProps("username")}
          className="pl-2 py-2 w-3/4 rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Password"
          autoComplete="off"
          {...formik.getFieldProps("password")}
          className="pl-2 py-2 w-3/4 rounded-md outline-none"
        />
        <button type="submit" className="btn w-3/4 bg-indigo-500 text-white">
          Let&apos;s Go
        </button>
      </form>
      <span className="text-gray-500">
        Already registered?
        <Link className="text-red-500 pl-1" href="/">
          Login
        </Link>
      </span>
    </div>
  );
};

export default Register;
