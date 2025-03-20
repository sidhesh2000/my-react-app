import React from 'react'
import  Carousel  from 'react-elastic-carousel'
import Item from "../item";
function Carosel() {
  return (
    <div style={{position:"relative"}}>
     
     <div className="sectionbg-purple-25">
        <div className="divcontainer">
          <div className="divrelative">
          
          <Carousel itemsToShow={2}>
          <Item>
          <div className="divcarousel-items">
          <div className="figureh-full" style={{width:'460px'}}>
                <div className="divgatsby-image-wrapper">
                  <img className="image-icon" alt="" src={require('../../assets/testimonials-line.webp.png')} />
                  <img
                    className="testimonials-linewebp-icon"
                    alt="img"
                    src={require('../../assets/testimonials-line.webp.png')}
                  />
                </div>
                <div className="satishchandra-doreswamy-vice-container">
                  <span className="satishchandra-doreswamy-vice-container1">
                    <p className="satishchandra-doreswamy">
                      SATISHCHANDRA DORESWAMY
                    </p>
                    <p className="vice-president-and">
                      Vice President and Global Head, Enterprise Cloud, TCS
                    </p>
                  </span>
                </div>
                <div className="our-solutions-enable">
                  “ Our solutions enable a resilient and secure hybrid cloud
                  ecosystem that drives innovation and supports next-gen
                  business models to accelerate enterprise growth and
                  transformation.”
                </div>
                <img className="avatar-icon" alt="" src={require('../../assets/Avatar1.png')} />
             </div>
              </div>
          </Item>

          <Item>
          <div className="divcarousel-items">
          <div className="figureh-full1" style={{width:"460px"}}>
                <div className="divgatsby-image-wrapper1">
                  <div className="image">
                    <div className="image1" />
                  </div>
                  <img
                    className="testimonials-linewebp-icon"
                    alt="img"
                    src={require('../../assets/testimonials-line.webp.png')}
                  />
                </div>
                <div className="divmt-12" />
                <div className="dr-rajesh-srinivasan-container">
                  <span className="satishchandra-doreswamy-vice-container1">
                    <p className="satishchandra-doreswamy">
                      DR. RAJESH SRINIVASAN
                    </p>
                    <p className="headsales-solution-and">
                      Head–Sales, solution, and product engineering for TCS
                      Enterprise Cloud, TCS
                    </p>
                  </span>
                </div>
                <div className="synergizing-your-it">
                  “ Synergizing your IT ecosystems with cloud. “
                </div>
                <img className="avatar-icon1" alt="img" src={require('../../assets/Avatar2.png')} />
              </div>
              </div>
          </Item>

          <Item>
          <div className="divcarousel-items">
          <div className="figureh-full2" style={{width:"460px"}}>
                <div className="divgatsby-image-wrapper2">
                  <div className="image2">
                    <div className="image3" />
                    
                  </div>
                </div>
                <div className="arun-kumar-selvaraj-container">
                  <span className="satishchandra-doreswamy-vice-container1">
                    <p className="satishchandra-doreswamy">
                    User
                    </p>
                    <p className="headsales-solution-and">
                      Global Head, Security and Compliance, TCS Enterprise Cloud
                    </p>
                  </span>
                </div>
                <div className="securing-a-cloud-first">
                  “ Securing a cloud-first approach “
                </div>
                <div className="improvised-securitypng" />
                <img className="avatar-icon2" alt="img" src={require('../../assets/avatart_common.avif')} />
              </div>
              </div>
          </Item>
        </Carousel>
        
          {/*    <img
                className="buttonabsolute-icon"
                alt=""
                src={require('../../assets/button.absolute.png')}
                onClick={onButtonabsoluteIconClick}
  />  */}
            
          </div>
        </div>

  
        <div className="heading">
          <div className="well-help-digitally-container">
            <span>{`We'll help `}</span>
            <span className="digitally">digitally</span>
            <span className="span">{` `}</span>
            <span className="digitally">transform</span>
            <span> your business</span>
          </div>
        </div>
        <img
          className="server-small-1-icon"
          alt="img"
          src={require('../../assets/server_small 1.png')}
        />
      </div>
    </div>
  )
}

export default Carosel