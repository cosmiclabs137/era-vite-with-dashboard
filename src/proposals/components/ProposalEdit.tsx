import React from "react";

import Grid from "@mui/material/Grid2";

import PropsalForm from "@/proposals/components/forms/ProposalForm";
import { Proposal } from "@/deals/lib/definitions";

interface ProposalEditProps {
  proposal: Proposal;
}

const ProposalEdit: React.FC<ProposalEditProps> = ({ proposal }) => {
  return (
    <Grid size={{xs: 2, md: 4}}>
      <PropsalForm proposal={proposal} />
    </Grid>
  );
};

export default ProposalEdit;
