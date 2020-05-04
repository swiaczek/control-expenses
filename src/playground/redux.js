import React from "react";
import { createStore } from "redux";

const Redux = () => {
  const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy,
  });

  const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy,
  });

  const resetCount = () => ({
    type: "RESET",
  });

  const setCount = ({ count } = {}) => ({
    type: "SET",
    count,
  });

  const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + action.incrementBy,
        };
      case "DECREMENT":
        return {
          count: state.count - action.decrementBy,
        };
      case "RESET":
        return {
          count: 0,
        };
      case "SET":
        return {
          count: action.count,
        };
      default:
        return state;
    }
  });

  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(incrementCount({ incrementBy: 5 }));

  store.dispatch(resetCount());

  store.dispatch(decrementCount());
  store.dispatch(decrementCount({ decrementBy: 10 }));

  store.dispatch(setCount({ count: 101 }));

  return <h2>Exercices with Redux</h2>;
};

export default Redux;
