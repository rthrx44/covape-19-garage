import React, { useState } from "react";
import "../Index.css";
import { BiLogoFacebook, BiMinus, BiPlus } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { RButton } from "../../../components/buttons/Button"; 

function ItemInfo () {
  const navigate = useNavigate(); 
  const handleBack = () => {navigate('/dashboard')}
  const itemInfo = JSON.parse(localStorage.getItem('clickItem'))
  const [itemPrice, setItemPrice] = useState(itemInfo.price)
  const [quantity, setQuantity] = useState(1)

  console.log(itemInfo);

  return (
    <div>
      <section className="back__btn container section">
        <RButton displayText="Back" buttonClick={handleBack}/>
      </section>
      <section className="product__main-img container section">
        <form className="product__selection">
          <div className="img__con">
            <img className="item__img-main" src={itemInfo.img} alt={itemInfo.id}/>
          </div>
          <div className="product__description-con">
            <h4 className="product__brand">{itemInfo.brand}</h4>
            <h2 className="product__name">{itemInfo.name}</h2>
            <h3 className="product__price">&#8369; {itemPrice}</h3>
          </div>
          <div className="selections__con">
            <div className="selections">
              <label className="selection-header">Options</label>
              <select className="select" name='ejuice' size='1' value={itemPrice} onChange={(e)=>setItemPrice(e.target.value)}>
                <option value={itemInfo.price}>3MG</option>
                <option value={itemInfo.price2}>6MG</option>
                <option value={itemInfo.price3}>9MG</option>
                <option value={itemInfo.price4}>12MG</option>
              </select>
            </div>
            <div className="selections">
              <label className="selection-header">Quantity</label>
              <div className="qty_con">
                <input className="input" type="number" value={quantity} min="1" max="100" required onChange={(e)=>setQuantity(e.target.value)}/>
                <button className="minus_btn adjust_btn"><BiMinus/></button>
                <button className="plus_btn adjust_btn"><BiPlus/></button>
              </div>
            </div>
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

export default ItemInfo;