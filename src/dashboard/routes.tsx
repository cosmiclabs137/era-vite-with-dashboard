import { RouteObject } from "react-router";

import Dashboard from "@/dashboard/Dashboard";
import MainGrid from "@/dashboard/components/MainGrid";

import ErrorPage from "@/error";

export const routes: RouteObject = {
  path: "/dashboard",
  element: <Dashboard />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "",
      element: <MainGrid />,
    },
  ],
};
