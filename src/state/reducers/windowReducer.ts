import { v4 as uuid } from "uuid";
import { ActionType } from "../action-types";
import { WindowAction } from "../actions";
const initialState: string[] = [];

const reducer = (state: string[] = initialState, action: WindowAction) => {
  switch (action.type) {
    case ActionType.ADD_WINDOW:
      return [...state, uuid()];
    case ActionType.REMOVE_WINDOW:
      const { id } = action.payload;
      return state;
    default:
      return state;
  }
};

export default reducer;
