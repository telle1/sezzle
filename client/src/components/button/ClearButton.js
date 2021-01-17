import React, { useContext } from 'react';
import './clearbutton.css';
import { CalcContext } from '../provider/CalcProvider';

function ClearButton(props){

    const { handleClear }= useContext(CalcContext);

    return (
       <div className="button" onClick={handleClear}>
           {props.children}
       </div> 
    )
}

export default ClearButton

