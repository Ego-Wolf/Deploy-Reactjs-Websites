import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEn</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item)=>){
            return <Item key={i} />
        }}
      </div>
    </div>
  )
}

export default Popular
