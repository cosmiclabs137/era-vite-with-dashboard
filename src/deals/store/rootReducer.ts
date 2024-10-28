import { combineReducers } from "@reduxjs/toolkit";
import { dealsReducer } from "./deal/reducer";

export const rootReducer = combineReducers({
  deals: dealsReducer,
});
