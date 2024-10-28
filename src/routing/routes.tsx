import { RouteObject } from "react-router";

import { routes as dashboardRoutes } from "@/dashboard/routes";
import { routes as dealsRoutes } from "@/deals/routes";

const dbChildren: RouteObject[] = dashboardRoutes.children as RouteObject[];

const dbRoutes = {
  ...dashboardRoutes,
  children: [...dbChildren, ...dealsRoutes],
} as RouteObject;

export const routes: RouteObject[] = [dbRoutes];
