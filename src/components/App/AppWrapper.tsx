import React from "react";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material";

interface AppWrapperProps {
  children: React.ReactNode;
  sx?: SxProps;
}

const AppWrapper = (props: AppWrapperProps) => {
  const { children, sx } = props;
  return (
    <Box
      className="app-wrapper"
      sx={{
        flexGrow: 0,
        mt: 5,
        width: "100%",
        p: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default AppWrapper;
