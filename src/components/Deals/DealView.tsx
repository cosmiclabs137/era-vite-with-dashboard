import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLoaderData } from "react-router";

import ProposalCard from "@/components/Proposals/ProposalCard";
import { Deal, Proposal } from "@/lib/definitions";

const DealView = () => {
  const deal = useLoaderData() as Deal;
  const hasProposals = deal.proposals.length > 0;

  return (
    <div style={{ width: "100%" }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {deal.name}
      </Typography>
      <Typography variant="h4">Proposals:</Typography>
      <Box sx={{ flexGrow: 0, mt: 5 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {hasProposals ? (
            deal.proposals.map((proposal: Proposal) => (
              <ProposalCard proposal={proposal} key={proposal?.id} />
            ))
          ) : (
            <Typography>No proposals yet. Create a one!</Typography>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default DealView;
