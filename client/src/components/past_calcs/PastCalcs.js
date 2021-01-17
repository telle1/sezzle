import React from 'react';

function PastCalcs({ calculations }){
    return (
        <React.Fragment>
        {calculations.map(calc => <h3>{calc}</h3>)} 
        </React.Fragment>
    )
}

export default PastCalcs