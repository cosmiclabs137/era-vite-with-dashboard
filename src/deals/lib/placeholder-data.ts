import { v4 as uuidv4 } from "uuid";

import { Deal } from "@/deals/lib/definitions";
import { dealFactory, proposalFactory } from "@/deals/lib/utils";

export const deals: Deal[] = [
  { id: uuidv4(), name: "Deal 0", proposals: [proposalFactory("0")] },
  {
    id: uuidv4(),
    name: "Deal 1",
    proposals: [proposalFactory("0"), proposalFactory("5")],
  },
  {
    id: uuidv4(),
    name: "Deal 2",
    proposals: [
      proposalFactory("0"),
      proposalFactory("1"),
      proposalFactory("3"),
    ],
  },
  dealFactory(),
  dealFactory(),
];
