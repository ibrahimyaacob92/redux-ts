import React, { ReactElement, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
interface Props {}

function Debt(): ReactElement {
  const dispatch = useDispatch();
  const { calculate } = bindActionCreators(actionCreators, dispatch);
  const total = useSelector((state: State) => state.bank.total);
  const debt = useSelector((state: State) => state.bank.debt);

  console.log("Rednering Debt");
  useEffect(() => {
    // listening to the changes in state?
    if (true) {
      calculate("debt", [total, debt]);
    }
  }, [total]);

  console.log("total calculated/rendered");
  return <h1>Debt : {debt}</h1>;
}

export default Debt;
