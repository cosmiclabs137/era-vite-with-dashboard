import { RouteObject } from "react-router";

import DealIndex from "@/components/Deals/DealIndex";
import DealView from "@/components/Deals/DealView";
import DealsWrapper from "@/components/Deals/DealsWrapper";
import { getDealById, getDeals } from "@/lib/deals";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <DealsWrapper />,
    children: [
      {
        path: "deals",
        element: <DealIndex />, // @ts-ignore
        loader: async () => await getDeals(),
      },
      {
        path: "deals/:dealId",
        element: <DealView />, // @ts-ignore
        loader: async ({ params }) => await getDealById(params.dealId),
      },
    ],
  },
];
