import React, { useContext } from 'react';
import { CalcContext } from './/CalcProvider';
import './styles/clearbutton.css';


function ClearButton(props){

    const { handleClear }= useContext(CalcContext);

    return (
       <div className="button button-clear" onClick={handleClear}>
           {props.children}
       </div> 
    )
}

export default ClearButton

