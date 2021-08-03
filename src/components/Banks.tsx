import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";
import { bindActionCreators } from "redux";

interface Props {}

function Banks({}: Props): ReactElement {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt, createBank } =
    bindActionCreators(actionCreators, dispatch);

  const bankList = useSelector((state: State) => state.bank.banks);
  const windows = useSelector((state: State) => state.window);

  useEffect(() => {
    if (windows.length - bankList.length === 1) {
      const winId = windows[windows.length - 1];
      createBank(winId);
    }
  }, [windows, bankList]);

  console.log("re-renders");

  return (
    <>
      {windows.map((winId) => (
        <div key={winId}>
          <p>{winId}</p>
          <h1>{bankList.find(({ id }) => id === winId)?.amount}</h1>
          <button onClick={() => depositMoney(winId, 100)}>Deposit</button>
          <button onClick={() => withdrawMoney(winId, 100)}>Withdraw</button>
          <button onClick={() => bankrupt(winId)}>Bankrupt</button>
        </div>
      ))}
    </>
  );
}

export default Banks;
