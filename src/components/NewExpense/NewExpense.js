import React,{useState} from 'react';
import './NewExpense.css'; 
import ExpenseForm from './ExpenseForm';


const NewExpense=(props)=>{
    const [isediting,setisediting]=useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setisediting(false);
    };

    const starteditinghandler=()=>{
        setisediting(true);
    }

    const stopeditinghandler=()=>{
        setisediting(false);
    }


    return (
        <div className="new-expense">
            {!isediting && <button onClick={starteditinghandler}>Add New Expense</button>}
            {isediting && <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopeditinghandler}
                />}
        </div>
    );
};


export default NewExpense;