import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');
  const [formInput, setFormInput] = useState({
  title:'',amount:'',date:''
});
  
  const titleChangeHandler = (event) => {
    setFormInput(prevstate => {
      return { ...prevstate, title: event.target.value }
    });
    // setTitle(event.target.value);
  }
  const amountChangeHandler = (event) => {
     setFormInput((prevstate) => {
       return { ...prevstate, amount: event.target.value };
     });
    // setAmount(event.target.value);
  }
  const dateChangeHandler = (event) => {
     setFormInput((prevstate) => {
       return { ...prevstate, date: event.target.value };
     });
    // setDate(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    const submitData = {
      title:formInput.title,
      amount:formInput.amount,
      date: new Date(formInput.date)
    }
    props.onSaveExpenseData(submitData);
    setFormInput({ title: "", amount: "", date: '' });
    // console.log(submitData)

  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="text"
            value={formInput.title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={formInput.amount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={formInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
  
}
export default ExpenseForm;