import React from "react";
import "./Cart.css";

export const CartItem = ({ product }) => {
  const { id, img, brand, name, price } = product.itemInfo;
  // const {quantity} = product.quantity
  return (
    <>
      <div className="cartitem__con">
        <img className="cart__img" src={img} alt={id} />
        <div className="cart__con">
          <h1 className="cart__brand">{brand}</h1>
          <h2 className="cart__name">{name}</h2>
        </div>
        <p className="cart__price">&#8369; {price}</p>
      </div>
    </>
  );
};
