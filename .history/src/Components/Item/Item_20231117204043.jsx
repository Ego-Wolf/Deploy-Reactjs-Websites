import React from 'react'
import './Item.css'


const Item = (props) => {
  return (
    <div class='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices"></div>
    </div>
  )
}

export default Item
