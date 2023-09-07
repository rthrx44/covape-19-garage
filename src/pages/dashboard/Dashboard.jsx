import React, { useState, useEffect } from 'react'
import './Dashboard.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Grid } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import "swiper/css/grid"

import { BiLogoInstagramAlt, BiLogoTiktok } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { Items, Brands } from '../../components/utils/item/Item';
import { RButton } from '../../components/buttons/Button';
import Navbar from '../../components/navbar/Navbar';
import VapeWarning from '../../components/assets/Image/VapeWarning.png'
import Juice01 from '../../components/assets/Image/Juice01.png'
import Device01 from '../../components/assets/Image/Device01.png'
import Pod15 from '../../components/assets/Image/Pod15.png'
import Atomizer19 from '../../components/assets/Image/Atomizer19.png'
import Access06 from '../../components/assets/Image/Access06.png'

function Dashboard({topProducts, brands}) {
  
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  return (
    <>
      <Navbar/>
      <main>
        <section className='hero container section'>
          <h1 className='hero__title'>Discover the Ultimate <br></br>Vaping Experience.</h1>
        </section>
        <section className='warning container section'>
          <img className='vapeWarning' src={VapeWarning} alt='Vape Warning 18+' />
        </section>
        <section id='products' className='shop container section'>
          <h1 className="shop__header">Top Products</h1>
          <Swiper
            modules={[Pagination, Navigation, Grid]}
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
                    grid: {rows:2, fill:"row"}},
              1440: {slidesPerView: 6,
                    grid: {rows:2, fill:"row"}}
              }}
            className="swiper__con"
          >
            {topProducts.map((products, index) => (
              <SwiperSlide key={index}>
                <Items data={products}/>
              </SwiperSlide>))}
          </Swiper>
        </section>
        <section className='brands container section'>
          <div className='brand__logo'>
            <Swiper
              modules={[Autoplay]}
              autoplay= {{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              slidesPerView={2}
              breakpoints={{
                425: {slidesPerView: 3},
                640: {slidesPerView: 4},
                768: {slidesPerView: 5},
                1024: {slidesPerView: 6},
                1280: {slidesPerView: 7},
                1440: {slidesPerView: 8}
                }}
              className="swiper__con"
            >
              {brands.map((products, index) => (
                <SwiperSlide key={index}>
                  <Brands data={products}/>
                </SwiperSlide>))}
            </Swiper>
          </div>
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
            <h1 id='pods' className="shop__header">Pod Systems</h1>
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
        <section id='contact' className='contact container section'>
          <div className='contact__wrapper'>
            <h5 className='contact__title'> Contacts </h5>
            <a className='contact__link' href="#faqs">FAQs</a>
            <a className='contact__link' href="#contact">Contact Us</a>
            <a className='contact__link' href="#contact">About Us</a>
            <a className='contact__link' href="#contact">Terms of Service</a>
            <a className='contact__link' href="#contact">Refund Policy</a>
          </div>
          <div className='contact__wrapper'>
            <h5 className='contact__title'>Products</h5>
            <a className='contact__link' href="#juice">E-Juice</a>
            <a className='contact__link' href="#device">Mods & Kits</a>
            <a className='contact__link' href="#pods">Pod System</a>
            <a className='contact__link' href="#atomizer">Atomizer</a>
            <a className='contact__link' href="#accessories">Accessories</a>
          </div>
          <div className='contact__wrapper'>
            <h5 className='contact__title'>Platforms</h5>
            <a className='contact__link' href="#facebook">Facebook</a>
            <a className='contact__link' href="#twitter">Twitter</a>
            <a className='contact__link' href="#instagram">Instagram</a>
            <a className='contact__link' href="#tiktok">Tiktok</a>
            <a className='contact__link' href="#shopee">Shopee</a>
          </div>
        </section>
        <footer className='footer container section'>
          <div className='footer__social'>
            <FaFacebookSquare/>
            <AiOutlineTwitter/>
            <BiLogoInstagramAlt/>
            <BiLogoTiktok/>
            <SiShopee/>
          </div>
          <h6 className='footer__text'>© 2023 Covape-19 Garage. All rights reserved.</h6>
        </footer>
      </main>
    </>
  )
}

export default Dashboard

