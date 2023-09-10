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
export const LButton = ({buttonClick, icon = '', displayText = 'Submit'}) => {
  return (
    <button 
      className='lbtn'
      onClick={buttonClick}>
        {displayText}
        {icon}
    </button>
  )
}

//* Normal Button
export const NButton = ({buttonClick, displayText = 'Switch'}) => {
  return (
    <button 
      className='nbtn'
      onClick={buttonClick}>
        {displayText}
    </button>
  )
}

//* Back Button
export const BButton = ({buttonClick, icon = '', displayText = 'Back'}) => {
  return (
    <button 
      className='bbtn'
      onClick={buttonClick}>
        {icon}
        {displayText}
    </button>
  )
}
