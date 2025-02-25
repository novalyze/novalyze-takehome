import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft, FaGithub } from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }
    alert(`Email: ${email}, Password: ${password}`);
    console.log("Email:", email, "Password:", password);

    setEmail("");
    setPassword("");
    setError("");
  };

  // If you're only creating the UI for an SSO login, you just need to display the buttons without implementing an API.
  const handleSSOLogin = (provider: string) => {
    alert(`Redirecting to ${provider} SSO login...`); //SSO Login UI only used from chatGPT
  };
  return (
    <>
      <Header />
      <div className="flex h-screen items-center justify-center bg-gray-background-dark">
        <div className="max-w-md rounded-xl bg-white p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900">Login</h2>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="Enter your password"
              />
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <button className="w-full rounded-md bg-primary p-2 text-white cursor-pointer">
              Login
            </button>
          </form>
          <button
            onClick={() => handleSSOLogin("Google")}
            className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200 mb-3 mt-4 cursor-pointer"
          >
            <FcGoogle className="text-2xl mr-2" /> Continue with Google
          </button>
          <button
            onClick={() => handleSSOLogin("Microsoft")}
            className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200 mb-3 cursor-pointer mt-4"
          >
            <FaMicrosoft className="text-xl text-blue-600 mr-2" /> Continue with
            Microsoft
          </button>

          <button
            onClick={() => handleSSOLogin("GitHub")}
            className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer mt-4"
          >
            <FaGithub className="text-xl mr-2" /> Continue with GitHub
          </button>
          <div className="flex justify-between mt-4 ">
            <a
              href="#"
              className=" rounded-md bg-primary p-2 text-white cursor-pointer mr-2"
            >
              Change Password
            </a>
            <Link
              className=" rounded-md bg-primary p-2 text-white cursor-pointer ml-2"
              to="/signup"
            >
              Create a New User
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
