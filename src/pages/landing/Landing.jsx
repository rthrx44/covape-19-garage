import React, { useState, useEffect } from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import { RButton } from '../../components/buttons/Button'
import { BsCart4, BsEmojiHeartEyes } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { LuSunMoon } from "react-icons/lu";
import Cvlogo from '../../components/assets/Image/Cvlogo.png'
import Device01 from '../../components/assets/Image/Device01.png';
import Device02 from '../../components/assets/Image/Device02.png';
import Pod01 from '../../components/assets/Image/Pod01.png';
import Pod02 from '../../components/assets/Image/Pod02.png';
import Shop from '../../components/assets/Image/Shop.png';
import Loading from "../../components/loading/Loading";

function Landing() {

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  });

  return (
    <>
      {showLoading && <Loading />}
      <main>
        <section className='landing container'>
          <img className='landing__logo' src={Cvlogo} alt='Covape-19 Garage Logo' />
          <h1 className='landing__hero'>Welcome to <br></br>Covape-19 Garage</h1>
          <Link to='/login'><RButton displayText='Shop Now'/></Link>
        </section>
        <section className='landing__products container section'>
          <h1 className='landing__title'>Top Products</h1>
          <div className='landing__product-wrapper'>
            <div className='img__wrapper img1'>
              <img className='landing__product-pic1' src={Pod01} alt='Vape Devices' />
            </div>
            <div className='img__wrapper img2'>
              <img className='landing__product-pic' src={Device01} alt='Vape Juice' />
            </div>
            <div className='img__wrapper img3'>
              <img className='landing__product-pic' src={Device02} alt='Candies' />
            </div>
            <div className='img__wrapper img4'>
              <img className='landing__product-pic1' src={Pod02} alt='Pastries' />
            </div>
          </div>
        </section>
        <section className='landing__choose container section'>
          <h1 className='landing__title'>Why Choose Us</h1>
          <div className='choose__wrapper img'>
            <img className='landing__choose-pic' src={Shop} alt='Vape Shop' />
          </div>
          <div className='choose__wrapper subtitle'>
            <h5 className='landing__subtitle'>Premium Selection</h5>
            <p className='landing__description'>Experience the finest quality vaping products handpicked by vaping enthusiasts.</p>
            <h5 className='landing__subtitle'>Expert Advice</h5>
            <p className='landing__description'>Our Vape Gurus are here to assist you in finding the perfect setup.</p>
            <h5 className='landing__subtitle'>Lightning Shipping</h5>
            <p className='landing__description'>Don't wait forever – get your new gear within days!</p>
          </div>
        </section>
        <section className='landing__customer container section'>
          <div className='landing__customer-wrapper'>
            <BsCart4 className='langing__svg'/>
            <h1 className='landing__customer-header'>400+</h1>
            <p className='landing__description'>Exclusive Product</p>
          </div>
          <div className='landing__customer-wrapper'>
            <BsEmojiHeartEyes className='langing__svg'/>
            <h1 className='landing__customer-header'>99%</h1>
            <p className='landing__description'>Satisfied Customers</p>
          </div>
          <div className='landing__customer-wrapper'>
            <LuSunMoon className='langing__svg'/>
            <h1 className='landing__customer-header'>24/7</h1>
            <p className='landing__description'>Online Support</p>
          </div>
        </section>
        <section className='landing__getstart container section'>
          <h1 className='landing__title'>Get Started</h1>
          <p className='landing__description'>Don’t waste another moment – elevate your vaping game today! <br></br>Join us and experience the ultimate in premium vaping bliss.</p>
          <Link to='/login'><RButton displayText='Shop Now'/></Link>
        </section>
        <footer className='landing__footer container section'>
          <div className='landing__social'><BiLogoFacebook/></div>
          <h6 className='landing__footer-text'>© 2023 Covape-19 Garage. All rights reserved.</h6>
        </footer>
      </main>
    </>
  )
}

export default Landing