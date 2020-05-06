import React from "react";
import { connect } from "react-redux";
import selectTotalExpenses from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpensesSummary = ({ totalCount, totalExpenses }) => {
  const expenseWord = totalCount === 1 ? "expense" : "expenses";
  const formattedTotalExpenses = numeral(totalExpenses / 100).format("0,0.0");
  return (
    <div>
      <h3>
        Viewing {totalCount} {expenseWord} totalling {formattedTotalExpenses}€
      </h3>
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
