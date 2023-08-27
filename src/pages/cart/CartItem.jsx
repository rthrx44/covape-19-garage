import React from 'react'

export const CartItem = (props) => {
  const {id, img, brand, name, price} = props.data
  console.log(props.data);
  return (
    <>
      <img className='cart__img' src={img} alt={id} />
      <div className="cart__con">
        <h1 className="cart__brand">{brand}</h1>
        <h2 className="cart__name">{name}</h2>
      </div>
      <p className="cart__price">&#8369; {price}</p>
    </>
  )
}
