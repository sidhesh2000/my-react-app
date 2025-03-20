import React from 'react';
import "../Solutions/Solutions.css";
import { HashLink } from 'react-router-hash-link';
import CountUp, { useCountUp } from 'react-countup';
import solutionsData from './SolutiontsData';


function Solutions() {
  // Initialize useCountUp hooks at the top level
  useCountUp({ ref: 'counter', start: 0, end: 64000, enableScrollSpy: true, scrollSpyDelay: 1000 });
  useCountUp({ ref: 'counter1', start: 0, end: 32000, enableScrollSpy: true, scrollSpyDelay: 1000 });
  useCountUp({ ref: 'counter2', start: 0, end: 5000, enableScrollSpy: true, scrollSpyDelay: 1000 });
  useCountUp({ ref: 'counter3', start: 0, end: 2000, enableScrollSpy: true, scrollSpyDelay: 1000 });
  useCountUp({ ref: 'counter4', start: 0, end: 12000, enableScrollSpy: true, scrollSpyDelay: 1000 });
  useCountUp({ ref: 'counter5', start: 0, end: 99, enableScrollSpy: true, scrollSpyDelay: 1000 });

  return (
    <div className='Container'>
       <div   id="solution">
      <div className='HeadingAlignment'>
        <div>
          <div className="BlueHeader">Built On Secure Open Hybrid Alpha Architecture</div>
          <div className="BlackHeader">for Efficiency & Digital Innovation</div>
        </div>
      </div>
      <div>
        <div className='ContentContainer'>
          {solutionsData.map(({ icon, title, description, learnMoreLink, counters }) => (
            <div className='InnerContainer' key={title}>
              <div className='ContainerBox'>
                <div className='StartBox'>
                  <img
                    className="loadBalancerIcon"
                    alt="loadbalancer"
                    src={require(`../../assets/${icon}`)}
                  />
                </div>
                <div className="MiddleBox">
                  <div className='InnerHeading'>{title}</div>
                  {description.map((desc, index) => (
                    <div className='LineAllignment' key={index}>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z" fill="#62B62C"/>
                      </svg> &nbsp;{desc}
                      {index === description.length - 1 && <div><HashLink to={learnMoreLink}>Learn More</HashLink></div>}
                    </div>
                  ))}
                </div>
                <div className="EndBox">
                  {counters.map(({ id, label, subLabel }) => (
                    <div key={id}>
                      <svg width="4" height="60" viewBox="0 0 4 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="4" height="70" rx="2" fill="url(#paint0_linear_748_3589)"/>
                        <defs>
                          <linearGradient id="paint0_linear_748_3589" x1="2" y1="0" x2="2" y2="80" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#01BAE2"/>
                            <stop offset="1" stop-color="#01E2A2"/>
                          </linearGradient>
                        </defs>
                      </svg> &nbsp; <span className='CounterCount' id={id} /> {id == "counter5" ? "%":""} &nbsp;
                      <div style={{fontSize:"15px", fontFamily:"inter",fontWeight:"bold", color:"#62B62C"}}>
                        {label}
                        <br/>
                        {subLabel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Solutions;