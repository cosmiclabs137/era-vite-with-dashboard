import { Deal } from "@/lib/definitions";
import { deals } from "@/lib/placeholder-data";

export const getDealById = async (dealId: string): Promise<Deal> => {
  const deal: Deal = deals.filter((deal) => deal.id === dealId)[0];
  return deal;
};

export const getDeals = async (): Promise<Deal[]> => {
  return deals;
};
