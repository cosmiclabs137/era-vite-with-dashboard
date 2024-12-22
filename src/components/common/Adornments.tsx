import React from "react";

import { InputAdornment } from "@mui/material";

export const DollarAdornment: React.FC = () => {
  return <InputAdornment position="start">$</InputAdornment>;
};

export const PercentageAdornment: React.FC = () => {
  return <InputAdornment position="end">%</InputAdornment>;
};
