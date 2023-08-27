import React, { useContext } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { RButton } from "../../components/buttons/Button"; 
import { ProductContext } from "../../context/ProductContext";
import { CartItem } from './CartItem';

function Cart ({allProducts}) {
  const navigate = useNavigate(); 
  const handleBack = () => {navigate('/item')}
  const handleBacktoDB = () => {navigate('/dashboard')}
  const { cartItems } = useContext(ProductContext)


  return (
    <>
      <section className="back__btn container section">
        <RButton displayText="Back" buttonClick={handleBack}/>
        <RButton displayText="Continue Shopping" buttonClick={handleBacktoDB}/>
      </section>
      <section>
        <h1 className='cart__header'>Your Cart is Empty</h1>
        <div className='cart__items'>
          {allProducts.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product}/>
            }
          })}
        </div>
      </section>
    </>
  )
}

export default Cart