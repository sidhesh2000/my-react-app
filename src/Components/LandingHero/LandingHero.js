import React from 'react'
import "./LandingHero.css"
// import landingimg from "./landingnearimg.PNG"
function LandingHero() {
  return (
   <div>
    <div className='LandingBg' style={{display:"flex", justifyContent:"center"}}>
      <div className="InnerFlexContainer">
        <div style={{width:"100%"}} className="InnerCont1">
          <div>
          <div className='BlackHeading'>Create exponential </div>
          <div className='BlackHeading'>value with hybrid cloud</div>
          </div>
          <div className='BlueHeading'>TCS Alpha 4.0</div>
          <div className="ListCont">
            <div className='InnerListCont'>
              <div> <svg className='TickImage' viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
    <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
</svg></div>
              <div  className="ListFontStyle">Cloud by Design</div>
            </div>
            <div className='InnerListCont'>
              <div><svg className='TickImage' viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
    <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
</svg></div>
              <div  className="ListFontStyle">Zero trust architecture</div>
            </div>
            <div className='InnerListCont'>
              <div><svg className='TickImage' viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
    <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
</svg></div>
              <div  className="ListFontStyle">Wide option of resource units</div>
            </div>
            <div className='InnerListCont'>
              <div><svg className='TickImage' viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
    <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
</svg></div>
              <div  className="ListFontStyle">Robust IAAS to integrate with services</div>
            </div>
            <div className='InnerListCont'>
              <div><svg className='TickImage' viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
    <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
</svg></div>
              <div className="ListFontStyle">Continued hybrid cloud approach</div>
            </div>
          </div>
          </div>
          {/* <div style={{ width: "50%" , height:"100%"}} className="InnerCont2">
  <img src={landingimg} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
</div> */}

      </div>

    </div>
   
   </div>
  )
}

export default LandingHero