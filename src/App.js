
import './App.css';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  const addNewTransaction = (ev) =>{
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL +'/transaction'
    // console.log(url);

    fetch(url,{
      method: "POST",
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({name,description,datetime})
    }).then(response => {
      response.json().then(json => {
        console.log('result',json)
      })
    })
  };

   return (
     <main><h1>Rs. 400<span>.00</span></h1>

     <form onSubmit={addNewTransaction}>
      <div className="basic">
      <input type="text"
      value={name}
      onChange= {(e) => setName(e.target.value)}
      placeholder={'+3000 groceries'}/>
      <input type="datetime-local" 
         value={datetime}
         onChange={(e) => {setDatetime(e.target.value)}}
      />
      </div>
      <div className="description">
      <input type="text" 
      placeholder={'description'}
      value = {description}
      onChange={(e)=>{setDescription(e.target.value)}}
      />
      </div>
      <button type="submit">Add new transaction</button>
     </form>

     <div className="transactions">
      <div className="transaction">
        <div className="left">
          <div className="name">Grocery</div>
          <div className="description">Weekly grocery haul</div>
        </div>
        <div className="right">
          <div className="price red">-Rs. 3000</div>
          <div className="datetime">2025-07-16 14:14 </div>
        </div>
      </div>

      <div className="transaction">
        <div className="left">
          <div className="name">Stipend</div>
          <div className="description">Monthly stipend</div>
        </div>
        <div className="right">
          <div className="price green">+Rs. 133000</div>
          <div className="datetime">2025-07-16 14:14 </div>
        </div>
      </div>
     </div>
     </main>
  );
}

export default App;
