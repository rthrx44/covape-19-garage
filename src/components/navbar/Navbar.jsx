import React from 'react'
import './Navbar.css';
import { RdButton, RlButton } from '../buttons/Button';
import { FaBars } from "react-icons/fa";
import Cvlogo from '../assets/Cvlogo.png';

export default function Navbar () {
  return (
    <header className='header container'>
      <nav className='header__wrapper'>
        <img id='#home' className='header__logo' src={Cvlogo} alt='Covape-19 Garage Logo' />
        <ul className='header__menu'>
          <li>
            <a className='header__link' href='#home'> Home </a>
          </li>
          <li>
            <a className='header__link' href='#about'> About Us </a>
          </li>
          <li>
            <a className='header__link' href='#contact'> Contact Us </a>
          </li>
        </ul>
        <ul className='header__btns'>
          <li className='header__login'> <RlButton displayText = 'Login'/></li>
          <li className='header__login'> <RdButton displayText = 'Sign Up'/> </li>
        </ul>
        <button className='header__bars'><FaBars/></button>
      </nav>
    </header>
  )
}


export const DashNavbar = () => {
  return (
    <header className='header container'>
      <nav className='header__wrapper'>
        <img className='header__logo' src={Cvlogo} alt='Covape-19 Garage Logo' />
        <ul className='header__menu'>
          <li>
            <a className='header__link' href='#device'> Vape Device </a>
          </li>
          <li>
            <a className='header__link' href='#juice'> E-Juice </a>
          </li>
          <li>
            <a className='header__link' href='#pod'> Disposable Pod </a>
          </li>
          <li>
            <a className='header__link' href='#accessories'> Accessories </a>
          </li>
        </ul>
        <ul className='header__btns'>
          <li className='header__login'> <RdButton displayText = 'Login'/></li>
          <li className='header__login'> <RdButton displayText = 'Logout'/> </li>
        </ul>
        <button className='header__bars'><FaBars/></button>
      </nav>
    </header>
  )
}
