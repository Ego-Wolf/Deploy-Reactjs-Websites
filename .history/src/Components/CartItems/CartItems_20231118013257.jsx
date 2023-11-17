import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'


const CartItems = () => {
  const {all_product, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p></p>
        <p></p>
        <p></p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
    </div>
  )
}

export default CartItems
