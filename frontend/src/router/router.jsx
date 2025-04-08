import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/LandingPage";
import MainLayout from "../pages/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "register",
        element: <div>Register</div>,
      },
    ],
  },
]);

export default router;
