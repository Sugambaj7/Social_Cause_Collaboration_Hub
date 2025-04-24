import React from "react";

export default function MyCauseComponent() {
  return (
    <div>
      <div className="flex relative">
        <h3 className="text-2xl font-semibold mt-12 mb-6 tracking-wider">My Causes</h3>
        <button className="bg-custom_blue text-white px-4 py-2 rounded-md absolute right-0 top-[40%]">
          + Add New Cause
        </button>
      </div>
      <div className="flex gap-6">
        <div className="border p-4 mb-4 rounded-md shadow">
          <div className="flex justify-between">
            <p className="text-xl font-medium tracking-wider">
              Cloth Distribution Campaign
            </p>
            <button className="hover:underline text-lg ml-28 tracking-wider">Edit</button>
          </div>
          <div className="flex mt-4">
            <span>April 14, 2024</span>
            <span className="ml-4">Dharan</span>
          </div>
        </div>
        <div className="border p-4 mb-4 rounded-md shadow">
          <div className="flex justify-between">
            <p className="text-xl font-medium tracking-wider">
              Blood Donation Campaign
            </p>
            <button className="hover:underline text-lg ml-28 tracking-wider">Edit</button>
          </div>
          <div className="flex mt-4">
            <span>April 14, 2024</span>
            <span className="ml-4">Dharan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
