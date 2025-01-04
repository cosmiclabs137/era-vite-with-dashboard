import React from "react";

import PercentageInput from "@/components/common/PercentageInput";

import { Proposal } from "@/deals/lib/definitions";

interface OtherInputsProps {
  proposal: Proposal;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const OtherInputs: React.FC<OtherInputsProps> = ({
  proposal,
  onChange,
  disabled = false,
}) => {
  return (
    <React.Fragment>
      <PercentageInput
        name="globalInflation"
        label="Global inflation"
        value={proposal.globalInflation}
        onChange={onChange}
        title="The annual growth rate for operating expenses and other recurring costs."
        disabled={disabled}
      />
      <PercentageInput
        name="tenantDiscountRate"
        label="Tenant discount rate"
        value={proposal.tenantDiscountRate}
        onChange={onChange}
        title="The percentage rate the tenant would be charged on an unsecured loan."
        disabled={disabled}
      />
      <PercentageInput
        name="landlordDiscountRate"
        label="Lanlord discount rate"
        value={proposal.landlordDiscountRate}
        onChange={onChange}
        title="The return percent the landlord would make on an alternate investment."
        disabled={disabled}
      />
      <PercentageInput
        name="commissionFirst"
        label="Commission percent (months 1 to 60)"
        value={proposal.commissionFirst}
        onChange={onChange}
        title="The percent of the landlord's commission costs for the first 60 months."
        disabled={disabled}
      />
      <PercentageInput
        name="commissionSecond"
        label="Commission pct (months 61+)"
        value={proposal.commissionSecond}
        onChange={onChange}
        title="The percent of the landlord's commission costs from month 61 onward."
        disabled={disabled}
      />
    </React.Fragment>
  );
};

export default OtherInputs;
