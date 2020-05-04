import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Control Expenses</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Dashboards
      </NavLink>
      <NavLink to="/add" activeClassName="is-active">
        Create Expenses
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </header>
  );
};

export default Header;
