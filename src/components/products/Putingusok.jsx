import React from "react";
import "./Products.css";
import Navbar from "../navbar/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import Juice01 from "../../components/assets/Image/Juice01.png";
import Juice02 from "../../components/assets/Image/Juice02.png";
import Juice03 from "../../components/assets/Image/Juice03.png";
import Juice04 from "../../components/assets/Image/Juice04.png";
import Juice05 from "../../components/assets/Image/Juice05.png";
import Juice06 from "../../components/assets/Image/Juice06.png";
import Juice07 from "../../components/assets/Image/Juice07.png";
import Juice08 from "../../components/assets/Image/Juice08.png";
import Juice09 from "../../components/assets/Image/Juice09.png";
import Juice10 from "../../components/assets/Image/Juice10.png";
import Juice11 from "../../components/assets/Image/Juice11.png";
import Juice12 from "../../components/assets/Image/Juice12.png";
import Juice13 from "../../components/assets/Image/Juice13.png";
import Juice14 from "../../components/assets/Image/Juice14.png";
import Juice15 from "../../components/assets/Image/Juice15.png";
import Juice16 from "../../components/assets/Image/Juice16.png";
import Juice17 from "../../components/assets/Image/Juice17.png";
import Juice18 from "../../components/assets/Image/Juice18.png";

export default function Putingusok() {
  return (
    <div>
      <Navbar />
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
            <img className="item__img-main" src={Juice03} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice04} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice05} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice06} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice07} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice08} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice09} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice10} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice11} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice12} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice13} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice14} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice15} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="item__img-main" src={Juice16} alt="Espesyal Juice" />
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
            <img className="item__img-small" src={Juice03} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice04} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice05} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice06} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice07} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice08} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice09} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice10} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice11} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice12} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice13} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice14} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice15} alt="Espesyal Juice" />
          </SwiperSlide>
          <SwiperSlide className='small__img-con'>
            <img className="item__img-small" src={Juice16} alt="Espesyal Juice" />
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
          <h4 className="product__brand">Geekvape</h4>
          <h2 className="product__name">Aegis Legend 2</h2>
          <h4 className="product__price">&#8369; 2,200</h4>
        </div>
      </section>
    </div>
  );
}
