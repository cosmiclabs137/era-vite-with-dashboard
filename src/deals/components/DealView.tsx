import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLoaderData } from "react-router";

import DealHeader from "./DealHeader";
import ProposalCard from "@/proposals/ProposalCard";
import { Deal, Proposal } from "@/deals/lib/definitions";

const DealView = () => {
  const deal = useLoaderData() as Deal;
  const hasProposals = deal.proposals.length > 0;
  const href = `/dashboard/deals/${deal.id}/edit`;
  const link = { href: href, text: "Edit" };

  if (!hasProposals) {
    return <Typography>No proposals yet. Create a one!</Typography>;
  }

  return (
    <>
      <DealHeader link={link} title={deal.name} />

      <Typography variant="h4">Proposals:</Typography>
      <Box sx={{ flexGrow: 0, mt: 5 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {deal.proposals.map((proposal: Proposal) => (
            <ProposalCard proposal={proposal} key={proposal?.id} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default DealView;
