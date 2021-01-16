import React, { useState } from 'react'
import './App.css';

function App() {

  const [userInput, setUserInput] =  useState("1")

  return (
    <div className="calc">
        <div className="calc-display">
          <p>{userInput}</p>
        </div>
        <div className="calc-buttons">
            <button onClick={() => setUserInput([...userInput, 7])}>7</button>
            <button>8</button>
            <button>9</button>
            <button className="operand">/</button>
        
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="operand">x</button>
        
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="operand">+</button>
        
            <button>.</button>
            <button>0</button>
            <button>=</button>
            <button className="operand">-</button>
        
            <button>C</button>
        </div>
    </div>
  );
}

export default App;
