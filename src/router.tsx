import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import Dashboard from "@/dashboard/Dashboard";
import DealsWrapper from "@/components/Deals/DealsWrapper";
import ErrorPage from "@/error";
import MainGrid from "@/dashboard/components/MainGrid";

const dashboardRoutes = [
  { path: "", element: <MainGrid /> },
  { path: "deals", element: <DealsWrapper /> },
];

export const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: dashboardRoutes,
    errorElement: <ErrorPage />,
  },
]);
