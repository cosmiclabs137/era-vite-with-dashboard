import { json } from "react-router";

import {
  getDealById as apiGetDealById,
  getDeals as apiGetDeals,
  createDeal as apiCreateDeal,
  deleteDeal as apiDeleteDeal,
} from "@/api";

import { Deal } from "@/deals/lib/definitions";

class DealService {
  async getDealById(dealId: string): Promise<Deal | null> {
    return await apiGetDealById(dealId);
  }

  async getDeals(): Promise<Deal[]> {
    return await apiGetDeals();
  }

  async createDeal(name: string): Promise<Deal> {
    if (!name.trim()) {
      throw new Error("Deal name is required");
    }
    return await apiCreateDeal(name);
  }

  async deleteDeal(deal: Deal): Promise<boolean> {
    return await apiDeleteDeal(deal);
  }
}

const dealService = new DealService();

export const getDealById = async (dealId: string): Promise<Deal | null> =>
  await dealService.getDealById(dealId);

export const getDeals = async (): Promise<Deal[]> =>
  await dealService.getDeals();

export const createDeal = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const name = formData.get("name");

  if (typeof name !== "string") {
    return json({ error: "Invalid deal name" }, { status: 400 });
  }

  try {
    const newDeal = await dealService.createDeal(name);
    return newDeal;
  } catch (error: any) {
    return json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 400 }
    );
  }
};

export const deleteDeal = async (deal: Deal): Promise<boolean> =>
  await dealService.deleteDeal(deal);
