import { FaRegCopyright } from "react-icons/fa";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-14 bg-white text-black flex justify-center items-center w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white-100">
      <p className="text-lg">Copyright</p>
      <FaRegCopyright className="mx-2 text-lg" />
      <p className="text-lg">{currentYear}</p>
    </footer>
  );
}
