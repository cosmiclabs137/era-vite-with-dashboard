import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router";

import { Deal } from "@/deals/lib/definitions";
import ButtonLink from "@/components/common/ButtonLink";

const ActionButtons: React.FC<{ href: string }> = ({ href }) => {
  const navigate = useNavigate();
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);

  const handleClick = () => navigate(`${href}/edit`);

  const handleDeleteClick = () => {
    setAlertOpen(true);
  };

  const handleConfirmation = () => {
    navigate(`${href}/delete`);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
        }}
      >
        <IconButton onClick={handleClick}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Dialog
        open={alertOpen}
        onClose={handleConfirmation}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete deal?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This is irreversible. Once deleted, a deal and its proposals will
            not recoverable.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAlertOpen(false)} color="primary">
            Disagree
          </Button>
          <Button onClick={handleConfirmation} color="warning" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

const DealCard = ({ deal }: { deal: Deal }) => {
  const href = `/dashboard/deals/${deal.id}`;

  return (
    <Paper elevation={3} sx={{ w: "100%" }}>
      <Card sx={{ w: "100%", p: 2 }} variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {deal.name}
          </Typography>
          <Divider variant="fullWidth" sx={{ m: 1 }} />
          <Typography>Proposals: {deal.proposals.length}</Typography>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              mt: 1,
            }}
          >
            <ButtonLink href={href}>View Deal</ButtonLink>
            <ActionButtons href={href} />
          </Box>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default DealCard;
