import {
  addExpense,
  removeExpense,
  editExpense,
  startAddExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureStore([thunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense("abc");
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("abc", { note: "new note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc",
    updates: {
      note: "new note value",
    },
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[1]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[1],
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Keyboard",
    amount: 5000,
    createdAt: 1000,
    note: "This is created first",
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", (done) => {
  const store = createMockStore({});
  const defaultExpense = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...defaultExpense,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultExpense);
      done();
    });
});
