import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import ExpensesListItem from "./ExpensesListItem";

export const ExpensesList = (props) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="visable-for-desktop">Expense</div>
        <div className="visable-for-desktop">Amount</div>
        <div className="visable-for-mobile">Expenses</div>
      </div>
      {props.expenses.length ? (
        props.expenses.map((expense) => {
          return <ExpensesListItem key={expense.id} {...expense} />;
        })
      ) : (
        <span className="list-item list-item--message">No expenses</span>
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
