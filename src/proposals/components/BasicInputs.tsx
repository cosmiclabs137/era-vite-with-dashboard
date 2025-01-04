import React from "react";

import CurrencyInput from "@/components/common/CurrencyInput";
import InputWithTooltip from "@/components/common/InputWithTooltip";
import PercentageInput from "@/components/common/PercentageInput";

import { Proposal } from "@/deals/lib/definitions";

interface BasicInputsProps {
  proposal: Proposal;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const BasicInputs: React.FC<BasicInputsProps> = ({
  proposal,
  onChange,
  disabled,
}) => {
  return (
    <React.Fragment>
      <InputWithTooltip
        title="Number of rentable square feet leased."
        name="sqft"
        label="Rentable square feet (RSF)"
        onChange={onChange}
        slotProps={{ input: { min: 0, step: 1 } }}
        type="number"
        value={proposal.sqft}
        disabled={disabled}
      />
      <InputWithTooltip
        name="term"
        label="Term (months)"
        onChange={onChange}
        slotProps={{ input: { min: 0, step: 1 } }}
        title="Total number of months of the initial term—not including option periods."
        value={proposal.term}
        disabled={disabled}
      />
      <CurrencyInput
        name="baseRent"
        onChange={onChange}
        label="Base Rent"
        title="Dollar per RSF per month."
        value={proposal.baseRent}
        disabled={disabled}
      />
      <PercentageInput
        label="Annual escalations"
        name="annualEscalations"
        value={proposal.annualEscalations}
        onChange={onChange}
        title="The percentage that the rent is increased per year."
        disabled={disabled}
      />
      <CurrencyInput
        name="opExPerMonthRsf"
        label="Occupancy expenses (RSF/month)"
        value={proposal.opExPerMonthRsf}
        onChange={onChange}
        title="Tenant's monthly share of operating expenses per rentable square foot."
        disabled={disabled}
      />
    </React.Fragment>
  );
};

export default BasicInputs;
