import React from "react";

export default function AllCausesComponent() {
  return (
    <div className="mt-9 mb-28">
      <h3 className="text-2xl font-semibold mt-4 mb-6 tracking-wider">
        All Causes
      </h3>
      <div className="flex gap-6">
        <div className="border p-6 mb-4 shadow rounded-md">
          <p className="text-xl font-medium tracking-wider">
            Clean the Neighbourhood Park
          </p>
          <div className="flex mt-4 mb-2">
            <span>April 14, 2024</span>
            <span className="ml-4">Dharan</span>
          </div>
          <span className="mt-8 text-sm">24 Participants</span>
        </div>
        <div className="border p-6 mb-4 rounded-md shadow">
          <p className="text-xl font-medium tracking-wider">
            Donate Books To School
          </p>
          <div className="flex mt-4 mb-2">
            <span>April 14, 2024</span>
            <span className="ml-4">Dharan</span>
          </div>
          <span className="text-sm">12 Contributors</span>
        </div>
      </div>
    </div>
  );
}
