import React ,  {useState}from 'react'
import './Expenseform.css'


//always event.target.value will be a string  that is intialized with ' '
function Expenseform() {

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





  return (<form>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type = "text" onChange={titlechangehandler}/>
        </div>

        <div className='new-expense__control'>
            <label>Amount</label>
            <input type = "number" min ="0.01" step = "0.01" onChange={amtchangehandler}/>
        </div>

        <div className='new-expense__control'>
            <label>Date</label>
            <input type = "date" min = '2019-01-01' max = '2022-12-31' onChange={datechangehandler}/>
        </div>
        
        <div className='new-expense__actions'>
            <button type = 'submit'>Add expense </button>
        </div>
    </div>
  </form>
  )
}

export default Expenseform