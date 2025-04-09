import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/LandingPage";
import MainLayout from "../pages/MainLayout";
import RegisterComponent from "../components/RegisterComponent";

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
        element: <div>Login</div>,
      },
    ],
  },
]);

export default router;
