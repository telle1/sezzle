import React, { useState, useEffect } from 'react'
import Input from './components/input/Input'
import Keyboard from './components/keyboard/Keyboard'
import './App.css';
import socket from './socket'
// import io from 'socket.io-client'
// let socket = io('http://localhost:5000', {transports: ['websocket', 'polling', 'flashsocket']});
// export default socket;


const ENDPOINT = 'http://localhost:5000';

function App() {

  const [userInput, setUserInput] =  useState([5])
  const [calculations, setCalculations] = useState([])


  useEffect(() => {
    
    // socket = io('http://localhost:5000', {transports: ['websocket', 'polling', 'flashsocket']});

    socket.on('connect', () => {
      console.log('connected to backend');
    })


    socket.on('input', ({ test }) => {
      setUserInput([...userInput, test])
    })

    // return () => {
    //   socket.emit('disconnect');
    //   socket.off()
    // }
  }, [userInput]);

  return (
    <div className="calc">
        <Input userInput={userInput}></Input>
        <Keyboard userInput={userInput} setUserInput={setUserInput}></Keyboard>
    </div>
  );
}

export default App;




