import React from 'react'
import './Landing.css';
import Navbar from '../../components/navbar/Navbar';
import Candy from '../../components/assets/Candy.jpg';
import Juice from '../../components/assets/Juice.jpg';
import Pastry from '../../components/assets/Pastry.jpg';
import Vape from '../../components/assets/Vape.jpg';

function Landing() {

  return (
    <>
      <Navbar/>
      <main>
        <section className='hero container section'>
          <h1 className='hero__title'>Discover the Ultimate <br></br>Vaping Experience.</h1>
        </section>
        <section id='about' className='about container section'>
          {/* slide 1 */}
            <div className='about__wrapper'>
              <div className='about__img-wrapper'>
                <img className='about__image1' src={Vape} alt='Vape Devices' />
              </div>
              <div className='about__con-wrapper about__content1'>
                <h3 className='about__title'>Vape Devices</h3>
                <p className='about__description'>Get ready to experience an unrivaled selection of vape devices, <br></br>from sleek pen-style devices to powerful box mods.</p>
              </div>
            </div>
          
          {/* slide 2 */}
            <div className='about__wrapper'>
              <div className='about__img-wrapper'>
                <img src={Juice} alt='Vape Juice' />
              </div>
              <div className='about__con-wrapper'>
                <h3 className='about__title'>High-Quality E-Juices</h3>
                <p className='about__description'>Choose from a stunning range of premium vape juice flavors, <br></br>expertly crafted to satisfy even the most discerning palate.</p>
              </div>
            </div>
          
          {/* slide 3 */}
            <div className='about__wrapper'>
              <div className='about__img-wrapper'>
                <img className='about__image1' src={Candy} alt='Candies' />
              </div>
              <div className='about__con-wrapper about__content1'>
                <h3 className='about__title'>Puffs of Paradise</h3>
                <p className='about__description'>Discover new and exotic flavors to elevate and satisfy your vaping experience.</p>
              </div>
            </div>
          
          {/* slide 4 */}
            <div className='about__wrapper'>
              <div className='about__img-wrapper'>
                <img src={Pastry} alt='Pastries' />
              </div>
              <div className='about__con-wrapper'>
                <h3 className='about__title'>Customize Your Clouds</h3>
                <p className='about__description'>Mix and match your favorite flavors for a truly unique, personalized vaping experience.</p>
              </div>
            </div>
        </section>
        <section className='header__about container section'>
          <hr className='line'></hr>
          <ul className='about__menu'>
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
          <hr className='line'></hr>
        </section>
        <section id='contact' className='contact container section'>
          <div className='contact__wrapper'>
            <h5 className='contact__title'>Support</h5>
            <a className='contact__link' href="#faqs">FAQs</a>
            <a className='contact__link' href="#contact">Contact</a>
          </div>
          <div className='contact__wrapper'>
            <h5 className='contact__title'>Social</h5>
            <a className='contact__link' href="#facebook">Facebook</a>
            <a className='contact__link' href="#tiktok">Tiktok</a>
          </div>
          <div className='contact__wrapper'>
            <h5 className='contact__title'>Shop</h5>
            <a className='contact__link' href="#device">Devices</a>
            <a className='contact__link' href="#juice">E-Juice</a>
            <a className='contact__link' href="#accessories">Accessories</a>
          </div>
        </section>
        <footer className='footer container section'>© 2023 Covape-19 Garage. All rights reserved.</footer>
      </main>
    </>
  )
}

export default Landing
