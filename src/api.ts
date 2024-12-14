import { Deal } from "@/deals/lib/definitions";
import { Proposal } from "@/deals/lib/definitions";

interface DealResponse {
  id: string;
  name: string;
  proposalIds: string[];
}

interface FetchOptions extends RequestInit {
  method?: string;
}

const baseUrl = "http://localhost:3030";

const handleFetch = async (
  url: string,
  options: FetchOptions = {}
): Promise<any> => {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error(error);
    return options.method === "DELETE" ? false : null;
  }
};

export const getDealById = async (dealId: string): Promise<Deal | null> => {
  const deal = await handleFetch(`${baseUrl}/deals/${dealId}`);

  if (deal) {
    deal.proposals = await getProposalsByIds(deal.proposalIds);
    return deal;
  }
  return null;
};

export const getDeals = async (): Promise<Deal[]> => {
  const deals: DealResponse[] = (await handleFetch(`${baseUrl}/deals`)) || [];

  return Promise.all(
    deals.map(async (deal: DealResponse) => {
      const proposals: Proposal[] = await getProposalsByIds(deal.proposalIds);
      return { id: deal.id, name: deal.name, proposals: proposals } as Deal;
    })
  );
};

export const getProposalById = async (propId: string): Promise<Proposal> => {
  return await handleFetch(`${baseUrl}/proposals/${propId}`);
};

const getProposalsByIds = async (ids: Array<string>): Promise<Proposal[]> => {
  const proposals = (await handleFetch(`${baseUrl}/proposals`)) || [];
  return proposals.filter(({ id }: { id: string }) => new Set(ids).has(id));
};

export const createDeal = async (name: string): Promise<Deal> => {
  return await handleFetch(`${baseUrl}/deals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, proposalIds: [] }),
  });
};

export const deleteDeal = async (deal: Deal) => {
  if (deal.proposals.length > 0) {
    const proposalResponses = await Promise.all(
      deal.proposals.map(
        async (proposal: Proposal) => await deleteProposalById(proposal.id)
      )
    );

    if (proposalResponses.includes(false)) {
      console.error("Some proposals failed to delete.");
      return false;
    }
  }

  return await handleFetch(`${baseUrl}/deals/${deal.id}`, { method: "DELETE" });
};

export const deleteProposalById = async (
  proposalId: string
): Promise<boolean> => {
  return await handleFetch(`${baseUrl}/proposals/${proposalId}`, {
    method: "DELETE",
  });
};
