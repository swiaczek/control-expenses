import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render ExpensesSummary correctly with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary totalCount={1} totalExpenses={20000} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary correctly with mulitplay expense", () => {
  const wrapper = shallow(
    <ExpensesSummary totalCount={20} totalExpenses={20000} />
  );
  expect(wrapper).toMatchSnapshot();
});
