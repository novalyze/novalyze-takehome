import React from "react";
import Header from "../components/Header";

const Signup: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Signup Page</h2>
          <p className="text-center text-gray-700">Signup form goes here...</p>
        </div>
      </div>
    </>
  );
};

export default Signup;
