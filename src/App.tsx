import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import TotalAmount from "./TotalAmount";
import Banks from "./Banks";

function App() {
  const dispatch = useDispatch();
  const { addWindow } = bindActionCreators(actionCreators, dispatch);

  console.log("app rerendered");
  return (
    <div className="App">
      <h1>Hello App</h1>
      <TotalAmount />
      <button onClick={() => addWindow()}>Add</button>
      <Banks />
    </div>
  );
}

export default App;
