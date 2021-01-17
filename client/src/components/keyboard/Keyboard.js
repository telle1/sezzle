import React from 'react';
import './keyboard.css'
import Button from '../button/Button'
import ClearButton from '../button/ClearButton'

function Keyboard({userInput, setUserInput}){
    return (
        <div className="calc-buttons">
            <div className="row row-1">
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>/</Button>
            </div>
            <div className="row row-2">
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>x</Button>
            </div>
            <div className="row row-3">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>+</Button>
            </div>
            <div className="row row-4">
                <Button>.</Button>
                <Button>0</Button>
                <Button>=</Button>
                <Button>-</Button>
            </div>
            <div className="row row-5">
                <ClearButton userInput={userInput} setUserInput={setUserInput}>C</ClearButton>
            </div>
        </div>


    )
}

export default Keyboard;