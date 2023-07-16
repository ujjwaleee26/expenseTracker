import React from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";
function ExpenseList(props)
{
    // let showContent=<p>No Expenses Found</p>;
   if(props.detail.length===0)
   {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
   }
    return <ul className="expenses-list">
        {props.detail.map((expense)=><ExpenseItem  
           key={expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date}  />
           )}
    </ul>
}
export default ExpenseList