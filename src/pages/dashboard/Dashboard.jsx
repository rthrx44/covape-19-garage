import React, { useState, useEffect } from 'react'
import './Dashboard.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Grid } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import "swiper/css/grid"

import { BiLogoFacebook } from "react-icons/bi";
import { Items } from '../../components/utils/item/Item';
import { RButton } from '../../components/buttons/Button';
import Navbar from '../../components/navbar/Navbar';
import Loading from '../../components/loading/Loading';
import Juice01 from '../../components/assets/Image/Juice01.png'
import Device01 from '../../components/assets/Image/Device01.png'
import Pod15 from '../../components/assets/Image/Pod15.png'
import Atomizer19 from '../../components/assets/Image/Atomizer19.png'
import Access06 from '../../components/assets/Image/Access06.png'
import { topProductsData } from '../../components/data/Data'

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
        <section id='products' className='shop container section'>
          <h1 className="shop__header">Top Products</h1>
          <Swiper
            modules={[Pagination, Navigation, Autoplay, Grid]}
            autoplay= {{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            slidesPerView={1}
            navigation
            pagination= {{ clickable: false }}
            grid={{
              rows: 2,
              fill: "row"
            }}
            breakpoints={{
              640: {slidesPerView:2,
                    grid: {rows:2, fill:"row"}},
              768: {slidesPerView: 3,
                    grid: {rows:2, fill:"row"}},
              1024: {slidesPerView: 4,
                    grid: {rows:2, fill:"row"}},
              1280: {slidesPerView: 5,
                    grid: {rows:2, fill:"row"}}
              }}
            className="swiper__con"
          >
            {topProductsData.map((products, index) => (
              <SwiperSlide key={index}>
                <Items data={products}/>
              </SwiperSlide>))}
          </Swiper>
        </section>
        <section className='products container section'>
          <div className='products__con'>
            <h1 id='juice' className="shop__header">E-Juice</h1>
            <a href='/juice'><RButton displayText='View All'/></a>
            <div className='juice__con'>
                <img className='juice_pic' src={Juice01} alt="Vape Juice" />
            </div>
          </div>
          <div className='products__con'>
            <h1 id='device' className="shop__header">Mods & Kits</h1>
            <a href='/mods'><RButton displayText='View All'/></a>
            <div className='juice__con'>
                <img className='juice_pic' src={Device01} alt="Vape Juice" />
            </div>
          </div>
          <div className='products__con'>
            <h1 className="shop__header">Pod Systems</h1>
            <a href='/pods'><RButton displayText='View All'/></a>
            <div className='juice__con'>
                <img className='juice_pic' src={Pod15} alt="Vape Juice" />
            </div>
          </div>
          <div className='products__con'>
            <h1 id='atomizer' className="shop__header">Atomizers</h1>
            <a href='/atomizer'><RButton displayText='View All'/></a>
            <div className='juice__con'>
                <img className='juice_pic' src={Atomizer19} alt="Vape Juice" />
            </div>
          </div>
          <div className='products__con'>
            <h1 id='accessories' className="shop__header">Accessories</h1>
            <a href='/accessories'><RButton displayText='View All'/></a>
            <div className='juice__con'>
                <img className='juice_pic' src={Access06} alt="Vape Juice" />
            </div>
          </div>
        </section>
        <section className='header__shop container section'>
          <hr className='line'></hr>
          <ul className='shop__menu'>
            <li>
              <a className='header__link' href='#home'>Home</a>
            </li>
            <li>
              <a className='header__link' href='#products'>Products</a>
            </li>
            <li>
              <a className='header__link' href='#contact'>Contact Us</a>
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
            <h5 className='contact__title'>Products</h5>
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
          <div className='footer__social'><BiLogoFacebook/></div>
          <h6 className='footer__text'>© 2023 Covape-19 Garage. All rights reserved.</h6>
        </footer>
      </main>
    </>
  )
}

export default Dashboard

