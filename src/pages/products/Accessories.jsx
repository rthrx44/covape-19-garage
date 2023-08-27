import React from "react";
import "./Index.css";
import { Link, useNavigate } from "react-router-dom";
import { BiHeart, BiLogoFacebook } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import { Items } from "../../components/utils/item/Item";
import { RButton } from "../../components/buttons/Button";
import Device01 from "../../components/assets/Image/Device01.png";
import Pod15 from "../../components/assets/Image/Pod15.png";
import Atomizer19 from "../../components/assets/Image/Atomizer19.png";
import Juice01 from "../../components/assets/Image/Juice01.png";

export default function Accessories({ products: { accessories } }) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <section className="back__btn container section">
        <RButton displayText="Back" buttonClick={handleBack} />
        <div className="btn__con">
          <button className="cartBtn"><BiHeart/></button>
          <Link to={'/cart'} className="cartBtn"><BsCart4/></Link>
        </div>
      </section>
      <section className="product__info container section">
        <h1 id="accessories" className="shop__header">Accessories</h1>
        <Swiper
          modules={[Pagination, Grid]}
          slidesPerView={1}
          grid={{
            rows: 2, 
            fill: "row",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            425: { slidesPerView: 2, grid: { rows: 2, fill: "row" } },
            640: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
            768: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
            1024: { slidesPerView: 4, grid: { rows: 2, fill: "row" } },
            1280: { slidesPerView: 5, grid: { rows: 2, fill: "row" } },
          }}
          className="swiper__con"
        >
          {accessories.map((products, index) => (
            <SwiperSlide key={index}>
              <Items data={products}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="other__products container section">
        <h1 className="shop__header">Other Products</h1>
        <div className="grid__products">
          <div className="products__con">
            <h1 id="juice" className="shop__header">
              E-Juice
            </h1>
            <a href='/juice'><RButton displayText='View All'/></a>
            <div className="juice__con">
              <img className="juice_pic" src={Juice01} alt="juice" />
            </div>
          </div>
          <div className="products__con">
            <h1 id="device" className="shop__header">
              Mods & Kits
            </h1>
            <a href='/mods'><RButton displayText='View All'/></a>
            <div className="juice__con">
              <img className="juice_pic" src={Device01} alt="device" />
            </div>
          </div>
          <div className="products__con">
            <h1 className="shop__header">Pod Systems</h1>
            <a href='/pods'><RButton displayText='View All'/></a>
            <div className="juice__con">
              <img className="juice_pic" src={Pod15} alt="device" />
            </div>
          </div>
          <div className="products__con">
            <h1 id="atomizer" className="shop__header">
              Atomizers
            </h1>
            <a href='/atomizer'><RButton displayText='View All'/></a>
            <div className="juice__con">
              <img className="juice_pic" src={Atomizer19} alt="atomizer" />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact container section">
        <div className="contact__wrapper">
          <h5 className="contact__title">Support</h5>
          <a className="contact__link" href="#faqs">FAQs</a>
          <a className="contact__link" href="#contact">Contact</a>
        </div>
        <div className="contact__wrapper">
          <h5 className="contact__title">Products</h5>
          <a className="contact__link" href="#juice">E-Juice</a>
          <a className="contact__link" href="#device">Devices</a>
          <a className="contact__link" href="#atomizer">Atomizer</a>
          <a className="contact__link" href="#accessories">Accessories</a>
        </div>
        <div className="contact__wrapper">
          <h5 className="contact__title">Social</h5>
          <a className="contact__link" href="#facebook">Facebook</a>
        </div>
      </section>
      <footer className="footer container section">
        <div className="footer__social"><BiLogoFacebook /></div>
        <h6 className="footer__text">© 2023 Covape-19 Garage. All rights reserved.</h6>
      </footer>
    </div>
  );
}
