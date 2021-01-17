import React from 'react';
import './button.css';
import socket from '../../socket'

function Button(props){

    const isOperator = val => {
        return !isNaN(val) || val === '.' || val === '=';
    }    

    // const handleClick = () => {
    //     if (isOperator(props.children)){
    //         props.setUserInput([...props.userInput, props.children])
    //     } else {
    //         props.setOperator(props.children)
    //         props.setPrevNum([...props.currNum]) 
    //         // props.setCurrNum([])
            
    //     }
        // isOperator(props.children) ? props.setUserInput([...userInput, input]) : return {
        //     props.setOperator(props.children)
        //     props.setCurrNum([])
        //     props.setPrevNum([...currNum])
        // }
        
// }

    return (
        <div className={`button ${isOperator(props.children) ? null : 'operator'} `} onClick={props.handleClick}>
            {props.children}
        </div>
    )
}

export default Button