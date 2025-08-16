import React, { useState } from "react";
import { useSelector } from "react-redux";

export const ProfileComponent = () => {
  const { userInfo } = useSelector((state) => state.userLogin);

  const [firstName, setFirstName] = useState(userInfo?.name.split(" ")[0]);
  const [lastName, setLastName] = useState(userInfo?.name.split(" ")[1]);
  const [mobile, setMobile] = useState(userInfo?.mobile);

  return (
    <div className="profile-main-div border bg-red-100 flex justify-center items-center h-full">
      <div className="profile-inside-div px-4 py-4 bg-green-100 w-[50%] text-center border">
        <h3 className="text-3xl">Your Profile</h3>
        <form className="mt-4" action="">
          <input
            className="border px-3 py-2"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <br />
          <input
            className="border px-3 py-2"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <br />
          <input
            className="border px-3 py-2"
            type="text"
            value={userInfo?.mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <br />
          <br />
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};
