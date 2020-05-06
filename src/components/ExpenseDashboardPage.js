import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpensesSummary />
      <ExpensesListFilters />
      <ExpensesList />
    </div>
  );
};

export default ExpenseDashboardPage;
