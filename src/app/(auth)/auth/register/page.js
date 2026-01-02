"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <div className="w-1/2 min-h-screen bg-blue-500 p-18 flex flex-col justify-between text-white">
        <div className="font-semibold">
          <p className="text-xl mb-8">You can easily</p>
          <h1 className="text-5xl ">Speedup your work</h1>
          <h1 className="text-5xl ">with our App</h1>
        </div>
        <div>
          <h1 className="text-xl text-center">Our Partners </h1>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <form className="flex flex-col gap-6 p-24 w-3/4">
          <div className="mb-8">
            <h1 className="text-5xl font-bold ">Register</h1>
            <h1 className="text-lg ">Create a new account</h1>
          </div>
          <div className="flex flex-col justify-between gap-4 mx-4">
            <div className="flex flex-col justify-between">
              <label htmlFor="email" className="font-bold">
                Name
              </label>
              <Input
                name="name"
                type="text"
                placeholder="Enter your Full Name"
                className="px-4 py-2 w-full text-black text-lg rounded-xl border border-gray-200 focus:outline-none"
                required
              ></Input>
            </div>
            <div className="flex flex-col justify-between">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <Input
                name="email"
                type="email"
                placeholder="Enter Email ID"
                className="px-4 py-2 w-full text-black text-lg rounded-xl border border-gray-200 focus:outline-none"
                required
              ></Input>
            </div>
            <div className="flex flex-col justify-between">
              <label htmlFor="username" className="font-bold">
                Username
              </label>
              <Input
                name="username"
                type="text"
                placeholder="Enter Username"
                className="px-4 py-2 w-full text-black text-lg rounded-xl border border-gray-200 focus:outline-none"
                required
              ></Input>
            </div>
            <div className="flex flex-col justify-between">
              <label htmlFor="email" className="font-bold">
                Password
              </label>
              <div className="flex items-center justify-between rounded-xl border border-gray-200 cursor-pointer">
                <Input
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="px-4 py-2 w-full text-black text-lg focus:outline-none"
                  required
                ></Input>
                {showPassword ? (
                  <FaEye size={18} className="mr-4" onClick={togglePassword} />
                ) : (
                  <FaEyeSlash
                    size={18}
                    className="mr-4"
                    onClick={togglePassword}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <label htmlFor="email" className="font-bold">
                Confirm Password
              </label>
              <div className="flex items-center justify-between rounded-xl border border-gray-200 cursor-pointer">
                <Input
                  name="confirmpassword"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Repeat Password"
                  className="px-4 py-2 w-full text-black text-lg focus:outline-none"
                  required
                ></Input>
                {showPassword ? (
                  <FaEye size={18} className="mr-4" onClick={togglePassword} />
                ) : (
                  <FaEyeSlash
                    size={18}
                    className="mr-4"
                    onClick={togglePassword}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 mt-6">
              <Button
                onClick={handleClick}
                className="text-lg rounded-2xl text-blue-500 w-1/4 mx-auto"
                variant="primary"
                size="medium"
                label="Sign Up"
              ></Button>
              - or -
              <Button
                onClick={handleClick}
                className="text-lg rounded-2xl text-blue-500 flex items-center justify-center mx-auto"
                variant="transparent"
                size="medium"
              >
                <FcGoogle className="mr-2 text-2xl" /> Sign up with Google
              </Button>
            </div>
            <div className="text-center">
              <p>
                Have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-blue-500 hover:underline font-bold"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
