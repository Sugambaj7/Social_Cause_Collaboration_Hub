import React from "react";
import { FaRegCopyright } from "react-icons/fa";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-12 bg-custom_blue text-white flex justify-center items-center  bottom-0 w-full">
      <p className="text-lg">Copyright</p>
      <FaRegCopyright className="mx-2 text-lg" />
      <p className="text-lg">{currentYear}</p>
    </footer>
  );
}
