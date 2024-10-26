import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { useLoaderData } from "react-router";

import { Deal } from "@/lib/definitions";

const DealView = () => {
  const deal = useLoaderData();
  // const deal = {id: "79", proposals: []}
  console.log("deal:", deal);
  return (
    <div>
      <List>
        <ListItem style={{ margin: 0 }} alignItems="flex-start">
          {/* @ts-ignore */}
          <ListItemText>ID: {deal?.id}</ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start">
          {/* @ts-ignore */}
          <ListItemText>Proposals: {deal?.proposals?.length}</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default DealView;
