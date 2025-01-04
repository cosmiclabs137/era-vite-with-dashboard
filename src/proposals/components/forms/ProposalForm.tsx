import React from "react";

import { Box, Paper, Typography } from "@mui/material";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

import BasicInputs from "@/proposals/components/BasicInputs";
import ConcessionsInputs from "@/proposals/components/ConcessionsInputs";
import Collapsible from "@/components/common/Collapisble";
import OtherInputs from "@/proposals/components/OtherInputs";
import ProposalFormMenu from "@/proposals/components/ProposalFormMenu";
import { Proposal } from "@/deals/lib/definitions";

interface ProposalFormProps {
  proposal: Proposal;
}

const ProposalForm: React.FC<ProposalFormProps> = ({ proposal }) => {
  const [value, setValue] = React.useState(proposal);
  const [disabled, setDisabled] = React.useState(false);

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

  const handleSave = async () => {
    const response = await fetch(
      `http://localhost:3030/proposals/${proposal.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      }
    );

    console.log(response);

    if (response.ok) {
      enqueueSnackbar("Proposal successfully saved!", {
        autoHideDuration: 3000,
      });
    } else {
      enqueueSnackbar("Error saving proposal. Try again :(", {
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Paper elevation={1} sx={{ m: 2, p: 2 }}>
      <Typography variant="h6" align="center">
        {proposal.name ?? "New Deal"}
      </Typography>
      <ProposalFormMenu
        setDisabled={setDisabled}
        disabled={disabled}
        onSave={handleSave}
      />
      <SnackbarProvider />
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
