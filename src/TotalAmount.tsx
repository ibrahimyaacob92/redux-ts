import React, { ReactElement, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
interface Props {}

function TotalAmount(): ReactElement {
  const dispatch = useDispatch();
  const { calculate } = bindActionCreators(actionCreators, dispatch);
  // const bankState = useSelector((state: State) => state.bank);
  const total = useSelector((state: State) => state.bank.total);
  const bankList = useSelector((state: State) => state.bank.banks);

  useEffect(() => {
    // listening to the changes in state?
    if (true) {
      const values = bankList.map((bank: any) => bank.amount);
      calculate(values);
    }
  }, [bankList]);

  console.log("total calculated/rendered");
  return <h1>Average : {total}</h1>;
}

export default TotalAmount;
