import React from 'react';
import './Button.css';


//* Round Button
export const RButton = ({buttonClick, displayText = 'Submit'}) => {
  return (
    <button 
      className='rbtn'
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
