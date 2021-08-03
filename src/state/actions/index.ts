import { ActionType } from "../action-types";

// type Action = { type: string; payload?: number }; //! Cannot do action like this

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: { id: string; amount: number };
}
interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: { id: string; amount: number };
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
  payload: { id: string };
}

interface CreateBank {
  type: ActionType.CREATE_BANK;
  payload: { id: string };
}

export type Action =
  | DepositAction
  | WithdrawAction
  | BankruptAction
  | CreateBank;

//=================================================//

interface AddWindow {
  type: ActionType.ADD_WINDOW;
}

interface RemoveWindow {
  type: ActionType.REMOVE_WINDOW;
  payload: { id: string };
}

export type WindowAction = RemoveWindow | AddWindow;

//=================================================//

interface Calculation {
  type: ActionType.CALCULATE;
  payload: { targetKey: string };
}

export type CalculationAction = Calculation;
