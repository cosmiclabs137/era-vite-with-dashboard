import React from "react";

import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function ButtonLink(props: {
  children?: React.ReactNode;
  href: string;
  style?: any;
  sx?: any;
}) {
  return (
    // @ts-ignore
    <Button
      LinkComponent={RouterLink}
      sx={props.sx}
      style={props.style}
      variant="contained"
      to={props.href}
    >
      {props.children}
    </Button>
  );
}
