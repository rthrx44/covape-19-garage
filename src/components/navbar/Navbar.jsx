import React, { useState } from 'react'
import './Navbar.css';
import { RButton } from '../buttons/Button';
import { FaBars } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { useNavigate, Link } from 'react-router-dom';
import Cvlogo from '../../components/assets/Image/Cvlogo.png'

export default function Navbar () {

  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const handletoggle = () => {
    const body = document.querySelector('body')

    if (toggleMenu) {
      setToggleMenu(false)
      body.style.overflowY = 'auto'
    } else {
      setToggleMenu(true)
      body.style.overflowY = 'hidden'
    };
  }

  const handleClick = () => {
    const mobileLinks = [document.querySelectorAll('.mobile__link')]
    const body = document.querySelector('body')

    if (mobileLinks) {
      setToggleMenu(false)
      body.style.overflowY = 'auto'
    } else {
      alert ('Error')
    }
  }

  const handleLogout = () => {
    const body = document.querySelector('body')

    localStorage.removeItem('loggedUser')
    setToggleMenu(false)
    body.style.overflowY = 'auto'
    navigate('/')
  }

  return (
    <>
      {toggleMenu && 
        <nav className='mobile__wrapper'>
          <ul className='mobile__menu'>
            <li>
              <a className='mobile__link' href='#home' onClick={handleClick}> Home </a>
            </li>
            <li>
              <Link className='mobile__link' to='/juice' onClick={handleClick}> E-Juice </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/mods' onClick={handleClick}> Mods & Kits </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/pods' onClick={handleClick}> Pod System </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/atomizer' onClick={handleClick}> Atomizer </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/accessories' onClick={handleClick}> Accessories </Link>
            </li>
            <li>
              <a className='mobile__link' href='#contact' onClick={handleClick}> Contact </a>
            </li>
            <li className='mobile__link-line'></li>
            <Link className='mobile__login' to='/'> <RButton buttonClick={handleLogout} displayText = 'Logout'/></Link>
          </ul>
        </nav>
      }
      <header id='home' className='header container'>
        <nav className='header__wrapper'>
          <img className='header__logo' src={Cvlogo} alt='Covape-19 Garage Logo' title='Covape-19 Grage'/>
          <div className="btn__con">
            <button className="cartBtn">
              <BiHeart />
            </button>
            <Link to={"/cart"} className="cartBtn">
              <BsCart4 />
            </Link>
          </div>
          <ul className='header__menu'>
            <li>
              <a className='mobile__link' href='#home' onClick={handleClick}> Home </a>
            </li>
            <li>
              <Link className='mobile__link' to='/juice' onClick={handleClick}> E-Juice </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/mods' onClick={handleClick}> Mods & Kits </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/pods' onClick={handleClick}> Pod System </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/atomizer' onClick={handleClick}> Atomizer </Link>
            </li>
            <li>
              <Link className='mobile__link' to='/accessories' onClick={handleClick}> Accessories </Link>
            </li>
            <li>
              <a className='mobile__link' href='#contact' onClick={handleClick}> Contact </a>
            </li>
          </ul>
          <ul className='header__btns'>
            <Link className='header__login' to='/'> <RButton buttonClick={handleLogout} displayText = 'Logout'/></Link>
          </ul>
          <button className='header__bars' onClick={handletoggle}><FaBars/></button>
        </nav>
      </header>
    </>
  )
}