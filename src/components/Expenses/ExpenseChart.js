import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  let points = [
    {
      month: "JAN",
      value: 0,
    },
    {
      month: "FEB",
      value: 0,
    },
    {
      month: "MAR",
      value: 0,
    },
    {
      month: "APR",
      value: 0,
    },
    {
      month: "MAY",
      value: 0,
    },
    {
      month: "JUN",
      value: 0,
    },
    {
      month: "JUL",
      value: 0,
    },
    {
      month: "AUG",
      value: 0,
    },
    {
      month: "SEP",
      value: 0,
    },
    {
      month: "OCT",
      value: 0,
    },
    {
      month: "NOV",
      value: 0,
    },
    {
      month: "DES",
      value: 0,
    },
    {
      month: "JAN",
      value: 0,
    },
  ];
  for (const expense of props.dataPoints) {
    const expenseMonth = expense.date.getMonth();
    points[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={points} />;
};
export default ExpenseChart;
