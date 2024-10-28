import { createAction } from "@reduxjs/toolkit";

// import { dealFactory } from "@/lib/utils";

export const ADD_DEAL = "deals/ADD";

export const addDeal = createAction(ADD_DEAL, (id: string) => ({
  payload: {
    // deal: dealFactory(id),
    id: id,
  },
}));
