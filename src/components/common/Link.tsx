import React from "react";

import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type Underline = "always" | "hover" | "none";

export default function Link(props: {
  children?: React.ReactNode;
  to: string;
  style?: any;
  sx?: any;
  underline?: Underline;
}) {
  const underline: Underline = props.underline ? props.underline : "always";
  return (
    <MuiLink
      component={RouterLink}
      to={props.to}
      style={props.style}
      sx={props.sx}
      underline={underline}
    >
      {props.children}
    </MuiLink>
  );
}
