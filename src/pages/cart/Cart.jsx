import React, { useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { BButton, LButton } from "../../components/buttons/Button"; 
import { CartItem } from './CartItem';
import { FaTimes } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Cart () {
  const navigate = useNavigate(); 
  const handleBacktoDB = () => {navigate(-1)};
  const handleBackToDashboard = () => {navigate("/dashboard")}
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState(cartFromLocalStorage);
  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  }

  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => Number(sum + price * quantity), Number(0));
  };

  const getCartTotal = () => {
    return cart.reduce((sum, {quantity}) => Number(sum + quantity), Number(0));
  };

  const handleQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(item => product.name === item.name).quantity = amount;  
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeItemFromCart = (itemToRemove) => {
    let removeItem = cart.filter((product) => product !== itemToRemove)
    localStorage.setItem('cart', JSON.stringify(removeItem))
    setCart(removeItem)
  }

  return (
    <>
      <section className="back__btn container section">
        <BButton displayText="Continue Shopping" buttonClick={handleBacktoDB} icon={<FaArrowLeft/>} />
        <BButton displayText="Clear Cart" buttonClick={handleClearCart} icon={<FaTimes/>}/>
      </section>
      <section className='container section'>
        <div className='grid__cart'>
          <div>
            <div className='total_con'>
              <h1 className='total__cartItem'>Cart Total Items : </h1>
              <h1 className='cartItem__count'>{getCartTotal()}</h1>
            </div>
            <div className='cart__items'>
                {cart.map((product, index) => {
                  return <CartItem 
                    key={index} 
                    product={product} 
                    removeItemFromCart={removeItemFromCart} 
                    handleQuantity={handleQuantity}/>
                })}
            </div>
          </div>
          <div className='amount__cart'>
            <div className='totalprice-con'>
              <p className='total__amount'>Subotal Amount :</p> 
              <p className='totalAmount_price'>&#8369; {getTotalSum()}</p>
            </div>
            <div className='totalprice-con'>
              <p className='total__amount'>Shipping Fee :</p> 
              <p className='totalAmount_price'>Calculate shipping fee...</p>
            </div>
            <div className='totalprice-con'>
              <p className='total__amount'>Total Amount :</p> 
              <p className='totalAmount_price'>&#8369; {getTotalSum()}</p>
            </div>
            <div className="wishlist">
              <LButton displayText="Proceed to Checkout" icon={<FaArrowRight/>} />
              <BButton displayText="Back to Dashboard" buttonClick={handleBackToDashboard} icon={<FaArrowLeft/>} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart