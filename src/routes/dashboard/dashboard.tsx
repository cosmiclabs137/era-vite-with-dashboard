import { RouteObject } from "react-router";

import Dashboard from "@/dashboard/Dashboard";
import ErrorPage from "@/error";

import { routes as dealRoutes } from "@/routes/dashboard/deal";
import { routes as homeRoutes } from "@/routes/dashboard/home";

export const routes: RouteObject = {
  path: "/dashboard",
  element: <Dashboard />,
  errorElement: <ErrorPage />,
  children: [homeRoutes, ...dealRoutes],
};
