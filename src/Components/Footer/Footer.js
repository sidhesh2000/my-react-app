import React from 'react'

function Footer() {
  return (
    <div style={{position:"relative"}}>
          <div className="divbasefooter">
        <div className="divrow">
          <div className="tcs20logosvg">
            <img className="tcs20logosvg-icon" alt="" src={require('../../assets/TCS%20logo.svg.png')} />
          </div>
          <img
            className="ulsocial-icn-ul-icon"
            alt="img"
            src={require('../../assets/ul.social-icn-ul.png')}
          />
          <div className="tata-consultancy-services">
            ©2023 TATA Consultancy Services Limited
          </div>
          <div className="ulbase-footer-tcs-lnks-ul">
            <div className="privacy-notice">Privacy Notice</div>
            <div className="cookie-policy">Cookie Policy</div>
            <div className="disclaimer">Disclaimer</div>
            <div className="security-policy">Security Policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer