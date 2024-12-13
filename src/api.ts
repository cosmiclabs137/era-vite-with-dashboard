import { Deal } from "@/deals/lib/definitions";
import { Proposal } from "@/deals/lib/definitions";
import { any } from "zod";

interface DealResponse {
  id: string;
  name: string;
  proposalIds: string[];
}

const baseUrl = "http://localhost:3030";

export const getDealById = async (dealId: string): Promise<Deal> => {
  const deal = await fetch(`${baseUrl}/deals/${dealId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return null;
    });

  deal.proposals = await getProposalsByIds(deal.proposalIds);

  return deal;
};

export const getDeals = async (): Promise<Deal[]> => {
  const deals: DealResponse[] = await fetch(`${baseUrl}/deals`)
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
  const proposal = await fetch(`${baseUrl}/proposals/${propId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return null;
    });

  return proposal;
};

const getProposalsByIds = async (ids: Array<string>): Promise<Proposal[]> => {
  const idsSet = new Set(ids);
  const proposals = await fetch(`${baseUrl}/proposals`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return [];
    });

  return proposals.filter(({ id }: { id: string }) => idsSet.has(id));
};

export const createDeal = async (name: string): Promise<Deal> => {
  const newDeal = await fetch(`${baseUrl}/deals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, proposalIds: [] }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return null;
    });

  return newDeal;
};

export const deleteDeal = async (deal: Deal) => {
  console.log("deal:", deal);
  const proposals: Proposal[] = deal.proposals;

  if (proposals.length > 0) {
    const proposalResponses = await Promise.all(
      proposals.map(
        async (proposal: Proposal) => await deleteProposalById(proposal.id)
      )
    );

    if (proposalResponses.includes(false)) {
      console.error("Some proposals failed to delete.");
      return false;
    }

    console.log("proposals deleted!");
  }

  const response = await fetch(`${baseUrl}/deals/${deal.id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    console.error("Failed to delete deal:", response.statusText);
    return false;
  }

  console.log("deal deleted!", response);
  return true;
};

export const deleteProposalById = async (
  proposalId: string
): Promise<boolean> => {
  const response = await fetch(`${baseUrl}/proposals/${proposalId}`, {
    method: "DELETE",
  })
    .then((response) => {
      console.log(response);
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });

  return response;
};
