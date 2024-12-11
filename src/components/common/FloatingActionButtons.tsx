import { ReactNode } from "react";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { useTheme } from "@mui/material";

interface BaseFabProps {
  children: ReactNode;
  label: string;
}

function BaseFab({ children, label }: BaseFabProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
    >
      <Fab
        aria-label={label}
        sx={{
          backgroundColor: theme.palette.grey[800],
          color: theme.palette.primary.contrastText,
          "&:hover": {
            backgroundColor: theme.palette.grey[100],
            color: theme.palette.grey[800],
          },
        }}
      >
        {children}
      </Fab>
    </Box>
  );
}

export function AddFab() {
  return (
    <BaseFab label="add">
      <AddIcon />
    </BaseFab>
  );
}

export function EditFab() {
  return (
    <BaseFab label="edit">
      <EditIcon />
    </BaseFab>
  );
}
