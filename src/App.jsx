


import { useState } from 'react';
import './style.css';
function App() {
  let [count, setCount] = useState(0);
  return (
    <div className='count_holder'>
      <p>Custom Count</p>
      <div className="heading"><h1>{count}</h1></div>
      <div className="btnContainer">
      <button className='increase btn' onClick={()=> setCount(count+1)}>Raise</button>
      <button className='jump btn' onClick={()=> setCount(count+500)}>+500</button>
      <button className='jump btn' onClick={()=> setCount(count+10000)}>+10000</button>
      <button className='decrease btn' onClick={()=> setCount(count-1)}>Reduce</button>
      <button className='reset btn' onClick={()=> setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
export default App;