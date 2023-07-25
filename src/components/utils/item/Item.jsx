import React from 'react'
import './Item.css'

export const Item = (props) => {
  const { id, img, brand, name, price } = props
  return (
    <div className='grid__item'>
      <img className='item__img' src={img} alt={id} />
      <div className="item__con">
        <h1 className="item__brand">{brand}</h1>
        <h2 className="item__name">{name}</h2>
      </div>
      <p className="item__price">&#8369; {price}</p>
      <div className='item__link'>
        <a className='link__products' href='dashboard/putingusok'>VIEW</a>
      </div>
    </div>
  )
}

export const ProductBigImg = (props) => {
  const { id, img } = props
  return (
    <>
      <img className="item__img-main" src={img} alt={id} />
    </>
  )
}

export const ProductSmallImg = (props) => {
  const { id, img } = props
  return (
    <>
      <img className="item__img-small" src={img} alt={id} />
    </>
  )
}
