import React, { useState } from "react";
import "./Index.css";
import { BiLogoFacebook, BiMinus, BiPlus, BiHeart } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { LButton, RButton } from "../../components/buttons/Button"; 

function ItemInfo () {
  const navigate = useNavigate(); 
  const handleBack = () => {navigate('/dashboard')}
  const itemInfo = JSON.parse(localStorage.getItem('clickItem'))
  const [quantity, setQuantity] = useState(1)

  const handleAddtoCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]')
    let cartItems = {
      itemInfo: itemInfo,
      quantity: 1
    }
    cart.push(cartItems)
    localStorage.setItem('cart', JSON.stringify(cart)) 
  }

  return (
    <div>
      <section className="back__btn container section">
        <RButton displayText="Back" buttonClick={handleBack}/>
        <div className="btn__con">
          <button className="cartBtn"><BiHeart/></button>
          <Link to={'/cart'} className="cartBtn"><BsCart4/></Link>
        </div>
      </section>
      <section className="product__main-img container section">
        <div className="img__con">
          <img className="item__img-main" src={itemInfo.img} alt={itemInfo.id}/>
        </div>
        <div className="product__description-con">
          <h4 className="product__brand">{itemInfo.brand}</h4>
          <h2 className="product__name">{itemInfo.name}</h2>
          <h3 className="product__price">&#8369; {itemInfo.price}</h3>
        </div>
        <div className="selections__con">
          <div className="selections">
            <label className="selection-header">Quantity</label>
            <div className="qty_con">
              <input className="input" type="number" value={quantity} min="1" max="100" required onChange={(e)=>setQuantity(e.target.value)}/>
              <button className="minus_btn adjust_btn"><BiMinus/></button>
              <button className="plus_btn adjust_btn"><BiPlus/></button>
            </div>
          </div>
          <div className="selections">
            <div className="wishlist">
              <RButton displayText="Add to Wishlist"/>
            </div>
          </div>
        </div>
        <LButton displayText="Add to cart" buttonClick={handleAddtoCart}/>
      </section>
      <section className="product__details container section">
            <h5 className="product__brand">Product Description</h5>
            <p className="product__info"> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Error voluptates, <br></br>sit quibusdam cupiditate deleniti beatae dolores soluta officia, <br></br>itaque consequatur odit veniam assumenda voluptatum dicta? <br></br>Fugit quo laboriosam modi laborum! </p>
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

export default ItemInfo;
