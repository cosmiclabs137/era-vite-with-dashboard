import React from "react";

import InputWithTooltip, {
  InputWithTooltipProps,
} from "@/components/common/InputWithTooltip";
import { PercentageAdornment } from "@/components/common/Adornments";

const PercentageInput: React.FC<InputWithTooltipProps> = ({
  name,
  value,
  onChange,
  label,
  title,
  placement = "top",
  sx = { m: 1 },
  describeChild = true,
  disabled = false,
}) => {
  const slotProps = {
    input: {
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
      value={value}
      onChange={onChange}
      slotProps={slotProps}
      disabled={disabled}
      endAdornment={<PercentageAdornment />}
      sx={sx}
    />
  );
};

export default PercentageInput;
