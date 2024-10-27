import { RouteObject } from "react-router";

import DealsWrapper from "@/components/Deals/DealsWrapper";
import DealView from "@/components/Deals/DealView";
import { getDealById, getDeals } from "@/lib/deals";

export const routes: RouteObject[] = [
  {
    path: "deals",
    element: <DealsWrapper />,
    loader: async () => await getDeals(),
  },
  {
    path: "deals/:dealId",
    element: <DealView />, // @ts-ignore
    loader: async ({ params }) => await getDealById(params.dealId),
  },
];
