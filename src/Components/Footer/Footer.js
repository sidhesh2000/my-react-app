import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div>
      <div className='footerbg'>
      <div>
      <img className="TataImg"alt="" src={require('../../assets/TCS%20logo.svg.png')} />
      </div>
      <div>
      <img
            className='SocialImg'
            alt="img"
            src={require('../../assets/ul.social-icn-ul.png')}
          />
      </div>
      <div className='TataText'>
      ©2023 TATA Consultancy Services Limited
      </div>
      <div className='finalText'> 
      <div >Privacy Notice</div>
            <div >Cookie Policy</div>
            <div >Disclaimer</div>
            <div >Security Policy</div>
      </div>
      </div>
    </div>
  )
}

export default Footer