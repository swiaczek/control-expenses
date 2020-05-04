import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import ExpensesListItem from "./ExpensesListItem";

export const ExpensesList = (props) => {
  return (
    <div>
      {props.expenses.length ? (
        props.expenses.map((expense) => {
          return <ExpensesListItem key={expense.id} {...expense} />;
        })
      ) : (
        <p>No expenses</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesList);
