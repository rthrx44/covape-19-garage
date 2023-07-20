import React from "react";
import "./Products.css";
import { BiLogoFacebook } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import Juice01 from "../../components/assets/Image/Juice01.png";
import Juice02 from "../../components/assets/Image/Juice02.png";
import Juice04 from "../../components/assets/Image/Juice04.png";
import Juice06 from "../../components/assets/Image/Juice06.png";
import Juice08 from "../../components/assets/Image/Juice08.png";
import Juice10 from "../../components/assets/Image/Juice10.png";
import Juice13 from "../../components/assets/Image/Juice13.png";
import Juice15 from "../../components/assets/Image/Juice15.png";
import Juice17 from "../../components/assets/Image/Juice17.png";
import Juice18 from "../../components/assets/Image/Juice18.png";
import { RButton } from "../buttons/Button";

export default function Putingusok () {
  
  const navigate = useNavigate();
  
  const handleBack = () => {navigate('/dashboard')}

  return (
    <div>
      <section className="back__btn container section">
        <RButton displayText="Back" buttonClick={handleBack}/>
      </section>
      <section className="product__main-img container section">
        <Swiper 
          slidesPerView={1}
          allowTouchMove={false}
        >
          <SwiperSlide>
            <img className="item__img-main" src={Juice01} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice02} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice04} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice06} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice08} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice10} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice13} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice15} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice17} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice18} alt="Espesyal Juice" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="product__smaill-img container section">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={2}
          navigation
          pagination= {{ clickable: false }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            768: {slidesPerView: 4},
            1024: {slidesPerView: 4},
            1280: {slidesPerView: 4}
            }}
            className="swiper__con"
          >
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice01} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice02} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice04} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice06} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice08} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice10} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice13} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice15} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice17} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice18} alt="Espesyal Juice" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="product__description container section">
        <div className="product__description-con">
          <h4 className="product__brand">Espesyal Vapors</h4>
          <h2 className="product__name">Almond RY4</h2>
          <h3 className="product__price">&#8369; 200.00</h3>
        </div>
        <form className="product__selection">
          <div className="selections">
            <label className="selection-header">Options</label>
            <select className="select" name='ejuice' size='1'>
              <option>Select MG</option>
              <option>3 MG</option>
              <option>6 MG</option>
              <option>9 MG</option>
              <option>12 MG</option>
            </select>
          </div>
          <div className="selections">
            <label className="selection-header">Quantity</label>
            <input className="input" type="number" value='1' />
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
