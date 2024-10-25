import { ADD_DEAL } from "./actions";
import { dealFactory } from "../../lib/utils";

const initialState = [dealFactory("0")];

export const dealsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_DEAL:
      return [...state, dealFactory(action.id)];
    default:
      return state;
  }
};
