import React from "react";
import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarComponent />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}
