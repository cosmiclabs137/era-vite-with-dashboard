import { Proposal } from "@/proposals/lib/definitions";


export type Deal = {
  name: string;
  id: string;
  proposals: Proposal[];
};
