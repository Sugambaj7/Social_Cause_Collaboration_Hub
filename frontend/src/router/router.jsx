import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/LandingPage";
import MainLayout from "../pages/MainLayout";
import RegisterComponent from "../components/RegisterComponent";
import LoginComponent from "../components/LoginComponent";
import HomeComponent from "../components/HomeComponent";
import LoginLandingPage from "../pages/LoginLandingPage";

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
        element: <RegisterComponent />,
      },
      {
        path: "login",
        element: <LoginComponent />,
      },
      {
        path: "home",
        element: <LandingPage />,
      },
      {
        path: "dashboard",
        element: <LoginLandingPage />,
      },
    ],
  },
]);

export default router;
