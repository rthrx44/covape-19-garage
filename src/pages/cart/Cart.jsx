import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { RButton } from "../../components/buttons/Button"; 
import { CartItem } from './CartItem';


function Cart () {
  const navigate = useNavigate(); 
  const handleBack = () => {navigate('/item')};
  const handleBacktoDB = () => {navigate('/dashboard')};
  let cart = JSON.parse(localStorage.getItem('cart'));


  return (
    <>
      <section className="back__btn container section">
        <RButton displayText="Back" buttonClick={handleBack}/>
        <RButton displayText="Continue Shopping" buttonClick={handleBacktoDB}/>
      </section>
      <section className='container section'>
        <h1 className='cart__header'>Your Cart is Empty</h1>
        <div className='cart__items'>
            {cart.map((product, index) => {
              return <CartItem key={index} product={product}/>
            })}
        </div>
      </section>
    </>
  )
}

export default Cart