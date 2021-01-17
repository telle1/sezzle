import React, { useState, useEffect } from 'react';
import Input from './components/input/Input';
import Keyboard from './components/keyboard/Keyboard';
import PastCalcs from './components/past_calcs/PastCalcs';
import './App.css';
import socket from './socket';
// import io from 'socket.io-client'
// let socket = io('http://localhost:5000', {transports: ['websocket', 'polling', 'flashsocket']});
// export default socket;

const ENDPOINT = 'http://localhost:5000';

function App() {
  const [currNum, setCurrNum] = useState('');
  const [prevNum, setPrevNum] = useState('');
  const [operator, setOperator] = useState('');
  const [userInput, setUserInput] = useState('');
  const [smallCalcDisplay, setSmallCalcDisplay] = useState('');

  const [calculations, setCalculations] = useState([]);

  console.log(
    'userinput:',
    userInput,
    'currnum:',
    currNum,
    'prevnum:',
    prevNum,
    'operator:',
    operator
  );

  const addNum = num => {
    setUserInput(userInput + num);
    setSmallCalcDisplay(smallCalcDisplay + num);
    console.log(userInput);
  };

  const addOperation = operation => {
    setPrevNum(userInput);
    setSmallCalcDisplay(userInput + operation);
    setUserInput('');
    setOperator(operation);
  };

  const handleClear = () => {
    setUserInput('');
    setSmallCalcDisplay('');
    setPrevNum('');
    setCurrNum('');
    setOperator('');
  };

  const allowZeroes = zero => {
    if (userInput !== '') {
      setUserInput(userInput + zero);
      console.log(userInput);
    }
  };

  const solveEq = () => {
    setCurrNum(userInput);
  };


  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected to backend');
    });

    const ops = {
      '+': (prevNum, currNum) => prevNum + currNum,
      '-': (prevNum, currNum) => prevNum - currNum,
      '*': (prevNum, currNum) => prevNum * currNum,
      '/': (prevNum, currNum) => prevNum / currNum
    };

    if (currNum !== '') {
      console.log(currNum);
      if (operator !== '') {
        let answer = ops[operator](parseFloat(prevNum), parseFloat(currNum));
        setUserInput(answer);
        setOperator('');
        setCurrNum('');
        setCalculations([...calculations, [smallCalcDisplay, `=${answer}`]]);
      }
    }

    // return () => {
    //   socket.emit('disconnect');
    //   socket.off()
    // }
  }, [currNum, operator, prevNum]);

  return (
    <React.Fragment>
      <div className='calc'>
        {smallCalcDisplay}
        <Input userInput={userInput}></Input>
        <Keyboard
          addNum={addNum}
          handleClear={handleClear}
          allowZeroes={allowZeroes}
          solveEq={solveEq}
          addOperation={addOperation}
        />
      </div>
      <div className='past-calc'>
        <PastCalcs calculations={calculations} />
      </div>
    </React.Fragment>
  );
}

export default App;

