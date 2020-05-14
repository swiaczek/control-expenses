import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => {
  return (
    <header>
      <h1>Control Expenses</h1>
      <NavLink to="/dashboard" activeClassName="is-active">
        Dashboards
      </NavLink>
      <NavLink to="/add" activeClassName="is-active">
        Create Expenses
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
      <button onClick={startLogout}>Logout</button>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
