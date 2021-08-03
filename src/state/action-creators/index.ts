import { Dispatch } from "redux";
import { actionCreators } from "..";
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

export const calculate = (target: string) => {
  return (dispatct: Dispatch) => {
    dispatct({
      type: ActionType.CALCULATE,
      payload: { target },
    });
  };
};
