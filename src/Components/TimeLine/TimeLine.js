import React from 'react';
import "./TimeLine.css";
import { Fade } from 'react-bootstrap';
import { useIntersectionObserver } from './IntersectionObserver';
function TimeLine() {
  // Reusable assets
  const lineImage = require('../../assets/Line 2.png');
  const lineImage2 = require('../../assets/Line 3.png');
  const publicCloudImage = require('../../assets/public_cloud 1.png');

  // Timeline data
  const timelineData = [
    {
      year: "2023",
      content: "Unleash business resilience with enterprise cloud.",
      image: lineImage,
      fadeDirection: "bottom",
      delay: 5000,
      duration: 2000,
      className: "year-2023",
      contentClass: "content1",
      textClass: "unleash-business-resilience",
      bClass: "b1",
    },
    {
      year: "2021",
      content: "Unleash business resilience with enterprise cloud.",
      image: lineImage,
      fadeDirection: "bottom",
      delay: 3000,
      duration: 2000,
      className: "year-2021",
      contentClass: "content1",
      textClass: "unleash-business-resilience",
      bClass: "b1",
    },
    {
      year: "2022",
      content: "Unleash business resilience with enterprise cloud.",
      image: lineImage2,
      fadeDirection: "top",
      delay: 4000,
      duration: 2000,
      className: "year-2022",
      contentClass: "content3",
      textClass: "unleash-business-resilience2",
      bClass: "b3",
      reverseOrder: true, // Indicates that the content and year are in reverse order
    },
    {
      year: "2020",
      content: "Unleash business resilience with enterprise cloud.",
      image: lineImage2,
      fadeDirection: "top",
      delay: 2000,
      duration: 2000,
      className: "year-2020",
      contentClass: "content3",
      textClass: "unleash-business-resilience2",
      bClass: "b3",
      reverseOrder: true, // Indicates that the content and year are in reverse order
    },
    {
      year: "2019",
      content: "Unleash business resilience with enterprise cloud.",
      image: lineImage,
      fadeDirection: "bottom",
      delay: 1000,
      duration: 3000,
      className: "year-2019",
      contentClass: "content1",
      textClass: "unleash-business-resilience",
      bClass: "b1",
    },
  ];
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (!isVisible) {
    return <div ref={ref} style={{ height: '100vh' }} />;
  }
  return (
    <div ref={ref}>
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
        <div className="paraLines">
          With TCS Enterprise Cloud, you can gain a competitive edge, keep up
          with changing business needs, and stay compliant with ever-evolving
          regulatory and privacy directives while accelerating innovation for
          sustainable growth.
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      <div style={{ position: "relative" , marginTop:"1rem" }}>
        <div className="timeline">
          <div className="timeline-child" />

          {/* Mapped Timeline Items */}
          {timelineData.map((item, index) => (
            <Fade
              key={index}
              bottom={item.fadeDirection === "bottom"}
              top={item.fadeDirection === "top"}
              delay={item.delay}
              duration={item.duration}
            >
              <div className={item.className}>
                {!item.reverseOrder && <b className={item.bClass}>{item.year}</b>}
                <div className={item.contentClass}>
                  {item.reverseOrder && (
                    <>
                      <div className={item.textClass}>{item.content}</div>
                      <img className="content-child" alt="" src={item.image} />
                    </>
                  )}
                  {!item.reverseOrder && (
                    <>
                      <img className="content-child" alt="" src={item.image} />
                      <div className={item.textClass}>{item.content}</div>
                    </>
                  )}
                </div>
                {item.reverseOrder && <b className={item.bClass}>{item.year}</b>}
              </div>
            </Fade>
          ))}

          {/* Public Cloud Images */}
          <img
            className="public-cloud-1-icon"
            alt="img"
            src={publicCloudImage}
          />
          <img
            className="public-cloud-2-icon"
            alt="img"
            src={publicCloudImage}
          />
          <img
            className="public-cloud-3-icon"
            alt="img"
            src={publicCloudImage}
          />
          <img
            className="public-cloud-4-icon"
            alt="img"
            src={publicCloudImage}
          />
          <img
            className="public-cloud-5-icon"
            alt="img"
            src={publicCloudImage}
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default TimeLine;