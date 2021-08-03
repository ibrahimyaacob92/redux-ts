import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import windowReducer from "./windowReducer";

const reducers = combineReducers({
  bank: bankReducer,
  window: windowReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
