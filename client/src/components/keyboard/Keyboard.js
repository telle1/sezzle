import React from 'react';
import './keyboard.css'
import Button from '../button/Button'
import ClearButton from '../button/ClearButton'

function Keyboard({addNum, handleClear, allowZeroes, solveEq, addOperation}){
    return (
        <div className="calc-buttons">
            <div className="row row-1">
                <Button handleClick={()=>addNum(7)}
                >7</Button>
                <Button handleClick={()=>addNum(8)} >8</Button>
                <Button handleClick={()=>addNum(9)}>9</Button>
                <Button handleClick={()=>addOperation('/')}>/</Button>
            </div>
            <div className="row row-2">
                <Button handleClick={()=>addNum(4)}>4</Button>
                <Button handleClick={()=>addNum(5)}>5</Button>
                <Button handleClick={()=>addNum(6)}>6</Button>
                <Button handleClick={()=>addOperation('*')}>*</Button>
            </div>
            <div className="row row-3">
                <Button handleClick={()=>addNum(1)}>1</Button>
                <Button handleClick={()=>addNum(2)}>2</Button>
                <Button handleClick={()=>addNum(3)}>3</Button>
                <Button handleClick={()=>addOperation('+')}>+</Button>
            </div>
            <div className="row row-4">
                <Button>&nbsp;</Button>
                <Button handleClick={allowZeroes}>0</Button>
                <Button handleClick={solveEq}>=</Button>
                <Button handleClick={()=>addOperation('-')}>-</Button>
            </div>
            <div className="row row-5">
                <ClearButton handleClick={handleClear}>C</ClearButton>
            </div>
        </div>


    )
}

export default Keyboard;