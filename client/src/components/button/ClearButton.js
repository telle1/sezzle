import React from 'react';
import './clearbutton.css';

function ClearButton(props){
    return (
       <div className="button" onClick={() => props.setUserInput([])}>
           {props.children}
       </div> 
    )
}

export default ClearButton
