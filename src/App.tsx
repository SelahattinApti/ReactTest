import React from "react";
import "./App.css";
import Example from "./HookExample1";
import HookExample2 from "./useEffectExample";
import Counter from "./ReactReduxExample";
import Counter2 from "./useReduceExample";
import RandomNumbers from "./useContextExample";
import Candies from "./useCallbackExample";
import Listener from "./MousePositionListenExample";
import { ThemeContext, themes } from "./contex/theme-context";
const App = () => {
  return (
    <div className="App">
      <HookExample2 />
      <Counter />
      <RandomNumbers />
      <Candies />
      <Listener />
      <Counter2 />
    </div>
  );
};
export default App;
