import React, { useState } from 'react';
import './App.css';

function App() {
  const [state,setState]=useState<number|string>('Start')

  function onClick(){
    const randomNumber=Math.random()
    setState(randomNumber)
  }

  return <>
  <button onClick={onClick}>{state}</button>
  </>
}

export default App;
