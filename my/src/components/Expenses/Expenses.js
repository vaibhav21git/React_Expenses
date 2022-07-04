import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import Expenseitem from './Expenseitem';
import Expensesfilter from './Expensefilter';

// here card is used as a parent of all because all components
// are present inside the card to reomve repitition in css by
// using props.children since card is custiom elements therfore css is added differently


function Expenses(props) {

     const [curryear,setcurryear] = useState('2020');

     function viewyear(year)
     {
         setcurryear(year);
         console.log(year);
     }
          
      return ( 
        <div>
      <Card className='expenses'>
      <Expensesfilter selected = {curryear} onChangeyear = {viewyear}/>
            {props.item.map((expense)=>
            {  return (<ul>
              <li><Expenseitem id  = {expense.id} title  ={expense.title}
               amount = {expense.amount} date  = {expense.date}/></li>
              </ul>);
            })}
      </Card>
      </div>
      );
    }


export default Expenses