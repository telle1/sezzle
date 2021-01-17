import React from 'react';
import './button.css';

function Button(props){

    const isOperator = val => {
        return !isNaN(val) || val === '.' || val === '=';
    }    

    return (
        <div className={`button ${isOperator(props.children) ? null : 'operator'} `} onClick={() => props.setUserInput([...props.userInput, props.children])}>
            {props.children}
        </div>
    )
}

export default Button