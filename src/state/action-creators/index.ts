import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const depositMoney = (id: string, amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: { id, amount },
    });
  };
};

export const withdrawMoney = (id: string, amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: { id, amount },
    });
  };
};

export const bankrupt = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
      payload: { id },
    });
  };
};

export const createBank = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE_BANK,
      payload: { id },
    });
  };
};

// ========================================================= //

export const addWindow = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.ADD_WINDOW,
    });
  };
};

export const removeWindow = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.REMOVE_WINDOW,
      payload: { id },
    });
  };
};

// ========================================================= //

const average = (array: number[]) => {
  if (array.length !== 0) {
    return array.reduce((a, b) => a + b) / array.length;
  } else {
    return 0;
  }
};

export const calculate = (key: string, args: number[]) => {
  //side effect here :
  let value: number;
  if (key === "total") {
    value = average(args);
  } else if (key === "debt") {
    value = args[1] - args[0];
  }
  // console.log(total, args);
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.CALCULATE,
      payload: { key, value },
    });
  };
};
