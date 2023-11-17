import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.big.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p></p>
        </div>
    </div>
  )
}

export default Footer
