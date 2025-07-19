import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

import { useSelector } from "react-redux";
const CauseCardComponent = () => {
  const [editPopup, setEditPopup] = useState(false);

  const { loading, myerror, success, myCauses } = useSelector(
    (state) => state.cause
  );
  

  return (
    <>
      {myCauses?.data !== null ? myCauses?.data?.map((cause, index) => (
        <div key={index}>
          <div className="bg-custom_gradient text-gray-50 border p-8 mb-4 rounded-md shadow">
             <div className="flex justify-between">
            <p className="text-xl font-medium tracking-wider">
             {cause.causeName}
            </p>
            <button
              className="hover:underline text-lg ml-28 tracking-wider"
              onClick={() => setEditPopup(true)}
            >
              Edit
            </button>
          </div>
          <div className="flex mt-4">
            <span>{cause.startDate.split("T")[0]}</span>
            <span className="ml-4">{cause.placeName}</span>
          </div>
          </div>
          {editPopup ? (
            <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow p-6 border bg-white w-[30%]">
                <div className="flex justify-between mb-6">
                  <div></div>
                  <RxCross1 onClick={() => setEditPopup(false)} />
                </div>
                <div>
                  <form action="" className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Please Enter Cause Name"
                      className="px-4 py-2 border"
                    />
                    <input
                      type="text"
                      placeholder="Please Enter Place Name"
                      className="px-4 py-2 border"
                    />
                    <input
                      type="text"
                      placeholder="Please Enter Cause Description"
                      className="px-4 py-2 border"
                    />
                    <input
                      type="date"
                      placeholder="Please Enter Deadline For Collaboration"
                      className="px-4 py-2 border"
                    />
                    <input type="time" className="px-4 py-2 border" />
                    <label htmlFor="">Start Date:</label>
                    <input
                      type="date"
                      placeholder="Please Enter Start Date"
                      className="px-4 py-2 border"
                    />
                    <label htmlFor="">End Date:</label>
                    <input
                      type="date"
                      placeholder="Please Enter End Date"
                      className="px-4 py-2 border"
                    />

                    <button className="bg-custom_blue text-white py-2 mt-4">
                      Update Cause
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )) : <p className="text-red-500">No causes till now!</p>}
    </>
  );
};

export default CauseCardComponent;
