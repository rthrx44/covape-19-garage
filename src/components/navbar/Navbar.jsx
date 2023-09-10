import React, { useState } from 'react'
import './Navbar.css';
import { RButton } from '../buttons/Button';
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { TfiShoppingCart } from "react-icons/tfi";
import { useNavigate, Link } from 'react-router-dom';
import Cvlogo from '../../components/assets/Image/Cvlogo.png'

export default function Navbar () {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(<HiMiniBars3/>)
  const navigate = useNavigate();

  const handletoggle = () => {
    const body = document.querySelector('body')

    if (toggleMenu) {
      setToggleMenu(false)
      body.style.overflowY = 'auto'
      setToggleIcon(<HiMiniBars3/>)
    } else {
      setToggleIcon(<MdClose/>)
      setToggleMenu(true)
      body.style.overflowY = 'hidden'
    };
  }

  const handleClick = () => {
    const mobileLinks = [document.querySelectorAll('.mobile__link')]
    const body = document.querySelector('body')

    if (mobileLinks) {
      setToggleIcon(<HiMiniBars3/>)
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
          <div className='navbar__grid'>
            <div className='navbar__upper'>
              <img className='header__logo logOne' src={Cvlogo} alt='Covape-19 Garage Logo' title='Covape-19 Grage'/>
              <div className='upper__btn btnOne'>
                <div className="btn__con">
                  <button className="cartBtn"><BiHeart /></button>
                  <Link to={"/cart"} className="cartBtn"><TfiShoppingCart /></Link>
                </div>
                <div className='header__btns'>
                    <Link className='header__login' to='/'> <RButton buttonClick={handleLogout} displayText = 'Logout'/></Link>
                </div>
              </div>
            </div>
            <div className='navbar__lower'>
              <ul className='header__menu'>
                <li>
                  <a className='header__link' href='#home' onClick={handleClick}> Home </a>
                </li>
                <li>
                  <Link className='header__link' to='/juice' onClick={handleClick}> E-Juice </Link>
                </li>
                <li>
                  <Link className='header__link' to='/mods' onClick={handleClick}> Mods & Kits </Link>
                </li>
                <li>
                  <Link className='header__link' to='/pods' onClick={handleClick}> Pod System </Link>
                </li>
                <li>
                  <Link className='header__link' to='/atomizer' onClick={handleClick}> Atomizer </Link>
                </li>
                <li>
                  <Link className='header__link' to='/accessories' onClick={handleClick}> Accessories </Link>
                </li>
                <li>
                  <a className='header__link' href='#contact' onClick={handleClick}> Contact </a>
                </li>
              </ul>
            </div>
            <button className='header__bars btnTwo' onClick={handletoggle}>{toggleIcon}</button>
          </div>
        </nav>
      </header>
    </>
  )
}