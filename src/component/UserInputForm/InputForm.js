import React from "react";
import './InputForm.css';
import FormTag from './FormTag';
function InputForm(props)
{
    function SaveExpenseDetailsHandler(enteredExpenseData)
    {
         const expenseData={
             ...enteredExpenseData,
             id: Math.random().toString()
    };
    //console.log(expenseData);
    //its done for checking
    props.onAddExpense(expenseData);
}
      return(
        <div className="new-expense">
            <FormTag onSaveExpenseDetails={SaveExpenseDetailsHandler}/>
        </div>
      )
}
export default InputForm;