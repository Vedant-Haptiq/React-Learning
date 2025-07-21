import React, { useState} from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(10);
  let addcounter = ()=>{
    if(counter<20){
      setCounter(counter+1);
    } 
    
    
  }
  let removeCounter = ()=>{
    if(counter>0)
    {
      setCounter(counter - 1);
    }
  }
  
  return (
    <>
      <h2>counter value : {counter} </h2>
      <button onClick={addcounter}>add value : {counter}</button>
      <button onClick={removeCounter}>remove value : {counter}</button>
    </>
  )
}

export default App
