import React from "react";

import { FormControl, FormLabel, Input, InputLabel, Tooltip } from "@mui/material";

interface SlotProps {
  formHelperText?: Record<string, unknown>;
  htmlInput?: Record<string, unknown>;
  input?: Record<string, unknown>;
  inputLabel?: Record<string, unknown>;
  select?: Record<string, unknown>;
}

export interface InputWithTooltipProps {
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  label: string;
  type?: "number" | "text";
  placement?: "top";
  slotProps?: SlotProps;
  describeChild?: boolean;
  disabled?: boolean;
  sx?: Record<string, string | number>;
  followCursor?: boolean;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
}

const InputWithTooltip: React.FC<InputWithTooltipProps> = ({
  name,
  value,
  onChange,
  label,
  title,
  type = "number",
  slotProps = { htmlInput: { min: 0, step: 0.01 } },
  placement = "top",
  sx = { m: 1 },
  describeChild = true,
  endAdornment,
  startAdornment,
  disabled = false,
}) => {
  return (
    <FormControl sx={sx} variant="standard" fullWidth>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Tooltip
        arrow
        followCursor
        title={title}
        placement={placement}
        describeChild={describeChild}
      >
        <Input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          slotProps={slotProps}
          disabled={disabled}
          endAdornment={endAdornment}
          startAdornment={startAdornment}
          sx={sx}
        />
      </Tooltip>
    </FormControl>
  );
};

export default InputWithTooltip;
