import React from 'react'
import "./TimeLine.css"
import { Fade } from 'react-bootstrap'
function TimeLine() {
  return (
    <div >
         <div className="headingsNew">
          <div className="well-help-digitally-containers">
            <span>{`We'll help `}</span>
            <span className="digitally">digitally</span>
            <span className="span">{` `}</span>
            <span className="digitally">transform</span>
            <span> your business</span>
          </div>
        </div>
        <div className="with-tcs-enterprises">
            <div className='paraLines'>
          With TCS Enterprise Cloud, you can gain a competitive edge, keep up
          with changing business needs, and stay compliant with ever-evolving
          regulatory and privacy directives while accelerating innovation for
          sustainable growth.
          </div>
        </div>
        <div style={{position:"relative"}}>
        <div className="timeline">
                <div className="timeline-child" />
            
            <Fade bottom delay={5000} duration={2000}>
                <div className="year-2023">
                  <b className="b1">2023</b>
                  <div className="content1">
                    <img className="content-child" alt="" src={require('../../assets/Line 2.png')} />
                    <div className="unleash-business-resilience">
                      Unleash business resilience with enterprise cloud.
                    </div>
                  </div>
                </div>
                </Fade>
                <Fade bottom delay={3000} duration={2000}>
                <div className="year-2021">
                  <b className="b1">2021</b>
                  <div className="content1">
                    <img className="content-child" alt="" src={require('../../assets/Line 2.png')} />
                    <div className="unleash-business-resilience">
                      Unleash business resilience with enterprise cloud.
                    </div>
                  </div>
                </div>
                </Fade>
                <Fade top delay={4000} duration={2000}>
                <div className="year-2022">
                  <div className="content3">
                    <div className="unleash-business-resilience2">
                      Unleash business resilience with enterprise cloud.
                    </div>
                    <img className="content-child" alt="" src={require('../../assets/Line 3.png')} />
                  </div>
                  <b className="b3">2022</b>
                </div>
                </Fade>
                <Fade top delay={2000} duration={2000}>
                <div className="year-2020">
                  <div className="content3">
                    <div className="unleash-business-resilience2">
                      Unleash business resilience with enterprise cloud.
                    </div>
                    <img className="content-child" alt="" src={require('../../assets/Line 3.png')} />
                  </div>
                  <b className="b3">2020</b>
                </div>
               </Fade>
              <Fade bottom delay={1000} duration={3000}>
                <div className="year-2019">
                  <b className="b1">2019</b>
                  <div className="content1">
                    <img className="content-child" alt="" src={require('../../assets/Line 2.png')} />
                    <div className="unleash-business-resilience">
                      Unleash business resilience with enterprise cloud.
                    </div>
                  </div>
                </div>
               </Fade>
                <img
                  className="public-cloud-1-icon"
                  alt="img"
                  src={require('../../assets/public_cloud 1.png')}
                />
                <img
                  className="public-cloud-2-icon"
                  alt="img"
                  src={require('../../assets/public_cloud 1.png')}
                />
                <img
                  className="public-cloud-3-icon"
                  alt="img"
                  src={require('../../assets/public_cloud 1.png')}
                />
                <img
                  className="public-cloud-4-icon"
                  alt="img"
                  src={require('../../assets/public_cloud 1.png')}
                />
                <img
                  className="public-cloud-5-icon"
                  alt="img"
                  src={require('../../assets/public_cloud 1.png')}
                />
                </div> 
        </div>
          
    </div>
  )
}

export default TimeLine