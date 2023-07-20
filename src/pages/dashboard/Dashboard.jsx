import React, { useState, useEffect } from 'react'
import './Dashboard.css';
import { BiLogoFacebook } from "react-icons/bi";
import Navbar from '../../components/navbar/Navbar';
import Loading from '../../components/loading/Loading';
import Item from '../../components/utils/item/Item';

function Dashboard({endpoint: {items}}) {
  console.log(items);  
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  });

  return (
    <>
      {showLoading && <Loading />}
      <Navbar/>
      <main>
        <section className='hero container section'>
          <h1 className='hero__title'>Discover the Ultimate <br></br>Vaping Experience.</h1>
        </section>
        <section id='products' className='shop container section'>
          <h1 id='juice' className="shop__header">Products</h1>
          {items?.map((item, i) => (<Item {...item} key={i}/>))}
        </section>
        <section className='header__shop container section'>
          <hr className='line'></hr>
          <ul className='shop__menu'>
            <li>
              <a className='header__link' href='#home'> Home </a>
            </li>
            <li>
              <a className='header__link' href='#shop'> Shop </a>
            </li>
            <li>
              <a className='header__link' href='#contact'> Contact Us </a>
            </li>
          </ul>
          <hr className='line'></hr>
        </section>
        <section id='contact' className='contact container section'>
          <div className='contact__wrapper'>
            <h5 className='contact__title'>Support</h5>
            <a className='contact__link' href="#faqs">FAQs</a>
            <a className='contact__link' href="#contact">Contact</a>
          </div>
          <div className='contact__wrapper'>
            <h5 className='contact__title'>Shop</h5>
            <a className='contact__link' href="#juice">E-Juice</a>
            <a className='contact__link' href="#device">Devices</a>
            <a className='contact__link' href="#atomizer">Atomizer</a>
            <a className='contact__link' href="#accessories">Accessories</a>
          </div>
          <div className='contact__wrapper'>
            <h5 className='contact__title'>Social</h5>
            <a className='contact__link' href="#facebook">Facebook</a>
          </div>
        </section>
        <footer className='footer container section'>
          <div className='footer__social'>
            <BiLogoFacebook/>
          </div>
          <h6 className='footer__text'>© 2023 Covape-19 Garage. All rights reserved.</h6>
        </footer>
      </main>
    </>
  )
}

export default Dashboard

