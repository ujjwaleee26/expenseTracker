import React,{ useState } from 'react';
import './ExpenseItem.css';
import ExpenseCalender from './ExpenseCalender';
import Card from '../UI/Card';
function ExpenseItem(props)
{
    const [title,setTitle]=useState(props.title ); //array retrun krega
    function clickHandler()
    {
        setTitle('Updated');
        console.log(title);
    }
    return (
        <li>
    <Card className="expense-item">
       
        <ExpenseCalender date={props.date}/>
    
         <div className="expense-item__description">
              <h2>{title}</h2>
              <div className="expense-item__price">${props.amount}</div>
         </div>
         <button onClick={clickHandler}>Tap me</button>
    </Card>
    </li> );
}
export default ExpenseItem;