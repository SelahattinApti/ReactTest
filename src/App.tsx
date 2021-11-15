import React from "react";
import "./App.css";
import Example from "./HookExample1";
import HookExample2 from "./useEffectExample";
import Counter from "./ReactReduxExample";
import Counter2 from "./useReduceExample";
import RandomNumbers from "./useContextExample";
import Candies from "./useCallbackExample";
import Listener from "./MousePositionListenExample";

const App = () => (
  <div className="App">
    <HookExample2 />
    <Counter />
    <RandomNumbers></RandomNumbers>
    <Candies></Candies>
    <Listener></Listener>
    <Counter2 />
  </div>
);

export default App;
