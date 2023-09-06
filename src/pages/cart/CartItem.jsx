import React from "react";
import "./Cart.css";
import { FaTimes } from "react-icons/fa";


export const CartItem = ({ product, removeItemFromCart, handleQuantity}) => {
  const { id, img, brand, name, price, quantity } = product
  return (
    <>
      <div className="cartitem__con">
        <img className="cart__img" src={img} alt={id} />
        <div className="cart__con">
          <div>
            <h1 className="cart__brand">{brand}</h1>
            <h2 className="cart__name">{name}</h2>
          </div>
          <div className="selections">
            <label className="selection-header">Quantity</label>
            <input 
              className="input"
              value={quantity}
              minLength={1}
              maxLength={2}
              onChange={(e) => handleQuantity(product, Number(e.target.value))}
            />
          </div>
        </div>
        <div className="price__con">
          <button className="remove__cartItems" onClick={() => removeItemFromCart(product)}><FaTimes/></button>
          <p className="cart__price">&#8369; {price}</p>
        </div>
      </div>
    </>
  );
};
