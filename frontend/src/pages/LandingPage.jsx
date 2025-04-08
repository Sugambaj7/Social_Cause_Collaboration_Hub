import React from "react";
import NavBarComponent from "../components/NavBarComponent";
import BannerComponent from "../components/BannerComponent";
import GuideComponent from "../components/GuideComponent";
import FooterComponent from "../components/FooterComponent";

export default function LandingPage() {
  return (
    <>
      <NavBarComponent />
      <BannerComponent />
      <GuideComponent />
      <FooterComponent />
    </>
  );
}
