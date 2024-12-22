import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLoaderData } from "react-router";

import DealHeader from "./DealHeader";
import ProposalEdit from "@/proposals/components/ProposalEdit";
import { Deal, Proposal } from "@/deals/lib/definitions";

const DealView: React.FC = () => {
  const deal = useLoaderData() as Deal;
  const hasProposals = deal.proposals.length > 0;
  const href = `/dashboard/deals/${deal.id}`;
  const link = { href: href, text: "Back" };

  const mainElem = !hasProposals ? (
    <Typography>No proposals yet. Create a one!</Typography>
  ) : (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {deal.proposals.map((proposal: Proposal) => (
        <ProposalEdit proposal={proposal} key={proposal?.id} />
      ))}
    </Grid>
  );

  return (
    <>
      <DealHeader link={link} title={deal.name} />

      <Typography variant="h4">Proposals:</Typography>
      <Box sx={{ flexGrow: 0, mt: 5 }}>{mainElem}</Box>
    </>
  );
};

export default DealView;
