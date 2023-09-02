import React, { useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { RButton } from "../../components/buttons/Button"; 
import { CartItem } from './CartItem';
import { ToastContainer, toast } from "react-toastify";


function Cart () {
  const navigate = useNavigate(); 
  const handleBacktoDB = () => {navigate('/dashboard')};
  const itemInfo = JSON.parse(localStorage.getItem("clickItem"));
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState(cartFromLocalStorage);
  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  }

  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, {quantity}) => Number(sum + quantity), 0);
  };

  const handleQuantity = (product, amount) => {
    const newCart = [...cart];
    let quantityInCart = newCart.find(item => product.name === item.name).quantity = amount;
    if (quantityInCart) {
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
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const removeItemFromCart = (itemToRemove) => {
    let removeItem = cart.filter((product) => product !== itemToRemove)
    localStorage.setItem('cart', JSON.stringify(removeItem))
    setCart(cart.filter((product) => product !== itemToRemove))
  } 
 
  return (
    <>
      <section className="back__btn container section">
        <RButton displayText="Continue Shopping" buttonClick={handleBacktoDB}/>
        <RButton displayText="Clear Cart" buttonClick={handleClearCart}/>
      </section>
      <section className='container section'>
        <div className='total_con'>
          <h1 className='total__cartItem'>Cart Total Items : </h1>
          <h1 className='cartItem__count'>{getCartTotal()}</h1>
        </div>
        <div className='cart__items'>
            {cart.map((product, index) => {
              return <CartItem key={index} product={product} removeItemFromCart={removeItemFromCart} handleQuantity={handleQuantity}/>
            })}
        <ToastContainer limit={2} />
        </div>
      </section>
      <section className='container section'>
        <div> Total Cost : &#8369; {getTotalSum()}</div>
      </section>
    </>
  )
}

export default Cart