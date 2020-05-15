import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends Component {
  state = {
    focusCalendar: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (focusCalendar) => {
    this.setState({ focusCalendar });
  };

  onSortChange = (e) => {
    if (e.target.value === "date") {
      return this.props.sortByDate();
    } else if (e.target.value === "amount") {
      return this.props.sortByAmount();
    }
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-box">
          <div className="input-box__item">
            <input
              className="text-input"
              type="text"
              placeholder="Search expense..."
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-box__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-box__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId="start_Id"
              endDate={this.props.filters.endDate}
              endDateId="end_Id"
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.focusCalendar}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
