// import { v4 as uuid } from "uuid";
import database from "../firebase/firebase";

//Add expense function

export const addExpense = (expense = {}) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};
//Remove Expense Function
export const removeExpense = (id) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = (id) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then((ref) => {
        dispatch(removeExpense(id));
      });
  };
};

//Edit Expense Function
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

//Set Expenses

export const setExpense = (expenses) => ({
  type: "SET_EXPENSE",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        dispatch(setExpense(expenses));
      });
  };
};
