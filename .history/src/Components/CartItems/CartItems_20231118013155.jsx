import React, { useContext } from 'react'
import './CartItems.css'
import { shop}


const CartItems = () => {
  const {all_product, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
      
    </div>
  )
}

export default CartItems
