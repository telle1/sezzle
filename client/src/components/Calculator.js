import React, { useContext, useEffect } from 'react';
import { CalcContext } from './CalcProvider';
import socket from '../socket';
import Input from './Input';
import Keyboard from './Keyboard';
import PastCalcs from './PastCalcs';
import './styles/calculator.css';

function Calculator() {
  const { calculations, setCalculations } = useContext(CalcContext);

  useEffect(() => {

    console.log(calculations,'calcsaufshsdhoa')

    let savedCalculations = localStorage.getItem('calculations');
    console.log(savedCalculations)
    if (savedCalculations) {
      setCalculations(JSON.parse(savedCalculations));
    }

    socket.on('connect', () => {
      console.log('connected to backend');
    });

    return () => {
      socket.off('Logging off');
    };
  }, []);

  useEffect(() => {

    socket.on('calculation', ({ calculation }) => {
      console.log(calculations, 'calculationsadasddasd')
      if (calculations.length === 10) {
        let limitTen = calculations.slice(0, 9);
        setCalculations([calculation, ...limitTen]);
        localStorage.setItem(
          'calculations',
          JSON.stringify([calculation, ...limitTen])
        );
      } else {
        setCalculations([calculation, ...calculations]);
        localStorage.setItem(
          'calculations',
          JSON.stringify([calculation, ...calculations])
        );
      }
    });
  }, [calculations]);

  return (
    <div className='calc-app'>
      <div className='calc'>
        <Input />
        <Keyboard />
      </div>
      <div className='past-calcs'>
        <PastCalcs />
      </div>
    </div>
  );
}

export default Calculator;
