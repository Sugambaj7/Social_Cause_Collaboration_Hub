import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  userRegister,
  clearError,
  updateSuccess,
} from "../features/user/userRegisterSlice";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { loading, myerror, success, msg } = useSelector(
    (state) => state.userRegister
  );

  const dispatch = useDispatch();

  const validate = () => {
    if (name === "") {
      setError("Full Name is not supposed to be empty");
      return false;
    } else if (!/^[a-zA-Z ]{1,18}$/g.test(name)) {
      setError("Invalid characters in full name");
      return false;
    } else if (name.length < 8) {
      setError("Full Name should be at least 8 characters long");
      return false;
    } else if (email === "") {
      setError("Email is not supposed to be empty");
      return false;
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email)
    ) {
      setError("Invalid Email");
      return false;
    } else if (mobile === "") {
      setError("Mobile number is not supposed to be empty");
      return false;
    } else if (!/^9[6-8][0-9]{8}$/.test(mobile)) {
      setError("Invalid Mobile Number");
      return false;
    } else if (password === "") {
      setError("Password is not supposed to be empty");
      return false;
    } else if (password.length < 8) {
      setError("Password should be at least 8 characters long");
      return false;
    } else if (confirmPassword === "") {
      setError("Confirm Password is not supposed to be empty");
      return false;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleFocus = () => {
    dispatch(clearError());
    dispatch(updateSuccess());
  };

  const submitHandler = (e) => {
    if (validate()) {
      dispatch(
        userRegister({ name, email, mobile, password, confirmPassword })
      );
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setConfirmPassword("");
    }
    e.preventDefault();
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        dispatch(updateSuccess()); 
      }, 7000);

      return () => clearTimeout(timer); 
    }
  }, [success, dispatch]);

  return (
    <div className="w-full flex justify-between mt-10 mb-20">
      <div></div>
      <div className="h-full w-[35%]">
        <form action="" onSubmit={submitHandler}>
          <h2 className="text-3xl">SIGN UP</h2>
          {success && msg !== "" && (
            <div className="w-full bg-custom_green px-6 py-3 border rounded mt-8 mb-6">
              <p className="text-white text-sm tracking-wide">{msg}</p>
            </div>
          )}
          {error && (
            <div className="w-full bg-custom_alert px-6 py-3 border rounded mt-8 mb-6">
              <p className="text-alert_red text-sm tracking-wide">{error}</p>
            </div>
          )}
          {myerror && (
            <div className="w-full bg-custom_alert px-6 py-3 border rounded mt-8 mb-6">
              <p className="text-alert_red text-sm tracking-wide">{myerror}</p>
            </div>
          )}
          <div className="flex flex-col mt-4">
            <label htmlFor="name">Full Name</label>
            <input
              className="mt-2 px-6 py-2 outline-none bg-custom_white border focus:border-2 border-custom_border"
              type="text"
              placeholder="Enter name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={handleFocus}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="email">Email Address</label>
            <input
              className="mt-2 px-6 py-2 outline-none bg-custom_white border focus:border-2 border-custom_border"
              type="text"
              placeholder="Enter email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleFocus}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              className="mt-2 px-6 py-2 outline-none bg-custom_white border focus:border-2 border-custom_border"
              type="text"
              placeholder="Enter Mobile No..."
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              onFocus={handleFocus}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="password">Password</label>
            <input
              className="mt-2 px-6 py-2 outline-none bg-custom_white border focus:border-2 border-custom_border"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleFocus}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="mt-2 px-6 py-2 outline-none bg-custom_white border focus:border-2 border-custom_border"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={handleFocus}
            />
          </div>
          <div className="flex flex-col w-[100px] bg-black text-white mt-4">
            <input
              className="px-4 py-3 cursor-pointer"
              type="submit"
              value="Register"
            />
          </div>
          <div className="mt-4">
            <p>
              Have an Account?
              <Link to="/login" className="hover:underline pl-2">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default RegisterComponent;
