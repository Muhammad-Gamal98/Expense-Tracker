import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filterdYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };
  const filteredExpense = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterdYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterdYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseChart dataPoints={filteredExpense} />
      <ExpenseList item={filteredExpense} />
    </Card>
  );
};
export default Expenses;
