import React, { useState, useEffect } from 'react'
import './Dashboard.css';
import { BiLogoFacebook } from "react-icons/bi";

//? Swiper Tool
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Navbar from '../../components/navbar/Navbar';
import Loading from '../../components/loading/Loading';
import Juice01 from '../../components/assets/Image/Juice01.png'
import Device01 from '../../components/assets/Image/Device01.png'
import Device12 from '../../components/assets/Image/Device12.png'
import Device15 from '../../components/assets/Image/Device15.png'
import Device18 from '../../components/assets/Image/Device18.png'
import Pod01 from '../../components/assets/Image/Pod01.png'
import Pod03 from '../../components/assets/Image/Pod03.png'
import Atomizer01 from '../../components/assets/Image/Atomizer01.png'
import Atomizer07 from '../../components/assets/Image/Atomizer07.png'
import Atomizer14 from '../../components/assets/Image/Atomizer14.png'
import Atomizer19 from '../../components/assets/Image/Atomizer19.png'
import Access01 from '../../components/assets/Image/Access01.png'
import Access02 from '../../components/assets/Image/Access02.png'
import Access03 from '../../components/assets/Image/Access03.png'
import Access04 from '../../components/assets/Image/Access04.png'
import Access09 from '../../components/assets/Image/Access09.png'
import Access10 from '../../components/assets/Image/Access10.png'
import Access05 from '../../components/assets/Image/Access05.png'
import Access06 from '../../components/assets/Image/Access06.png'
import Access07 from '../../components/assets/Image/Access07.png'
import Access08 from '../../components/assets/Image/Access08.png'




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
          <h1 className="shop__header">E-Juice</h1>
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              768: {slidesPerView: 2},
              1024: {slidesPerView: 3},
              1280: {slidesPerView: 4}
            }}
          >
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Juice01} alt='E-juice' />
                <div className="item__con">
                  <h1 className="item__brand">Puting Usok</h1>
                  <h2 className="item__name">Espesyal Vapors</h2>
                </div>
                <p className="item__price">&#8369; 200</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section id='device' className='shop container section'>
          <h1 className="shop__header">Mods & Kits</h1>
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              768: {slidesPerView: 2},
              1024: {slidesPerView: 3},
              1280: {slidesPerView: 4}
            }}
          >
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Device01} alt='Mod System' />
                <div className="item__con">
                  <h1 className="item__brand">Geekvape</h1>
                  <h2 className="item__name">Aegis Legend 2</h2>
                </div>
                <p className="item__price">&#8369; 2,200</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Device12} alt='Mod System' />
                <div className="item__con">
                  <h1 className="item__brand">Rincoe</h1>
                  <h2 className="item__name">Manto Beast</h2>
                </div>
                <p className="item__price">&#8369; 1,300</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Device18} alt='Mod System' />
                <div className="item__con">
                  <h1 className="item__brand">Rincoe</h1>
                  <h2 className="item__name">Jellybox Kit</h2>
                </div>
                <p className="item__price">&#8369; 2,600</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Device15} alt='Mod System' />
                <div className="item__con">
                  <h1 className="item__brand">Dovpo</h1>
                  <h2 className="item__name">MVP</h2>
                </div>
                <p className="item__price">&#8369; 1,400</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className='shop container section'>
          <h1 className="shop__header">Pod System</h1>
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              768: {slidesPerView: 2},
              1024: {slidesPerView: 3},
              1280: {slidesPerView: 4}
            }}
          >
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Pod01} alt='Pod System' />
                <div className="item__con">
                  <h1 className="item__brand">OXVA</h1>
                  <h2 className="item__name">XLIM Limited Edition</h2>
                </div>
                <p className="item__price">&#8369; 1,400</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Pod03} alt='Pod System' />
                <div className="item__con">
                  <h1 className="item__brand">OXVA</h1>
                  <h2 className="item__name">XLIM</h2>
                </div>
                <p className="item__price">&#8369; 1,300</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section id='atomizer' className='shop container section'>
          <h1 className="shop__header">Atomizers</h1>
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              768: {slidesPerView: 2},
              1024: {slidesPerView: 3},
              1280: {slidesPerView: 4}
            }}
          >
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Atomizer01} alt='Atomizer' />
                <div className="item__con">
                  <h1 className="item__brand">Geekvape</h1>
                  <h2 className="item__name">Digiflavor Drop RDA V2</h2>
                </div>
                <p className="item__price">&#8369; 500</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Atomizer07} alt='Atomizer' />
                <div className="item__con">
                  <h1 className="item__brand">Hellvape</h1>
                  <h2 className="item__name">Fat Rabbit RDA</h2>
                </div>
                <p className="item__price">&#8369; 400</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Atomizer14} alt='Atomizer' />
                <div className="item__con">
                  <h1 className="item__brand">Geekvape</h1>
                  <h2 className="item__name">Zues X RTA</h2>
                </div>
                <p className="item__price">&#8369; 400</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Atomizer19} alt='Atomizer' />
                <div className="item__con">
                  <h1 className="item__brand">OXVA</h1>
                  <h2 className="item__name">Arbiter RTA</h2>
                </div>
                <p className="item__price">&#8369; 500</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section id='accessories' className='shop container section'>
          <h1 className="shop__header">Cottons & Batteries</h1>
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              768: {slidesPerView: 2},
              1024: {slidesPerView: 3},
              1280: {slidesPerView: 4}
            }}
          >
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img2' src={Access01} alt='Cotton' />
                <div className="item__con">
                  <h1 className="item__brand">Dovpo</h1>
                  <h2 className="item__name">Vipers Cotton</h2>
                </div>
                <p className="item__price">&#8369; 100</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img2' src={Access02} alt='Cotton' />
                <div className="item__con">
                  <h1 className="item__brand">Wick 'N' Vape</h1>
                  <h2 className="item__name">Cotton Bacon</h2>
                </div>
                <p className="item__price">&#8369; 100</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img2' src={Access03} alt='Cotton' />
                <div className="item__con">
                  <h1 className="item__brand">Geekvape</h1>
                  <h2 className="item__name">Feather Cotton</h2>
                </div>
                <p className="item__price">&#8369; 100</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img2' src={Access04} alt='Cotton' />
                <div className="item__con">
                  <h1 className="item__brand">Vapefly</h1>
                  <h2 className="item__name">Firebolt Cotton</h2>
                </div>
                <p className="item__price">&#8369; 100</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Access09} alt='Battery' />
                <div className="item__con">
                  <h1 className="item__brand">Molicel</h1>
                  <h2 className="item__name">Battery</h2>
                </div>
                <p className="item__price">&#8369; 300</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Access10} alt='Battery' />
                <div className="item__con">
                  <h1 className="item__brand">VTC 4</h1>
                  <h2 className="item__name">Battery</h2>
                </div>
                <p className="item__price">&#8369; 250</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className='shop container section'>
          <h1 className="shop__header">Accessories</h1>
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              768: {slidesPerView: 2},
              1024: {slidesPerView: 3},
              1280: {slidesPerView: 4}
            }}
          >
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img2' src={Access05} alt='Cotton' />
                <div className="item__con">
                  <h1 className="item__brand">XTAR</h1>
                  <h2 className="item__name">MC4</h2>
                </div>
                <p className="item__price">&#8369; 500</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Access07} alt='Cotton' />
                <div className="item__con">
                  <h1 className="item__brand">XTAR</h1>
                  <h2 className="item__name">MC2</h2>
                </div>
                <p className="item__price">&#8369; 250</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Access08} alt='Cotton' />
                <div className="item__con">
                  <h1 className="item__brand">XTAR</h1>
                  <h2 className="item__name">MC1</h2>
                </div>
                <p className="item__price">&#8369; 150</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='grid__item'>
                <img className='item__img' src={Access06} alt='Cotton' />
                <div className="item__con">
                  <h1 className="item__brand">Black Smith</h1>
                  <h2 className="item__name">Vape Toolkit</h2>
                </div>
                <p className="item__price">&#8369; 350</p>
              </div>
            </SwiperSlide>
          </Swiper>
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

