import React,{usestate} from 'react';
import {Message} from './Message.js';
import './App.css';
export default function App() {
  
  let [count,setcount]=usestate(1);
  let [Day,setDay]=usestate(false)
  return (
    <div className= {`box ${ Day ? 'Daylight' : ''}`}>
    
      <h1> Good { Day ?'Morning' : 'Nite'}</h1>

      <Message counter={count}/>
      <br/>
      <button onClick= {()=> setcount(count+1)}>Update the Number </button>
      <button onClick= {()=> setDay(!Day)}> Change Day </button>
   
    </div>
  );
}
