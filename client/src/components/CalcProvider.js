import React, { createContext, useState } from 'react';
import socket from '../socket';
export const CalcContext = createContext({});

const ops = {
  '+': (prevNum, currNum) => prevNum + currNum,
  '-': (prevNum, currNum) => prevNum - currNum,
  '*': (prevNum, currNum) => prevNum * currNum,
  '/': (prevNum, currNum) => prevNum / currNum,
};

function CalcProvider(props) {
  const [currNum, setCurrNum] = useState('');
  const [prevNum, setPrevNum] = useState('');
  const [operator, setOperator] = useState('');
  const [userInput, setUserInput] = useState('');
  const [smallCalcDisplay, setSmallCalcDisplay] = useState('');

  const [calculations, setCalculations] = useState([]);

  console.log('calculations', calculations)

  const addNum = (num) => {
    setUserInput(userInput + num);
    setSmallCalcDisplay(smallCalcDisplay + num);
  };

  const addOperation = (operation) => {
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

  const allowZeroes = (zero) => {
    if (userInput !== '') {
      setUserInput(userInput + zero);
      console.log(userInput);
    }
  };

  const solveEq = () => {
    setCurrNum(userInput);
    if(prevNum && operator){
      let answer = ops[operator](parseFloat(prevNum), parseFloat(userInput));
      setUserInput(answer);
      setOperator('');
      setCurrNum('');
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
        currNum,
        operator,
        prevNum,
      }}
    >
      {props.children}
    </CalcContext.Provider>
  );
}

export default CalcProvider;


  // const getAns = () => {
  //   if (currNum !== '') {
  //     if (operator !== '') {
  //       let answer = ops[operator](parseFloat(prevNum), parseFloat(currNum));
  //       setUserInput(answer);
  //       setOperator('');
  //       setCurrNum('');
  //       // setCalculations([...calculations, [smallCalcDisplay, `=${answer}`]]);
  //       socket.emit('calculation', { calculation: [smallCalcDisplay, `=${answer}`]});
  //     }
  //   }
  // };