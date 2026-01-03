"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("Login Successfull.!");
      router.push("/dashboard")
      // const response = await axios.post("/api/auth/register", formData);
      // console.log("Registration Successful:", response.data);
      // Logic for redirecting or showing success message
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
    }
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
        <form
          className="flex flex-col gap-6 p-24 w-3/4"
          onSubmit={handleSubmit}
        >
          <div className="mb-8">
            <h1 className="text-5xl font-bold ">Welcome Back</h1>
            <h1 className="text-lg ">Sign back into your account</h1>
          </div>
          <div className="flex flex-col justify-between gap-4 mx-4">
            <div className="flex flex-col justify-between">
              <label htmlFor="email" className="font-bold">
                Username or Email
              </label>
              <Input
                name="usernameOrEmail"
                placeholder="Enter Username or Email"
                className="px-4 py-2 w-full text-black text-lg rounded-xl border border-gray-200 focus:outline-none"
                required
                onChange={handleChange}
                value={formData.usernameOrEmail}
              ></Input>
            </div>
            <div className="flex flex-col justify-between">
              <label htmlFor="email" className="font-bold">
                Password
              </label>
              <div className="flex items-center justify-between rounded-xl border border-gray-200 cursor-pointer">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="px-4 py-2 w-full text-black text-lg focus:outline-none"
                  required
                  onChange={handleChange}
                  value={formData.password}
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
            <div className="text-right">
              <Link
                href="/auth/forgot-password"
                className="text-blue-500 hover:underline"
              >
                {" "}
                Forgot Password?
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
              <Button
                className="text-lg rounded-2xl text-blue-500 w-1/4 mx-auto"
                variant="primary"
                size="medium"
                label="Login"
              ></Button>
              - or -
              <Button
                // onClick={handleClick}
                className="text-lg rounded-2xl text-blue-500 flex items-center justify-center mx-auto"
                variant="transparent"
                size="medium"
              >
                <FcGoogle className="mr-2 text-2xl" /> Sign in with Google
              </Button>
            </div>
            <div className="text-center">
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/register"
                  className="text-blue-500 hover:underline font-bold"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
