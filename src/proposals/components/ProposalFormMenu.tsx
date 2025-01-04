import React from "react";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockIcon from "@mui/icons-material/Lock";
import SaveIcon from "@mui/icons-material/Save";

import {
  usePopupState,
  bindTrigger,
  bindDialog,
} from "material-ui-popup-state/hooks";

interface ProposalFormMenuProps {
  disabled: boolean;
  setDisabled: (value: boolean) => void;
  onSave: () => void;
}

const ProposalFormMenu: React.FC<ProposalFormMenuProps> = ({
  disabled,
  setDisabled,
  onSave,
}) => {
  const popupState = usePopupState({
    variant: "dialog",
  });
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          justifyItems: "center",
          m: 1,
        }}
      >
        <Tooltip title={disabled ? "Enable input" : "Disable input"}>
          <IconButton onClick={() => setDisabled(!disabled)}>
            {disabled ? <LockIcon /> : <LockOpenOutlinedIcon />}
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete deal">
          <IconButton {...bindTrigger(popupState)}>
            <DeleteSharpIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Clone deal">
          <IconButton onClick={onSave}>
            <FileCopyIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Save deal">
          <IconButton onClick={onSave}>
            <SaveIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Dialog
        {...bindDialog(popupState)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete this deal?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will delete this deal. There is no way to recover it after you
            confirm deletion. Proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={popupState.close}>Cancel</Button>
          <Button onClick={popupState.close} autoFocus sx={{ color: "red" }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProposalFormMenu;
