import React, { useState } from "react";
import "./Products.css";
import { BiLogoFacebook } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { RButton } from "../buttons/Button";
import { ProductBigImg, ProductSmallImg } from "../utils/item/Item";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Thumbs } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/thumbs"



export default function Putingusok ({endpoint: {productData, productJPrice}}) {
  
  const navigate = useNavigate(); 
  const [activeThumb, setActiveThumb] = useState()
  const handleBack = () => {navigate('/dashboard')}
  console.log(activeThumb);
  return (
    <div>
      <section className="back__btn container section">
        <RButton displayText="Back" buttonClick={handleBack}/>
      </section>
      <section className="product__main-img container section">
        <Swiper 
          slidesPerView={1}
          allowTouchMove={false}
          modules={[ Thumbs ]}
          thumbs={{ swiper : activeThumb}}
        >
          {productData?.map((item, i) => (
            <SwiperSlide key={i}>
              <ProductBigImg {...item}/>
            </SwiperSlide>))}
        </Swiper>
        <Swiper
          onClick={setActiveThumb}
          slidesPerView={3}
          slidesPerGroup={2}
          navigation
          pagination= {{ clickable: false }}
          modules={[Pagination, Navigation, Thumbs]}
          breakpoints={{
            768: {slidesPerView: 4},
            1024: {slidesPerView: 4},
            1280: {slidesPerView: 4}
            }}
          className="swiper__con"
        >
          {productData?.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="small__img-con">
                <ProductSmallImg {...item}/>
              </div>
            </SwiperSlide>))}
        </Swiper>
        <div className="product__description-con">
          <h4 className="product__brand">Espesyal Vapors</h4>
          <h2 className="product__name"> Almond RY4 </h2>
          <h3 className="product__price">&#8369; 200.00</h3>
        </div>
        <form className="product__selection">
          <div className="selections">
            <label className="selection-header">Options</label>
            <select className="select" name='ejuice' size='1' required>
              <option value='' selected disabled >Select Nicotine</option>
              <option value=''>3 MG</option>
              <option value=''>6 MG</option>
              <option value=''>9 MG</option>
              <option value=''>12 MG</option>
            </select>
          </div>
          <div className="selections">
            <label className="selection-header">Quantity</label>
            <input className="input" type="number" min={1} max={100} required/>
          </div>
          <RButton displayText="Add to cart"/>
        </form>
      </section>
      <section className="product__details container section">
            <h5 className="product__brand">Product Description</h5>
            <p className="product__info">Size: 100 ML
              <br></br>Ratio VG/PG: 60/40
              <br></br>Nicotine Type: Freebase
            </p>
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
          <a className='contact__link' href="#juice">Atomizer</a>
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
    </div>
  );
}