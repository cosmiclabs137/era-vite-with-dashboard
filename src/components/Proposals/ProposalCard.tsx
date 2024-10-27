import React from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import { Proposal } from "@/lib/definitions";

const ProposalCard = ({ proposal }: { proposal: Proposal }) => {
  return (
    <Paper elevation={3} sx={{ w: "100%" }}>
      <Card sx={{ w: "100%", p: 2 }} variant="outlined">
        <CardContent>
          <List>
            <ListItem
              style={{ margin: 0 }}
              alignItems="flex-start"
              key="proposal-id"
            >
              <ListItemText>
                <Typography>ID: {proposal.id}</Typography>
              </ListItemText>
            </ListItem>
            <ListItem alignItems="flex-start" key="proposal-name">
              <ListItemText>Proposals: {proposal.name}</ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ProposalCard;
