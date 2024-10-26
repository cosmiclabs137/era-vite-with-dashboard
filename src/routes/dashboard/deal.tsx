import { RouteObject } from "react-router";

import DealsWrapper from "@/components/Deals/DealsWrapper";

export const routes: RouteObject[] = [
  {
    path: "deals",
    element: <DealsWrapper />,
  },
];
