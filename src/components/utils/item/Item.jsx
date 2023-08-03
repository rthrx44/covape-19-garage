import React from 'react'
import './Item.css'

export const Items = (props) => {
  const { id, img, brand, name, price } = props
  const handleGetInfo = () => {localStorage.setItem('clickItem', JSON.stringify(props))}
  return (
    <div className='grid__item'>
      <img className='item__img' src={img} alt={id} />
      <div className="item__con">
        <h1 className="item__brand">{brand}</h1>
        <h2 className="item__name">{name}</h2>
      </div>
      <p className="item__price">&#8369; {price}</p>
      <div className='item__link'>
        <a className='link__products' href='/item' onClick={handleGetInfo}>VIEW</a>
      </div>
    </div>
  )
}
