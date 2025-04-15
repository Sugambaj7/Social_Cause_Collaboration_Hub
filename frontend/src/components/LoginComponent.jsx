import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (event) => {
    
    event.preventDefault();
  };
  return (
    <div className="w-full flex justify-between mt-24 mb-36">
      <div></div>
      <div className="h-full w-[35%]">
        <form action="" onSubmit={submitHandler}>
          <h2 className="text-3xl">SIGN IN</h2>
          <div className="flex flex-col mt-8">
            <label htmlFor="">Email Address</label>
            <input
              className="mt-2 px-6 py-2 outline-none bg-custom_white border focus:border-2 border-border_login_input"
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="">Password</label>
            <input
              className="mt-2 px-6 py-2 outline-none bg-custom_white border focus:border-2 border-border_login_input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[20%] bg-black text-white mt-4">
            <input
              className="px-4 py-3 cursor-pointer"
              type="submit"
              value="Sign In"
            />
          </div>
          <div className="mt-4">
            <p>
              New Customer?{" "}
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
}
