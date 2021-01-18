import React, { createContext, useState, useEffect } from 'react';
import socket from '../socket';
export const CalcContext = createContext({});

const ops = {
  '+': (prevNum, currNum) => prevNum + currNum,
  '-': (prevNum, currNum) => prevNum - currNum,
  '*': (prevNum, currNum) => prevNum * currNum,
  '/': (prevNum, currNum) => prevNum / currNum,
};

function CalcProvider(props) {
  const [prevNum, setPrevNum] = useState('');
  const [operator, setOperator] = useState('');
  const [userInput, setUserInput] = useState('');
  const [smallCalcDisplay, setSmallCalcDisplay] = useState('');
  const [calculations, setCalculations] = useState([]);

  useEffect(() => {

    let savedCalculations = localStorage.getItem('calculations');
    if (savedCalculations) {
      setCalculations(JSON.parse(savedCalculations));
    }

    socket.on('connect', () => {
      console.log('Connected from client');
    });

    socket.on('calculation', ({ calculation }) => {
      setCalculations(calculations => [calculation, ...calculations.slice(0,9)]);
    });

    return () => {
      socket.off('Disconnected from client');
    };
  }, []);


  const addNum = num => {
    setUserInput(userInput + num);
    setSmallCalcDisplay(smallCalcDisplay + num);
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
    setOperator('');
  };

  const allowZeroes = zero => {
    if (userInput !== '') {
      setUserInput(userInput + zero);
      setSmallCalcDisplay(smallCalcDisplay + zero);
    }
  };

  const solveEq = () => {
    if(prevNum && operator){
      let answer = ops[operator](parseFloat(prevNum), parseFloat(userInput));
      setUserInput(answer);
      setOperator('');
      socket.emit('calculation', { calculation: [smallCalcDisplay, `=${answer}`]});
      }
  };

  return (
    <CalcContext.Provider
      value={{
        addNum,
        addOperation,
        handleClear,
        allowZeroes,
        solveEq,
        setCalculations,
        calculations,
        userInput,
        smallCalcDisplay,
        prevNum
      }}
    >
      {props.children}
    </CalcContext.Provider>
  );
}

export default CalcProvider;


