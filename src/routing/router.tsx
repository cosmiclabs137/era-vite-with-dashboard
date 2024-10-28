import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/error";

import { routes } from "@/routing/routes";

export const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  ...routes,
]);
