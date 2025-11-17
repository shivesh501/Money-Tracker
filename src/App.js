
import './App.css';

function App() {
  return (
     <main><h1>Rs. 400<span>.00</span></h1>
     
     <form>
      <div className="basic">
      <input type="text" placeholder={'+3000 groceries'}/>
      <input type="datetime-local" />
      </div>
      <div className="description">
      <input type="text" placeholder={'description'}/>
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
