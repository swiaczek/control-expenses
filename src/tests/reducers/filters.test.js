import filterReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filterReducer(undefined, { type: "SET_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  };
  const state = filterReducer(currentState, { type: "SET_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const action = {
    type: "SET_TEXT_FILTER",
    text: "Some text",
  };
  const state = filterReducer(undefined, action);
  expect(state.text).toBe("Some text");
});

test("should set startDate", () => {
  const action = {
    type: "SET_START_DATE",
    startDate: 1000,
  };
  const state = filterReducer(undefined, action);
  expect(state.startDate).toBe(1000);
});

test("should set endDate", () => {
  const action = {
    type: "SET_END_DATE",
    endDate: 1500,
  };
  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(1500);
});
