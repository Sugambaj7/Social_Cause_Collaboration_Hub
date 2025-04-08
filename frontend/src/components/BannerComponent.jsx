import React from "react";

export default function BannerComponent() {
  return (
    <div className="bg-custom_gradient flex justify-center items-center">
      <div className="text-center my-16">
        <h1 className="text-white text-5xl font-bold text-center">
          Unite for a Cause, <br /> Empower Change
        </h1>
        <p className="mt-8 text-sm/6 font-poppins_light text-white ">
          Joint hands with like-minded changemakers <br />
          Create, discover, or support social causes that matter <br />
          to you
        </p>
        <div className="flex text-white justify-center mt-8">
          <button className="bg-red-500 px-4 py-2 rounded-md">
            Explore Causes
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded-md ml-4">
            Start a Cause
          </button>
        </div>
      </div>
    </div>
  );
}
