import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCauses } from "../features/causes/causeSlice";
import CauseCardComponent from "./CauseCardComponent";

export default function CauseListComponent({reloadCauseCard}) {

  const dispatch = useDispatch();
  const {success} = useSelector((state) => state.cause);

  useEffect(() => {
    dispatch(getCauses());
  }, [reloadCauseCard]);


  return (
    <div className="flex flex-wrap gap-6">
      <CauseCardComponent />
      {/* <div className="border p-4 mb-4 rounded-md shadow">
        <div className="flex justify-between">
          <p className="text-xl font-medium tracking-wider">
            Cloth Distribution Campaign
          </p>
          <button
            className="hover:underline text-lg ml-28 tracking-wider"
            onClick={() => setEditPopup(true)}
          >
            Edit
          </button>
        </div>
        <div className="flex mt-4">
          <span>April 14, 2024</span>
          <span className="ml-4">Dharan</span>
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
        ) : null} */}
      </div>
      // <div className="border p-4 mb-4 rounded-md shadow">
      //   <div className="flex justify-between">
      //     <p className="text-xl font-medium tracking-wider">
      //       Blood Donation Campaign
      //     </p>
      //     <button className="hover:underline text-lg ml-28 tracking-wider">
      //       Edit
      //     </button>
      //   </div>
      //   <div className="flex mt-4">
      //     <span>April 14, 2024</span>
      //     <span className="ml-4">Dharan</span>
      //   </div>
      // </div>
    // </div>
  );
}
