import React from "react";
import SideBar from "./Sidebar";
import { Hero } from "./Header";
import './blog.css'
import  ScrollUpButton from "react-scroll-up-button";
import { useState } from "react";
import ProgressBar from "react-scroll-progress-bar";
import Minimap from 'react-minimap';
import search from "../../src/assets/search.png";
import close from  "../../src/assets/close.png";

//import {Helmet} from "react-helmet";
//import './PageTracker.js';


export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false)
 
 //refresh
 const content ={
  "section": {
    "container": {
      "content": [
       
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": ""
          },
          "text": "STORAGE HARDWARE – AN ENDLESS BUYING GAME"
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": ""
          },
          "text": "A typical organization will refresh their storage infrastructure every 3-5 years. But between refresh cycles there is often the need to purchase additional disk shelves, array fiber port expansions, network switches, software licenses, etc. In recent years, there has also been a need to accelerate performance at the midpoint of a system’s life cycle in the form of a flash/SSD upgrade, adding even more cost to the storage infrastructure stack. In short, the storage infrastructure environment rarely remains static for long; it is subject to constant change."
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "One of the fundamental issues in trying to manage the storage procurement process is that the cost of storage capacity constantly goes down over time. This is a good thing; however, it has a direct effect on storage purchasing decisions. For example, many organizations will purchase only what they think the business will need over a 12-month period. That way when additional storage capacity is added a year later, the acquisition costs may be significantly less than the previous purchase. The challenge with this approach is that if the needs of the business suddenly change and storage demands unexpectedly spike up, IT is left into a clumsy state."
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "Selecting the right storage hardware can often be a no-win proposition for the IT professional. The endless cycle of storage tech refreshes and capacity upgrades puts IT planners and their administrators into an infinite loop of assessing and re-assessing their storage infrastructure requirements. Beyond the capital and operational costs and risks of buying and implementing new gear are also lost opportunity costs."
        },
      
        {
          "type": "paragraph",
          "style": {
            "color": "#004dbb",
            "fontFamily": '"Times New Roman", serif',
            "fontSize": "large"
          },
          "text": "WHAT IS STORAGE AS A SERVICE?"
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "Storage as a service (SaaS) is a business model in which a company leases or rents its storage infrastructure to another company or individuals to store data. Small companies and individuals often find this to be a convenient methodology for managing backups, and providing cost savings in personnel, hardware and physical space."
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "A company providing SaaS may be called a storage service provider (SSP). Storage as a service can also be referred to as hosted storage."
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "TCS Enterprise Cloud is one of the most trusted storage service provider (SSP) that has a prominent presence across the globe in various geographies hosting multiple enterprise customers. TCS Enterprise Cloud being in the industry for over a decade, clearly understands the road ahead and have already moved into a software defined storage based offering, powered by open source community products, this has proven results with respect to costs, performance and scalability."
        },
        {
          "type": "paragraph",
          "style": {
            "color": "#004dbb",
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "WHAT IS SOFTWARE DEFINED STORAGE?"
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "Software-defined storage is a marketing term for computer data storage software for policy-based provisioning and management of data storage independent of the underlying hardware. However, the marketing term software-defined storage is most often associated with software products designed to run on commodity server hardware with Intel x86 processors and to enable cost savings over traditional storage area network (SAN) and network-attached storage (NAS) systems that tightly couple software and hardware. Factors contributing to the increase in SDS products include the explosive growth of unstructured data, creating a greater need for a scale-out storage architecture; the availability of high-performance server hardware with multicore processors; the general acceptance of virtualization in servers, desktops, applications and networking; and the popularity of cloud technologies."
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "Use cases for software-defined storage vary by product with respect to the capability. For instance, common use cases for scale-out object and file SDS include applications that generate significant amounts of unstructured data, such as data analytics and internet of things. Scale-out block SDS may target higher performance workloads such as databases and transactional workloads."
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "Preferred SDS products in the market are predominantly open source ones, as it offers abundance of flexibility, scope to add features by customized scripts and capability to integrate with any product that acts as the orchestrator or abstraction layer as the API’s are readily available. In addition, SDS is THE product that offers all three storage services without any additional components or stack."
        },
        {
          "type": "paragraph",
          "style": {
            "color": "#004dbb",
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "ALPHA BLOCK STORAGE : Overview/Offering"
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "ABS is the block storage service provided by TCS ECP through a dedicated storage network unlike other cloud providers. ABS can be attached to Alpha Cloud Instance (ACI), with file systems and mounting, these devices can be used to host a plethora of applications or databases that demand high performance block storage."
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "Based on the widespread performance requirements and industry trend, ABS is backed by high performing NVMe drives for extremely latency sensitive workloads, transactional workloads and Spinning media for low performance entities."
        },
        {
          "type": "paragraph",
          "style": {
            "color": "#004dbb",
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "Capabilities"
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "Any ABS volume will always have two & three replica copies within the respective availability zone. The protection capability varies with respect to the underlying tier chosen and this framework yields a guaranteed 4 9’s."
        },
        {
          "type": "paragraph",
          "style": {
            "color": "#004dbb",
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "Some key features and capabilities that are currently supported by ABS are listed below,"
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "Volume snapshot"
        },
        {
          "type": "paragraph",
          "style": {
            "fontFamily": "inter",
            "fontSize": "large"
          },
          "text": "Snapshot with Layering"
        }, 
      ]
    }
  }
};
const filteredContent = content.section.container.content.filter((item) =>
  item.text.toLowerCase().includes(searchTerm.toLowerCase())
);
 const refreshPage = ()=>{
  window.location.reload();
}
 
   // by default, I initialized expanded to true for responsiveness demo
  // drag the demo window until it is below 375 width to see sidebar collapse
  
  const [sideNavExpanded, setSideNavExpanded] = React.useState(true);

  function handleResize() {
    // iPhone X width, for example
    if (window.innerWidth <= 375) {
      setSideNavExpanded(false);

      // write other logic here such as disabling hamburger button
    }
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize(); // on-component-mount, check already to see if user has a small device

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // initialize event listeners on-mount & clean on-unmount

  
  const contentStyle = {
    marginLeft: sideNavExpanded ? "250px" : "70px", // arbitrary values
    transition: "margin 0.2s ease"
  };
  
    return (
      <>
   
     
          <ScrollUpButton />
         
        
       
         <SideBar
          setSideNavExpanded={setSideNavExpanded}
          sideNavExpanded={sideNavExpanded}
    /> 
   
        <header>
          <div className="container" id="solution">
          <Hero/>
          
            <blockquote>
            <span style={{  fontFamily:"Bebas Neue", fontSize:"40px", color:"#000"}}>TCSECP User Guide</span>
            <br/>
              Our solutions enable a resilient and secure hybrid cloud ecosystem that drives innovation and supports next-gen business models to accelerate enterprise growth and transformation.
             {/*  */}
           <br/><br/> <br/><br/>
           
            <div className="date" >
              <i className="fa fa-calendar" aria-hidden="true" /> 
              Last Updated: August 1, 2023
            </div>
            </blockquote>
          </div>
        
        </header>
      
       
    
   
   {/*    <div className="scroll">
         <i className="fa fa-long-arrow-down" aria-hidden="true" />
       </div>
 */}


{/*
<Helmet>
              <script src="./PageTracker.js" type="text/javascript" />
            </Helmet>
*/}

    <div className="section">
    <div class="section__header">
       <section className="quote desert" id="ACS" style={{paddingLeft:"90px"}}>
   
       <h1>Alpha Storage Services</h1>
         <div className="byline">
           <div className="avatar" />
           by <span>Storage Team  
           {showSearch ?
           <img src={close} style={{marginLeft:"1rem", cursor:"pointer"}} height={20} onClick={() => setShowSearch(!showSearch)}/> :
           <img src={search} style={{marginLeft:"1rem", cursor:"pointer"}} height={20} onClick={() => setShowSearch(!showSearch)}/> }
        {showSearch && ( <input
          type="text"
          style={{marginLeft:"1rem", borderRadius:"0.6rem",width:"10rem"}}
          
          className="w-30 p-1 ml-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}
     </span>
         
         </div>
        
     {/*  <h1>Alpha Storage Services</h1> 
       <ul>

<li>
  <a href="#refrence" style={{fontSize:"12px"}}> Reference Use cases</a>
  </li>
  &nbsp; 
  <li>
    <a href="#actions"  style={{fontSize:"12px"}}>Creation, Attachment, Multi-Attach, Removal, Extension</a>
    </li>
    <li>
    <a href="#snapshot"  style={{fontSize:"10px"}}> Snapshots of the instance:</a>
    </li>
</ul> */}
     
         <ProgressBar
          bgcolor="#62B62C" />
     </section>
     
    </div>
  
    <div class="section__content">
  
      <section>
     
       <div className="container">
    
     {/*    <h1>Alpha Storage Services</h1>
         <div className="byline">
           <div className="avatar" />
           by <span>Storage Team</span>
         </div>
*/}  
   
  
  <p>
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily: 'inter' }}>
         <span style={{ fontSize: "large"}}>
        <p style={{color:"#0d0d0d" , fontFamily:"inter", fontSize:""}}><span className="drop">Storage</span> 
        <section className="mt-20 p-5">
        <div className="container">
          {filteredContent.length > 0 ? (
            filteredContent.map((item, index) => (
              <p key={index} style={item.style} className="mb-3">
                {item.text}
              </p>
            ))
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </div>
      </section>
            <br/>
           
            </p>
        </span>
      </span>
    </span>
  </p>

  

  
  
  
  
 
 
  
  
  
       </div>
       </section>
       </div>
     </div>
   
    
      
      </>
    );
  };