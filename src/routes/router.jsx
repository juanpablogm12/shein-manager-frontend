import { createBrowserRouter } from "react-router-dom";
import { Dashboard, LandingPage, Login, Register } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "products",
        element: <h1>products</h1>,
      },
      {
        path: "orders",
        element: <h1>orders</h1>,
      },
      {
        path: "settings",
        element: <h1>settings</h1>,
      },
    ],
  },
]);
