import React, { useState } from 'react'
import Input from './components/input/Input'
import Keyboard from './components/keyboard/Keyboard'
import './App.css';

function App() {

  const [userInput, setUserInput] =  useState("1")

  return (
    <div className="calc">
        <Input userInput={userInput}></Input>
        <Keyboard userInput={userInput} setUserInput={setUserInput}></Keyboard>

    </div>
  );
}

export default App;
