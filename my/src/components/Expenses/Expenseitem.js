import React from 'react'
import './Expenseitem.css'
import Expensedate from './Expensedate'
import Card from '../UI/Card'
import {useState} from 'react';


// here title is not upadted initially because the componenet is intially
// rendered first time , not rendered again to show the changes
function Expenseitem(props) {


    const [title , settitle] = useState(props.title);

    function clickhandler(events)
    {
        settitle("updatee");
    }

    


    return <Card className = 'expense-item'>
            <Expensedate date  = {props.date}/>
        <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick = {clickhandler}>Change Title</button>
        </Card>
}

export default Expenseitem