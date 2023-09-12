import React, { useState, useEffect } from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import { RButton } from '../../components/buttons/Button'
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BiLogoInstagramAlt, BiLogoTiktok } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { LuSunMoon } from "react-icons/lu";
import { TfiShoppingCart } from "react-icons/tfi";
import Cvlogo from '../../components/assets/Image/Cvlogo.png'
import VapeWarning from '../../components/assets/Image/VapeWarning.png'
import Access09 from '../../components/assets/Image/Access09.png'
import Device01 from '../../components/assets/Image/Device01.png';
import Device08 from '../../components/assets/Image/Device08.png';
import juice07 from '../../components/assets/Image/Juice07.png'
import Pod01 from '../../components/assets/Image/Pod01.png';
import Pod03 from '../../components/assets/Image/Pod03.png';
import Atomizer16 from '../../components/assets/Image/Atomizer16.png';
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
          <img className='landing__logo' src={Cvlogo} alt='Covape-19 Garage Logo' title='Covape-19 Grage'/>
          <h1 className='landing__hero'>Welcome to <br></br>Covape-19 Garage</h1>
          <Link to='/login'><RButton displayText='Shop Now'/></Link>
        </section>
        <section className='warning container section'>
          <img className='vapeWarning' src={VapeWarning} alt='Vape Warning 18+' title='Warning Sign'/>
        </section>
        <section className='landing__products container section'>
          <h1 className='landing__title'>Top Products</h1>
          <div className='landing__product-wrapper'>
            <div className='img__wrapper img1'>
              <img className='landing__product-pic' src={Device01} alt='Vape Device' title='Aegis Legend V2'/>
            </div>
            <div className='img__wrapper img2'>
              <img className='landing__product-pic' src={Device08} alt='Vape Device' title='Aegis Legend V2'/>
            </div>
            <div className='img__wrapper img3'>
              <img className='landing__product-pic1' src={Access09} alt='Vape Accessories' title='Molicel Battery'/>
            </div>
            <div className='img__wrapper img4'>
              <img className='landing__product-pic1' src={Pod01} alt='Vape Device' title='OXVA XLIM Limited Edition'/>
            </div>
            <div className='img__wrapper img5'>
              <img className='landing__product-pic1' src={Pod03} alt='Vape Device' title='OXVA XLIM'/>
            </div>
            <div className='img__wrapper img6'>
              <img className='landing__product-pic' src={juice07} alt='Vape Juice' title='Espesyal Vapors Iced Coffee'/>
            </div>
            <div className='img__wrapper img7'>
              <img className='landing__product-pic1' src={Atomizer16} alt='CVape Atomizer' title='Geekvape Zues X RTA'/>
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
            <TfiShoppingCart className='landing__svg'/>
            <h1 className='landing__customer-header'>400+</h1>
            <p className='landing__description'>Exclusive Product</p>
          </div>
          <div className='landing__customer-wrapper'>
            <BsEmojiHeartEyes className='landing__svg'/>
            <h1 className='landing__customer-header'>99%</h1>
            <p className='landing__description'>Satisfied Customers</p>
          </div>
          <div className='landing__customer-wrapper'>
            <LuSunMoon className='landing__svg'/>
            <h1 className='landing__customer-header'>24/7</h1>
            <p className='landing__description'>Online Support</p>
          </div>
        </section>
        <section className='landing__getstart container section'>
          <h1 className='landing__title'>Get Started</h1>
          <p className='landing__description'>Don’t waste another moment – elevate your vaping game today! <br></br>Join us and experience the ultimate in premium vaping bliss.</p>
          <Link to='/login'><RButton displayText='Shop Now'/></Link>
        </section>
        <footer className='footer container section'>
          <div className='footer__social'>
            <div className="footer__link">
              <FaFacebookSquare/>
            </div>
            <div className="footer__link">
              <AiOutlineTwitter/>
            </div>
            <div className="footer__link">
              <BiLogoInstagramAlt/>
            </div>
            <div className="footer__link">
              <BiLogoTiktok/>
            </div>
            <div className="footer__link">
              <SiShopee/>
            </div>
          </div>
          <h6 className='footer__text'>Copyright 2023. Designed and built by Ruther R. Dio. All rights reserved.</h6>
          <a href="#home" className='footer__logo'><img id='home' className='header__logo' src={Cvlogo} alt='Covape-19 Garage Logo' title='Back to Top'/></a>
        </footer>
      </main>
    </>
  )
}

export default Landing