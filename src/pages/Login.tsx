import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { routes } from "../constant/routes";
import Input from "../components/Input";
import toast from "react-hot-toast";
import Button from "../components/Button";
import { LoginInfo } from "../types";
import { initialLoginInfo } from "../constant/signInSignUp";
import { setCookie } from "../utils/cookies";
import { loginUser } from "../services/authService";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState<LoginInfo>(initialLoginInfo);

  const handleLogin = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoginInfo((prev) => ({ ...prev, loading: true }));

      try {
        const userData = await loginUser(loginInfo.email, loginInfo.password);
        toast.success("Login successful!");

        // Store token in cookies
        setCookie("token", userData.token, 1); // Token expires in 7 days

        navigate(routes.home);
      } catch (error) {
        console.error("Login Error:", error);

        const errorMessage =
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.";

        toast.error(errorMessage);
      } finally {
        setLoginInfo((prev) => ({ ...prev, loading: false }));
      }
    },
    [loginInfo.email, loginInfo.password, navigate]
  );
  return (
    <div className="flex h-full items-center justify-center bg-gray-background-dark">
      <div className="w-full md:max-w-md mx-5 md:mx-0 rounded-xl bg-white p-6 shadow-md">
        <h2 className="text-2xl text-primary font-bold  mb-4 md:mb-5">Login</h2>
        <form className=" flex flex-col gap-4 md:gap-5" onSubmit={handleLogin}>
          <Input
            label="Email"
            type="email"
            required
            placeholder="Enter your email"
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
          />
          <Input
            label="Password"
            type="password"
            required
            placeholder="Enter your password"
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
          {/* <button
            type="submit"
            className="w-full rounded-md bg-primary hover:opacity-85 cursor-pointer duration-200 p-2 text-white mt-3 md:mt-4"
          >
            Login
          </button> */}
          <Button type="submit" text="Login" isLoading={loginInfo.loading} />
          {/* GITHUB & GOOGLE LOGIN */}
          <div className="flex flex-row items-center gap-4  justify-center">
            <div className="w-10 h-10  rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
              <FcGoogle size={32} />
            </div>
            <div className="w-10 h-10  rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
              <FaGithub size={32} />
            </div>
          </div>
          <p className="text-neutral-500 text-center">
            New here?
            <span
              className="ml-1 hover:underline cursor-pointer"
              onClick={() => navigate(routes.register)}
            >
              Create a new account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
