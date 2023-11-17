import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_imae from


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hand-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>collection</p>
        <p>for everyone</p>
      </div>
      <div className="hero-laster-btn">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt="" />
      </div>
      <div className="hero-right">

      </div>
    </div>
  )
}

export default Hero

