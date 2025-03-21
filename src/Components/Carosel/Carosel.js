import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from '../item';
import carouselData from './CaroselData'; // Import the JSON data
import './Carosel.css'; // Ensure you have the necessary CSS

function Carosel() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="sectionbg-purple-25">
        <div className="divcontainer">
          <div className="divrelative">
            <Carousel itemsToShow={2}>
              {carouselData.map((item) => (
                <Item key={item.id}>
                  <div className="divcarousel-items">
                    <div className={item.figureClass} style={{ width: '460px' }}>
                      <div className={item.gatsbyClass}>
                        <img className="image-icon" alt="" src={item.image} />
                        <img
                          className="testimonials-linewebp-icon"
                          alt="img"
                          src={item.image}
                        />
                      </div>
                      <div className={item.contentClass}>
                        <span className="satishchandra-doreswamy-vice-container1">
                          <p className="satishchandra-doreswamy">{item.name}</p>
                          <p className="vice-president-and">{item.role}</p>
                        </span>
                      </div>
                      <div className={item.textClass}>{item.quote}</div>
                      <img
                        className={item.avatarClass}
                        alt=""
                        src={item.avatar}
                      />
                    </div>
                  </div>
                </Item>
              ))}
            </Carousel>
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
  );
}

export default Carosel;