import React, {useState} from 'react';
import {Message} from './Message.js';
import './App.css';
export default function App() {
  
  let [count,setcount]= useState(1);
  let [day, setDay]= useState(false)
  return (
    <div className= {`box ${day ? 'daylight' : ''}`}>
    
      <h1> Good { day ? 'Morning' : 'Nite'}</h1>

      <Message counter={count}/>
      <br/>
      <button onClick= {() => setcount(count+1)}>Update the Number </button>
      <button onClick= {() => setDay(!day)}> Change Day </button>
   
    </div>
  );
}
