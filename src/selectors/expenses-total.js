export default (expenses) => {
  const total = expenses
    .map((expense) => expense.amount)
    .reduce((a, b) => a + b, 0);
  return total;
};
