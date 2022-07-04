import React ,  {useState}from 'react'
import './Expenseform.css'


//always event.target.value will be a string  that is intialized with ' '
function Expenseform(props) {

    const [currtitle,setcurrtitle] = useState('');
    const [curramt,setcurramt] = useState('');
    const [currdate,setcurrdate] = useState('');

   const amtchangehandler = (event) => {
     setcurramt(event.target.value); 
   };
  
   const titlechangehandler = (event) => {
    setcurrtitle(event.target.value); 
  };

  const datechangehandler = (event) => {
    setcurrdate(event.target.value); 
  };

  function submithandler(event)
  {
       event.preventDefault();

       const expenseData  = {
          title  : currtitle,
          amount : curramt,
          date : new Date(currdate)
       }

       props.onSaveexpensedata(expenseData);

// here   props.onSaveexpensedata is a function itself    


       setcurramt('');
       setcurrtitle('');
       setcurrdate('');
  }



  return (<form onSubmit = {submithandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type = "text" value  = {currtitle} onChange={titlechangehandler}/>
        </div>

        <div className='new-expense__control'>
            <label>Amount</label>
            <input type = "number"  value  = {curramt} min ="0.01" step = "0.01" onChange={amtchangehandler}/>
        </div>

        <div className='new-expense__control'>
            <label>Date</label>
            <input type = "date"  value  = {currdate} min = '2019-01-01' max = '2022-12-31' onChange={datechangehandler}/>
        </div>
        
        <div className='new-expense__actions'>
            <button type = 'submit'>Add expense </button>
        </div>
    </div>
  </form>
  )
}

export default Expenseform