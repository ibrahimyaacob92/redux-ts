import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

function App() {
  const dispatch = useDispatch();
  const {
    depositMoney,
    withdrawMoney,
    bankrupt,
    addWindow,
    removeWindow,
    createBank,
  } = bindActionCreators(actionCreators, dispatch);

  const amountList = useSelector((state: State) => state.bank);
  const windows = useSelector((state: State) => state.window);

  // for new window added
  useEffect(() => {
    if (windows.length - amountList.length === 1) {
      const winId = windows[windows.length - 1];
      createBank(winId);
    }
  }, [windows, amountList]);

  console.log(amountList);
  return (
    <div className="App">
      <h1>Hello App</h1>
      <button onClick={() => addWindow()}>Add</button>
      {windows.map((winId) => (
        <div key={winId}>
          <p>{winId}</p>
          <h1>{amountList.find(({ id }) => id === winId)?.amount}</h1>
          <button onClick={() => depositMoney(winId, 100)}>Deposit</button>
          <button onClick={() => withdrawMoney(winId, 100)}>Withdraw</button>
          <button onClick={() => bankrupt(winId)}>Bankrupt</button>
        </div>
      ))}
      {/* <h1>{amount}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button> */}
    </div>
  );
}

const Bank = () => {};

export default App;
