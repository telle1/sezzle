import React, { useContext } from 'react';
import { CalcContext } from './CalcProvider';
import './styles/past-calcs.css';

function PastCalcs() {
  const { calculations, setCalculations } = useContext(CalcContext);

  const handleClearPast = () => {
    setCalculations([]);
    localStorage.setItem('calculations', []);
  }

  return (
    <React.Fragment>
      <div className='past-calc-title'>
        {calculations.length > 0 ? 
          (<React.Fragment>
            <h2>Past Calculations</h2>
            <button className='button button-clear-past'
              onClick={handleClearPast}>
              CLEAR PAST
            </button>
          </React.Fragment>) 
        : null}
      </div>
      <div className='past-calc-item'>
        {calculations.map((calc, i) => (
          <h3 key={i}> <span>{i + 1}</span> {calc} </h3>
        ))}
      </div>
    </React.Fragment>
  );
}

export default PastCalcs;
