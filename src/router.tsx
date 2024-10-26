import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import Dashboard from "@/dashboard/Dashboard";
import ErrorPage from "@/error";

import { routes as dashboardRoutes } from "@/routes/dashboard/dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  dashboardRoutes,
]);
