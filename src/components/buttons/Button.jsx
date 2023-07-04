import React from 'react';
import './Button.css';


//* Round Button
export const RlButton = ({buttonClick, displayText = 'Submit'}) => {
  return (
    <button 
      className='rlbtn'
      onClick={buttonClick}>
        {displayText}
    </button>
  )
}

export const RdButton = ({buttonClick, displayText = 'Submit'}) => {
  return (
    <button 
      className='rdbtn'
      onClick={buttonClick}>
        {displayText}
    </button>
  )
}

//* Long Button
export const LButton = ({buttonClick, displayText = 'Submit'}) => {
  return (
    <button 
      className='lbtn'
      onClick={buttonClick}>
        {displayText}
    </button>
  )
}

//* Normal Button
export const NButton = ({buttonClick, displayText = 'Submit'}) => {
  return (
    <button 
      className='nbtn'
      onClick={buttonClick}>
        {displayText}
    </button>
  )
}
