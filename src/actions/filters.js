//Set Text Filter Function
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

export const setByAmount = () => ({
  type: "SET_BY_AMOUNT",
});

export const setByDate = () => ({
  type: "SET_BY_DATE",
});

export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
