import React from 'react'
import './Item.css'


const Item = (props) => {
  return (
    <div class='item'>
      <img src={props.image} alt="" />
      <p></p>
    </div>
  )
}

export default Item
