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
import ScrollUpButton from "react-scroll-up-button";
import "../Desktop16.css";
/* Scroll trigger */
import  Fade from 'react-reveal/Fade';
import  User from '../../../src/assets/user.png'
import LogoutIcon from "../../../src/assets/Infinite/logoutImg.webp"

/* counter */
import CountUp , { useCountUp } from 'react-countup';

/*slide card*/
import Carousel from "react-elastic-carousel";
import Item from "../item";

/* Link navigate to learn page */
import { HashLink } from 'react-router-hash-link';

/* Nav Link */
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Features from "../Features/Features";
import LandingHero from "../LandingHero/LandingHero";
import LandingHeroMb from '../LandingHero/LandingHeroMb';

function HeaderHero(props) {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).username : null
  );
  const [currentProjectName, setProjectName] = useState(
    localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).projectName : null
  );
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const NavigatePage = () => {
    if (currentUser) {
      // Logout logic
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      setCurrentUser(null);
      setProjectName(null);
    } else {
      // Navigate to login
      navigate("/login");
    }
  };

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

  // CountUp scrollspy configurations...
  useCountUp({
    ref: 'counter',
    start: 0,
    end: 64000,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  // ... (other CountUp configurations)

  const [itemsToShow, setItemsToShow] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleLearnClick = () => {
    navigate("/learn");
  };

  return (
    <div>
      <div>
        <div style={{top:"0",left:"0"}} className="header-container">
          <img
            className="header-logo"
            alt="TCS Enterprise Cloud Logo"
            src={require('../../assets/TCSECP-Logo.png')}
            style={{marginLeft:props.leftAlign=="true" ? "3rem":"" }}
          />
          
          {/* Hamburger menu icon for mobile */}
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            <img
              src={require('../../assets/MenuImg.png')}
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
            
            {/* User/Login section */}
          
{currentProjectName != null ? <div style={{width:"fit-content",paddingLeft:"0.3rem",paddingRight:"0.3rem"}} className="header-user">{currentProjectName}</div> : ""}
{currentUser ? (
  <div className="header-user">
    <div className="user-content">
      <div className="user-info-container" title={currentProjectName}>
        <img height="13" style={{marginBottom:"2px"}} src={User} />
        <span>{currentUser} </span>
      </div>
    </div>
    <div onClick={NavigatePage} className="logout-content">
      <img height="15" src={LogoutIcon} />
      <span>Logout</span>
    </div>
  </div>
) : (
  <div className="header-nav-item" onClick={NavigatePage} style={{ cursor: 'pointer' }}>
    <AnimationWrapper
      config={{
        color: { initial: '#121517', onHover: '#407bff' },
        fontSize: { initial: '16px', onHover: '18px' },
      }}
    >
      <div className="header-user">Login</div>
    </AnimationWrapper>
  </div>
)}
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
              <div className="mobile-user" onClick={NavigatePage}>
                {currentUser ? (
                  <>
                    <img height="15" src={User}/>
                    <span>{currentUser}</span>
                  </>
                ) : (
                  <span >Login</span>
                )}
              </div>
            </nav>
          </div>
        )}
      </div> 
    </div>
  )
}

export default HeaderHero;