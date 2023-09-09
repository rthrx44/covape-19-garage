import React, { useEffect, useState } from "react";
import "./Index.css";
import { BiLogoInstagramAlt, BiLogoTiktok, BiHeart } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { LButton, RButton, BButton } from "../../components/buttons/Button";
import { ToastContainer, toast } from "react-toastify";
import { Items } from '../../components/utils/item/Item';
import Cvlogo from '../../components/assets/Image/Cvlogo.png'
import Juice01 from '../../components/assets/Image/Juice01.png'
import Device01 from '../../components/assets/Image/Device01.png'
import Pod15 from '../../components/assets/Image/Pod15.png'
import Atomizer19 from '../../components/assets/Image/Atomizer19.png'
import Access06 from '../../components/assets/Image/Access06.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"

function ItemInfo({topProducts}) {
  const navigate = useNavigate();
  const handleBack = () => {navigate(-1)};
  const handleBackToDashboard = () => {navigate("/dashboard")}
  const itemInfo = JSON.parse(localStorage.getItem("clickItem"));
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  const handleAddtoCart = () => {
    const newCart = [...cart];
    let itemInCart = newCart.find((item) => itemInfo.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
      toast.success(` ${itemInfo.name} Increase Quantity `, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        className: "success",
      });
    } else {
      itemInCart = {
        ...itemInfo,
        quantity: 1,
      };
      newCart.push(itemInCart);
      toast.success(` ${itemInfo.name} Added to Cart `, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        className: "success",
      });
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div>
      <section id="home" className="back__btn container section">
        <RButton displayText="Back" buttonClick={handleBack} />
        <div className="btn__con">
          <button className="cartBtn">
            <BiHeart />
          </button>
          <Link to={"/cart"} className="cartBtn">
            <BsCart4 />
          </Link>
        </div>
      </section>
      <section className="product__main-img container section">
        <div className="img__con">
          <img
            className="item__img-main"
            src={itemInfo.img}
            alt={itemInfo.id}
          />
        </div>
        <div className="product__description-con">
          <h4 className="product__brand">{itemInfo.brand}</h4>
          <h2 className="product__name">{itemInfo.name}</h2>
          <h3 className="product__price">&#8369; {itemInfo.price}</h3>
        </div>
        <div className="selections__con">
          <div className="wishlist">
            <RButton displayText="Add to Wishlist" />
          </div>
        </div>
        <LButton displayText="Add to cart" buttonClick={handleAddtoCart} />
        <ToastContainer limit={2} />
        <div  className="product__details">
          <h5 className="product__brand">Product Description</h5>
          <p className="product__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
            Error voluptates, <br></br>sit quibusdam cupiditate deleniti beatae
            dolores soluta officia, <br></br>itaque consequatur odit veniam
            assumenda voluptatum dicta? <br></br>Fugit quo laboriosam modi
            laborum!
          </p>
        </div>
      </section>
      <section className="btDashboard container section">
        <div className="bdash_con">
          <BButton displayText="Back to Dashboard" buttonClick={handleBackToDashboard}/>
        </div>
      </section>
      <section id='products' className='shop container section'>
        <h1 className="shop__header product__header">Top Products</h1>
        <Swiper
          modules={[Pagination]}
          loop={true}
          slidesPerView={1}
          pagination= {{ clickable: false }}
          breakpoints={{
            425: {slidesPerView: 2},
            640: {slidesPerView:3},
            768: {slidesPerView: 4},
            1024: {slidesPerView: 5},
            1280: {slidesPerView: 6},
            }}
          className="swiper__con"
        >
          {topProducts.map((products, index) => (
            <SwiperSlide key={index}>
              <Items data={products}/>
            </SwiperSlide>))}
        </Swiper>
      </section>
      <section className='other__products container section'>
        <h1 className="shop__header product__header">Other Products</h1>
        <div className="products">
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
        <div className='footer__logo'><img id='home' className='header__logo' src={Cvlogo} alt='Covape-19 Garage Logo' title='Back to Top'/></div>
      </footer>
    </div>
  );
}

export default ItemInfo;
