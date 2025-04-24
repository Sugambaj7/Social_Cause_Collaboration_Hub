import React from "react";
import logo from "../utlis/logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBarComponent() {
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("userInfo");
      window.location.href = "/";
    }
  };

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
          {!userInfo ? (
            <li className="w-[90%] mr-14 flex">
              <div className="flex justify-end gap-8 w-[80%]">
                <Link to="/">
                  <span className="px-1 cursor-pointer hover:underline">
                    Home
                  </span>
                </Link>

                <Link to="/about">
                  <span className="px-1 cursor-pointer hover:underline">
                    About
                  </span>
                </Link>

                <Link to="/services">
                  <span className="px-1 cursor-pointer hover:underline">
                    Services
                  </span>
                </Link>
              </div>
              <div className="flex justify-end w-[20%]">
                <Link to="/login">
                  <span className="px-1 cursor-pointer hover:underline">
                    Login
                  </span>
                </Link>

                <span className="px-4">|</span>
                <Link to={"/register"}>
                  <span className="px-1 cursor-pointer hover:underline">
                    Register
                  </span>
                </Link>
              </div>
            </li>
          ) : (
            <li className="w-[90%] text-end mr-14">
              <Link to="/dashboard">
                <span className="px-8 cursor-pointer hover:underline">
                  Dashboard
                </span>
              </Link>

              <Link to="/Profile">
                <span className="px-8 cursor-pointer hover:underline">
                  My Profile
                </span>
              </Link>

              <span
                className="px-8 cursor-pointer hover:underline"
                onClick={handleLogout}
              >
                Logout
              </span>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
