import React from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import Expenseitem from './Expenseitem';

// here card is used as a parent of all because all components
// are present inside the card to reomve repitition in css by
// using props.children since card is custiom elements therfore css is added differently


function Expenses(props) {
   
      return ( 
      <Card className='expenses'>
        
            {props.item.map((expense)=>
            {  return (<ul>
              <li><Expenseitem id  = {expense.id} title  ={expense.title}
               amount = {expense.amount} date  = {expense.date}/></li>
              </ul>);
            })}
      </Card>
      );
    }


export default Expenses