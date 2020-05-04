import moment from "moment";

export default [
  {
    id: "1",
    description: "Bike",
    note: "",
    amount: 10,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 15,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "ZOO",
    note: "",
    amount: 5,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
