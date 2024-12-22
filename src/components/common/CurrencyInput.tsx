import React from "react";

import InputWithTooltip, {
  InputWithTooltipProps,
} from "@/components/common/InputWithTooltip";
import { DollarAdornment } from "@/components/common/Adornments";

const CurrencyInput: React.FC<InputWithTooltipProps> = ({
  name,
  value,
  onChange,
  label,
  title,
  variant = "standard",
  placement = "top",
  sx = { paddingTop: 2 },
  describeChild = true,
  disabled = false,
}) => {
  const slotProps = {
    input: {
      startAdornment: <DollarAdornment />,
      min: 0.0,
      step: 0.01,
      onChange: onChange,
    },
    inputLabel: {
      shrink: true,
    },
  };
  return (
    <InputWithTooltip
      title={title}
      placement={placement}
      describeChild={describeChild}
      name={name}
      label={label}
      type="number"
      variant={variant}
      value={value}
      onChange={onChange}
      slotProps={slotProps}
      disabled={disabled}
      sx={sx}
    />
  );
};

export default CurrencyInput;
