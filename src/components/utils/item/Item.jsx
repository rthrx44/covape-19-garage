import React from 'react'
import './Item.css'

export const Items = (props) => {
  console.log(props);
  const handleGetInfo = () => {localStorage.setItem('clickItem', JSON.stringify(props))}
  return (
    <div className='grid__item'>
      <img className='item__img' src={props.img} alt={props.id} />
      <div className="item__con">
        <h1 className="item__brand">{props.brand}</h1>
        <h2 className="item__name">{props.name}</h2>
      </div>
      <p className="item__price">&#8369; {props.price}</p>
      <div className='item__link'>
        <a className='link__products' href='/item' onClick={handleGetInfo}>VIEW</a>
      </div>
    </div>
  )
}
