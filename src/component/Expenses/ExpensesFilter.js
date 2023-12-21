import React from 'react';

import './ExpensesFilter.css';
//pro way of writing,but personally very confusing sometimes
const ExpensesFilter = (props) => {
    function YearChangeHandler(event)
    {
         props.onRenderFilter(event.target.value);
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
         <select onChange={YearChangeHandler} value={props.selected} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2023'>2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;