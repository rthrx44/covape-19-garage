import React, { useState } from 'react'
import './Navbar.css';
import { RButton } from '../buttons/Button';
import { FaBars } from "react-icons/fa";
import Cvlogo from '../assets/Cvlogo.png'; 

export default function Navbar () {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handletoggle = () => {
    const body = document.querySelector('body')
    const mobileLinks = document.querySelectorAll('.mobile__link');

    if (toggleMenu) {
      setToggleMenu(false)
      body.style.overflowY = 'auto'
    } else {
      setToggleMenu(true)
      body.style.overflowY = 'hidden'
    };

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        setToggleMenu(false)
        document.body.style.overflowY = 'hidden';
      });
      console.log(mobileLinks);
    });
  }

  return (
    <>
      {toggleMenu && 
        <nav className='mobile__wrapper'>
          <ul className='mobile__menu'>
            <li>
              <a className='mobile__link' href='#home'> Home </a>
            </li>
            <li>
              <a className='mobile__link' href='#about'> About Us </a>
            </li>
            <li>
              <a className='mobile__link' href='#contact'> Contact Us </a>
            </li>
            <li className='mobile__link-line'></li>
            <li className='mobile__login'> <RButton displayText = 'Login'/></li>
          </ul>
        </nav>
        }
      <header id='home' className='header container'>
        <nav className='header__wrapper'>
          <img className='header__logo' src={Cvlogo} alt='Covape-19 Garage Logo' />
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
            <li className='header__login'> <RButton displayText = 'Login'/></li>
          </ul>
          <button className='header__bars' onClick={handletoggle}><FaBars/></button>
        </nav>
      </header>
    </>
  )
}