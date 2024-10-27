import { Deal } from "@/lib/definitions";
import { dealFactory, proposalFactory } from "@/lib/utils";

export const deals: Deal[] = [
  { id: "0", name: "Deal 0", proposals: [proposalFactory("0")] },
  {
    id: "1",
    name: "Deal 1",
    proposals: [proposalFactory("0"), proposalFactory("5")],
  },
  {
    id: "2",
    name: "Deal 2",
    proposals: [
      proposalFactory("0"),
      proposalFactory("1"),
      proposalFactory("3"),
    ],
  },
  dealFactory("79"),
  dealFactory("22"),
];
