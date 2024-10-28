import { RouteObject } from "react-router";

import Dashboard from "@/dashboard/Dashboard";
import ErrorPage from "@/error";

import { routes as dealRoutes } from "@/routing/dashboard/deal";
import { routes as homeRoutes } from "@/routing/dashboard/home";

export const routes: RouteObject = {
  path: "/dashboard",
  element: <Dashboard />,
  errorElement: <ErrorPage />,
  children: [homeRoutes, ...dealRoutes],
};
