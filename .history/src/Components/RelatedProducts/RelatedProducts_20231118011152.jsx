import React from 'react'
import './RelatedProducts.css'


const RelatedProducts = () => {
  return (
    <div class='relatedproducts'>
      <h1>Telated Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data}
      </div>
    </div>
  )
}

export default RelatedProducts
