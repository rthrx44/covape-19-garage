import React, { useState, useEffect } from 'react'
import './Dashboard.css';
import { BiLogoFacebook } from "react-icons/bi";
import Navbar from '../../components/navbar/Navbar';
import Candy from '../../components/assets/Candy.jpg';
import Juice from '../../components/assets/Juice.jpg';
import Pastry from '../../components/assets/Pastry.jpg';
import Vape from '../../components/assets/Vape.jpg';
import Loading from '../../components/loading/Loading';

function Dashboard() {
  
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
        <section id='shop' className='shop container section'>
          {/* slide 1 */}
            <div className='shop__wrapper'>
              <div className='shop__img-wrapper'>
                <img className='shop__image1' src={Vape} alt='Vape Devices' />
              </div>
              <div className='shop__con-wrapper shop__content1'>
                <h3 id='device' className='shop__title'>Vape Devices</h3>
                <p className='shop__description'>Get ready to experience an unrivaled selection of vape devices, <br></br>from sleek pen-style devices to powerful box mods.</p>
              </div>
            </div>
          
          {/* slide 2 */}
            <div className='shop__wrapper'>
              <div className='shop__img-wrapper'>
                <img src={Juice} alt='Vape Juice' />
              </div>
              <div className='shop__con-wrapper'>
                <h3 id='juice' className='shop__title'>High-Quality E-Juices</h3>
                <p className='shop__description'>Choose from a stunning range of premium vape juice flavors, <br></br>expertly crafted to satisfy even the most discerning palate.</p>
              </div>
            </div>
          
          {/* slide 3 */}
            <div className='shop__wrapper'>
              <div className='shop__img-wrapper'>
                <img className='shop__image1' src={Candy} alt='Candies' />
              </div>
              <div className='shop__con-wrapper shop__content1'>
                <h3 className='shop__title'>Puffs of Paradise</h3>
                <p className='shop__description'>Discover new and exotic flavors to elevate and satisfy your vaping experience.</p>
              </div>
            </div>
          
          {/* slide 4 */}
            <div className='shop__wrapper'>
              <div className='shop__img-wrapper'>
                <img src={Pastry} alt='Pastries' />
              </div>
              <div className='shop__con-wrapper'>
                <h3 id='accessories' className='shop__title'>Customize Your Clouds</h3>
                <p className='shop__description'>Mix and match your favorite flavors for a truly unique, personalized vaping experience.</p>
              </div>
            </div>
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
            <a className='contact__link' href="#device">Devices</a>
            <a className='contact__link' href="#juice">E-Juice</a>
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

