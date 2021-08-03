import { ActionType } from "../action-types";
import { Action } from "../actions";
const initialState: { id: string; amount: number }[] = [];

const filterAndPop = (idValue: string | number, idKey: string, list: any[]) => {
  let poppedItem: any;
  const newList = list.filter((item) => {
    if (item[idKey] !== idValue) return true;
    poppedItem = item;
    return false;
  });
  return [newList, poppedItem];
};

const reducer = (
  state: { id: string; amount: number }[] = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.CREATE_BANK: {
      const { id } = action.payload;
      return [...state, { id, amount: 0 }];
    }
    case ActionType.DEPOSIT: {
      const { id: winId, amount } = action.payload;
      const [newState, updatedItem] = filterAndPop(winId, "id", state);
      updatedItem.amount = updatedItem.amount + amount;
      return [...newState, updatedItem];
    }
    case ActionType.WITHDRAW: {
      const { id: winId, amount } = action.payload;
      const [newState, updatedItem] = filterAndPop(winId, "id", state);
      updatedItem.amount = updatedItem.amount - amount;
      return [...newState, updatedItem];
    }
    case ActionType.BANKRUPT: {
      const { id: winId } = action.payload;
      const [newState, updatedItem] = filterAndPop(winId, "id", state);
      updatedItem.amount = 0;
      return [...newState, updatedItem];
    }
    default:
      return state;
  }
};

export default reducer;
