import React from "react";
import { Link } from "react-router-dom";

const ExpensesListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <h5>
        {amount}$ - {createdAt}
      </h5>
    </div>
  );
};

export default ExpensesListItem;
