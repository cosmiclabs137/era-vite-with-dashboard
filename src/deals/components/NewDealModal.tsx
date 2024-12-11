import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import NewDealForm, {
  DealFormValues,
} from "@/deals/components/forms/NewDealForm";

interface NewDealModalProps {
  open: boolean;
  onClose: () => void;
  handleSubmit: (value: { name: string }) => void;
}

const NewDealModal: React.FC<NewDealModalProps> = ({
  open,
  onClose,
  handleSubmit,
}) => {
  return (
    <>
      {/* Modal containing the form */}
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="new-deal-modal-title"
        aria-describedby="new-deal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <h2 id="new-deal-modal-title">Create a New Deal</h2>
          <NewDealForm onSubmit={handleSubmit} />
          <Button
            variant="outlined"
            // color="error"
            onClick={onClose}
            sx={{ mt: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default NewDealModal;
