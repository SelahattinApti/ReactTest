import React from "react";
import { useEffect, useState, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

const initialState = { count: 0 };

const Counter2 = () => {
  const count = useSelector((state) => state.counter.value);
  const disptch = useDispatch();
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        disptch(decrement());
        return { count: count };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: count });

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <span className={styles.value}>{state.count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Counter2;
