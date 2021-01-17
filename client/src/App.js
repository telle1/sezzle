import React from 'react';
import CalcProvider from './components/CalcProvider';
import Calculator from './components/Calculator';
import './App.css';
// import socket from './socket';
// import io from 'socket.io-client'
// let socket = io('http://localhost:5000', {transports: ['websocket', 'polling', 'flashsocket']});
// export default socket;
// const ENDPOINT = 'http://localhost:5000';

function App() {

  return (
    <CalcProvider>
      <Calculator/>
    </CalcProvider>
  );
}

export default App;

