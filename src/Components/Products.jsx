import React from "react";
import './style_product.css';
import { Row, Col, Container } from "react-bootstrap";
import { Hero } from "./Header";
export const Products = () => {
  return(
<>
<Hero/>
<br/><br/><br/>
{/* Row 1 */}
<Row>
<Col lg-2>
  <img src={require('../assets/Infinite/computeProduct.gif')} style={{width:"130px", paddingLeft:"60px", paddingTop:"30px"}}/>
  </Col>
  <Col lg-8>
<div  style={{width: '60rem'}}>
<div>
          <h6 style={{color:"#000", textAlign:"left", fontSize:"20px", fontWeight:"bold", lineHeight:"36px"}}>
            Console
            </h6>
          {/*  <div class="pulse">
               live
            </div>
  */}
  <div class="live-indicator-block" style={{top:"19%", left:"24%"}}>
  <span class="live-indicator">
  <svg width="8" height="8" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#fff"/>
<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
</svg>
&nbsp;
Upgrade
      </span>
</div>
           
           
        <p className="card-text">
        &nbsp; &nbsp; &nbsp;
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#62B62C"/>
</svg> &nbsp;Its a web-based graphical interface that users can access to manage ECP's compute, storage and networking services. A self-service portal to provision cloud resources.
           
          </p>
        </div>
      </div>
      </Col>
      <Col lg-2 >
      <br/>
    	<button class="button shiny">Log In</button>
      </Col>
      </Row>

{/* Row 2 */}
<Row>
<Col lg-2>
  <img src={require('../assets/Infinite/showback.gif')} style={{width:"130px", paddingLeft:"60px", paddingTop:"30px"}}/>
  </Col>
  <Col lg-8>
<div  style={{width: '60rem'}}>
<div>
          <h6 style={{color:"#000", textAlign:"left", fontSize:"20px", fontWeight:"bold", lineHeight:"36px"}}>
            Showback
            </h6>
            <div class="live-indicator-block-green" style={{top:"34%", left:"24%"}}>
  <span class="live-indicator-green">
  <svg width="8" height="8" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#fff"/>
<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
</svg>
&nbsp;
Live
      </span>
</div>
        <p className="card-text">
        &nbsp; &nbsp; &nbsp;
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#62B62C"/>
</svg> &nbsp;A console to deep dive on the utilization of various Alpha resources:  Alpha Block Storage, Alpha object Storage, Alpha Compute Service, Alpha Network Services & Alpha Container Service.So,View,Analyze & Optimize.
           
          </p>
        </div>
      </div>
      </Col>
      <Col lg-2 >
      <br/>
    	<button class="button shiny">Log In</button>
      </Col>
      </Row>

   {/* Row 3 */}
   <Row>
<Col lg-2>
  <img src={require('../assets/Infinite/monitorProduct.gif')} style={{width:"80%", paddingTop:"10px", paddingLeft:"60px"}} />
  </Col>
  <Col lg-8>
<div  style={{width: '60rem'}}>
        <div>
         
        <p className="card-text">
        <div>
          <h6 style={{color:"#000", textAlign:"left", fontSize:"20px", fontWeight:"bold", lineHeight:"36px"}}>Monitoring</h6>
          <div class="live-indicator-block-green" style={{top:"50%", left:"25%"}}>
  <span class="live-indicator-green">
  <svg width="8" height="8" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#fff"/>
<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
</svg>
&nbsp;
Live
      </span>
</div>
        <p className="card-text">
        &nbsp; &nbsp; &nbsp;
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#62B62C"/>
</svg> &nbsp; Check the status of critical applications,application-related processes, and database ports; monitor utilization levels of CPU, memory, and processes.
           
          </p>
        </div>
          </p>
        </div>
      </div>
      </Col>
   {/*   <Col lg-2>
      <br/>
      <a href="#" class="animated-button">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
Log In
</a>
  </Col> */}
     <Col lg-2 >
      <br/>
    	<button class="button shiny">Log In</button>
      </Col>
      </Row>


    {/* Row 4 */}
    <Row>
<Col lg-2>
  <img src={require('../assets/Infinite/networkProduct.gif')} style={{width:"80%", paddingTop:"30px", paddingLeft:"50px"}} />
  </Col>
  <Col lg-8>
<div style={{width: '60rem'}}>
        <div>
          <h6 style={{color:"#000", textAlign:"left", fontSize:"20px", fontWeight:"bold", lineHeight:"36px"}}>Network</h6>
          <div class="live-indicator-block-green" style={{top:"65%", left:"23%"}}>
  <span class="live-indicator-green">
  <svg width="8" height="8" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#fff"/>
<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
</svg>
&nbsp;
Live
      </span>
</div>
        <p className="card-text">
      &nbsp; &nbsp; &nbsp;
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#62B62C"/>
</svg> &nbsp;
        Its the Secure Enterprise Network and  software defined . It makes complex network administrations very simple on self service fashion with just a few mouse clicks. Although it allows multitude of automations, it continues to have the zero trust security.
          </p>
        </div>
      </div>
      </Col>
   {/*   <Col lg-2>
      <br/>
      <a href="#" class="animated-button">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
Log In
</a>
</Col> */}
   <Col lg-2 >
      <br/>
    	<button class="button shiny">Log In</button>
      </Col>
      </Row>


      
{/*<img class="end-inner" alt="" src="data:image/png;base64,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"></img>*/}

 </>
  )};