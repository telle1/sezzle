import React, { useContext } from 'react';
import { CalcContext } from '../provider/CalcProvider';

function PastCalcs() {
  const { calculations } = useContext(CalcContext);

  return (
    <React.Fragment>
      {calculations.map(calc => 
        <h3 key={calc}>{calc}</h3>
      )}
    </React.Fragment>
  );
}

export default PastCalcs;
