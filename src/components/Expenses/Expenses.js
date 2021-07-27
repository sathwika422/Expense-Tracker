import React,{useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses=(props)=> {
  const [filteredyear,setfilteredyear]=useState('2020');
  const filterchangehandlers=(selectedyear)=>{
      
      setfilteredyear(selectedyear);
  }

  const filteredexpenses=props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===filteredyear;
  });

  
  return (
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredyear} 
          onChange={filterchangehandlers}
        />
        <ExpensesChart expenses={filteredexpenses}/>
        <ExpenseList items={filteredexpenses}/>
    </Card>
  );
}

export default Expenses;