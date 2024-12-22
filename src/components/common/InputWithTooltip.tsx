import React from "react";

import { FormControl, TextField, Tooltip } from "@mui/material";

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
  variant?: "standard" | "filled";
  placement?: "top";
  slotProps?: SlotProps;
  describeChild?: boolean;
  disabled?: boolean;
  sx?: Record<string, string | number>;
  followCursor?: boolean;
}

const InputWithTooltip: React.FC<InputWithTooltipProps> = ({
  name,
  value,
  onChange,
  label,
  title,
  type = "number",
  variant = "standard",
  slotProps = { input: { min: 0, step: 0.01 } },
  placement = "top",
  sx = { paddingTop: 2 },
  describeChild = true,
  disabled = false,
}) => {
  return (
    <Tooltip
      arrow
      followCursor
      title={title}
      placement={placement}
      describeChild={describeChild}
    >
      <FormControl sx={sx} fullWidth>
        <TextField
          name={name}
          label={label}
          type={type}
          variant={variant}
          value={value}
          onChange={onChange}
          slotProps={slotProps}
          disabled={disabled}
          sx={sx}
        />
      </FormControl>
    </Tooltip>
  );
};

export default InputWithTooltip;
