import React from 'react';
import Button from '../button/Button'
import ClearButton from '../button/ClearButton'

function Keyboard({userInput, setUserInput}){
    return (
        <div className="calc-buttons">
            <Button userInput={userInput} setUserInput={setUserInput}>7</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>8</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>9</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>/</Button>
        
            <Button userInput={userInput} setUserInput={setUserInput}>4</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>5</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>6</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>x</Button>
        
            <Button userInput={userInput} setUserInput={setUserInput}>1</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>2</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>3</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>+</Button>
        
            <Button userInput={userInput} setUserInput={setUserInput}>.</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>0</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>=</Button>
            <Button userInput={userInput} setUserInput={setUserInput}>-</Button>
        
            <ClearButton userInput={userInput} setUserInput={setUserInput}>C</ClearButton>
        </div>


    )
}

export default Keyboard;