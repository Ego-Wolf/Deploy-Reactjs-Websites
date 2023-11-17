import React from 'react'
import './Item.css'


const Item = () => {
  return (
    <div class='item'>
      <img src={props.image} alt="" />
    </div>
  )
}

export default Item
