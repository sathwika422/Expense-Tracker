import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [EnteredTitle, setEnteredTitle] = useState('');
    const [EnteredAmount, setEnteredAmount] = useState('');
    const [EnteredDate, setEnteredDate] = useState('');
    //const [userInput,setUserInput]=useState({
    //    EnteredTitle:'',
    //    EnteredAmount:'',
    //    EnteredDAte:'',
    //});

    const titlechangehandler = (event) => {
        setEnteredTitle(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    EnteredTitle: event.target.value
        //});
        //setUserInput((prevState)=>{
        //    return {...prevState,EnteredTitle: event.target.value};
        //});
        
    };


    const amountchangehandler = (event) => {
        setEnteredAmount(event.target.value);
        //setUserInput({
        //   ...userInput,
        //EnteredAmount: event.target.value
        //});
    };



    const datechangehandler = (event) => {
        setEnteredDate(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    EnteredDate: event.target.value
        //});
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title: EnteredTitle,
            amount: +EnteredAmount,
            date: new Date(EnteredDate)
        }

        props.onSaveExpenseData(ExpenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={EnteredTitle} onChange={titlechangehandler} />
            </div>
            <div className="new-expense__control">
                <label>Expense</label>
                <input type='number' min='1' step='1' value={EnteredAmount} onChange={amountchangehandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={EnteredDate} onChange={datechangehandler} />
            </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>
        
    </form>
    );

}


export default ExpenseForm;