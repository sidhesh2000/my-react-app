import React from 'react'
import { AnimationWrapper } from 'react-hover-animation'
import { useState , useEffect } from 'react';
/* Product */
import { Hero } from "../Header";
import Solutions from "../../Components/Solutions/Solutions"
import Products from "../../Components/Products/Products"
import TimeLine from "../TimeLine/TimeLine";
import Carosel from "../../Components/Carosel/Carosel";
/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../../Components/Footer/Footer"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import { Container } from "react-bootstrap";
import ScrollUpButton from "react-scroll-up-button";
import "../Desktop16.css";
/* Scroll trigger */
//import Slide from 'react-reveal/Slide';
//import Reveal from 'react-reveal/Reveal';
import  Fade from 'react-reveal/Fade';
import  User from '../../../src/assets/user.png'
import LogoutIcon from "../../../src/assets/Infinite/logoutImg.webp"

//import  Flash from 'react-reveal/Fade';

//import { Hero } from "./Header";

/* counter */
import CountUp , { useCountUp } from 'react-countup';

/*slide card*/
import Carousel from "react-elastic-carousel";
import Item from "../item";

/* Link navigate to learn page */
import { HashLink } from 'react-router-hash-link';


/* Nav Link */

import { Link,useNavigate } from 'react-router-dom';

import { useRef } from 'react';
import Features from "../Features/Features";
import LandingHero from "../LandingHero/LandingHero";
import LandingHeroMb from '../LandingHero/LandingHeroMb';
function HeaderHero(props) {
  
  
    const currentUser = localStorage.getItem('currentUser');
    /*
    const onButtonabsoluteIconClick = useCallback(() => {
      // Please sync "Desktop - 15" to the project
    }, []);
  */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const NavigatePage = ()=>{
  navigate("/login")
  }
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
    //nav link
    const ref = useRef(null);
     const ref1 = useRef(null); 
     const ref2 = useRef(null); 
  
    const handleClick = () => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
      props.func("click1")
    };
   
    const handleClick1 = () => {
      ref1.current?.scrollIntoView({ behavior: 'smooth' });
      props.func("click")
    };
  
    const handleClick2 = () => {
      ref2.current?.scrollIntoView({ behavior: 'smooth' });
      props.func("click2")
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
    
     const handleLearnClick = () => {
      navigate("/learn");
    };
  return (
    <div>
        <div>
  <div className="header-container">
    <img
      className="header-logo"
      alt="TCS Enterprise Cloud Logo"
      src={require('../../assets/TCSECP-Logo.png')}
      style={{marginLeft:props.leftAlign=="true" ? "3rem":"" }}
    />
    
    {/* Hamburger menu icon for mobile */}
    <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
      <img
        src={require('../../assets/MenuImg.png')} // or use an SVG/icon library
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
      
          <AnimationWrapper
            style={{ textAlign: 'center', padding: '6px', cursor:"pointer" }}
            config={{
              color: { initial: '#121517', onHover: '#407bff' },
              fontSize: { initial: '16px', onHover: '18px' },
            }}
            onClick={handleLearnClick}
          >
            Learn
          </AnimationWrapper>
        
      </div>
      <div className="header-user">
  {/* Default state (visible) */}
  <div className="user-content">
    <div>
    <img height="13" style={{marginBottom:"2px"}} src={User} />
    <span>     {currentUser}</span>
    </div>
    
  </div>
  
  {/* Hover state (hidden by default) */}
  <div onClick={NavigatePage} className="logout-content">
    
    <img height="15" src={LogoutIcon} /> {/* Replace with your logout icon */}
    <span>Logout</span>
  </div>
</div>
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
</div> 
    </div>
  )
}

export default HeaderHero;