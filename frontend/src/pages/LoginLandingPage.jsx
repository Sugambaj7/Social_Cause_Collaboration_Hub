import React from "react";
import HomeBannerComponent from "../components/HomeBannerComponent";
import FeedCausesComponent from "../components/FeedCausesComponent";

export default function LoginLandingPage() {
  return (
    <div>
      <div className="flex flex-col w-full">
        <HomeBannerComponent />
        <FeedCausesComponent />
      </div>
    </div>
  );
}
