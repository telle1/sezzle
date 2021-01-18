import React, { useContext, useEffect } from 'react';
import { CalcContext } from './CalcProvider';
import Input from './Input';
import Keyboard from './Keyboard';
import PastCalcs from './PastCalcs';
import './styles/calculator.css';

function Calculator() {
  const { calculations } = useContext(CalcContext);

  useEffect(()=> {
    if (calculations.length > 0){
      localStorage.setItem('calculations', JSON.stringify([...calculations]));
    }
  }, [calculations])

  return (
    <div className='calc-app'>
      <div className='calc'>
        <Input/>
        <Keyboard/>
      </div>
      <div className='past-calcs'>
        <PastCalcs/>
      </div>
    </div>
  );
}

export default Calculator;
