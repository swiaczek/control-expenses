import React from "react";
import { createStore, combineReducers } from "redux";

const expenses = () => {
  const firstItem = store.dispatch(
    addExpense({ description: "Bike", amount: 5000, createdAt: -1000 })
  );
  const secondItem = store.dispatch(
    addExpense({ description: "Car", amount: 54000, createdAt: -550 })
  );
  // store.dispatch(removeExpense({ id: firstItem.expense.id }));
  // store.dispatch(editExpense(secondItem.expense.id, { amount: 6050 }));
  // store.dispatch(setTextFilter("bi"));
  // store.dispatch(setTextFilter());
  store.dispatch(setByAmount());
  // store.dispatch(setByDate());
  store.dispatch(setStartDate(-1100));
  // store.dispatch(setStartDate());
  store.dispatch(setEndDate(1000));

  // eslint-disable-next-line no-unused-vars
  const demoState = {
    expenses: [
      {
        id: "nsadasisad",
        description: "Holiday Cash",
        note: "This is money for my future vacation!",
        amount: 4500,
        createdAt: 0,
      },
    ],
    filters: {
      text: "Cash",
      sortBy: "amount", //date or sth else
      startDate: undefined,
      endDate: undefined,
    },
  };

  return <h1>Expenses Demo</h1>;
};

export default expenses;
