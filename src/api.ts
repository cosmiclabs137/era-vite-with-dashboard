import { Deal } from "@/deals/lib/definitions";
import { Proposal } from "@/deals/lib/definitions";

interface DealResponse {
  id: string;
  name: string;
  proposalIds: string[];
}

const base_url = "http://localhost:3030";

export const getDealById = async (dealId: string): Promise<Deal> => {
  const deal = await fetch(`${base_url}/deals/${dealId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return null;
    });

  deal.proposals = await getProposalsByIds(deal.proposalIds);

  return deal;
};

export const getDeals = async (): Promise<Deal[]> => {
  const deals: DealResponse[] = await fetch(`${base_url}/deals`)
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      return [];
    });

  const newDeals: Promise<Deal[]> = Promise.all(
    deals.map(async (deal: DealResponse) => {
      const proposals: Proposal[] = await getProposalsByIds(deal.proposalIds);
      return { id: deal.id, name: deal.name, proposals: proposals } as Deal;
    })
  );

  return newDeals;
};

export const getProposalById = async (propId: string): Promise<Proposal[]> => {
  const proposal = await fetch(`${base_url}/proposals/${propId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return null;
    });

  return proposal;
};

const getProposalsByIds = async (ids: any) => {
  const idsSet = new Set(ids);
  const proposals = await fetch(`${base_url}/proposals`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return [];
    });

  return proposals.filter(({ id }: { id: string }) => idsSet.has(id));
};
