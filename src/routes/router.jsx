import { createBrowserRouter } from "react-router-dom";
import { Dashboard, LandingPage, Login, Register } from "../pages";
import Products from "../pages/Dashboard/DashboardComponents/Products";

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
        element: <Products/>,
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
