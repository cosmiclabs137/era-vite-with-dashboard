import { json } from "react-router";

import {
  getDealById as apiGetDealById,
  getDeals as apiGetDeals,
  createDeal as apiCreateDeal,
} from "@/api";

import { Deal } from "@/deals/lib/definitions";

export const getDealById = async (dealId: string): Promise<Deal> => {
  const deal = await apiGetDealById(dealId);

  return deal;
};

export const getDeals = async (): Promise<Deal[]> => await apiGetDeals();

export const createDeal = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const name = formData.get("name");

  if (typeof name !== "string" || !name.trim()) {
    return json({ error: "Deal name is required" }, { status: 400 });
  }

  const newDeal: Deal = await apiCreateDeal(name);

  console.log();

  return newDeal;
};
