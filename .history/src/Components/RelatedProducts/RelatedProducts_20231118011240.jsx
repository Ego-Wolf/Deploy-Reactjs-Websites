import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from ''


const RelatedProducts = () => {
  return (
    <div class='relatedproducts'>
      <h1>Telated Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i)=>{
            return <Item />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
