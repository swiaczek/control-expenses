import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

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
  const expenseData = {
    description: "Rent",
    note: "Monthly rent",
    amount: 5000,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with defaul values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
