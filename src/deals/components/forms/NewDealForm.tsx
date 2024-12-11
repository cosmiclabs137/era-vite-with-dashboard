import React from "react";

import { Box, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import { Deal } from "@/deals/lib/definitions";

export interface DealFormValues {
  name: string;
}

const NewDealForm: React.FC<{ onSubmit: (data: DealFormValues) => void }> = ({
  onSubmit,
}) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Deal>();

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        margin: "0 auto",
      }}
    >
      <Controller
        name="name"
        control={control}
        rules={{ required: "Deal name is required" }}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Deal Name"
            variant="outlined"
            error={!!errors}
            helperText={errors.name?.message}
            placeholder="Enter a deal name"
            {...register("name")}
            fullWidth
          />
        )}
      />
      <Button type="submit" variant="contained">
        Create Deal
      </Button>
    </Box>
  );
};

export default NewDealForm;
