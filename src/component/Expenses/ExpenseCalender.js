import './ExpenseCalender.css';
function ExpenseCalender(props)
{
    const month=props.date.toLocaleString('en-US',{ month: 'long'});
    const day=props.date.toLocaleString('en-US',{ day: '2-digit'});
    const year=props.date.getFullYear();
    return(
        <div className="expense-date">
            <div className="expense-date__month"> {month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day"><h2>{day}</h2></div>
        </div>
    );
}
export default ExpenseCalender;