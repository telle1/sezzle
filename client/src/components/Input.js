import React, { useContext } from 'react';
import { CalcContext } from './CalcProvider';
import './styles/input.css'

function Input(){

    const { userInput, smallCalcDisplay, prevNum } = useContext(CalcContext);

    return (
        <div className="calc-display">
            <div className="small-calc-display">
                {smallCalcDisplay}
            </div>
            <div className="large-calc-display">
                {userInput || prevNum}
            </div>
        </div>
    )
}

export default Input