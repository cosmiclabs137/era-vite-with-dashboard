import { RouteObject } from "react-router";

import DealEdit from "@/deals/components/DealEdit";
import DealIndex from "@/deals/components/DealIndex";
import DealView from "@/deals/components/DealView";
import DealsWrapper from "@/deals/components/DealsWrapper";
import { getDealById, getDeals } from "@/deals/lib/deals";

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
      {
        path: "deals/:dealId/edit",
        element: <DealEdit />, // @ts-ignore
        loader: async ({ params }) => await getDealById(params.dealId),
      },
    ],
  },
];
