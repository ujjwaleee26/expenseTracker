import React,{useState} from 'react';
import ExpenseRender from './component/Expenses/ExpenseRender';
import InputForm from './component/UserInputForm/InputForm';
const Dummy_Data = [
  {
    id: 'e1',
    title: 'Toilet Paper ',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  },
];
function App() 
{
  const[deatilArray,setDetailArray]=useState(Dummy_Data);
  function addExpenseHandler(expense)
  {
        // console.log('In App.JS');
        // console.log(expense);
        setDetailArray((prevData)=>{
          return([ expense,...prevData]);
        });
        
        
        
  }
  return (
    <div>
      <InputForm onAddExpense={addExpenseHandler}/>
      <ExpenseRender detail={deatilArray}/>
    </div>
  );
}

export default App;
