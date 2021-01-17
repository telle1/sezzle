import React from 'react';
import './button.css';
import socket from '../../socket'

function Button(props){

    const isOperator = val => {
        return !isNaN(val) || val === '.' || val === '=';
    }    

    return (
        <div className={`button ${isOperator(props.children) ? null : 'operator'} `} onClick={() => {
            socket.emit('input', {test: props.children});
        }}>
            {props.children}
        </div>
    )
}

export default Button