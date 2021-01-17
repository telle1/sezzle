import React from 'react';
import './clearbutton.css';
import socket from '../../socket'

function ClearButton(props){
    return (
       <div className="button" onClick={props.handleClick}>
           {props.children}
       </div> 
    )
}

export default ClearButton

