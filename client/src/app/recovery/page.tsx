"use client";
import React from "react";
import Image from "next/image";
import Avatar from "../../../public/assets/profile.png";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { validatePassword } from "../helper/validate";

type Props = {};

const Recovery = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 items-center bg-gray-100 py-8 px-2 rounded-xl border-white border-2 shadow-lg h-[90%] sm:h-[65%]">
      <Toaster position="top-center"></Toaster>
      <h1 className="text-5xl text-center font-bold">Recovery</h1>
      <span className="text-xl text-gray-500 py-4 text-center w-2/3">
        Enter OTP to recover password.
      </span>
      <form className="flex flex-col gap-5 items-center w-[100%]">
        <input
          type="text"
          placeholder="OTP"
          autoComplete="off"
          className="pl-2 py-2 w-3/4 rounded-md outline-none"
        />
        <button type="submit" className="btn w-3/4 bg-indigo-500 text-white">
          Let&apos;s Go
        </button>
      </form>
      <span className="text-gray-500">
        Can&apos;t get OTP?
        <button className="text-red-500 pl-1">Resend</button>
      </span>
    </div>
  );
};

export default Recovery;
