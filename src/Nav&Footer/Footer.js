import React from 'react'

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-info'>
            <p>Come visit us and let us take care fo your laundry needs.</p>
            <text><strong>We are open 7 days a week to serve you!</strong></text>
        </div>
        <div className='footer-info'>
            <header>Contact Info:</header>
            <li>
                <a href='tel:+19159292929' className='invisible-link'>Call us</a>
            </li>
            <li>
                <a href='mailto:info@example.com' className='invisible-link'>Email</a>
            </li>
            <li>
                <a href='https://maps.google.com?q=5808+Johannsen+Rd' className='invisible-link'>Location</a>
            </li>
        </div>
        <div className='footer-info'>
            <header>Hours of Operation:</header>
            <text>Mon - Sun:   Hours</text>
        </div>
      
    </div>
  )
}
