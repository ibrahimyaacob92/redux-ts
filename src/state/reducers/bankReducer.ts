import { ActionType } from "../action-types";
import { Action } from "../actions";

type Banks = {
  id: string;
  amount: number;
};

const initialState: { total: number; debt: number; banks: Banks[] } = {
  total: 0, // imagine the total value is calculated by some other API
  debt: 5000,
  banks: [],
};

const reducer = (
  state: { total: number; banks: Banks[]; debt: number } = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.CREATE_BANK: {
      const { id } = action.payload;
      const { banks } = state;
      const updatedBanks = [...banks, { id, amount: 0 }];
      return { ...state, banks: updatedBanks };
    }
    case ActionType.DEPOSIT: {
      const { id: winId, amount } = action.payload;
      const { banks } = state;
      const [filteredBanks, updatedBank] = filterAndPop(winId, "id", banks);
      updatedBank.amount = updatedBank.amount + amount;
      return { ...state, banks: [...filteredBanks, updatedBank] };
    }
    case ActionType.WITHDRAW: {
      //   const { id: winId, amount } = action.payload;
      //   const [newState, updatedItem] = filterAndPop(winId, "id", state);
      //   updatedItem.amount = updatedItem.amount - amount;
      //   return [...newState, updatedItem];
      return state;
    }

    case ActionType.BANKRUPT: {
      // const { id: winId } = action.payload;
      // const [newState, updatedItem] = filterAndPop(winId, "id", state);
      // updatedItem.amount = 0;
      // return [...newState, updatedItem];
      return state;
    }

    case ActionType.CALCULATE: {
      const { key, value } = action.payload;

      return { ...state, [key]: value };
    }
    default:
      return state;
  }
};

// helper

const filterAndPop = (idValue: string | number, idKey: string, list: any[]) => {
  let poppedItem: any;
  const newList = list.filter((item) => {
    if (item[idKey] !== idValue) return true;
    poppedItem = item;
    return false;
  });
  return [newList, poppedItem];
};

export default reducer;
