import React from 'react';
import './ExpenseForm.css';


const ExpenseForm=()=>{
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' placeholder='Enter Title'/>
            </div>
            <div className="new-expense__control">
                <label>Expense</label>
                <input type='number' min='1' step='1'/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31'/>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>

}


export default ExpenseForm;