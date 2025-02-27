
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
 const [work, workState] = useState(0)

 function implement(){
   workState(work + 1)
 }

  return (
    <div>
        <button onClick={implement}>increase</button>
        <p>Button clicked {work} times</p>
    </div>
  )
}

export default App
