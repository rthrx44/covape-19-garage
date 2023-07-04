import React from 'react'
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='#home'> Home </a>
        </li>
        <li>
          <a href='#about'> About Us </a>
        </li>
        <li>
          <a href='#contact'> Contact Us </a>
        </li>
      </ul>
    </nav>
  )
}


export const DashNavbar = () => {
  return (
    <div>Navbar</div>
  )
}