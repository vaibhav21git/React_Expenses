import React from 'react'
import Expenseform from './Expenseform';
import  './Newexpense.css'


function Newexpense(props) {

    function saveexpensedatahandler(enteredexpensedata)
    {
        const expensedata = {
            ...enteredexpensedata,
            id : Math.random().toString()
        }

        props.onaddexpense(expensedata);
    }

    


  return (<div className='new-expense'>
    <Expenseform onSaveexpensedata = {saveexpensedatahandler}/>
    </div>
  )
};

export default Newexpense