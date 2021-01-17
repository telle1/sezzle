import React, { useContext } from 'react';
import { CalcContext } from './CalcProvider';

function Input(){

    const { userInput } = useContext(CalcContext);

    return (
        <div className="calc-display">
            <p>{userInput}</p>
        </div>
    )
}

export default Input