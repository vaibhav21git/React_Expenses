import React from 'react'
import './Expenses.css'
import Card from './Card'
import Expenseitem from './Expenseitem';

// here card is used as a parent of all because all components
// are present inside the card to reomve repitition in css by
// using props.children since card is custiom elements therfore css is added differently


function Expenses() {
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];
    
      return ( 
      <Card className='expenses'>
          <h2>Let's get started</h2>
        
            {expenses.map((expense)=>
            {  return (<ul>
              <li><Expenseitem id  = {expense.id} title  ={expense.title}
               amount = {expense.amount} date  = {expense.date}/></li>
              </ul>);
            })}
      </Card>
      );
    }


export default Expenses