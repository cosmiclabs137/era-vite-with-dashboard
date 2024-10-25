import { Deal } from "@/lib/definitions";

export const selectDeal = (state: any, id: string) =>
  state.deals.map((deal: Deal) => deal.id === id);
