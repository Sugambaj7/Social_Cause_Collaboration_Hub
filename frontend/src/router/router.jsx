import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/LandingPage";
import MainLayout from "../pages/MainLayout";
import RegisterComponent from "../components/RegisterComponent";
import LoginComponent from "../components/LoginComponent";

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
    ],
  },
]);

export default router;
