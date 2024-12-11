import { getDealById as apiGetDealById, getDeals as apiGetDeals } from "@/api";

import { Deal } from "@/deals/lib/definitions";

import { dealFactory } from "@/deals/lib/utils";

export const getDealById = async (dealId: string): Promise<Deal> => {
  const deal = await apiGetDealById(dealId);

  return deal;
};

export const getDeals = async (): Promise<Deal[]> => await apiGetDeals();

export const createDeal = async (): Promise<Deal> => dealFactory();
