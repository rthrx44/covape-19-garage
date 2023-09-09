import React from 'react';
import './Button.css';
import { FaArrowLeft } from "react-icons/fa6";


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
export const BButton = ({buttonClick, displayText = 'Back'}) => {
  return (
    <button 
      className='bbtn'
      onClick={buttonClick}>
        <FaArrowLeft/> 
        {displayText}
    </button>
  )
}
