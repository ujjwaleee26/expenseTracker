import './FormTag.css';
import React,{useState} from 'react';
function FormTag(props)
{
     const[enteredTitle,setEnteredTitle]=useState('');
     const[enteredAmount,setEnteredAmount]=useState('');
     const[enteredDate,setEnteredDate]=useState('');
    // // const [userInput,setUserInput]=useState({
    // //     enteredTitle:'',
    // //     enteredAmount:'',
    // //     enteredDate:''
    // // });
    function titleChangeHandler(event)
    {
         setEnteredTitle(event.target.value);
    //     setUserInput({
    //         ...userInput,         //it takes object and pull out all key value pair so that other data is not lost
    //         enteredTitle:event.target.value,
    //     })---------------------> React schedule state update,so many state update might lead to faulty state render
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value};
    // });
     }
    function amountChangeHandler(event)
    {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,         //it takes object and pull out all key value pair so that other data is not lost
        //     enteredAmount:event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredAmount:event.target.value};
        // });
    }
    function dateChangeHandler(event)
    {
        console.log(event.target.value);
         setEnteredDate(event.target.value);
    //     // setUserInput({
    //     //     ...userInput,         //it takes object and pull out all key value pair so that other data is not lost
    //     //     enteredDate:event.target.value,
    //     // })
    //     // setUserInput((prevState)=>{
    //     //     return {...prevState,enteredDate:event.target.value};
    //     // });
    // 
    }
    // function inputChangeHandler(indentifier,value)
    // {
    //             if(indentifier==='title')
    //             setEnteredTitle(value);
    //             else if(indentifier==='date')
    //             setEnteredDate(value);
    //             else
    //             setEnteredAmount(value);
    // }
    // onChange={(event)=> inputChangeHandler('title',event.target.value)} is used
    function submitHandler(event)
    {
           event.preventDefault();
           const pushData={
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate),
           };
         //  console.log(pushData);
         props.onSaveExpenseDetails(pushData);
           setEnteredTitle('');
           setEnteredAmount('');
           setEnteredDate('');
           setShowForm(false);
           setButtonShow(true);
        
    }
    const[showForm,setShowForm]=useState(false);
    const[buttonShow,setButtonShow]=useState(true);
    function formDiplay()
    {
        setShowForm(true);
        setButtonShow(false);
    }
    function CloseForm()
    {
        setShowForm(false);
        setButtonShow(true);
    }



  return(
    <div>
    {showForm && (<form onSubmit= {submitHandler}>
        
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'> 
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
       
        <div className='new-expense__actions '>
         <button  onClick={CloseForm}>Cancel</button> 
        <button type='submit'>Add Expense</button>  
        {/* onClick not use with type=submit */}
        </div>
       
    </form>)}
    {buttonShow && (<button onClick={formDiplay}>Add New Expenses</button>)};
    </div> 
   
  );
  }
export default FormTag;