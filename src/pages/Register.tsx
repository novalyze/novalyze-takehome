import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { routes } from "../constant/routes";
import Input from "../components/Input";
import Button from "../components/Button";
import { RegisterInfo } from "../types";
import { initialSignUpInfo } from "../constant/signInSignUp";
import toast from "react-hot-toast";
import { registerUser } from "../services/authService";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [registerInfo, setRegisterInfo] =
    useState<RegisterInfo>(initialSignUpInfo);

  const hanldeRegister = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setRegisterInfo((prev) => ({ ...prev, loading: true }));

      try {
        await registerUser(registerInfo.email, registerInfo.password);
        navigate(routes.login);
      } catch (error) {
        console.error("Login Error:", error);

        const errorMessage =
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.";

        toast.error(errorMessage);
      } finally {
        setRegisterInfo((prev) => ({ ...prev, loading: false }));
      }
    },
    [navigate, registerInfo.email, registerInfo.password]
  );

  return (
    <div className="flex h-full items-center justify-center bg-gray-background-dark">
      <div className="w-full md:max-w-md mx-5 md:mx-0 rounded-xl bg-white p-6 shadow-md">
        <h2 className="text-2xl text-primary font-bold  mb-4 md:mb-5">
          Sign Up
        </h2>
        <form
          className=" flex flex-col gap-4 md:gap-5"
          onSubmit={hanldeRegister}
        >
          <Input
            label="Name"
            required
            placeholder="Enter your name"
            value={registerInfo.name}
            onChange={(e) =>
              setRegisterInfo({ ...registerInfo, name: e.target.value })
            }
          />
          <Input
            label="Email"
            type="email"
            required
            placeholder="Enter your email"
            value={registerInfo.email}
            onChange={(e) =>
              setRegisterInfo({ ...registerInfo, email: e.target.value })
            }
          />
          <Input
            label="Password"
            type="password"
            required
            placeholder="Enter your password"
            value={registerInfo.password}
            onChange={(e) =>
              setRegisterInfo({ ...registerInfo, password: e.target.value })
            }
          />
          {/* <button
            type="submit"
            className="w-full rounded-md bg-primary hover:opacity-85 cursor-pointer duration-200 p-2 text-white mt-3 md:mt-4"
          >
            Sign Up
          </button> */}
          <Button
            type="submit"
            text="Sign Up"
            isLoading={registerInfo.loading}
          />
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
            Already have an account?
            <span
              className="ml-1 hover:underline cursor-pointer"
              onClick={() => navigate(routes.login)}
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
