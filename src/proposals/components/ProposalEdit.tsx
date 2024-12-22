import React from "react";

import PropsalForm from "@/proposals/components/forms/ProposalForm";
import { Proposal } from "@/deals/lib/definitions";

interface ProposalEditProps {
  proposal: Proposal;
}

const ProposalEdit: React.FC<ProposalEditProps> = ({ proposal }) => {
  return <PropsalForm proposal={proposal} />;
};

export default ProposalEdit;
