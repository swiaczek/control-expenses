import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectTotalExpenses from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpensesSummary = ({ totalCount, totalExpenses }) => {
  const expenseWord = totalCount === 1 ? "expense" : "expenses";
  const formattedTotalExpenses = numeral(totalExpenses / 100).format("0,0.0");
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{totalCount}</span> {expenseWord} totalling{" "}
          <span>{formattedTotalExpenses}€</span>
        </h1>
        <Link to="/add" className="button">
          Add expense
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    totalCount: visibleExpenses.length,
    totalExpenses: selectTotalExpenses(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
