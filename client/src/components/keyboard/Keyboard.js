import React from 'react';
import Button from '../button/Button'

function Keyboard({userInput, setUserInput}){
    return (
        
        <div className="calc-buttons">
            <Button userInput={userInput} setUserInput={setUserInput}>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button className="operand">/</Button>
        
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button className="operand">x</Button>
        
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button className="operand">+</Button>
        
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button className="operand">-</Button>
        
            <Button>C</Button>
        </div>


    )
}

export default Keyboard;