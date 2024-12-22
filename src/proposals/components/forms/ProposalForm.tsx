import React from "react";

import { Box, Paper } from "@mui/material";

import CurrencyInput from "@/components/common/CurrencyInput";
import { Proposal } from "@/deals/lib/definitions";

interface ProposalFormProps {
  proposal: Proposal;
}

const ProposalForm: React.FC<ProposalFormProps> = ({ proposal }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
    console.log(event.target.value);
  };

  return (
    <Paper elevation={1} sx={{ m: 2, p: 2 }}>
      <Box component="form">
        <CurrencyInput
          name="Test-Input"
          onChange={handleChange}
          label="Test Input"
          title="This is a test"
          value={value}
        />
      </Box>
    </Paper>
  );
};

export default ProposalForm;
