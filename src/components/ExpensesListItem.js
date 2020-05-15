import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpensesListItem = ({ id, description, amount, createdAt }) => {
  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h4 className="list-item__title">{description}</h4>
        <span className="list-item__subtitle">
          {numeral(amount / 100).format("0,0.0")}€
        </span>
      </div>
      <span>{moment(createdAt).format("Do MMM, YYYY")}</span>
    </Link>
  );
};

export default ExpensesListItem;
