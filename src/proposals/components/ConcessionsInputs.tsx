import React from "react";

import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import CurrencyInput from "@/components/common/CurrencyInput";
import InputWithTooltip from "@/components/common/InputWithTooltip";

import { Proposal } from "@/deals/lib/definitions";

interface ConcessionsInputsProps {
  proposal: Proposal;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const ConcessionsInputs: React.FC<ConcessionsInputsProps> = ({
  proposal,
  onChange,
  disabled = false,
}) => {
  const tooltipFontSize = "0.9rem";
  return (
    <React.Fragment>
      <Tooltip
        arrow
        followCursor
        title="Landlord concessions"
        placement="top"
        describeChild={true}
      >
        <Typography fontSize={tooltipFontSize}>Landlord</Typography>
      </Tooltip>
      <CurrencyInput
        label="Other one-time landlord cost"
        value={proposal.otherOneTimeLandlordCost}
        onChange={onChange}
        name="otherOneTimeLandlordCost"
        title="Another one-time cost for landlord to be paid up front (e.g., lease buyout)."
        disabled={disabled}
      />

      <CurrencyInput
        name="otherMonthlyLandlordCost"
        label="Other monthly landlord cost"
        value={proposal.otherMonthlyLandlordCost}
        onChange={onChange}
        title="Another monthly cost for landlord (e.g., parking discount)."
        disabled={disabled}
      />
      <CurrencyInput
        label="TI allowance per RSF"
        name="tiAllowancePerRsf"
        value={proposal.tiAllowancePerRsf}
        onChange={onChange}
        title="The cost per rentable square foot that the landlord will pay."
        disabled={disabled}
      />
      <InputWithTooltip
        name="monthsFreeRent"
        label="Months free rent"
        value={proposal.monthsFreeRent}
        onChange={onChange}
        title="The number of free months. (Front loaded, evenly spread, back loaded)?"
        disabled={disabled}
      />
      <Tooltip
        arrow
        followCursor
        title="Tenant concessions"
        placement="top"
        describeChild={true}
      >
        <Typography fontSize={tooltipFontSize}>Tenant</Typography>
      </Tooltip>

      <CurrencyInput
        name="otherOneTimeTenantCost"
        label="Other one-time tenant cost."
        value={proposal.otherOneTimeTenantCost}
        onChange={onChange}
        title="Another one-time cost for tenant to be paid up front (e.g., key money)."
        disabled={disabled}
      />
      <CurrencyInput
        name="otherMonthlyTenantCost"
        label="Other monthly tenant cost"
        value={proposal.otherMonthlyTenantCost}
        onChange={onChange}
        title="Another monthly cost for tenant (e.g., parking)."
        disabled={disabled}
      />

      <CurrencyInput
        name="tiCostPerRsf"
        label="TI cost per RSF"
        value={proposal.tiCostPerRsf}
        onChange={onChange}
        title="The cost per rentable square foot that the tenant will pay."
        disabled={disabled}
      />
    </React.Fragment>
  );
};

export default ConcessionsInputs;
