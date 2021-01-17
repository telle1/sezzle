import React, { createContext, useState } from 'react';

export const CalcContext = createContext({});

function CalcProvider(props) {
  const [currNum, setCurrNum] = useState('');
  const [prevNum, setPrevNum] = useState('');
  const [operator, setOperator] = useState('');
  const [userInput, setUserInput] = useState('');
  const [smallCalcDisplay, setSmallCalcDisplay] = useState('');

  const [calculations, setCalculations] = useState([]);

  const addNum = (num) => {
    setUserInput(userInput + num);
    setSmallCalcDisplay(smallCalcDisplay + num);
    console.log(userInput);
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
  };

  const ops = {
    '+': (prevNum, currNum) => prevNum + currNum,
    '-': (prevNum, currNum) => prevNum - currNum,
    '*': (prevNum, currNum) => prevNum * currNum,
    '/': (prevNum, currNum) => prevNum / currNum,
  };

  const getAns = () => {
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
  };

  return (
    <CalcContext.Provider
      value={{
        addNum,
        addOperation,
        handleClear,
        allowZeroes,
        solveEq,
        getAns,
        userInput,
        smallCalcDisplay,
        currNum,
        operator,
        prevNum,
        calculations,
      }}
    >
      {props.children}
    </CalcContext.Provider>
  );
}

export default CalcProvider;
