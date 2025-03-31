import React from "react";
import { AnimationWrapper } from 'react-hover-animation'
import { useState , useEffect } from 'react';
/* Product */
import { Hero } from "./Header";
import Solutions from "../Components/Solutions/Solutions"
import Products from "../Components/Products/Products"
import TimeLine from "./TimeLine/TimeLine";
import Carosel from "../Components/Carosel/Carosel";
/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../Components/Footer/Footer"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import { Container } from "react-bootstrap";
import ScrollUpButton from "react-scroll-up-button";
import "./Desktop16.css";
/* Scroll trigger */
//import Slide from 'react-reveal/Slide';
//import Reveal from 'react-reveal/Reveal';
import  Fade from 'react-reveal/Fade';
import  User from '../../src/assets/user.png'
//import  Flash from 'react-reveal/Fade';

//import { Hero } from "./Header";

/* counter */
import CountUp , { useCountUp } from 'react-countup';

/*slide card*/
import Carousel from "react-elastic-carousel";
import Item from "./item";

/* Link navigate to learn page */
import { HashLink } from 'react-router-hash-link';


/* Nav Link */

import { Link } from 'react-router-dom';

import { useRef } from 'react';
import Features from "./Features/Features";
import LandingHero from "./LandingHero/LandingHero";
import LandingHeroMb from "./LandingHero/LandingHeroMb";

export const Desktop1 = () => {
  const currentUser = localStorage.getItem('currentUser');
  /*
  const onButtonabsoluteIconClick = useCallback(() => {
    // Please sync "Desktop - 15" to the project
  }, []);
*/
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
};

  //nav link
  const ref = useRef(null);
   const ref1 = useRef(null); 
   const ref2 = useRef(null); 

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
 
  const handleClick1 = () => {
    ref1.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: 'smooth' });
  };

  //countup scrollspy
  useCountUp({
    ref: 'counter',
    start: 0,
    end: 64000,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  useCountUp({
    ref: 'counter1',
    start: 0,
    end: 32000,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  useCountUp({
    ref: 'counter2',
    start: 0,
    end: 5000,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  useCountUp({
    ref: 'counter3',
    start: 0,
    end: 2000,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  useCountUp({
    ref: 'counter4',
    start: 0,
    end: 12000,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  useCountUp({
    ref: 'counter5',
    start: 0,
    end: 99,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

 
 const [itemsToShow, setItemsToShow] = useState(2);
  useEffect(() => {
     const handleResize = () => {
       if (window.innerWidth <= 768) { // Adjust breakpoint for mobile
         setItemsToShow(1); // Show 1 item on mobile
       } else {
         setItemsToShow(2); // Show 2 items on larger screens
       }
     };
 
     // Initial check
     handleResize();
 
     // Add event listener for window resize
     window.addEventListener('resize', handleResize);
 
     // Cleanup
     return () => window.removeEventListener('resize', handleResize);
   }, []);
  return (
   <div>
    <div>
  <div className="header-container">
    <img
      className="header-logo"
      alt="TCS Enterprise Cloud Logo"
      src={require('../assets/TCSECP-Logo.png')}
    />
    
    {/* Hamburger menu icon for mobile */}
    <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
      <img
        src={require('../assets/MenuImg.png')} // or use an SVG/icon library
        alt="Menu"
        style={{ width: '24px', height: '24px' }}
      />
    </div>
    
    {/* Regular navigation for desktop */}
    <nav className="header-nav desktop-nav">
      <div className="header-nav-item" onClick={handleClick1} style={{ cursor: 'pointer' }}>
        <AnimationWrapper
          config={{
            color: { initial: '#121517', onHover: '#407bff' },
            fontSize: { initial: '16px', onHover: '18px' },
          }}
        >
          Home
        </AnimationWrapper>
      </div>
      <div className="header-nav-item" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <AnimationWrapper
          config={{
            color: { initial: '#121517', onHover: '#407bff' },
            fontSize: { initial: '16px', onHover: '18px' },
          }}
        >
          Solutions
        </AnimationWrapper>
      </div>
      <div className="header-nav-item" onClick={handleClick2} style={{ cursor: 'pointer' }}>
        <AnimationWrapper
          style={{ cursor:"pointer"}}
          config={{
            color: { initial: '#121517', onHover: '#407bff' },
            fontSize: { initial: '16px', onHover: '18px' },
          }}
        >
          Products
        </AnimationWrapper>
      </div>
      <div className="header-nav-item">
        <Link to="/learn" style={{ textDecoration: 'none', color: '#121517', fontWeight: '600' }}>
          <AnimationWrapper
            style={{ textAlign: 'center', padding: '6px', cursor:"pointer" }}
            config={{
              color: { initial: '#121517', onHover: '#407bff' },
              fontSize: { initial: '16px', onHover: '18px' },
            }}
          >
            Learn
          </AnimationWrapper>
        </Link>
      </div>
      <div className="header-user"><img height="15" src={User}/>{currentUser}</div>
    </nav>
  </div>
  
  {/* Mobile menu that appears when hamburger is clicked */}
  {isMobileMenuOpen && (
    <div className="mobile-menu-wrapper">
    <nav className="mobile-nav">
      <div className="mobile-nav-item" onClick={() => { handleClick1(); toggleMobileMenu(); }}>
        <AnimationWrapper
          config={{
            color: { initial: '#121517', onHover: '#407bff' },
            fontSize: { initial: '16px', onHover: '18px' },
          }}
        >
          Home
        </AnimationWrapper>
      </div>
      <div className="mobile-nav-item" onClick={() => { handleClick(); toggleMobileMenu(); }}>
        <AnimationWrapper
          config={{
            color: { initial: '#121517', onHover: '#407bff' },
            fontSize: { initial: '16px', onHover: '18px' },
          }}
        >
          Solutions
        </AnimationWrapper>
      </div>
      <div className="mobile-nav-item" onClick={() => { handleClick2(); toggleMobileMenu(); }}>
        <AnimationWrapper
          config={{
            color: { initial: '#121517', onHover: '#407bff' },
            fontSize: { initial: '16px', onHover: '18px' },
          }}
        >
          Products
        </AnimationWrapper>
      </div>
      <div className="mobile-nav-item">
        <Link to="/learn" onClick={toggleMobileMenu} style={{ textDecoration: 'none', color: '#121517', fontWeight: '600' }}>
          <AnimationWrapper
            config={{
              color: { initial: '#121517', onHover: '#407bff' },
              fontSize: { initial: '16px', onHover: '18px' },
            }}
          >
            Learn
          </AnimationWrapper>
        </Link>
      </div>
      <div className="mobile-user"><img height="15" src={User}/>{currentUser}</div>
    </nav>
    </div>
  )}
</div> {/* Closing tag for the outer div */}
<div ref={ref1} id="">
<div className="showen">
  <LandingHero />
</div>
<div className="hiden">
  <LandingHeroMb />
</div>
</div>
    <div ref={ref} id="solution">
    <Solutions/>
    </div>
    
   
   
     <div ref={ref2} id="product">
     <Products/>
     </div>
  
    <Features/>
    <TimeLine/>
    <Carosel/>
  
<Footer/>
   </div>
//     <div className="desktop-16" ref={ref1}>
//       <ScrollUpButton/>
    
//       <div className="desktop-16-child" />
     
//       <div className="built-on-secure">
//         Built On Secure Open Hybrid Alpha Architecture
//       </div>
//       <div className="explore-our-solutions">Explore Our Solutions</div>
//       <img className="play-circle-1-1" alt="" src="/playcircle-1-1.svg" />
//       <img
//         className="scroll-down-arrow-1-icon"
//         alt="img"
//         src={require('../assets/scroll-down-arrow.gif')}
//       />
   
//       <div className="sectionbg-purple-25">
//         <div className="divcontainer">
//           <div className="divrelative">
          
//           <Carousel itemsToShow={2}>
//           <Item>
//           <div className="divcarousel-items">
//           <div className="figureh-full" style={{width:'460px'}}>
//                 <div className="divgatsby-image-wrapper">
//                   <img className="image-icon" alt="" src={require('../assets/testimonials-line.webp.png')} />
//                   <img
//                     className="testimonials-linewebp-icon"
//                     alt="img"
//                     src={require('../assets/testimonials-line.webp.png')}
//                   />
//                 </div>
//                 <div className="satishchandra-doreswamy-vice-container">
//                   <span className="satishchandra-doreswamy-vice-container1">
//                     <p className="satishchandra-doreswamy">
//                       SATISHCHANDRA DORESWAMY
//                     </p>
//                     <p className="vice-president-and">
//                       Vice President and Global Head, Enterprise Cloud, TCS
//                     </p>
//                   </span>
//                 </div>
//                 <div className="our-solutions-enable">
//                   “ Our solutions enable a resilient and secure hybrid cloud
//                   ecosystem that drives innovation and supports next-gen
//                   business models to accelerate enterprise growth and
//                   transformation.”
//                 </div>
//                 <img className="avatar-icon" alt="" src={require('../assets/Avatar1.png')} />
//              </div>
//               </div>
//           </Item>

//           <Item>
//           <div className="divcarousel-items">
//           <div className="figureh-full1" style={{width:"460px"}}>
//                 <div className="divgatsby-image-wrapper1">
//                   <div className="image">
//                     <div className="image1" />
//                   </div>
//                   <img
//                     className="testimonials-linewebp-icon"
//                     alt="img"
//                     src={require('../assets/testimonials-line.webp.png')}
//                   />
//                 </div>
//                 <div className="divmt-12" />
//                 <div className="dr-rajesh-srinivasan-container">
//                   <span className="satishchandra-doreswamy-vice-container1">
//                     <p className="satishchandra-doreswamy">
//                       DR. RAJESH SRINIVASAN
//                     </p>
//                     <p className="headsales-solution-and">
//                       Head–Sales, solution, and product engineering for TCS
//                       Enterprise Cloud, TCS
//                     </p>
//                   </span>
//                 </div>
//                 <div className="synergizing-your-it">
//                   “ Synergizing your IT ecosystems with cloud. “
//                 </div>
//                 <img className="avatar-icon1" alt="img" src={require('../assets/Avatar2.png')} />
//               </div>
//               </div>
//           </Item>

//           <Item>
//           <div className="divcarousel-items">
//           <div className="figureh-full2" style={{width:"460px"}}>
//                 <div className="divgatsby-image-wrapper2">
//                   <div className="image2">
//                     <div className="image3" />
                    
//                   </div>
//                 </div>
//                 <div className="arun-kumar-selvaraj-container">
//                   <span className="satishchandra-doreswamy-vice-container1">
//                     <p className="satishchandra-doreswamy">
//                     User
//                     </p>
//                     <p className="headsales-solution-and">
//                       Global Head, Security and Compliance, TCS Enterprise Cloud
//                     </p>
//                   </span>
//                 </div>
//                 <div className="securing-a-cloud-first">
//                   “ Securing a cloud-first approach “
//                 </div>
//                 <div className="improvised-securitypng" />
//                 <img className="avatar-icon2" alt="img" src={require('../assets/avatart_common.avif')} />
//               </div>
//               </div>
//           </Item>
//         </Carousel>
        
//           {/*    <img
//                 className="buttonabsolute-icon"
//                 alt=""
//                 src={require('../assets/button.absolute.png')}
//                 onClick={onButtonabsoluteIconClick}
//   />  */}
            
//           </div>
//         </div>

  
//         <div className="heading">
//           <div className="well-help-digitally-container">
//             <span>{`We'll help `}</span>
//             <span className="digitally">digitally</span>
//             <span className="span">{` `}</span>
//             <span className="digitally">transform</span>
//             <span> your business</span>
//           </div>
//         </div>
//         <img
//           className="server-small-1-icon"
//           alt="img"
//           src={require('../assets/server_small 1.png')}
//         />
//       </div>
    
//       <img
//         className="private-cloud-1-icon"
//         alt="img"
//         src={require('../assets/private_cloud 1.png')}
//       />
    
//       <img className="desktop-16-item" alt="" src={require('../assets/Group 237469.png')} />
//       <img
//         className="images-3-photoroom-1"
//         alt="img"
//         src={require('../assets/images (3)-PhotoRoom 1.png')}
//       />
//       <img className="desktop-16-inner" alt="" src={require('../assets/Vector 27.png')} />
//       <div className="well-help-digitally-container1">
//         <span>{`We'll help `}</span>
//         <span className="digitally">digitally</span>
//         <span className="span">{` `}</span>
//         <span className="digitally">transform</span>
//         <span> your business</span>
//       </div>
//       <div className="pscale-21-21-18">
//         <div className="with-tcs-enterprise">
//           With TCS Enterprise Cloud, you can gain a competitive edge, keep up
//           with changing business needs, and stay compliant with ever-evolving
//           regulatory and privacy directives while accelerating innovation for
//           sustainable growth.
//         </div>
//       </div>
//       <img
//         className="mconvertereu-1-icon"
//         alt="img"
//         src={require('../assets/3985933 [MConverter.eu] 1.png')}
//       />
//       <img className="vector-icon" alt="img" src={require('../assets/Vector 28.png')} />
//       <img
//         className="security-check-6877543-5639689-icon"
//         alt="img"
//         src={require('../assets/security-check-6877543-5639689 1.png')}
//       />
//       <img
//         className="analytics-chart-5152760-431254-icon"
//         alt=""
//         src={require('../assets/analytics-chart-5152760-4312549 1.png')}
//       />
//       <img
//         className="system-management-3d-icon-free"
//         alt="img"
//         src={require('../assets/system-management-3d-icon-free-png 1.png')}
//       />
//       <img
//         className="cloudnetwork-small-1-icon"
//         alt="img"
//         src={require('../assets/cloudnetwork-small 1.png')}
//       />
//       <img
//         className="dt-migration-small-1-icon"
//         alt="img"
//         src={require('../assets/dt-migration-small 1.png')}
//       />
//       <img className="polygon-icon" alt="" src="/polygon-28.svg" />
//       <div className="ellipse-div" />
//       <img className="desktop-16-child1" alt="" src="/polygon-281.svg" />
//       <div className="desktop-16-child2" />
//       <img className="desktop-16-child3" alt="" src="/polygon-29.svg" />
//       <div className="desktop-16-child4" />
//       <img className="desktop-16-child5" alt="" src="/polygon-30.svg" />
//       <div className="frame-parent">
//         <div className="group-parent">
//           <div className="ellipse-parent">
//             <div className="group-child" />
//             <div className="w-wrapper">
//               <b className="w">W</b>
//             </div>
//           </div>
//           <div className="frame-child" />
//           <div className="mask-group">
//             <div className="mask-group-child" />
//             <div className="circle-images">
//               <img
//                 className="center-image-icon"
//                 alt=""
//                 src="/center-image@2x.png"
//               />
//         {/*      <img className="image-7-icon" alt="" src="/image-7@2x.png" />
//               <img className="image-6-icon" alt="" src="/image-6@2x.png" />
//               <img className="image-8-icon" alt="" src="/image-8@2x.png" />
//               <img className="image-9-icon" alt="" src="/image-9@2x.png" />
//               <img className="image-10-icon" alt="" src="/image-10@2x.png" />
//   */}
//               <div className="group">
//                 <div className="a">N</div>
//                 <div className="g">e</div>
//                 <div className="i">x</div>
//                 <div className="l">t</div>
//                 <div className="i1">G</div>
//                 <div className="t">e</div>
//                 <div className="y">n</div>
//               </div>
//               <div className="group1">
//                 <div className="s">S</div>
//                 <div className="e">e</div>
//                 <div className="c">c</div>
//                 <div className="u">u</div>
//                 <div className="r">r</div>
//                 <div className="i2">e</div>
//                {/* <div className="t1">t</div>
//                 <div className="y1">y</div> */}
//               </div>
//               <div className="group2">
//                 <div className="h">H</div>
//                 <div className="y2">y</div>
//                 <div className="b">b</div>
//                 <div className="r1">r</div>
//                 <div className="i3">i</div>
//                 <div className="d">d</div>
//               </div>
//             </div>
//             <div className="group3">
              
//             {/*  <div className="div"> </div> */}
//               <div className="c1">D</div>
//               <div className="o">e</div>
//               <div className="s1">v</div>
//               <div className="t2">S</div>
//               <div className="e1">e</div>
//               <div className="f">c</div>
//               <div className="f1">O</div>
//               <div className="i4">p</div>
//               <div className="c2">s</div>
//              {/* <div className="i5">i</div>
//               <div className="e2">e</div>
//               <div className="n">n</div>
// <div className="t3">t</div>  */}
//             </div>
//           </div>
//           <div className="content">
//             <div className="create-exponential-value">
//             <b>  Create exponential value with hybrid cloud</b>
//             </div>
//             <div className="devsecops">TCS Alpha 4.0</div>
//             <div className="lorem-ipsum-dolor"> 
//             <svg width="23px" height="33px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
//     <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
// </svg>
// &nbsp;
// {`Cloud by design`} <br/>
// <svg width="23px" height="33px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
//     <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
// </svg>
// &nbsp;
//    {`Zero trust architecture`} <br/>
//    <svg width="23px" height="33px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
//     <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
// </svg>
// &nbsp;
//    {` Wide option of resource units `} <br/>
//    <svg width="23px" height="33px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
//     <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
// </svg>
// &nbsp;
//    {` Robust IAAS to integrate with services `} <br/>
//    <svg width="23px" height="33px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
//     <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
// </svg>
// &nbsp;
//    {` Continued Hybird cloud appraoch `} </div>
//           </div>
//           {/*
//           <div className="hunt-now-button">
//             <div className="hunt-now-button-child" />
//             <div className="hunt-now-button-item" />
//             <b className="explore-now">Explore Now</b>
//           </div>
// */}
//           <img
//             className="ionnavigate-circle-icon"
//             alt="img"
//             src={require('../assets/ion_navigate-circle.png')}
//           />
//           <img
//             className="ionnavigate-circle-icon1"
//             alt="img"
//             src={require('../assets/ion_navigate-circle.png')}
//           />
//           <div className="frame-item" />
//           <img
//             className="vector-371-03-1-icon"
//             alt="agility"
//             src={require('../assets/vector_371_03 1.png')}
//           />
//           <img
//             className="hybrid-round-1-icon"
//             alt="hybrid"
//             src={require('../assets/hybrid-round 1.png')}
//           />
//           <img className="cost-round-1-icon" 
//           alt="cost" 
//           src={require('../assets/cost-round 1.png')} />
//           <img
//             className="secured-round-1-icon"
//             alt=""
//             src={require('../assets/secured-round 1.png')}
//           />
//         </div>
//         <div className="group4">
//             <img src={require('../assets/Groupcirclegroup.png')} alt="img" />
//          {/* <img className="vector-icon1" alt="" src="/vector.svg" />
//           <img className="vector-icon2" alt="" src="/vector1.svg" />
//           <img className="vector-icon3" alt="" src="/vector2.svg" />
//           <img className="vector-icon4" alt="" src="/vector3.svg" />
//           <img className="vector-icon5" alt="" src="/vector4.svg" />
//           <img className="vector-icon6" alt="" src="/vector5.svg" />
//           <img className="vector-icon7" alt="" src="/vector6.svg" />
//           <img className="vector-icon8" alt="" src="/vector7.svg" />
//           <img className="vector-icon9" alt="" src="/vector8.svg" />
//           <img className="vector-icon10" alt="" src="/vector9.svg" />
//           <img className="vector-icon11" alt="" src="/vector10.svg" />
//           <img className="vector-icon12" alt="" src="/vector11.svg" />
//           <img className="vector-icon13" alt="" src="/vector12.svg" />
//           <img className="vector-icon14" alt="" src="/vector13.svg" />
//           <img className="vector-icon15" alt="" src="/vector14.svg" />
//           <img className="vector-icon16" alt="" src="/vector15.svg" />
//           <img className="vector-icon17" alt="" src="/vector16.svg" />
//           <img className="vector-icon18" alt="" src="/vector17.svg" />
//           <img className="vector-icon19" alt="" src="/vector18.svg" />
//           <img className="vector-icon20" alt="" src="/vector19.svg" />
//           <img className="vector-icon21" alt="" src="/vector20.svg" />
//           <img className="vector-icon22" alt="" src="/vector21.svg" />
//           <img className="vector-icon23" alt="" src="/vector22.svg" />
//           <img className="vector-icon24" alt="" src="/vector23.svg" />
//           <img className="vector-icon25" alt="" src="/vector24.svg" />
//           <img className="vector-icon26" alt="" src="/vector25.svg" />
//           <img className="vector-icon27" alt="" src="/vector26.svg" />
//           <img className="vector-icon28" alt="" src="/vector27.svg" />
//           <img className="vector-icon29" alt="" src="/vector28.svg" />
//           <img className="vector-icon30" alt="" src="/vector29.svg" />
//           <img className="vector-icon31" alt="" src="/vector30.svg" />
//           <img className="vector-icon32" alt="" src="/vector31.svg" />
//           <img className="vector-icon33" alt="" src="/vector32.svg" />
//           <img className="vector-icon34" alt="" src="/vector33.svg" />
//           <img className="vector-icon35" alt="" src="/vector34.svg" />
//           <img className="vector-icon36" alt="" src="/vector35.svg" />
//           <img className="vector-icon37" alt="" src="/vector36.svg" />
//           <img className="vector-icon38" alt="" src="/vector37.svg" />
//           <img className="vector-icon39" alt="" src="/vector38.svg" />
//           <img className="vector-icon40" alt="" src="/vector39.svg" />
//           <img className="vector-icon41" alt="" src="/vector40.svg" />
//           <img className="vector-icon42" alt="" src="/vector41.svg" />
//           <img className="vector-icon43" alt="" src="/vector42.svg" />
//           <img className="vector-icon44" alt="" src="/vector43.svg" />
//           <img className="vector-icon45" alt="" src="/vector44.svg" />
//           <img className="vector-icon46" alt="" src="/vector45.svg" />
//           <img className="vector-icon47" alt="" src="/vector46.svg" />
//           <img className="vector-icon48" alt="" src="/vector47.svg" />
//           <img className="vector-icon49" alt="" src="/vector48.svg" />
//           <img className="vector-icon50" alt="" src="/vector49.svg" />
//           <img className="vector-icon51" alt="" src="/vector50.svg" />
//           <img className="vector-icon52" alt="" src="/vector51.svg" />
//           <img className="vector-icon53" alt="" src="/vector52.svg" />
//           <img className="vector-icon54" alt="" src="/vector53.svg" />
//           <img className="vector-icon55" alt="" src="/vector54.svg" />
//           <img className="vector-icon56" alt="" src="/vector55.svg" />
//           <img className="vector-icon57" alt="" src="/vector56.svg" />
//           <img className="vector-icon58" alt="" src="/vector57.svg" />
//           <img className="vector-icon59" alt="" src="/vector58.svg" />
//           <img className="vector-icon60" alt="" src="/vector59.svg" />
//           <img className="vector-icon61" alt="" src="/vector60.svg" />
//           <img className="vector-icon62" alt="" src="/vector61.svg" />
//           <img className="vector-icon63" alt="" src="/vector62.svg" />
//           <img className="vector-icon64" alt="" src="/vector63.svg" />
//           <img className="vector-icon65" alt="" src="/vector64.svg" />
//           <img className="vector-icon66" alt="" src="/vector65.svg" />
//           <img className="vector-icon67" alt="" src="/vector66.svg" />
//           <img className="vector-icon68" alt="" src="/vector67.svg" />
//           <img className="vector-icon69" alt="" src="/vector68.svg" />
//           <img className="vector-icon70" alt="" src="/vector69.svg" />
//           <img className="vector-icon71" alt="" src="/vector70.svg" />
//           <img className="vector-icon72" alt="" src="/vector71.svg" />
//           <img className="vector-icon73" alt="" src="/vector72.svg" />
//           <img className="vector-icon74" alt="" src="/vector73.svg" />
//           <img className="vector-icon75" alt="" src="/vector74.svg" />
//           <img className="vector-icon76" alt="" src="/vector75.svg" />
//           <img className="vector-icon77" alt="" src="/vector76.svg" />
//           <img className="vector-icon78" alt="" src="/vector77.svg" />
//           <img className="vector-icon79" alt="" src="/vector78.svg" />
//           <img className="vector-icon80" alt="" src="/vector79.svg" />
//           <img className="vector-icon81" alt="" src="/vector80.svg" />
//           <img className="vector-icon82" alt="" src="/vector81.svg" />
//           <img className="vector-icon83" alt="" src="/vector82.svg" />
//           <img className="vector-icon84" alt="" src="/vector83.svg" />
//           <img className="vector-icon85" alt="" src="/vector84.svg" />
//           <img className="vector-icon86" alt="" src="/vector85.svg" />
//           <img className="vector-icon87" alt="" src="/vector86.svg" />
//           <img className="vector-icon88" alt="" src="/vector87.svg" />
//           <img className="vector-icon89" alt="" src="/vector88.svg" />
//           <img className="vector-icon90" alt="" src="/vector89.svg" />
//           <img className="vector-icon91" alt="" src="/vector90.svg" />
//           <img className="vector-icon92" alt="" src="/vector91.svg" />
//           <img className="vector-icon93" alt="" src="/vector92.svg" />
//           <img className="vector-icon94" alt="" src="/vector93.svg" />
//           <img className="vector-icon95" alt="" src="/vector94.svg" />
//           <img className="vector-icon96" alt="" src="/vector95.svg" />
//           <img className="vector-icon97" alt="" src="/vector96.svg" />
//           <img className="vector-icon98" alt="" src="/vector97.svg" />
//           <img className="vector-icon99" alt="" src="/vector98.svg" />
//           <img className="vector-icon100" alt="" src="/vector99.svg" />
//           <img className="vector-icon101" alt="" src="/vector100.svg" />
//           <img className="vector-icon102" alt="" src="/vector101.svg" />
//           <img className="vector-icon103" alt="" src="/vector102.svg" />
//           <img className="vector-icon104" alt="" src="/vector103.svg" />
//           <img className="vector-icon105" alt="" src="/vector104.svg" />
//           <img className="vector-icon106" alt="" src="/vector105.svg" />
//           <img className="vector-icon107" alt="" src="/vector106.svg" />
//           <img className="vector-icon108" alt="" src="/vector107.svg" />
//           <img className="vector-icon109" alt="" src="/vector108.svg" />
//           <img className="vector-icon110" alt="" src="/vector109.svg" />
//           <img className="vector-icon111" alt="" src="/vector110.svg" />
//           <img className="vector-icon112" alt="" src="/vector111.svg" />
//           <img className="vector-icon113" alt="" src="/vector112.svg" />
//           <img className="vector-icon114" alt="" src="/vector113.svg" />
//           <img className="vector-icon115" alt="" src="/vector114.svg" />
//           <img className="vector-icon116" alt="" src="/vector115.svg" />
//           <img className="vector-icon117" alt="" src="/vector116.svg" />
//           <img className="vector-icon118" alt="" src="/vector117.svg" />
//           <img className="vector-icon119" alt="" src="/vector118.svg" />
//           <img className="vector-icon120" alt="" src="/vector119.svg" />
//           <img className="vector-icon121" alt="" src="/vector120.svg" />
//           <img className="vector-icon122" alt="" src="/vector121.svg" />
//           <img className="vector-icon123" alt="" src="/vector122.svg" />
//           <img className="vector-icon124" alt="" src="/vector123.svg" />
//           <img className="vector-icon125" alt="" src="/vector124.svg" />
//           <img className="vector-icon126" alt="" src="/vector125.svg" />
//           <img className="vector-icon127" alt="" src="/vector126.svg" />
//           <img className="vector-icon128" alt="" src="/vector127.svg" />
//           <img className="vector-icon129" alt="" src="/vector128.svg" />
//           <img className="vector-icon130" alt="" src="/vector129.svg" />
//           <img className="vector-icon131" alt="" src="/vector130.svg" />
//           <img className="vector-icon132" alt="" src="/vector131.svg" />
//           <img className="vector-icon133" alt="" src="/vector132.svg" />
//           <img className="vector-icon134" alt="" src="/vector133.svg" />
//           <img className="vector-icon135" alt="" src="/vector134.svg" />
//           <img className="vector-icon136" alt="" src="/vector135.svg" />
//           <img className="vector-icon137" alt="" src="/vector136.svg" />
//           <img className="vector-icon138" alt="" src="/vector137.svg" />
//           <img className="vector-icon139" alt="" src="/vector138.svg" />
//           <img className="vector-icon140" alt="" src="/vector139.svg" />
//           <img className="vector-icon141" alt="" src="/vector140.svg" />
//           <img className="vector-icon142" alt="" src="/vector141.svg" />
//           <img className="vector-icon143" alt="" src="/vector142.svg" />
//           <img className="vector-icon144" alt="" src="/vector143.svg" />
//           <img className="vector-icon145" alt="" src="/vector144.svg" />
//           <img className="vector-icon146" alt="" src="/vector145.svg" />
//           <img className="vector-icon147" alt="" src="/vector146.svg" />
//           <img className="vector-icon148" alt="" src="/vector147.svg" />
//           <img className="vector-icon149" alt="" src="/vector148.svg" />
//           <img className="vector-icon150" alt="" src="/vector149.svg" />
//           <img className="vector-icon151" alt="" src="/vector150.svg" />
//           <img className="vector-icon152" alt="" src="/vector151.svg" />
//           <img className="vector-icon153" alt="" src="/vector152.svg" />
//           <img className="vector-icon154" alt="" src="/vector153.svg" />
//           <img className="vector-icon155" alt="" src="/vector154.svg" />
//           <img className="vector-icon156" alt="" src="/vector155.svg" />
//           <img className="vector-icon157" alt="" src="/vector156.svg" />
//           <img className="vector-icon158" alt="" src="/vector157.svg" />
//           <img className="vector-icon159" alt="" src="/vector158.svg" />
//           <img className="vector-icon160" alt="" src="/vector159.svg" />
//           <img className="vector-icon161" alt="" src="/vector160.svg" />
//           <img className="vector-icon162" alt="" src="/vector161.svg" />
//           <img className="vector-icon163" alt="" src="/vector162.svg" />
//           <img className="vector-icon164" alt="" src="/vector163.svg" />
//           <img className="vector-icon165" alt="" src="/vector164.svg" />
//           <img className="vector-icon166" alt="" src="/vector165.svg" />
//           <img className="vector-icon167" alt="" src="/vector166.svg" />
//           <img className="vector-icon168" alt="" src="/vector167.svg" />
//           <img className="vector-icon169" alt="" src="/vector168.svg" />
//           <img className="vector-icon170" alt="" src="/vector169.svg" />
//           <img className="vector-icon171" alt="" src="/vector170.svg" />
//           <img className="vector-icon172" alt="" src="/vector171.svg" />
//           <img className="vector-icon173" alt="" src="/vector172.svg" />
//           <img className="vector-icon174" alt="" src="/vector173.svg" />
//           <img className="vector-icon175" alt="" src="/vector174.svg" />
//           <img className="vector-icon176" alt="" src="/vector175.svg" />
//           <img className="vector-icon177" alt="" src="/vector176.svg" />
//           <img className="vector-icon178" alt="" src="/vector177.svg" />
//           <img className="vector-icon179" alt="" src="/vector178.svg" />
//           <img className="vector-icon180" alt="" src="/vector179.svg" />
//           <img className="vector-icon181" alt="" src="/vector180.svg" />
//           <img className="vector-icon182" alt="" src="/vector181.svg" />
//           <img className="vector-icon183" alt="" src="/vector182.svg" />
//           <img className="vector-icon184" alt="" src="/vector183.svg" />
//           <img className="vector-icon185" alt="" src="/vector184.svg" />
//           <img className="vector-icon186" alt="" src="/vector185.svg" />
//           <img className="vector-icon187" alt="" src="/vector186.svg" />
//           <img className="vector-icon188" alt="" src="/vector187.svg" />
//           <img className="vector-icon189" alt="" src="/vector188.svg" />
//           <img className="vector-icon190" alt="" src="/vector189.svg" />
//           <img className="vector-icon191" alt="" src="/vector190.svg" />
//           <img className="vector-icon192" alt="" src="/vector191.svg" />
//           <img className="vector-icon193" alt="" src="/vector192.svg" />
//           <img className="vector-icon194" alt="" src="/vector193.svg" />
//           <img className="vector-icon195" alt="" src="/vector194.svg" />
//           <img className="vector-icon196" alt="" src="/vector195.svg" />
//           <img className="vector-icon197" alt="" src="/vector196.svg" />
//           <img className="vector-icon198" alt="" src="/vector197.svg" />
//           <img className="vector-icon199" alt="" src="/vector198.svg" />
//           <img className="vector-icon200" alt="" src="/vector199.svg" />
//           <img className="vector-icon201" alt="" src="/vector200.svg" />
//           <img className="vector-icon202" alt="" src="/vector201.svg" />
//           <img className="vector-icon203" alt="" src="/vector202.svg" />
//           <img className="vector-icon204" alt="" src="/vector203.svg" />
//           <img className="vector-icon205" alt="" src="/vector204.svg" />
//           <img className="vector-icon206" alt="" src="/vector205.svg" />
//           <img className="vector-icon207" alt="" src="/vector206.svg" />
//           <img className="vector-icon208" alt="" src="/vector207.svg" />
//           <img className="vector-icon209" alt="" src="/vector208.svg" />
//           <img className="vector-icon210" alt="" src="/vector209.svg" />
//           <img className="vector-icon211" alt="" src="/vector210.svg" />
//           <img className="vector-icon212" alt="" src="/vector211.svg" />
//           <img className="vector-icon213" alt="" src="/vector212.svg" />
//           <img className="vector-icon214" alt="" src="/vector213.svg" />
//           <img className="vector-icon215" alt="" src="/vector214.svg" />
//           <img className="vector-icon216" alt="" src="/vector215.svg" />
//           <img className="vector-icon217" alt="" src="/vector216.svg" />
//           <img className="vector-icon218" alt="" src="/vector217.svg" />
//           <img className="vector-icon219" alt="" src="/vector218.svg" />
//           <img className="vector-icon220" alt="" src="/vector219.svg" />
//           <img className="vector-icon221" alt="" src="/vector220.svg" />
//           <img className="vector-icon222" alt="" src="/vector221.svg" />
//           <img className="vector-icon223" alt="" src="/vector222.svg" />
//           <img className="vector-icon224" alt="" src="/vector223.svg" />
//           <img className="vector-icon225" alt="" src="/vector224.svg" />
//           <img className="vector-icon226" alt="" src="/vector225.svg" />
//           <img className="vector-icon227" alt="" src="/vector226.svg" />
//           <img className="vector-icon228" alt="" src="/vector227.svg" />
//           <img className="vector-icon229" alt="" src="/vector228.svg" />
//           <img className="vector-icon230" alt="" src="/vector229.svg" />
//           <img className="vector-icon231" alt="" src="/vector230.svg" />
//           <img className="vector-icon232" alt="" src="/vector231.svg" />
//           <img className="vector-icon233" alt="" src="/vector232.svg" />
//           <img className="vector-icon234" alt="" src="/vector233.svg" />
//           <img className="vector-icon235" alt="" src="/vector234.svg" />
//           <img className="vector-icon236" alt="" src="/vector235.svg" />
//           <img className="vector-icon237" alt="" src="/vector236.svg" />
//           <img className="vector-icon238" alt="" src="/vector237.svg" />
//           <img className="vector-icon239" alt="" src="/vector238.svg" />
//           <img className="vector-icon240" alt="" src="/vector239.svg" />
//           <img className="vector-icon241" alt="" src="/vector240.svg" />
//           <img className="vector-icon242" alt="" src="/vector241.svg" />
//           <img className="vector-icon243" alt="" src="/vector242.svg" />
//           <img className="vector-icon244" alt="" src="/vector243.svg" />
//           <img className="vector-icon245" alt="" src="/vector244.svg" />
//           <img className="vector-icon246" alt="" src="/vector245.svg" />
//           <img className="vector-icon247" alt="" src="/vector246.svg" />
//           <img className="vector-icon248" alt="" src="/vector247.svg" />
//           <img className="vector-icon249" alt="" src="/vector248.svg" />
//           <img className="vector-icon250" alt="" src="/vector249.svg" />
//           <img className="vector-icon251" alt="" src="/vector250.svg" />
//           <img className="vector-icon252" alt="" src="/vector251.svg" />
//           <img className="vector-icon253" alt="" src="/vector252.svg" />
//           <img className="vector-icon254" alt="" src="/vector253.svg" />
//           <img className="vector-icon255" alt="" src="/vector254.svg" />
//           <img className="vector-icon256" alt="" src="/vector255.svg" />
//           <img className="vector-icon257" alt="" src="/vector256.svg" />
//           <img className="vector-icon258" alt="" src="/vector257.svg" />
//           <img className="vector-icon259" alt="" src="/vector258.svg" />
//           <img className="vector-icon260" alt="" src="/vector259.svg" />
//           <img className="vector-icon261" alt="" src="/vector260.svg" />
//           <img className="vector-icon262" alt="" src="/vector261.svg" />
//           <img className="vector-icon263" alt="" src="/vector262.svg" />
//           <img className="vector-icon264" alt="" src="/vector263.svg" />
//           <img className="vector-icon265" alt="" src="/vector264.svg" />
//           <img className="vector-icon266" alt="" src="/vector265.svg" />
//           <img className="vector-icon267" alt="" src="/vector266.svg" />
//           <img className="vector-icon268" alt="" src="/vector267.svg" />
//           <img className="vector-icon269" alt="" src="/vector268.svg" />
//           <img className="vector-icon270" alt="" src="/vector269.svg" />
//           <img className="vector-icon271" alt="" src="/vector270.svg" />
//           <img className="vector-icon272" alt="" src="/vector271.svg" />
//           <img className="vector-icon273" alt="" src="/vector272.svg" />
//           <img className="vector-icon274" alt="" src="/vector273.svg" />
//           <img className="vector-icon275" alt="" src="/vector274.svg" />
//           <img className="vector-icon276" alt="" src="/vector275.svg" />
//           <img className="vector-icon277" alt="" src="/vector276.svg" />
//           <img className="vector-icon278" alt="" src="/vector277.svg" />
//           <img className="vector-icon279" alt="" src="/vector278.svg" />
//           <img className="vector-icon280" alt="" src="/vector279.svg" />
//           <img className="vector-icon281" alt="" src="/vector280.svg" />
//           <img className="vector-icon282" alt="" src="/vector281.svg" />
//           <img className="vector-icon283" alt="" src="/vector282.svg" />
//           <img className="vector-icon284" alt="" src="/vector283.svg" />
//           <img className="vector-icon285" alt="" src="/vector284.svg" />
//           <img className="vector-icon286" alt="" src="/vector285.svg" />
//           <img className="vector-icon287" alt="" src="/vector286.svg" />
//           <img className="vector-icon288" alt="" src="/vector287.svg" />
//           <img className="vector-icon289" alt="" src="/vector288.svg" />
//           <img className="vector-icon290" alt="" src="/vector289.svg" />
//           <img className="vector-icon291" alt="" src="/vector290.svg" />
//           <img className="vector-icon292" alt="" src="/vector291.svg" />
//           <img className="vector-icon293" alt="" src="/vector292.svg" />
//           <img className="vector-icon294" alt="" src="/vector293.svg" />
//           <img className="vector-icon295" alt="" src="/vector294.svg" />
//           <img className="vector-icon296" alt="" src="/vector295.svg" />
//           <img className="vector-icon297" alt="" src="/vector296.svg" />
//           <img className="vector-icon298" alt="" src="/vector297.svg" />
//           <img className="vector-icon299" alt="" src="/vector298.svg" />
//           <img className="vector-icon300" alt="" src="/vector299.svg" />
//           <img className="vector-icon301" alt="" src="/vector300.svg" />
//           <img className="vector-icon302" alt="" src="/vector301.svg" />
//           <img className="vector-icon303" alt="" src="/vector302.svg" />
//           <img className="vector-icon304" alt="" src="/vector303.svg" />
//           <img className="vector-icon305" alt="" src="/vector304.svg" />
//           <img className="vector-icon306" alt="" src="/vector305.svg" />
//           <img className="vector-icon307" alt="" src="/vector306.svg" />
//           <img className="vector-icon308" alt="" src="/vector307.svg" />
//           <img className="vector-icon309" alt="" src="/vector308.svg" />
//           <img className="vector-icon310" alt="" src="/vector309.svg" />
//           <img className="vector-icon311" alt="" src="/vector310.svg" />
//           <img className="vector-icon312" alt="" src="/vector311.svg" />
//           <img className="vector-icon313" alt="" src="/vector312.svg" />
//           <img className="vector-icon314" alt="" src="/vector313.svg" />
//           <img className="vector-icon315" alt="" src="/vector314.svg" />
//           <img className="vector-icon316" alt="" src="/vector315.svg" />
//           <img className="vector-icon317" alt="" src="/vector316.svg" />
//           <img className="vector-icon318" alt="" src="/vector317.svg" />
//           <img className="vector-icon319" alt="" src="/vector318.svg" />
//           <img className="vector-icon320" alt="" src="/vector319.svg" />

//           <div className="tcs-enterprise-cloud">
//             TCS ENTERPRISE CLOUD PLATFORM
//           </div> */}
//         </div>
//       </div>
    
//       <div className="solutions" ref={ref}  id="solution">
   
//         <div className="text-parent">
//           <div className="text" />
//           <div className="text1" />
//           <div className="offer-various-storage">
//           <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#62B62C"/>
// </svg> &nbsp;Offers various storage services for the Alpha Compute Instances, like Block, Object Store and File services, in a massively scalable model.
//           </div>
     
//         <div style={{display: "block", paddingLeft:"700px", paddingTop:"60px" ,width:"1100px"}}>
//       <Row>
//         <Col style={{
//          color:"#372580", fontSize:"24px", fontFamily:"inter", fontWeight:"bold"
//         }}>
      
//         <div>
//    <svg width="4" height="60" viewBox="0 0 4 80" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="4" height="70" rx="2" fill="url(#paint0_linear_748_3589)"/>
// <defs>
// <linearGradient id="paint0_linear_748_3589" x1="2" y1="0" x2="2" y2="80" gradientUnits="userSpaceOnUse">
// <stop stop-color="#01BAE2"/>
// <stop offset="1" stop-color="#01E2A2"/>
// </linearGradient>
// </defs>
// </svg> &nbsp;
//       {/*   <span ref={countUpRef} />  */}
     
//       <span id="counter" /> <br/>
     
//         </div>
     
//    <div style={{fontSize:"15px", fontFamily:"inter",fontWeight:"bold", color:"#62B62C"}}>stb1
//     <br/>
//     Max.IOPS
//    </div>
//       </Col>
//         <Col style={{
//         color:"#372580", fontSize:"24px", fontFamily:"inter", fontWeight:"bold"
//         }}>
//           <CountUp start={0} end={2000} delay={5}>
//     {({ countUpRef }) => (
//         <div>
//          <svg width="4" height="60" viewBox="0 0 4 80" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="4" height="70" rx="2" fill="url(#paint0_linear_748_3589)"/>
// <defs>
// <linearGradient id="paint0_linear_748_3589" x1="2" y1="0" x2="2" y2="80" gradientUnits="userSpaceOnUse">
// <stop stop-color="#01BAE2"/>
// <stop offset="1" stop-color="#01E2A2"/>
// </linearGradient>
// </defs>
// </svg> &nbsp;
//       {/*    <span ref={countUpRef} /> */}
//       <span id="counter1" /> <br/>
//         </div>
//       )}
//    </CountUp>
//    <div style={{fontSize:"15px", fontFamily:"inter",fontWeight:"bold", color:"#62B62C"}}>stb2
//     <br/>
//     Max.IOPS
//    </div>
//       </Col>
//         <Col style={{
//           color:"#372580", fontSize:"24px", fontFamily:"inter", fontWeight:"bold"
//         }}>
             
     

//           <CountUp start={0} end={100} delay={5}>
//     {({ countUpRef }) => (
//         <div>
//             <svg width="4" height="60" viewBox="0 0 4 80" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="4" height="70" rx="2" fill="url(#paint0_linear_748_3589)"/>
// <defs>
// <linearGradient id="paint0_linear_748_3589" x1="2" y1="0" x2="2" y2="80" gradientUnits="userSpaceOnUse">
// <stop stop-color="#01BAE2"/>
// <stop offset="1" stop-color="#01E2A2"/>
// </linearGradient>
// </defs>
// </svg> &nbsp;
//         {/*  <span ref={countUpRef} /> */}
//         <span id="counter2" /> <br/>
//         </div>
//       )}
//    </CountUp>
//    <div style={{fontSize:"15px", fontFamily:"inter",fontWeight:"bold", color:"#62B62C"}}>Arbour
//     <br/>
//     Max.IOPS
//    </div>
//       </Col>
//       </Row>
//     </div>

        

//           <div className="predefined-instance-type1" >
//           <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#62B62C"/>
// </svg> &nbsp;Performance workloads, throughput-based workloads, file services and Object storage (both S3 and Swift) requirements.
            
//           </div>
//           <b className="alpha-storage-services">Alpha Storage Services</b>
//           <div className="a-5">
//           <div className="learn-more"><HashLink to='http://localhost:3000/learn#ACS'>Learn More</HashLink></div>  
//            <div className="div1"></div>
//         {/*    <div className="divfont-bold">
//               <img className="svgw-4-icon" alt="" src={require('../assets/Vector_arrow.png')} />
//             </div>
//         */}
//         </div> 
    
//         </div>
       
        
//         <div className="text-group">
//           <div className="text2" />
//           <div className="text3" />
//           <div className="predefined-instance-type1" style={{left:"5.67%"}}>
//             {" "}
//             <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#62B62C"/>
// </svg> &nbsp;  Each instance type has precise specifications, including the number of vCPUs, memory capacity, and network performance.
//           </div>
//           <div className="offer-various-storage" style={{left:"5.67%"}}>
//           <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#62B62C"/>
// </svg> &nbsp;  ECP Cloud offers predefined Instance type configurations for every need from small general purpose workloads to large memory instensive workloads and high performance computing workloads.
//           </div>


     
//         <div style={{display: "block", paddingLeft:"700px", paddingTop:"85px" ,width:"1100px"}}>
//       <Row>
//         <Col style={{
//          color:"#372580", fontSize:"24px", fontFamily:"inter", fontWeight:"bold"
//         }}>
         
       
//         <div>
//              <svg width="4" height="60" viewBox="0 0 4 80" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="4" height="70" rx="2" fill="url(#paint0_linear_748_3589)"/>
// <defs>
// <linearGradient id="paint0_linear_748_3589" x1="2" y1="0" x2="2" y2="80" gradientUnits="userSpaceOnUse">
// <stop stop-color="#01BAE2"/>
// <stop offset="1" stop-color="#01E2A2"/>
// </linearGradient>
// </defs>
// </svg> &nbsp;
// <span id="counter3" /> <br/>
//         </div>
     
//    <div style={{fontSize:"15px", fontFamily:"inter",fontWeight:"bold", color:"#62B62C"}}>stb1
//     <br/>
//     Max.IOPS
//    </div>
//       </Col>
//         <Col style={{
//         color:"#372580", fontSize:"24px", fontFamily:"inter", fontWeight:"bold"
//         }}>
         
//         <div>
//              <svg width="4" height="60" viewBox="0 0 4 80" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="4" height="70" rx="2" fill="url(#paint0_linear_748_3589)"/>
// <defs>
// <linearGradient id="paint0_linear_748_3589" x1="2" y1="0" x2="2" y2="80" gradientUnits="userSpaceOnUse">
// <stop stop-color="#01BAE2"/>
// <stop offset="1" stop-color="#01E2A2"/>
// </linearGradient>
// </defs>
// </svg> &nbsp;
// <span id="counter4" /> <br/>
//         </div>
     
//    <div style={{fontSize:"15px", fontFamily:"inter",fontWeight:"bold", color:"#62B62C"}}>stb2
//     <br/>
//     Max.IOPS
//    </div>
//       </Col>
//         <Col style={{
//           color:"#372580", fontSize:"24px", fontFamily:"inter", fontWeight:"bold"
//         }}>
      
//       </Col>
//       </Row>
//     </div>

   

//           <b className="alpha-compute-services">Alpha Compute Services</b>
//           <div className="learn-more1"><HashLink to='http://localhost:3000/learn#compute'>Learn More</HashLink></div>
//           <div className="divfont-bold1">
//             <img className="svgw-4-icon" alt="" src="/svgw41.svg" />
//           </div>
//         </div>
       
       
//         <div className="text-container">
//           <div className="text4" />
//           <div className="text5" />
//           <div className="makes-complex-network">
//           <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#62B62C"/>
// </svg> &nbsp;Secure Enterprise Network & software defined,makes complex network administrations very simple on self service with just a few mouse clicks.
//           </div>


           
//         <div style={{display: "block", paddingLeft:"700px", paddingTop:"60px" ,width:"1100px"}}>
//       <Row>
//         <Col style={{
//          color:"#372580", fontSize:"24px", fontFamily:"inter", fontWeight:"bold"
//         }}>
        
//         <div>
//              <svg width="4" height="60" viewBox="0 0 4 80" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="4" height="70" rx="2" fill="url(#paint0_linear_748_3589)"/>
// <defs>
// <linearGradient id="paint0_linear_748_3589" x1="2" y1="0" x2="2" y2="80" gradientUnits="userSpaceOnUse">
// <stop stop-color="#01BAE2"/>
// <stop offset="1" stop-color="#01E2A2"/>
// </linearGradient>
// </defs>
// </svg> &nbsp;
// <span id="counter5" /> &nbsp; %
//         </div>
     
//    <div style={{fontSize:"15px", fontFamily:"inter",fontWeight:"bold", color:"#62B62C"}}>Ecosystem
//     <br/>
//    Operating
//    </div>
//       </Col>
      
//       </Row>
//     </div>

       

//           <div className="allows-multitude-of">
//           <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#62B62C"/>
// </svg> &nbsp;Although it allows multitude of automations, it continues to have the zero trust security.
        
//           </div>
//           <b className="alpha-network-services">Alpha Network Services</b>
//           <div className="learn-more1"><HashLink to='http://localhost:3000/learn#network'>Learn More</HashLink></div>
//         <div className="divfont-bold1">
//           <img className="svgw-4-icon" alt="" src="/svgw42.svg" />
//         </div> 
//         </div>
     
//         <div className="built-on-secure1" >
//           Built On Secure Open Hybrid Alpha Architecture
//         </div>
       
//         <div className="for-efficiency">{`for Efficiency & Digital Innovation`}</div>
//         <img
//           className="server-outline-1-icon"
//           alt="server"
//           src={require('../assets/57-server-outline (1).gif')}
//         />
//         <img
//           className="load-balancer-outline-1-icon"
//           alt="loadbalancer"
//           src={require('../assets/1309-load-balancer-outline.gif')}
//         />
//         <img
//           className="qr-code-outline-1-icon"
//           alt="network"
//           src={require('../assets/1335-qr-code-outline 1.gif')}
//         />
     
//       </div>
      
     
 
//       <div className="sol" ref={ref2} id="product">
//       <div className="product-container">
//           <span>{`Explore `}</span>
//           <span className="digitally">Our Products</span>
//         </div>
//         <Products  />
     
       
//       </div>

      
      
  
//       <div className="features"  duration={2000} delay={1000}>
//      <Fade bottom> 
//         <div className="features1" >
//           <div className="rectangle-parent">
//             <div className="group-item"/>
//             <div className="custom-services-parent">
//               <div className="custom-services">
//                Scalable & Agile
//                 </div>
//               <img
//                 className="content-19-content-clipbo"
//                 alt="img"
//                 src={require('../assets/19 - content, clipboard, document, paper, paste icon.png')}
//               />
//             </div>
//           </div>
//           <div className="rectangle-group">
//             <div className="group-inner" />
//             <div className="complete-research-parent">
//               <div className="complete-research">orchestration</div>
//               <img
//                 className="action-8-action-edit-com"
//                 alt="img"
//                 src={require('../assets/8 - action, edit, compose, new, pencil icon.png')}
//               />
//             </div>
//           </div>
//           <div className="rectangle-container">
//             <div className="rectangle-div" />
//             <div className="quality-assured-parent">
//               <div className="quality-assured">Quality Assured</div>
//               <img
//                 className="action-11-action-favorite"
//                 alt="img"
//                 src={require('../assets/11 - action, favorite, favourite, like, rating, star icon.png')}
//               />
//             </div>
//           </div>
//           <div className="group-div">
//             <div className="group-child1" />
//             <div className="fastest-resolution-parent">
//               <div className="fastest-resolution">Fastest Resolution</div>
//               <img
//                 className="action-41-action-cycle-r"
//                 alt="img"
//                 src={require('../assets/41 - action, cycle, refresh, turn icon.png')}
//               />
//             </div>
//           </div>
//           <div className="rectangle-parent1">
//             <div className="group-child1" />
//             <div className="hybrid-cloud-parent">
//               <div className="hybrid-cloud">{`Hybrid Cloud `}</div>
//               <img
//                 className="content-32-content-bulb"
//                 alt="img"
//                 src={require('../assets/32 - content, bulb, electricity, idea, lamp, light, lightbulb icon.png')}
//               />
//             </div>
//           </div>
//           <div className="rectangle-parent2">
//             <div className="group-item" />
//             <div className="support-parent">
//               <div className="support">24/7 Support</div>
//               <img
//                 className="interface-1-interface-che"
//                 alt="img"
//                 src={require('../assets/1 - interface, checkbox, checkmark, edit icon.png')}
//               />
//             </div>
//           </div>
//           <div className="rectangle-parent3">
//             <div className="group-child1" />
//             <div className="flexible-revision-parent">
//               <div className="flexible-revision">Flexible Revision</div>
//               <img
//                 className="action-41-action-cycle-r1"
//                 alt="img"
//                 src={require('../assets/41 - action, cycle, refresh, turn icon.png')}
//               />
//             </div>
//           </div>
//           <div className="rectangle-parent4">
//             <div className="group-inner" />
//             <div className="dedicated-engineers-parent">
//               <div className="dedicated-engineers">Dedicated Engineers</div>
//               <img
//                 className="content-22-content-edit"
//                 alt=""
//                 src={require('../assets/22 - content, edit, pen, write, tool icon.png')}
//               />
//             </div>
//           </div>

        
//       {/*    <div className="rectangle-parent5">
//             <div className="group-inner" />
//             <div className="satisfaction-parent">
//               <div className="satisfaction">Satisfaction</div>
//               <img
//                 className="action-7-action-check-co"
//                 alt=""
//                 src={require('../assets/7 - action, check, communication, double, mark icon.png')}
//               />
//             </div>
//           </div>
//     */}

// <div className="rectangle-parent5">
//           <div className="group-inner" />
//           <div className="group-wrapper">
//             <div className="satisfaction-parent">
//               <div className="satisfaction">{`Satisfaction `}</div>
//               <img
//                 className="action-7-action-check-co"
//                 alt=""
//                 src={require('../assets/7 - action, check, communication, double, mark icon.png')}
//               />
//             </div>
//     </div>
//     </div> 


//     <div className="rectangle-parent6">
//           <div className="group-inner" />
//           <div className="enterprise-model-parent">
//             <div className="enterprise-model">Enterprise Model</div>
//             <img
//               className="action-11-action-favorite1"
//               alt="img"
//               src={require('../assets/11 - action, favorite, favourite, like, rating, star icon.png')}
//             />
//           </div>
//         </div>

//         </div>

      
//     {/* <div className="rectangle-parent5">
//           <div className="group-inner" />
//           <div className="group-wrapper">
//             <div className="satisfaction-parent">
//               <div className="satisfaction">{`Satisfaction `}</div>
//               <img
//                 className="action-7-action-check-co"
//                 alt=""
//                 src={require('../assets/7 - action, check, communication, double, mark icon.png')}
//               />
//             </div>
//     </div>
//     </div> 
    
//     */}

//        </Fade>
//       {/*  <div className="rectangle-parent6">
//           <div className="group-inner" />
//           <div className="enterprise-model-parent">
//             <div className="enterprise-model">Enterprise Model</div>
//             <img
//               className="action-11-action-favorite1"
//               alt="img"
//               src={require('../assets/11 - action, favorite, favourite, like, rating, star icon.png')}
//             />
//           </div>
//         </div>
// */}
       
//         <div className="reasons-we-are-container">
//           <span>{`Reasons we are  `}</span>
//           <span className="digitally">Leading</span>
//         </div>
      
//       </div>

    
    
//      <div className="timeline">
//         <div className="timeline-child" />
    
//     <Fade bottom delay={5000} duration={2000}>
//         <div className="year-2023">
//           <b className="b1">2023</b>
//           <div className="content1">
//             <img className="content-child" alt="" src={require('../assets/Line 2.png')} />
//             <div className="unleash-business-resilience">
//               Unleash business resilience with enterprise cloud.
//             </div>
//           </div>
//         </div>
//         </Fade>
//         <Fade bottom delay={3000} duration={2000}>
//         <div className="year-2021">
//           <b className="b1">2021</b>
//           <div className="content1">
//             <img className="content-child" alt="" src={require('../assets/Line 2.png')} />
//             <div className="unleash-business-resilience">
//               Unleash business resilience with enterprise cloud.
//             </div>
//           </div>
//         </div>
//         </Fade>
//         <Fade top delay={4000} duration={2000}>
//         <div className="year-2022">
//           <div className="content3">
//             <div className="unleash-business-resilience2">
//               Unleash business resilience with enterprise cloud.
//             </div>
//             <img className="content-child" alt="" src={require('../assets/Line 3.png')} />
//           </div>
//           <b className="b3">2022</b>
//         </div>
//         </Fade>
//         <Fade top delay={2000} duration={2000}>
//         <div className="year-2020">
//           <div className="content3">
//             <div className="unleash-business-resilience2">
//               Unleash business resilience with enterprise cloud.
//             </div>
//             <img className="content-child" alt="" src={require('../assets/Line 3.png')} />
//           </div>
//           <b className="b3">2020</b>
//         </div>
//        </Fade>
//       <Fade bottom delay={1000} duration={3000}>
//         <div className="year-2019">
//           <b className="b1">2019</b>
//           <div className="content1">
//             <img className="content-child" alt="" src={require('../assets/Line 2.png')} />
//             <div className="unleash-business-resilience">
//               Unleash business resilience with enterprise cloud.
//             </div>
//           </div>
//         </div>
//        </Fade>
//         <img
//           className="public-cloud-1-icon"
//           alt="img"
//           src={require('../assets/public_cloud 1.png')}
//         />
//         <img
//           className="public-cloud-2-icon"
//           alt="img"
//           src={require('../assets/public_cloud 1.png')}
//         />
//         <img
//           className="public-cloud-3-icon"
//           alt="img"
//           src={require('../assets/public_cloud 1.png')}
//         />
//         <img
//           className="public-cloud-4-icon"
//           alt="img"
//           src={require('../assets/public_cloud 1.png')}
//         />
//         <img
//           className="public-cloud-5-icon"
//           alt="img"
//           src={require('../assets/public_cloud 1.png')}
//         />
//         </div> 
   

//         {/* TimeLine*/}
//       {/*  <Reveal effect="fadeInUp">
//        <div className="timeline">
//         <img src={require('../assets/YearDemo.gif')} alt="gif" />
       
//     </div> 


   
// </Reveal> */}
  
       
//       <div className="divbasefooter">
//         <div className="divrow">
//           <div className="tcs20logosvg">
//             <img className="tcs20logosvg-icon" alt="" src={require('../assets/TCS%20logo.svg.png')} />
//           </div>
//           <img
//             className="ulsocial-icn-ul-icon"
//             alt="img"
//             src={require('../assets/ul.social-icn-ul.png')}
//           />
//           <div className="tata-consultancy-services">
//             ©2023 TATA Consultancy Services Limited
//           </div>
//           <div className="ulbase-footer-tcs-lnks-ul">
//             <div className="privacy-notice">Privacy Notice</div>
//             <div className="cookie-policy">Cookie Policy</div>
//             <div className="disclaimer">Disclaimer</div>
//             <div className="security-policy">Security Policy</div>
//           </div>
//         </div>
//       </div>
    
//       <div className="hero-1">
//       {/*  <div className="rectangle-3-2" />
//         <div className="rectangle-2-2" />
// <div className="hero-1-child" /> */}
//         <div className="home" onClick={handleClick1} style={{cursor:'pointer'}}>
//           <AnimationWrapper
//            config={{
//             color: {
//               initial: '#121517',
//               onHover: '#407bff',
//             },
//             fontSize: {
//               initial: '16px',
//               onHover: '18px'
//             }
//           }}>
//           Home
//           </AnimationWrapper>
//           </div>
//         <div className="rectangle-2-3" />
//      {/*   <div className="sign-in">
//           <div className="sign-in-2">Log out</div>
// </div> */}
//         <img
//           className="thumbnail-image003-1-2-icon"
//           alt=""
//           src={require('../assets/TCSECP-Logo.png')}
//         />
//         <div className="solutions1" onClick={handleClick} style={{cursor:'pointer', color:"#121517"}}>
      
//           <div className="solutions-2" >
//           <AnimationWrapper
//            config={{
//             color: {
//               initial: '#121517',
//               onHover: '#407bff',
//             },
//             fontSize: {
//               initial: '16px',
//               onHover: '18px'
//             }
//           }}>
//             Solutions
//             </AnimationWrapper>
//             </div>
     
//         </div> 
//         <div className="products" onClick={handleClick2} style={{cursor:'pointer', color:"#121517"}}>
//         <AnimationWrapper
//            config={{
//             color: {
//               initial: '#121517',
//               onHover: '#407bff',
            
//             },
//             fontSize: {
//               initial: '16px',
//               onHover: '18px'
//             }
//           }}>
//           Products
//           </AnimationWrapper>
//           </div>
//         <div className="learn">
       
//           <Link to="/learn" style={{textDecoration:"none", color:"#121517", fontWeight:"600"}}>
//           <AnimationWrapper
//            style={{
//             textAlign: 'center',
//             padding: '6px'
//           }}
//            config={{
//             color: {
//               initial: '#121517',
//               onHover: '#407bff',
//             },
//             fontSize: {
//               initial: '16px',
//               onHover: '18px'
//             }
//           }}>
//           Learn
//           </AnimationWrapper>
//           </Link>
        
//           </div>
//       </div>

//     </div>
  );
};


