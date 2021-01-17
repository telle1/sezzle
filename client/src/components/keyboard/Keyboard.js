import React from 'react';
import Button from '../button/Button'
import ClearButton from '../button/ClearButton'

function Keyboard({userInput, setUserInput}){
    return (
        <div className="calc-buttons">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
        
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>x</Button>
        
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
        
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
        
            <ClearButton userInput={userInput} setUserInput={setUserInput}>C</ClearButton>
        </div>


    )
}

export default Keyboard;