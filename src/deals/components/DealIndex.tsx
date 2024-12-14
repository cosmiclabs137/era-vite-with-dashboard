import React, { useState, useCallback } from "react";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleModalChange = useCallback(
    (open: boolean) => setIsModalOpen(open),
    []
  );

  const handleSnackbarClose = useCallback(
    (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason !== "clickaway") setIsSnackbarOpen(false);
    },
    []
  );

  const handleSubmit = async (value: { name: string }) => {
    try {
      const newDeal = await createDeal(value.name);
      if (newDeal) {
        setSnackbarMessage(`New deal '${newDeal.name}' created!`);
        navigate(`/dashboard/deals/${newDeal.id}`);
      } else {
        setSnackbarMessage("Deal creation failed");
      }
    } catch {
      setSnackbarMessage("Deal creation failed");
    } finally {
      setIsSnackbarOpen(true);
      handleModalChange(false);
    }
  };

  return (
    <>
      <AppHeader title="Deals" />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 3 }}>
        {deals.map((deal) => (
          <Grid key={deal.id} size={1}>
            <DealCard deal={deal} />
          </Grid>
        ))}
        <Outlet />
      </Grid>
      <AddFab onClick={() => handleModalChange(true)} />
      <NewDealModal
        open={isModalOpen}
        onClose={() => handleModalChange(false)}
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
