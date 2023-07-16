import ExpenseItem from "./ExpenseItem";
import './ExpenseRender.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
function ExpenseRender(props)
{
      const [filteredYear,setFilteredYear]=useState('2020');

       function UpdateOnRenderHandler(selectedYear)
       {
       //       console.log('ExpenseRender.js');
            console.log(selectedYear);
       setFilteredYear(selectedYear);
       }
       const filteredByYear=props.detail.filter(expense=>{
              return expense.date.getFullYear().toString()=== filteredYear;
       });

       return(
         <div>
              
        <Card className="expenses">
        <ExpensesFilter onRenderFilter={UpdateOnRenderHandler} selected={filteredYear}/>
        {filteredByYear.length===0 && <p>No Expenses Found</p>}
        {filteredByYear.length>0 &&(filteredByYear.map((expense)=><ExpenseItem  
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}  />
        ))};
        {/* {filteredByYear.map((expense)=><ExpenseItem  
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}  />
        )} */}
       {/* <ExpenseItem
        title={props.detail[0].title}
        amount={props.detail[0].amount} 
        date={props.detail[0].date}>
        </ExpenseItem>
        <ExpenseItem
        title={props.detail[1].title}
        amount={props.detail[1].amount} 
        date={props.detail[1].date}>
        </ExpenseItem>
        <ExpenseItem
        title={props.detail[2].title}
        amount={props.detail[2].amount} 
        date={props.detail[2].date}>
        </ExpenseItem>
        <ExpenseItem
        title={props.detail[3].title}
        amount={props.detail[3].amount} 
        date={props.detail[3].date}>
    
        </ExpenseItem> */}
        </Card>
        </div>
       );
}
export default ExpenseRender;