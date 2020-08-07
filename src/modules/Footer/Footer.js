import React from 'react'

const Footer = () => {
  return (
    <footer className='footer container'>
      <div className='footer__nav'>

        <div>
          <h3>Relationz</h3>
          <ul className='footer__nav-block'>
            <li className='footer__nav-item'><a href="#">Product Tour</a></li>
            <li className='footer__nav-item'><a href="#">Pricing</a></li>
            <li className='footer__nav-item'><a href="#">Founding Members</a></li>
            <li className='footer__nav-item'><a href="#">Case Studies</a></li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul className='footer__nav-block'>
            <li className='footer__nav-item'><a href="#">Blog</a></li>
            <li className='footer__nav-item'><a href="#">Career</a></li>
            <li className='footer__nav-item'><a href="#">Privacy</a></li>
            <li className='footer__nav-item'><a href="#">About</a></li>
          </ul>
        </div>

        <div>
          <h3>Support</h3>
          <ul className='footer__nav-block'>
            <li className='footer__nav-item'><a href="#">Documentation</a></li>
            <li className='footer__nav-item'><a href="#">Security</a></li>
            <li className='footer__nav-item'><a href="#">Mobility Guide</a></li>
            <li className='footer__nav-item'><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3>Legal</h3>
          <ul className='footer__nav-block'>
            <li className='footer__nav-item'><a href="#">Terms of Service</a></li>
            <li className='footer__nav-item'><a href="#">Privacy Policy</a></li>
            <li className='footer__nav-item'><a href="#">Cookie Information</a></li>
            <li className='footer__nav-item'><a href="#">GDPR Commitment</a></li>
          </ul>
        </div>

      </div>
      <div className='footer__bottom'>
        <h3>Relationz</h3>
        <span className='footer__copyright'>
          Copyright © 2010 - 2019 Relationz Ltd. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer