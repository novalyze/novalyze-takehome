import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import Signup from "../pages/Signup.tsx";
import ThemeSwitcher from "../pages/ThemeSwitcher.tsx";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/theme" element={<ThemeSwitcher />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
