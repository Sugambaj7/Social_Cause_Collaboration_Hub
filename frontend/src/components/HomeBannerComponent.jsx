import React from "react";
import { useSelector } from "react-redux";
import { TiTickOutline } from "react-icons/ti";

const HomeBannerComponent = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  return (
    <div className="home-banner w-full bg-custom_blue flex justify-center items-center h-[35vh]">
      <div className="flex flex-col">
        <p className="text-4xl text-white font-nunito font-extrabold">
          Welcome back! {userInfo?.name}
        </p>
        <div className="flex gap-6 justify-center items-center mt-5">
          <div className="flex">
            <TiTickOutline className="text-xl text-white" />
            <p className="text-md text-white font-nunito pl-1">
              Explore Causes
            </p>
          </div>
          <div className="flex">
            <TiTickOutline className="text-xl text-white" />
            <p className="text-md text-white font-nunito pl-1">
              Be a part of Cause
            </p>
          </div>
          <div className="flex">
            <TiTickOutline className="text-xl text-white" />
            <p className="text-md text-white font-nunito pl-1">
              Social Initiatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerComponent;
