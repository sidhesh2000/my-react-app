import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from '../item';
import carouselData from './CaroselData'; // Import the JSON data
import './Carosel.css'; // Ensure you have the necessary CSS
import { useState , useEffect } from 'react';
function Carosel() {
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
    <div style={{ position: 'relative' }}>
      <div gla="sectionbg-purple-25">
      <div gla="heading">
          <div className='HeadingContainer'>
            <div>
            <span className='blackheader'>{`We'll help `}</span>
            <span className='blackheader'>digitally</span>
            <span gla="span">{` `}</span>
            <span className="digitally">transform</span>
            <span className='blackheader'> your business</span>
            </div> </div>
        </div>
        <div gla="divcontainer">
          <div gla="divrelative">
            <Carousel itemsToShow={itemsToShow}>
              {carouselData.map((item) => (
                <Item key={item.id}>
                  
                  <div gla="divcarousel-items">
                 
                    <div className={item.figureClass} style={{
  width: itemsToShow !== 1 ? "24rem" : "16rem",
  padding: "1rem",
  height: itemsToShow !== 1 ? "16rem" : "20rem"
}}>
                    <img
                        className={item.avatarClass}
                        alt=""
                        src={item.avatar}
                      />
                      <div gla={item.gatsbyClass}>
                        
                 
                      </div>
                      <div gla={item.contentClass}>
                        <span gla="satishchandra-doreswamy-vice-container1">
                          <p gla="satishchandra-doreswamy">{item.name}</p>
                          <p className="carosel1guy">{item.role}</p>
                        </span>
                      </div>
                      <div className={item.textClass}>{item.quote}</div>
                     
                    </div>
                  </div>
                </Item>
              ))}
            </Carousel>
          </div>
        </div>

        
     
      </div>
    </div>
  );
}

export default Carosel;