import React, { useContext, useEffect } from 'react';
import { CalcContext } from './CalcProvider';
import socket from '../socket';
import Input from './Input';
import Keyboard from './Keyboard';
import PastCalcs from './PastCalcs';



function Calculator(){
  
 const { currNum, operator, prevNum, getAns, smallCalcDisplay } = useContext(CalcContext);

  // console.log(
  //   'userinput:',
  //   userInput,
  //   'currnum:',
  //   currNum,
  //   'prevnum:',
  //   prevNum,
  //   'operator:',
  //   operator
  // );

  useEffect(() =>  {
    socket.on('connect', () => {
      console.log('connected to backend');
    });
    getAns();

    // return () => {
    //   socket.emit('disconnect');
    //   socket.off()
    // }
  }, [currNum, operator, prevNum]);

    return (
        <React.Fragment>
            <div className='calc'>
                {smallCalcDisplay}
                <Input/>
                <Keyboard/>
            </div>
            <div className='past-calcs'>
                <PastCalcs/>
            </div>
      </React.Fragment>
    )
}

export default Calculator;