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
import { useLocation, useNavigate } from "react-router";

import { deleteDeal } from "@/deals/lib/deals";
import { Deal } from "@/deals/lib/definitions";
import ButtonLink from "@/components/common/ButtonLink";

const ActionButtons: React.FC<{
  href: string;
  handleConfirmation: () => void;
}> = ({ href, handleConfirmation }) => {
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleClick = () => navigate(`${href}/edit`);

  const handleDeleteClick = () => {
    setAlertOpen(true);
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
  const navigate = useNavigate();

  const href = `/dashboard/deals/${deal.id}`;

  const handleConfirmation = async () => {
    await deleteDeal(deal);
    navigate(0); // refresh the page
  };

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
            <ActionButtons
              href={href}
              handleConfirmation={handleConfirmation}
            />
          </Box>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default DealCard;
