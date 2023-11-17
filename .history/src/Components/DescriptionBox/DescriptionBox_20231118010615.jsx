import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est expedita ex repudiandae omnis, architecto quod ipsa fugit dolores eaque consequuntur earum, nemo qui aperiam.</p>
        <p>Lore</p>
      </div>
    </div>
  )
}

export default DescriptionBox
