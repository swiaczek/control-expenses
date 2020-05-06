import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpensesListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <h5>
        {numeral(amount / 100).format("0,0.0")}€ -{" "}
        {moment(createdAt).format("Do MMM, YYYY")}
      </h5>
    </div>
  );
};

export default ExpensesListItem;
