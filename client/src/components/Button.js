import React, { useContext } from 'react';
import { CalcContext } from './CalcProvider';
import './styles/button.css';

function Button(props){

    const { addNum, allowZeroes, solveEq, addOperation } = useContext(CalcContext);


    const isNotOperator = val => {
        return !isNaN(val) || val === '=';
    }    

    const handleClick = () => {
        if (!isNotOperator(props.children) ){
            addOperation(props.children)
        } else if (props.children === '0'){
            allowZeroes(props.children)
        } else if (props.children === '='){
            solveEq();
        } else {
            addNum(props.children)
        }
    }

    return (
        <div className={`button ${isNotOperator(props.children) ? null : 'operator'} `} onClick={handleClick}>
            {props.children}
        </div>
    )
}

export default Button