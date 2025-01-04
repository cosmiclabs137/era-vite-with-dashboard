import React from "react";

import { Box, Paper, Typography } from "@mui/material";

import BasicInputs from "@/proposals/components/BasicInputs";
import ConcessionsInputs from "../ConcessionsInputs";
import OtherInputs from "../OtherInputs";
import Collapsible from "@/components/common/Collapisble";
import { Proposal } from "@/deals/lib/definitions";

interface ProposalFormProps {
  proposal: Proposal;
}

const ProposalForm: React.FC<ProposalFormProps> = ({ proposal }) => {
  const [value, setValue] = React.useState(proposal);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      event.currentTarget.type === "string"
        ? event.target.value
        : event.target.valueAsNumber;
    const name = event.target.name;

    console.log(name, newValue);

    setValue({
      ...value,
      [name]: newValue,
    });
  };

  return (
    <Paper elevation={1} sx={{ m: 2, p: 2 }}>
      <Typography variant="h6">{proposal.name}</Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <Collapsible
          id="basic-input-panel-content"
          summary="Basic Inputs"
          defaultExpanded
        >
          <BasicInputs proposal={value} onChange={handleChange} />
        </Collapsible>

        <Collapsible id="concessions-input-panel-content" summary="Concessions">
          <ConcessionsInputs proposal={value} onChange={handleChange} />
        </Collapsible>

        <Collapsible id="other-input-panel-content" summary="Other">
          <OtherInputs proposal={value} onChange={handleChange} />
        </Collapsible>
      </Box>
    </Paper>
  );
};

export default ProposalForm;
