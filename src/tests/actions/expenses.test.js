import {
  addExpense,
  removeExpense,
  editExpense,
  startAddExpense,
  setExpense,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const uid = "test";
const defaultAuth = { auth: { uid } };
const createMockStore = configureStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, amount, createdAt, note }) => {
    expensesData[id] = { description, amount, createdAt, note };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

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
  const store = createMockStore(defaultAuth);
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
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", (done) => {
  const store = createMockStore(defaultAuth);
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
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultExpense);
      done();
    });
});

test("should setup set expense action object", () => {
  const action = setExpense(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSE",
    expenses,
  });
});

test("should fetch expenses from database on start", (done) => {
  const store = createMockStore(defaultAuth);
  store.dispatch(startSetExpenses(expenses)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSE",
      expenses,
    });
    done();
  });
});

test("should remove expense from firebase", (done) => {
  const store = createMockStore(defaultAuth);
  store.dispatch(startRemoveExpense(expenses[1].id)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id: expenses[1].id,
    });
    done();
  });
});

test("should edit expense from firebase", (done) => {
  const store = createMockStore(defaultAuth);
  const id = expenses[1].id;
  const updates = { amount: 5611 };
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "EDIT_EXPENSE",
      id,
      updates,
    });
    done();
  });
});
