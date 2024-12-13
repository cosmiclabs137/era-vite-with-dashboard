import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { useLoaderData, useNavigate, Outlet } from "react-router";

import { createDeal } from "@/api";

import AppHeader from "@/components/App/AppHeader";
import { AddFab } from "@/components/common/FloatingActionButtons";

import DealCard from "@/deals/components/DealCard";
import NewDealModal from "@/deals/components/NewDealModal";

import { Deal } from "@/deals/lib/definitions";

const DealIndex = () => {
  const navigate = useNavigate();

  const deals: Deal[] = useLoaderData() as Deal[];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbarOpen(false);
  };

  const handleSubmit = async (value: { name: string }) => {
    const { name } = value;
    const newDeal: Deal = await createDeal(name);
    const message: string =
      newDeal !== null
        ? `New deal '${newDeal.name}' created!`
        : "Deal creation failed";
    setSnackbarMessage(message);
    handleModalClose();
    setIsSnackbarOpen(true);
    if (newDeal) {
      navigate(`/dashboard/deals/${newDeal.id}`);
    }
  };

  return (
    <>
      <AppHeader title="Deals" />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 3 }}>
        {deals.map((deal: Deal) => (
          <Grid key={deal.id} size={1}>
            <DealCard deal={deal} key={deal.id} />
          </Grid>
        ))}
        <Outlet />
      </Grid>
      <AddFab onClick={handleModalOpen} />
      <NewDealModal
        open={isModalOpen}
        onClose={handleModalClose}
        handleSubmit={handleSubmit}
      />
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={5000}
        message={snackbarMessage}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="primary"
            onClick={handleSnackbarClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        onClose={handleSnackbarClose}
      />
    </>
  );
};

export default DealIndex;
