"use client";

import { PopoverGroup } from "@headlessui/react";
import Logo from "../img/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../constant/routes";
import { NavLink } from "react-router-dom";
import { getCookie, removeCookie } from "../utils/cookies";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = !!getCookie("token");

  const handleAuthAction = () => {
    if (isLoggedIn) {
      removeCookie("token");
    }
    navigate("/login");
  };
  return (
    <header className="bg-black h-20 md:h-24">
      <nav
        aria-label="Global"
        className="mx-auto flex xl:max-w-7xl items-center justify-between px-6 lg:px-8 min-h-full"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="">
            <span className="sr-only">Your Company</span>
            <img
              alt="Novalyze logo"
              src={Logo}
              className="h-13 md:h-15 w-auto"
            />
          </Link>
        </div>
        {location.pathname !== routes.login &&
          location.pathname !== routes.register && (
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-semibold text-secondary ${
                    isActive ? " text-base" : " text-sm"
                  }`
                }
              >
                Home
              </NavLink>
              <a href="#" className="text-sm/6 font-semibold text-secondary">
                Marketplace
              </a>
              <a href="#" className="text-sm/6 font-semibold text-secondary">
                Company
              </a>
            </PopoverGroup>
          )}
        {location.pathname !== routes.login && (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={handleAuthAction}
              className="cursor-pointer text-sm/6 font-semibold text-secondary px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              {isLoggedIn ? "Logout" : "Log in"}
            </button>
          </div>
        )}
        
      </nav>
    </header>
  );
}
