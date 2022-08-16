import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseHandler = (expData) => {
    const expenseData = { ...expData, id: Math.random().toString() }
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  const showForm = () => {
    setIsEditing(true);
  }
  const hideForm = () => {
    setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showForm}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={hideForm} />}
    </div>
  );
};

export default NewExpense;
