import React from "react";
import logo from "../utlis/logo";
import { Link } from "react-router-dom";

export default function NavBarComponent() {
  return (
    <header className="navbar h-16 w-[100%] shadow">
      <nav className="h-full w-full">
        <ul className="flex w-full items-center h-full">
          <li className="w-[200px] flex items-center justify-center ">
            <a href="/" className="h-full w-full">
              <img
                src={logo.src}
                alt="Social Cause Collaboration Hub Logo"
                className="h-12 w-full object-cover"
              />
            </a>
          </li>
          <li className="w-[90%] text-end mr-14">
            <span className="px-1 cursor-pointer hover:underline">Login</span>
            <span className="px-4">|</span>
            <Link to={"/register"}>
              <span className="px-1 cursor-pointer hover:underline">
                Register
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
