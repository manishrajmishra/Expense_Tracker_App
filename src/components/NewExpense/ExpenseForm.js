import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Single State
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // });

  const titleChangeHandler = (event) => {
    // multiple state
    setEnteredTitle(event.target.value);
    // Single State
    // Not Compatible
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
    // Compatible
    // setUserInput((prevState) => {
    //   return { ...userInput, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // multiple state
    setEnteredAmount(event.target.value);
    // Single State
    // Not Compatible
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });
    // Compatible
    // setUserInput((prevState) => {
    //   return { ...userInput, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // multiple state
    setEnteredDate(event.target.value);
    // Single State
    // Not Compatible
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });
    // Compatible
    // setUserInput((prevState) => {
    //   return { ...userInput, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
