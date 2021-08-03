import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import TotalAmount from "./components/TotalAmount";
import Banks from "./components/Banks";
import Debt from "./components/Debt";

function App() {
  const dispatch = useDispatch();
  const { addWindow } = bindActionCreators(actionCreators, dispatch);

  console.log("app rerendered");
  return (
    <div className="App">
      <h1>Hello App</h1>
      <TotalAmount />
      <Debt />
      <button onClick={() => addWindow()}>Add</button>
      <Banks />
    </div>
  );
}

export default App;
