import React, { useContext } from 'react';
import { CalcContext } from './CalcProvider';
import './styles/past-calcs.css'

function PastCalcs() {
  const { calculations } = useContext(CalcContext);

  return (
    <React.Fragment>
      <div className="past-calc-title">
        <h2>{calculations.length > 0 ? 'Past Calculations' : null}</h2>
      </div>
      <div className="past-calc-item">
        {calculations.map((calc, i) => 
          <h3 key={i}> <span>{i+1}</span> {calc}</h3>
        )}
      </div>
    </React.Fragment>
  );
}

export default PastCalcs;
