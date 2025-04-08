import React from "react";
import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

export default function MainLayout() {
  return (
    <>
      <NavBarComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
}
