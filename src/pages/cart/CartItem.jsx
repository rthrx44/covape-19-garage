import React from "react";
import "./Cart.css";
import { FaTimes } from "react-icons/fa";

export const CartItem = ({ product, removeItemFromCart, handleQuantity}) => {
  const { id, img, brand, name, price, quantity } = product
  console.log(quantity);
  return (
    <>
      <div className="cartitem__con">
        <img className="cart__img" src={img} alt={id} />
        <div className="cart__con">
          <h1 className="cart__brand">{brand}</h1>
          <h2 className="cart__name">{name}</h2>
          <input 
            className="cart__name"
            value={quantity}
            onChange={(e) => handleQuantity(product, Number(e.target.value))}
          />
        </div>
        <div className="price__con">
          <button className="remove__cartItems" onClick={() => removeItemFromCart(product)}><FaTimes/></button>
          <p className="cart__price">&#8369; {price}</p>
        </div>
      </div>
    </>
  );
};
