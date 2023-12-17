"use client";
import React, { useState } from "react";
import Image from "next/image";
import Avatar from "../../../public/assets/profile.png";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { validateProfile } from "../helper/validate";
import { convertToBase64 } from "../helper/convert";

type Props = {};

const Profile = (props: Props) => {
  const [file, setFile] = useState<string>();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      address: "",
    },
    validate: validateProfile,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="min-w-[85%] sm:min-w-[350px] flex flex-col gap-5 items-center bg-gray-100 py-8 px-2 rounded-xl border-white border-2 shadow-lg h-[90%] sm:h-[65%]">
      <Toaster position="top-center"></Toaster>
      <h1 className="text-5xl text-center font-bold">Profile</h1>
      <span className="text-xl text-gray-500 py-4 text-center w-2/3">
        Happy to join you.
      </span>
      <form
        className="flex flex-col gap-5 items-center w-[100%]"
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="profile">
          <div className="w-24 rounded-full bg-white shadow-md overflow-hidden">
            <Image src={file || Avatar} alt="avatar" width={100} height={100} />
          </div>
          <input onChange={onUpload} type="file" name="profile" id="profile" />
        </label>
        <div className="flex w-3/4 gap-10">
          <input
            type="text"
            placeholder="First Name"
            {...formik.getFieldProps("firstName")}
            className="pl-2 py-2 w-3/4 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            {...formik.getFieldProps("lastName")}
            className="pl-2 py-2 w-3/4 rounded-md outline-none"
          />
        </div>
        <div className="flex w-3/4 gap-10">
          <input
            type="text"
            placeholder="Mobile No."
            {...formik.getFieldProps("mobile")}
            className="pl-2 py-2 w-3/4 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            {...formik.getFieldProps("email")}
            className="pl-2 py-2 w-3/4 rounded-md outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          autoComplete="off"
          {...formik.getFieldProps("address")}
          className="pl-2 py-2 w-3/4 rounded-md outline-none"
        />
        <button type="submit" className="btn w-3/4 bg-indigo-500 text-white">
          Update
        </button>
      </form>
      <span className="text-gray-500">
        Come back Later?
        <button className="text-red-500 pl-1">Logout</button>
      </span>
    </div>
  );
};

export default Profile;
