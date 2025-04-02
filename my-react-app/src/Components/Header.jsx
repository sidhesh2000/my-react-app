import React from "react";
/*import { useRef } from 'react';*/
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AnimationWrapper } from 'react-hover-animation'
import "./Desktop16.css";

export const Hero = () => {
  //nav link
 /* const ref = useRef(null);
   const ref1 = useRef(null); */
/*
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
 
  const handleClick1 = () => {
    ref1.current?.scrollIntoView({ behavior: 'smooth' });
  };
*/
  return (
    <div className="hero-1" >
   {/* <div className="rectangle-3-2" />
    <div className="rectangle-2-2" />*/}
  <div className="hero-1-child" style={{opacity:"10"}}/> 
    <div className="home" >
    
    <HashLink to="/" style={{textDecoration:"none"}}>
    <AnimationWrapper
    style={{
      textAlign: 'center',
      padding: '6px'
    }}
           config={{
            color: {
              initial: '#121517',
              onHover: '#407bff',
            },
            fontSize:{
              initial:"16px",
              onHover:"18px",
            }
          }}>
      Home
      </AnimationWrapper>
     </HashLink>
    
      </div>
 {/*  <div className="rectangle-2-3" /> */}
    {/*<div className="sign-in">
      <div className="sign-in-2">Log out</div>
  </div> */}
   <img
      className="thumbnail-image003-1-2-icon"
      alt=""
      src={require('../assets/TCSECP-Logo.png')}
/> 
    <div className="solutions1" >
      <div className="solutions-2" >
     
      <HashLink to="http://localhost:3000#solution" style={{textDecoration:"none"}}>
      <AnimationWrapper
    style={{
      textAlign: 'center',
      padding: '6px'
    }}
           config={{
            color: {
              initial: '#121517',
              onHover: '#407bff',
            },
            fontSize:{
              initial:"16px",
              onHover:"18px",
            }
          }}>
        Solutions
        </AnimationWrapper>
        </HashLink>
      
        </div>
    </div> 
    <div className="products">
  
    <HashLink to="http://localhost:3000#product" style={{textDecoration:"none", color:"#121517"}}>
    <AnimationWrapper
    style={{
      textAlign: 'center',
      padding: '6px'
    }}
           config={{
            color: {
              initial: '#121517',
              onHover: '#407bff',
            },
            fontSize:{
              initial:"16px",
              onHover:"18px",
            }
          }}>
      Products
      </AnimationWrapper>
      </HashLink>
    
      </div>
      <div className="underline" />
    <div className="learn">

    <Link to="/learn" style={{textDecoration:"none"}}>
    <AnimationWrapper
    style={{
      textAlign: 'center',
      padding: '6px'
    }}
           config={{
            color: {
              initial: '#121517',
              onHover: '#407bff',
            },
            fontSize:{
              initial:"16px",
              onHover:"18px",
            }
          }}>
      Learn
      </AnimationWrapper>
      </Link>
 
    </div>
  </div>
  );
};