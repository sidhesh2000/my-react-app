import React from "react";
import SideBar from "./Sidebar";
import { Hero } from "./Header";
import './blog.css'
import  ScrollUpButton from "react-scroll-up-button";
import { useNavigate } from "react-router";
import ProgressBar from "react-scroll-progress-bar";
import Minimap from 'react-minimap';
import PdfUploader from '../Components/PdfUploader/PdfUploader'
import { useState } from "react";
import HeaderHero from "./HeaderHero/HeaderHero";
import Pdf from "pdfjs-dist/build/pdf";
//import {Helmet} from "react-helmet";
//import './PageTracker.js';


export const Home = () => {
  const Navigate = useNavigate()
  const [first, setfirst] = useState()
  const [second, setSecond] = useState()
  const [third, setThird] = useState()
  const [fourth, setFourth] = useState()
  const [fifth, setFifth] = useState()
  const [currentClick, setCurrentClick] = useState("");
 //refresh
 const refreshPage = ()=>{
  window.location.reload();
}
const handleNetworkContent = (content) => {
  setSecond( content);
  // Update your network-related state here
};
const handleComputeContent = (content) => {
  setThird( content);
  // Update your network-related state here
};
const handleStorageContent = (content) => {
 setfirst(content);
  // Update your storage-related state here
};
const handleAlphaDataProtection = (content) => {
  setFourth(content);
   // Update your storage-related state here
 };
 const handleAccessGuide = (content) => {
  setFifth(content);
   // Update your storage-related state here
 };

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
  const pullData = (v) =>{
    setCurrentClick(v)
     }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
console.log(currentClick,"clicknew");

    handleResize(); // on-component-mount, check already to see if user has a small device
    if(currentClick == "click"){
      Navigate("/")
     }
    
      if (currentClick == "click1") {
        Navigate("/?solution")
      }
     
     if(currentClick == "click2"){
      Navigate("/?products")
     }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentClick]); // initialize event listeners on-mount & clean on-unmount
  const currentUser = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).username : null;


  
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
          <HeaderHero leftAlign="true" func={pullData}/>
          
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
           by <span>Storage Team</span>
         
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
   {currentUser =="1447282" ?
   <div>
   <PdfUploader 
        section="storage"
        func={handleStorageContent}
      />
  
 </div>
   : 
   <div style={{display:"none"}}><PdfUploader section="storage"
   func={handleStorageContent} /></div>}
   <div
        
        style={{ position: "relative", minHeight: "100%", overflowY: "auto" }} // Added overflowY for better scroll handling
        dangerouslySetInnerHTML={{ __html: first }}
      ></div>
  <p>
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily: 'inter' }}>
         <span style={{ fontSize: "large"}}>
        <p style={{color:"#0d0d0d" , fontFamily:"inter", fontSize:""}}><span className="drop">Storage</span> STORAGE HARDWARE – AN ENDLESS BUYING GAME
            <br/>
            A typical organization will refresh their storage infrastructure
                every 3-5 yearsj. But between refresh cycles there is often the
                need to purchase additional disk shelves, array fiber port
                expansions, network switches, software licenses, etc. In recent
                years, there has also been a need to accelerate performance at
                the midpoint of a system’s life cycle in the form of a flash/SSD
                upgrade, adding even more cost to the storage infrastructure
                stack. In short, the storage infrastructure environment rarely
                remains static for long; it is subject to constant change.
            </p>
        </span>
      </span>
    </span>
  </p>

  <p>
    <span style={{ fontFamily: 'inter' }}>
       <span style={{ fontSize: "large"}}>
        <span lang="en" >
          A typical organization will refresh their storage infrastructure every
          3-5 years. But between refresh cycles there is often the need to
          purchase additional disk shelves, array fiber port expansions, network
          switches, software licenses, etc. In recent years, there has also been
          a need to accelerate performance at the midpoint of a system’s life
          cycle in the form of a flash/SSD upgrade, adding even more cost to the
          storage infrastructure stack. In short, the storage infrastructure
          environment rarely remains static for long; it is subject to constant
          change.
        </span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        One of the fundamental issues in trying to manage the storage
        procurement process is that the cost of storage capacity constantly goes
        down over time. This is a good thing; however, it has a direct effect on
        storage purchasing decisions. For example, many organizations will
        purchase only what they think the business will need over a 12-month
        period. That way when additional storage capacity is added a year later,
        the acquisition costs may be significantly less than the previous
        purchase. The challenge with this approach is that if the needs of the
        business suddenly change and storage demands unexpectedly spike up, IT
        is left into a clumsy state. 
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Selecting the right storage hardware can often be a no-win proposition
        for the IT professional. The endless cycle of storage tech refreshes and
        capacity upgrades puts IT planners and their administrators into an
        infinite loop of assessing and re-assessing their storage infrastructure
        requirements. Beyond the capital and operational costs and risks of
        buying and implementing new gear are also lost opportunity costs.
      </span>
    </span>
  </p>
 
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily: '"Times New Roman", serif' }}>
         <span style={{ fontSize: "large"}}>WHAT IS STORAGE AS A SERVICE?</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        Storage as a service (SaaS) is a business model in which a company
        leases or rents its storage infrastructure to another company or
        individuals to store data. Small companies and individuals often find
        this to be a convenient methodology for managing backups, and providing
        cost savings in personnel, hardware and physical space.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        A company providing SaaS may be called a storage service provider (SSP).
        Storage as a service can also be referred to as hosted storage.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        TCS Enterprise Cloud is one of the most trusted storage service provider
        (SSP) that has a prominent presence across the globe in various
        geographies hosting multiple enterprise customers. TCS Enterprise Cloud
        being in the industry for over a decade, clearly understands the road
        ahead and have already moved into a software defined storage based
        offering, powered by open source community products, this has proven
        results with respect to costs, performance and scalability.
      </span>
    </span>
  </p>
 
 
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily: "inter" }}>
         <span style={{ fontSize: "large"}}>
          WHAT IS SOFTWARE DEFINED STORAGE?
        </span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        Software-defined storage is a marketing term for computer data storage
        software for policy-based provisioning and management of data storage
        independent of the underlying hardware. However, the marketing
        term software-defined storage is most often associated with software
        products designed to run on commodity server hardware with Intel x86
        processors and to enable cost savings over traditional storage area
        network (SAN) and network-attached storage (NAS) systems that tightly
        couple software and hardware. Factors contributing to the increase in
        SDS products include the explosive growth of unstructured data, creating
        a greater need for a scale-out storage architecture; the availability of
        high-performance server hardware with multicore processors; the general
        acceptance of virtualization in servers, desktops, applications and
        networking; and the popularity of cloud technologies.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        Use cases for software-defined storage vary by product with respect to
        the capability. For instance, common use cases for scale-out object and
        file SDS include applications that generate significant amounts of
        unstructured data, such as data analytics and internet of things.
        Scale-out block SDS may target higher performance workloads such as
        databases and transactional workloads.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        Preferred SDS products in the market are predominantly open source ones,
        as it offers abundance of flexibility, scope to add features by
        customized scripts and capability to integrate with any product that
        acts as the orchestrator or abstraction layer as the API’s are readily
        available. In addition, SDS is THE product that offers all three storage
        services without any additional components or stack.
      </span>
    </span>
  </p>
  
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily: "inter" }}>
         <span style={{ fontSize: "large"}}>
          ALPHA BLOCK STORAGE : Overview/Offering
        </span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        ABS is the block storage service provided by TCS ECP through a dedicated
        storage network unlike other cloud providers. ABS can be attached to
        Alpha Cloud Instance (ACI), with file systems and mounting, these
        devices can be used to host a plethora of applications or databases that
        demand high performance block storage.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        Based on the widespread performance requirements and industry trend, ABS
        is backed by high performing NVMe drives for extremely latency sensitive
        workloads, transactional workloads and Spinning media for low
        performance entities.
      </span>
    </span>
  </p>
  <p lang="en">&nbsp;</p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily: "inter" }}>
         <span style={{ fontSize: "large"}}>Capabilitiies</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        Any ABS volume will always have two &amp; three replica copies within
        the respective availability zone. The protection capability varies with
        respect to the underlying tier chosen and this framework yields a
        guaranteed 4 9’s.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily: "inter" }}>
         <span style={{ fontSize: "large"}}>
          Some key features and capabilities that are currently supported by ABS
          are listed below,
        </span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>Volume snapshot</span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>Snapshot with Layering</span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter"}}>
       <span style={{ fontSize: "large"}}>Volume backups</span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>Extending a volume</span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>Live Migration</span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>Asynchronous Replication</span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>Trash for accidental deletion</span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter"}}>
       <span style={{ fontSize: "large"}}>D@RE</span>
    </span>
  </p>
  
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Reference Use cases</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Volume type / RU based workload recommendations
      </span>
    </span>
  </p>
  <p>
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        <span lang="en">
          Volume type describes the type of storage backend, more precisely,
          these are the resource units that are reference for chargeback. In
          addition, these storage backends are tagged with the respective
          service levels, which means volumes are created against volume types.
          Below is the list of Volume types and their description for TCS ECP’s
          Alpha 4.0 for US – East Regions’ Cloud.
        </span>
      </span>
    </span>
  </p>
  <p lang="en">&nbsp;</p>
  <p>
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        <span lang="en">
          As you can see from the above picture, three volume types have the
          term “std” which denotes standard, while the other two volume types
          does not come with any such terminologies.
        </span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Volume types with term std is recommended to be used for spinning
        volumes for all standard requirements.
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Volume types without any such terms are used for specific requirements,
        like multi-attach, where volumes need to be attached to two difference
        instances for high availability / clustering. Note: Please read the
        description of the volume type carefully before spinning the volumes.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Volume Management</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Creation, Attachment, Multi-Attach, Removal, Extension
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        As a self-service offering, tenants can create volumes from the portal,
        under the Volumes menu, using Create Volume button. Below diagram shows
        a simple volume creation procedure, parameters that need to be given as
        input is
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Volume Name</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>Description (Optional)</span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        Volume Source à Source to create a volume can be any of the following,
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>Image already placed in AIS</span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Snapshot of a volume to make a copy of an existing volume for recovery /
        refresh reasons
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>Volume by itself</span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Volume Type</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter"}}>
       <span style={{ fontSize: "large"}}>
        Volume type is where the performance aspects required for a specific
        volume comes into effect.
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Size of the volume</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Availability Zone à A volume can be spun in an availability zone and
        comes with an additional copy within the same availability zone. The
        availability zone is the common landing entity for both ACS and ABS,
        cross AZ attachment is not supported.
      </span>
    </span>
  </p>
  <p lang="en">&nbsp;</p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Multi-Attach of Volumes</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Applications that require high availability, demand a need for shared
        storage across multiple instances. TCS ECP caters to this need with the
        multi-attach volume types, it’s a separate volume type that needs to be
        chosen, as the standard volume types does not offer multi-attach
        feature. At the moment, Multi-attach feature is only available for
        Stable1 RU in both the availability zones.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        While creating volumes that need multi-attach feature, as mentioned in
        the above step, choose the type that does not have the term “std
        (standard)” mentioned. While creation of multi-attach volumes can be
        performed from our console, attaching the volume to instances can only
        be performed through command line.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Association of volume types</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Once the volume is created, select Manage Attachments from the drop-down
        menu against the volume and a new window appears. Choose the instance to
        which the volume needs to be attached, after which the volume gets
        attached to an instance and changes to “In Use” state.
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Association of Multi-Attach volume types
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Association of multi-attach enabled volume types can only happen in
        command line. Below are the steps to be performed from the infra node.
        Please note that, you may need to get access to the infra nodes.
      </span>
    </span>
  </p>
  <p lang="en">&nbsp;</p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>Here is the command,</span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        openstack --os-compute-api-version 2.60 server add volume server’s uid
        name of the volume
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Repeat the same for the other instance with the same volume name.
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>
          Protection of Volumes &amp; Instances
        </span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Snaps:</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Snapshots are a point in time read only copies of the instances and
        volumes that are live and in use state of a tenant. Snapshots provided
        by ABS offers additional intelligence like layering, which helps to
        maintain a hierarchical structure, with which, cloning and recreating an
        instance for refresh purpose will be quicker and simple. Since snapshots
        are unaware of the operating system level file system, it is
        crash-consistent. We recommend to quiesce the IO before initiating
        snapshots in order to obtain a consistent copy.
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Snapshots of the instance:</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Snapshots of instance, as mentioned above is a crash-consistent and is
        available as a self-service entity. Navigate to Compute à Instances à
        Choose an instance from the list à From the drop-down options, choose
        Create Snapshot à Give a meaningful name for the snapshot à Click on
        Create Snapshot
      </span>
    </span>
  </p>
  <p lang="en">&nbsp;</p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Note: Scheduling of snapshots are not available now.
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Snapshots of volumes:</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Like instances, snapshots of volume, is also crash-consistent and is
        available as a self-service entity. Navigate to Volumes à Volumes à
        Choose a volume from the list à From the drop-down options, choose
        Create Snapshot à Give a meaningful name for the snapshot à Click on
        Create Volume Snapshot
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Note: Default number of snapshots for a volume is 100, if you want to
        increase this number for specific reasons, a request needs to be raised
        to modify the same. Scheduling of snapshots are not available now.
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Mirroring</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>ABS Volume mirroring :</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter"}}>
       <span style={{ fontSize: "large"}}>
        Volume mirroring is a functionality enables a specific ABS volume to be
        replicated across Availability zones, in addition to the secondary /
        third copies within the availability zone. In order to avail Volume
        Mirroring, specific volume type must be requested as a resource unit
        during onboarding process and choose the same while creating ABS
        volumes.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Volume types that is backed by mirroring capability will have a suffix
        of “R”, create a volume in this volume type, no additional effort is
        required to replicate, platform takes care of data availability across
        availability zones.
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Data Security</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>D@RE enabled volumes</span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Recovery</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Recover a volume from Snapshot :
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Recovery of a previously taken snapshots to rebuild against a failure,
        duplicate a production environment is simple and this creates a replica
        including the volumes automatically.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Navigate to Compute à Images à Choose the snapshot from the list à From
        the drop-down options, choose Launch à Follow the steps used to spin an
        instance, you can choose any name and attributes based on the
        requirements.
      </span>
    </span>
  </p>
  <p lang="en">&nbsp;</p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Navigate again to Compute à Instances à You will be able to the instance
        name that you chose while launching, Power state of the instance should
        Running. If the status is something other than this, then please redo
        the operation, else log a support ticket.
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>
          Recover instance from snapshot :
        </span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter" }}>
       <span style={{ fontSize: "large"}}>
        Like recovery of instance, snapshots of volumes taken are meant to
        retain specific sensitive data. Most prominent use case of this is to
        just protect the volume and contents.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Navigate to Volumes à Snapshots à Choose the snapshot from the list à
        From the drop-down options, choose Create Volume à Give a meaning name
        alone for the new volume.
      </span>
    </span>
  </p>
  <p lang="en">&nbsp;</p>
  <p lang="en">&nbsp;</p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Please note that the newly created volume will inherit the volume type
        from that of the source volume, if you intend to change the same, then,
        please do it before attaching it to the instance.
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter"}}>
         <span style={{ fontSize: "large"}}>Life Cycle Management</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        RU change from one tier to another :
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Resource unit change is changing a volume’s tier mapping from one volume
        type to another, this could possibly be done for two major reasons.
      </span>
    </span>
  </p>
  <ol>
    <li>
      <p lang="en">
        <span style={{ fontFamily:  "inter" }}>
           <span style={{ fontSize: "large"}}>
            Change in Performance Requirement
          </span>
        </span>
      </p>
    </li>
    <li>
      <p lang="en">
        <span style={{ fontFamily:  "inter" }}>
           <span style={{ fontSize: "large"}}>Commercial Reasons</span>
        </span>
      </p>
    </li>
  </ol>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        We leave the decision on the tenant, to perform these changes, while
        recommendations are always available as part of our services. A
        pre-requisite to change the volume type is to detach the volume from the
        instance, ensure that the status of the volume is Available. Please note
        that volume type change cannot be performed on volume with status
        “In-use”.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Navigate to Volumes à Volumes à Choose a volume from the list à From the
        drop-down options, choose Change Volume Type à Choose the desired Type
        from the drop-down list à Select Migration Policy as On Demand à Click
        on Change Volume Type
      </span>
    </span>
  </p>
  <p lang="en">&nbsp;</p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        You may be re-directed to the Volumes page and see that Type of the
        volume is changed. Upon confirmation, the volume can be attached to the
        instance.
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Reporting</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>
          Reporting of capacity provisioned
        </span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>Monitoring and Reporting :</span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Monitoring &amp; reporting capability of ABS is so overwhelming that,
        over 350 different metrics available, offering an exhaustive set of
        parameters and choose the most essential ones. Monitoring of the
        relevant estate can be fully automated and augmented as and when new
        features are released
      </span>
    </span>
  </p>
  <p lang="en">
    <br />
    <br />
  </p>
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>Metering</span>
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>Chargeback report</span>
    </span>
  </p>
  
  <p lang="en">
    <span style={{ color: "#004dbb" }}>
      <span style={{ fontFamily:  "inter" }}>
         <span style={{ fontSize: "large"}}>ALPHA FILE STORAGE</span>
        </span>
        </span>
        </p>

        <p lang="en">
    <span style={{ fontFamily:  "inter" }}>
       <span style={{ fontSize: "large"}}>
        Overview – Offering Capabilities<br/>
Performance parameters<br/>
Tier wise performance parameters<br/>
 <b style={{color: "#004dbb"}}>Reference Use cases</b><br/>
File Share type / RU based workload recommendations<br/>
<br/><br/>

<b style={{color: "#004dbb"}}>File Services Management –</b>
<br/>
Creation, Attachment, Multi-Attach, Removal, Extension Association of volume types
<br/><br/>
<b style={{color: "#004dbb"}}>Protection of Volumes & Instances –</b>
<br/>
 Snaps
 <br/>
Mirroring
<br/>
<br/>

<b style={{color: "#004dbb"}}>Data Security</b>
<br/> Permissions 
<br/>management
<br/>
<b style={{color: "#004dbb"}}>Recovery</b>
<br/>
Recover a share from Snapshot
<br/><br/>
<b style={{color: "#004dbb"}}>Life Cycle Management –</b>
<br/>
RU change from one tier to another
<br/><br/>

<b style={{color: "#004dbb"}}>Reporting</b>
<br/>
Reporting of capacity provisioned 
<br/>Performance Reporting
<br/><br/>
<b style={{color: "#004dbb"}}>Metering</b>
<br/> Chargeback 
<br/>report
<br/>
<b style={{color: "#004dbb"}}>ALPHA Object STORAGE : Overview/Offering</b>
<br/>
Overview TCS Alpha Object Storage is an object storage interface built to provide applications with a RESTful gateway. AOS supports two interfaces:
<br/>

⦁ S3-compatible: Provides object storage functionality with an interface that is compatible with a large subset of the Amazon S3 RESTful API.
<br/>
⦁ Swift-compatible: Provides object storage functionality with an interface that is compatible with a large subset of the OpenStack Swift API.
<br/><br/>

<b style={{color: "#004dbb"}}>Offering</b>

 <br/>


 <b style={{color: "#004dbb"}}>Bucket Management</b>
 <br/>
Creation of Buckets / Containers :
<br/>
⦁ Buckets creation can happen in two different ways, from the Alpha platform and S3 Connection SDK’s like Boto.
<br/>
⦁ Below is the procedure to create a Container (Bucket) from Alpha platform.
<br/>
⦁ Navigate to Project à Object Store à Containers à Button on the left named +Container à Below screen appears, give a meaningful name to the Container (Bucket)
<br/>
⦁ Please note the following while creating Container (Buckets),
<br/>
⦁ Choose Container Access as Not Public, else the container created would be available across Tenants.
<br/>
⦁ Container Names should be unique
<br/>
⦁ Container names cannot be formatted as IP Address
<br/>
⦁ Container names can range anywhere between 3 to 63 characters long
<br/>
⦁ Live Migration
<br/>
⦁ Container names must not contain uppercase characters and underscores
<br/>
⦁ Container names must start with a lowercase letter or number
<br/>
⦁ Container names must be a series of one or more labels. Adjacent labels are separated by a single period (.) Container names can contain lowercase letters, numbers and hyphens, each label must start and end with a lower case letter or a number.
<br/><br/>

In addition to creating Containers from portal, developers can use SDK clients like BOTO (3 and above) to create buckets from their respective machines / servers and use them as repos. Scripts are available to download from internet. Having chosen this route, users will need to get their credentials created through a service request.

<br/><br/>
<b style={{color: "#004dbb"}}>Uploading & Downloading files / folders</b>
<br/>
Once the Container is created using the above-mentioned portal-based steps,
<br/>
click on the respective container and you would be able to see the options to create folders and upload files as shown in the picture below.<br/>
In the below example, we are uploading a file onto the container named, test-container. A circle highlighted on top of a button, is used to upload files.<br/>
+Folder button right next to it, is used to create folder to segregate contents uploaded onto the container<br/>
Similarly, S3 enabled SDK clients can also be used to upload files and folder to the buckets, without having to access the portal. As a pre-requisite, credentials for the respective users should have already been obtained.<br/>

<br/><br/> 

 

<b style={{color: "#004dbb"}}>Deletion / Removal of Buckets / Files</b>
<br/>
Like creation requirements, deletion tasks can also be addressed from the portal. The below list of images furnishes steps on how to delete the files and folders from portal.
<br/>
Navigate to Project à Object Store a Containers a Choose the container where the file resides à Drop down on the menu to the right and click Delete
<br/>


Like files, please navigate to the folder in the respective container and click Delete.

<br/>
Please note that, when you click Delete on a parent folder, a confirmation window pops up, upon confirming, all files and folders underneath will get deleted.
<br/>

<b style={{color: "#004dbb"}}>Protection of Buckets</b>
<br/>
Backup of Buckets : In Road map
<br/>
<b style={{color: "#004dbb"}}>Data Security</b><br/>
 Encrypted Traffic
<br/>
<b style={{color: "#004dbb"}}>Recovery</b>
<br/>
Recover a bucket and contents In Road map
<br/>
<b style={{color: "#004dbb"}}>Life Cycle Management</b>
<br/>
 Re-hydration
<br/>
In Road map
<br/><br/>

<b style={{color: "#004dbb"}}>Reporting</b>
<br/>
Reporting of buckets provisioned
<br/><br/>

<b style={{color: "#004dbb"}}>Metering</b>
<br/>
 Chargeback 
<br/>
 report
</span>
</span>
</p>    
  
       </div>
       </section>
       </div>
     </div>
   
     <section className="section">
    <div class="section__header">
        <section className="quote desert" id="network" style={{paddingLeft:"90px"}}>
        
          <h1>Alpha Network Services</h1>
          <div className="byline">
           <div className="avatar" />
           by <span>Network Team</span>
         
         </div>
         
        </section>
        </div>
        
        <div class="section__content">
        <section>
        <div className="container">
        {currentUser =="1447282" ?
   <div>
    <PdfUploader 
        section="network"
        func={handleNetworkContent}
      />
   
 </div>
   : 
   <div style={{display:"none"}}><PdfUploader section="network"
   func={handleNetworkContent} /></div>}
       
       <div
        
        style={{ position: "relative", minHeight: "100%", overflowY: "auto" }} // Added overflowY for better scroll handling
        dangerouslySetInnerHTML={{ __html: second }}
      ></div>
        <p style={{color:"#0d0d0d" , fontFamily:"inter", fontSize:"16px"}}><span className="drop">Network</span> STORAGE HARDWARE – AN ENDLESS BUYING GAME
            <br/>
            Use cases for software-defined storage vary by product with
                  respect to the capability. For instance, common use cases for
                  scale-out object and file SDS include applications that
                  generate significant amounts of unstructured data, such as
                  data analytics and internet of things. Scale-out block SDS may
                  target higher performance workloads such as databases and
                  transactional workloads.
            </p>
  <p lang="en" >
    <span style={{ fontFamily: "inter",color: "#004dbb" }}>
      <b style={{ fontSize: "large" }}>Domain Network:</b>
    </span>
  </p>
  <p>
    <span style={{fontFamily: "inter", fontSize: "large" }}>
      <span lang="en">
        <strong>Prerequisite: </strong>
      </span>
    </span>
    <span style={{ fontFamily: "inter",fontSize: "large" }}>
      <span lang="en">
        Basic network knowledge in IPv4/IPv6, Network Subnetting, Gateway,
        Routing.
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter", color: "#004dbb" }}>
       <span style={{ fontSize: "large"}}>
        Shared Network and Security Group:
      </span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter",fontSize: "large" }}>
      Networks can be shared across multiple project within customer domain by
      Domain Administrator. User can host and access resources like applications
      and data in shared network which will be accessible for specific or all
      projects with in customer domain.
    </span>
  </p>
  <p lang="en">
    <span style={{fontFamily: "inter", fontSize: "large" }}>
      Shared resources can be allocated on demand and requirement to specific
      project with limited or full privileges.
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter",fontSize: "large" }}>
      Administrator can leverage Security Groups across multiple projects with
      in customer domain to enable/restrict communication for resource in
      projects. Also, can leverage Security Groups and assign a security group
      from one project to another project within domain.
    </span>
  </p>
  <p lang="en">&nbsp;</p>
  <p lang="en">
    <span style={{fontFamily: "inter", color: "#004dbb" }}>
       <span style={{ fontSize: "large"}}>Project Networks:</span>
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter",fontSize: "large" }}>
      Prerequisite: Basic network knowledge in IPv4/IPv6, Network Subnetting,
      Gateway, Routing.
    </span>
  </p>
  <p lang="en">
    <span style={{fontFamily: "inter", fontSize: "large" }}>
      Users have complete control over virtual networking environment, including
      selection of own IP address range, creation of subnets, and configuration
      of route tables and network gateways. Users can use both IPv4 and IPv6 for
      secure and easy access to resources and applications.
    </span>
  </p>
  <p lang="en">
    <span style={{ fontFamily: "inter",fontSize: "large" }}>
      Users can place backend systems, such as databases or application servers,
      in a private-facing subnet with no internet access also can use multiple
      layers of security, including security groups and network access control
      lists, to help control access to instances in each subnet.
    </span>
  </p>
  
  <p lang="en">
    <span style={{ fontFamily: "inter",fontSize: "large" }}>
     <b style={{ color:"#004bdd", fontWeight:"600"}}>Day0:</b>
    <br/> 
    
                  Creation of Network(s)
                  <ul className="text-left">
                    <li>GUI</li>
                    <br/>
                    <li>API</li>
                  </ul>
           
<br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>From Network Portal: </b>
          <br/>   
                  Navigate to OVERLAY - virtual networks - create virtual network - Create
                  <ul >
                    <li >
                      Create network subnets for project instances and assign to
                      the network policy for security services.
                    </li>
                    <li>
                      Minimum fields to need to entered like network Name, IPAM(
                      Default/Custom),Subnet CIDR, DNS/DHCP option for basic
                      network creation.{" "}
                    </li>
                  </ul>
                 
              
            
                Below are the available fields for virtual network creation.
                <ul className="text-left">
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Network Name</b> &nbsp; Enter a name for the network.{" "}
                  </li>
                  <li>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>Subnet Name</b> &nbsp; Enter a name for the subnetwork.{" "}
                  </li>
                  <li>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>IPAM</b> &nbsp; Select the IPAM associated with the IP
                    block. For new projects, an IPAM can be added while creating
                    the virtual network. VM instances created in this virtual
                    network are assigned an address from this address block
                    automatically by the system when a VM is launched.
                  </li>
                  <li>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>Network Address</b> &nbsp; Enter the network address in
                    CIDR format.{" "}
                  </li>
                  <li>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>P Version*</b> &nbsp; Select IPv4 or IPv6.{" "}
                  </li>
                  <li>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>Gateway IP</b> &nbsp; Optionally, enter an explicit
                    gateway IP address for the IP address block. Check the
                    Disable Gateway box if no gateway is to be used.
                  </li>
                  <li>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>Network Policy</b> &nbsp; Any policies already created
                    are listed. To select a policy, click the check box for the
                    policy.{" "}
                  </li>
                </ul>
              <br/>
             
              <b style={{ color:"#004bdd", fontWeight:"600"}}>Day1: </b>
              <b style={{ color:"#004bdd", fontWeight:"600"}}>
                  From Network Portal:
                    <br />
                    Navigate to OVERLAY - Virtual Ports - Edit 
                  </b>
                  <ul className="text-left">
                  <li>
                  User can edit virtual network for various purpose like to
                  enable network policy and leverage service instances. <br />
                  </li>
                  </ul>
             
                  Below Fields are available to configure more advance setting.
                <ul className="text-left">
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Network Policy</b> &nbsp; Select the policy to be applied
                    to this network from the list of available policies.You can
                    select more than one policy by clicking each one needed.{" "}
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Subnets</b> &nbsp; Use this area to identify and manage
                    subnets for this virtual network. Click the + icon to open
                    fields for IPAM, CIDR, Allocation Pools, Gateway, DNS, and
                    DHCP. Select the subnet to be added from a drop-down list in
                    the IPAM field. Complete the remaining fields as necessary.
                    You can add multiple subnets to a network. When finished,
                    click the + icon to add the selections into the columns
                    below the fields. Alternatively, click the - icon to remove
                    the selections.{" "}
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Host Routes</b> &nbsp;Use this area to add or remove host
                    routes for this network. Click the + icon to open fields
                    where you can enter the Route Prefix and the Next Hop. Click
                    the + icon to add the information or click the - icon to
                    remove the information.{" "}
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Advanced Options</b> &nbsp; Use this area to add or
                    remove advanced options, including identifying the Admin
                    State as Up or Down, to identify the network as Shared or
                    External, to add DNS servers, or to define a VxLAN
                    Identifier.{" "}
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Floating IP Pools</b> &nbsp; Use this area to identify
                    and manage the floating IP address pools for this virtual
                    network. Click the + icon to open fields where you can enter
                    the Pool Name and Projects. Click the + icon to add the
                    information or click the - icon to remove the information.{" "}
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Route Target</b> &nbsp; Move the scroll bar down to
                    access this area, then specify one or more route targets for
                    this virtual network. Click the + icon to open fields where
                    you can enter route target identifiers. Click the + icon to
                    add the information or click the - icon to remove the
                    information.{" "}
                  </li>
                </ul>
                <br/>
                Network segmentation divides a computer network into smaller
                parts. The purpose is to improve network performance and
                security. Other terms that often mean the same thing are network
                segregation, network partitioning, and network isolation. TCS
                cloud users can do segmentation of their project network per
                requirements. Example a single mass network can be split into
                multiple segmentations and assign to different applications,
                virtual instances, VIP etc. <br />
                Network segmentation helps to apply more granular network and
                security controls for TCS cloud projects. <br />
             
              <br />
           
              <b style={{ color:"#004bdd", fontWeight:"600"}}>  Forwarding / Routing within projects and outside projects </b>
            <br/>
               <b style={{ color:"#004bdd", fontWeight:"600"}}>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                Network Subnetting, Gateway, Routing, NAT. <br />
                TCSECP cloud (G3A) Forwarding / Routing provide Security and
                Multitenancy supports at tenant domains to create virtual
                networks inherently provides a secure segregated environment,
                where virtual networks cannot talk to each other without
                policies. The SDN has built-in distributed L3 and L4 firewall
                capabilities that allow users to define simple and abstract
                security policies between virtual networks. The policies can
                specify additional VNF services in the path to create what are
                commonly called service chains; for example, the OEM virtual
                firewall can sit between a public network and a private network
                or between two networks that need tight security supervision.
                Networking can also scale out instances of such VNFs with load
                balancing as the service chain traffic load requires it
                Following are the available feature users can adapt in network
                and security services in a Project.
              
                  <ul className="text-left">
                    <li>Virtual Network </li>
                    <li>Security Group </li>
                    <li>Allowed Address Pair </li>
                    <li>Logical Router </li>
                    <li>Network Policy </li>
                    <li>Security Policy (Tag based) </li>
                    <li>Service Instance </li>
                    <li>External Network (Floating IP Network) </li>
                    <li>SNAT (Source Network Address Translation) </li>
                  </ul>
           
                <br />
               
                  Virtual Network:
              
                  Users have complete control over virtual networking
                  environment, including selection of own IP address range,
                  creation of subnets, and configuration of route tables and
                  network gateways. Users can use both IPv4 and IPv6 for secure
                  and easy access to resources and applications.
                  <br />
                  Users can place backend systems, such as databases or
                  application servers, in a private-facing subnet with no
                  internet access also can use multiple layers of security,
                  including security groups and network access control lists, to
                  help control access to instances in each subnet. <br />
              
                <br />
           
              <b style={{ color:"#004bdd", fontWeight:"600"}}> Security Group:</b>
            
                A security group acts as a virtual firewall for your instance to
                control inbound and outbound traffic. When you launch an
                instance in a portal, you can assign multiple security groups to
                the instance. Security groups act at the instance level, not the
                subnet level. Each instance in a subnet in your network can be
                assigned to a different set of security groups. For each
                security group, you add rules that control the inbound traffic
                to instances, and a separate set of rules that control the
                outbound traffic. If you launch an instance from Portal and if
                you don't specify a security group, the instance is
                automatically assigned to the default security group.
              
              <br />
           
                Allowed Address Pair:
           
                Allowed-address-pairs allow you to specify one or multiple
                mac_address/IP Address (CIDR) pairs that can pass through a port
                regardless of subnet. This enables the use of protocols such as
                VRRP, which floats an IP address between two instances to enable
                fast data plane failover. By default, only traffic associated
                with the subnet in your project will be allowed to pass through
                your server’s network interface (virtual port). Adding 'allowed
                address pairs' enables us to specify other subnets that will be
                allowed to pass through the port regardless of our subnet, like
                a remote VPN subnet.
            
              <br />
          
                Logical Router
             
                A router is a logical component that forwards data packets
                between networks. It also provides Layer 3 and NAT forwarding to
                provide external network access for servers on project networks.
                The attached networks to router can communicate each other
                without any L3/L4 resections by default. Once the network
                attached the gateway of the virtual instances will be reside the
                logical router.
           
              <br />
             
              Network Policy 
            <br/><br/>
                A network policy/FWaaS is an additional layer of security for
                your project that acts as a firewall (L3/L4) for controlling
                traffic in and out for one or more networks. Users can define a
                policy, then define a rule or rules to be applied in that
                policy. Users can define parameters such as the type and
                direction of traffic for the rule, the source and destination of
                that traffic, traffic originating from or destined for specific
                ports, the sequence in which to apply a rule.
           
              <br />
             
                Security Policy (Tag based)
             <br/>
                A tag-based security policy is an additional layer of security
                for your project that acts as a firewall (L3/L4) for controlling
                traffic based on multiple dimensions and categories such as
                application, tier, deployment, site, and user group. In modern
                cloud environments, workloads are moving from one cloud(public)
                to another cloud (Private) and vice versa. Therefore, users must
                rely less on using IP addresses or other network coordinates to
                identify the endpoints to be protected. Instead users must
                leverage application attributes to define policies, so that the
                policies don't need to be updated on account of workload
                mobility. It’s also provides analytics which helps to see the
                holistic view of traffic flow of the policy set.
            
              <br />
             
                Service Instance
            <br/>
                A service instance is the instantiation of the selected service
                template to create one or more containers that provide the
                service (for example, a firewall). When you create a service
                instance, you select a service template that defines the
                instance. You also associate the interfaces in the service
                template with the virtual networks needed to direct traffic into
                and out of the service instance.
            
              <br />
            
                External Network (Floating IP Network)
            
                External network will be attached to Logical router as gateway
                and used for connecting the internet from project virtual
                networks. From external network, float IP pool will be carved
                out and can be assigned to specific projects. Project virtual
                instances and load balancer VIP can leverage the float IP to
                establish access from internet to project.
            
              <br />
             
                SNAT (Source Network Address Translation)
             <br/>
                Source Network Address Translation (source-NAT or SNAT) allows
                traffic from a private network to go out to the internet. When
                SNAT is configured in Portal, VMs launched on a private network
                can send packets to a public network without exposing its own IP
                address by going through a gateway service instance. Virtual
                machines launched on a private network can get to the internet
                by going through a gateway capable of performing SNAT. The
                gateway has one arm on the public network and as part of SNAT,
                it replaces the source IP of the originating packet with its own
                public side IP. As part of SNAT, the source port is also updated
                so that multiple VMs can reach the public network through a
                single gateway public IP.
           
              <br />
              <br />
            
                IP Addressing – v4 & v6
             
                TCS Cloud supported IPv4 and IPv6 address schema. Users can
                leverage and configure IP schema per requirements and host the
                applications and resources for the projects. At present user can
                use the IPv4 and IPv6 from Day 0 for all type of network and
                security policies. There are some network functions like load
                balancer still only support using IPv4 and IPv6 support is on
                the roadmap.
            
              <br />
             
                Security
            
               <b style={{ color:"#004bdd", fontWeight:"600"}}>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                Network Subnetting, Gateway, Routing, NAT, TCP/UDP/IPSEC
                protocol.
             
              <br />
              <div class="tabx">
                <input type="checkbox" id="chck1" checked />
                <label class="tabx-label" for="chck1">
                  FWaaS/Network policy
                </label>
                <div class="tabx-content">
                
                    A network policy/fwaas is an additional layer of security
                    for your project that acts as a firewall (L3/L4) for
                    controlling traffic in and out for one or more networks.
                    Users can define a policy, then define a rule or rules to be
                    applied in that policy. Users can define parameters such as
                    the type and direction of traffic for the rule, the source
                    and destination of that traffic, traffic originating from or
                    destined for specific ports, the sequence in which to apply
                    a rule.
                
                  <br />

                  <img src="assets/Images/oem.jpg" />
                </div>
              </div>
           
               <b style={{ color:"#004bdd", fontWeight:"600"}}>Day0: </b>
            
               <b style={{ color:"#004bdd", fontWeight:"600"}}>From Network Portal: </b>
               
                 Navigate to OVERLAY - Network Policies - Create
                  <ul className="text-left">
                    <li>
                      Create Network policy when need to allow more than one
                      virtual network needs to talk each other.
                    </li>
                    <li>
                      User can deny/permit based on the requirement specific to
                      network/CIDR/Security Group and source/destination
                      ports/protocol.
                    </li>
                    <li>
                      Mandatory fields need to be enter like policy Name,
                      action, source/destination network, port and direction
                      option for basic network policy creation.
                    </li>
                  </ul>
              
              
                Below are the available fields for network policy creation.
                <ul className="text-left">
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Name</b> &nbsp; Enter a name for the policy you are
                    creating.{" "}
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Policy Rules</b> &nbsp; Use this area to define the rules
                    for the policy you are creating. Click the + (plus sign) to
                    open the fields for defining the rules. Click the – (minus
                    sign) to delete any rule. Multiple rules can be added to a
                    policy. Each policy rule field is described in the following
                    table rows.{" "}
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Action</b> &nbsp; Define the action to take with traffic
                    that matches the current rule. Select from a list:
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Pass, Deny.</b>
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Protocol</b> &nbsp; Define the protocol associated with
                    traffic for this policy rule. Select from a list of
                    available protocols (or ANY): ANY, TCP, UDP, ICMP
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Ports</b> &nbsp; Use this field to specify that traffic
                    from source ports are associated with this policy rule.
                    Identify traffic from any port or enter a specific port, a
                    list of ports separated with commas, or a range of ports in
                    the form nnnn-nnnnn.
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Direction</b> &nbsp; Define the direction of traffic to
                    match the rule. For traffic moving in and out, select
                    - (bidirectional). For traffic moving in one direction,
                    select - (unidirectional).
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Destination</b> &nbsp; Select the destination network for
                    traffic to match this rule. Choose ANY or select from the
                    menu of all available destinations. Destinations are
                    displayed in the form: domain-name:
                    project-name:network-name.
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Destination</b> &nbsp; Select the destination port for
                    traffic to match this rule. Enter ANY for any destination
                    port or enter a specific port, a list of ports separated
                    with commas, or a range of ports in the form nnnn-nnnnn.
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Services</b> &nbsp; Select this check box to open a field
                    where you can select from a list of available services to
                    apply to this policy. The services are applied in the order
                    in which they are selected. There is a restricted set of
                    options that can be selected when applying services
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Mirror</b> &nbsp; Select this check box to open a field
                    where you can select from the list of configured services
                    that you want to mirror in this policy. You can select a
                    maximum of two services to mirror.
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Log</b> &nbsp; Enable the logging of the policy
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>QoS</b> &nbsp; Enable QoS packets tag for the policy
                    rules traffics
                  </li>
                </ul>
            
             <b style={{ color:"#004bdd", fontWeight:"600"}}>From Network Portal:</b>
               
                 Navigate to OVERLAY - Virtual Networks - Edit<br />
                
                 <br/>            

	Once the network policy created, it shall be mapped to the necessary virtual networks.
It can be achieved by edit virtual network and map the policy in the network polices tab.

<br/>    
            
               <b style={{ color:"#004bdd", fontWeight:"600"}}>Day1: </b>
             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>From Network Portal:</b>
                
                 Navigate to OVERLAY - Network Policies - Edit  <br />
              
                <ul className="text-left">
                  <li>
                    User can edit the network policy to add/edit/delete rules in
                    policy.
                  </li>
                  <li>Users can align and move rules up/down if required.</li>
                  <li>
                    Edit check box to enable/Disable Log, Service Instance,
                    Mirror from network policies.
                  </li>
                </ul>
                <ul className="text-left">
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Action</b> &nbsp; Define the action to take with traffic
                    that matches the current rule. Select from a list: Pass,
                    Deny.{" "}
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Protocol</b> &nbsp; Define the protocol associated with
                    traffic for this policy rule. Select from a list of
                    available protocols (or ANY): ANY, TCP, UDP, ICMP.
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Source</b> &nbsp;Select the source network for traffic
                    associated with this policy rule. Choose ANY or select from
                    the menu list of all available sources. Sources are
                    displayed in the form: domain-name:
                    project-name:network-name.
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Ports</b> &nbsp; Use this field to specify that traffic
                    from source ports are associated with this policy rule.
                    Identify traffic from any port or enter a specific port, a
                    list of ports separated with commas, or a range of ports in
                    the form nnnn-nnnnn.
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Directions</b> &nbsp; Define the direction of traffic to
                    match the rule. For traffic moving in and out,
                    select - (bidirectional). For traffic moving in one
                    direction, select  (unidirectional).
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Destination</b> &nbsp; Select the destination network for
                    traffic to match this rule. Choose ANY or select from the
                    menu of all available destinations. Destinations are
                    displayed in the form: domain-name:
                    project-name:network-name.
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Destination</b> &nbsp; Select the destination port for
                    traffic to match this rule. Enter ANY for any destination
                    port or enter a specific port, a list of ports separated
                    with commas, or a range of ports in the form nnnn-nnnnn.
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Services</b> &nbsp; Select this check box to open a field
                    where you can select from a list of available services to
                    apply to this policy. The services are applied in the order
                    in which they are selected. There is a restricted set of
                    options that can be selected when applying services
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Mirror</b> &nbsp; Select this check box to open a field
                    where you can select from the list of configured services
                    that you want to mirror in this policy. You can select a
                    maximum of two services to mirror.
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Log</b> &nbsp; Enable the logging of the policy
                  </li>
                  <li>
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>QoS</b> &nbsp; Enable QoS packets tag for the policy
                    rules traffic.
                  </li>
                </ul>
            
              <br />
              <div class="tabx">
                <input type="checkbox" id="chck2" checked />
                <label class="tabx-label" for="chck2">
                  Security Groups
                </label>
                <div class="tabx-content">
                 
                   <b style={{ color:"#004bdd", fontWeight:"600"}}>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                    Network Subnetting, TCP/UDP Protocol.
                    <br />A security group acts as a virtual firewall for your
                    instance to control inbound and outbound traffic. When you
                    launch an instance in a portal, you can assign multiple
                    security groups to the instance. Security groups act at the
                    instance level, not the subnet level. Each instance in a
                    subnet in your network can be assigned to a different set of
                    security groups. For each security group, you add rules that
                    control the inbound traffic to instances, and a separate set
                    of rules that control the outbound traffic. If you launch an
                    instance from Portal and if you don't specify a security
                    group, the instance is automatically assigned to the default
                    security group.
                 
                  <br />
                  <div class="row">
                    <div class="col-lg-6">
                    <b style={{ color:"#004bdd", fontWeight:"600"}}>
                        Security Group UseCase-1
                        </b>
                    
                        User can create and assign separate security group to
                        the instances based on the network zones
                     
                      <img src="assets/Images/sc1.png" />
                    </div>

                    <div className="col-lg-6">
                      <b className="text-left" style={{ color: "#01acc1" }}>
                        Security Group UseCase-2
                      </b>
                    
                        User can create and assign one or multiple security
                        group to the instances based on the applications
                        requirement to allow/deny access across networks.
                     <br/>
                      <img src="assets/Images/sc2.jpg" />
                    </div>
                  </div>
                </div>

               
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Day0: </b>
                 
                    <ul className="text-left">
                      <li>RBAC for Security group at project level.</li>
                      <li>RBAC for Security group at domain level </li>
                    </ul>
                 <br/>
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>
                    SECURITY GROUP CREATION
                    <br />
                    From Network Portal:
                  </b>
                
                   Navigate to OVERLAY - Security Groups - Create
                   <br/>
                    <ul className="text-left">
                      <li>Enter the name of the security group.</li>
                      <li>
                        Add the rule for Ingress/Egress with specific CIDR and
                        ports details.
                      </li>
                    </ul>
                 <br/>
                  Below are the field needs to be filled in security group
                  creation.
                  <ul className="text-left">
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>IP Protocol</b> &nbsp; Select the IP protocol to apply
                      for this rule: TCP, UDP, ICMP.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>From Port</b> &nbsp; Select the port from which traffic
                      originates to apply this rule. For TCP and UDP, enter a
                      single port or a range of ports. For ICMP rules, enter an
                      ICMP type code.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>To Port</b> &nbsp; The port to which traffic is
                      destined that applies to this rule, using the same options
                      as in the From Port field.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Source</b> &nbsp; Select the source of traffic to be
                      allowed by this rule. Specify subnet—the CIDR IP address
                      or address block of the inter-domain source of the traffic
                      that applies to this rule, or you can choose security
                      group as source. Selecting security group as source allows
                      any other instance in that security group access to any
                      other instance via this rule.
                    </li>
                  </ul>
              
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Day1: </b>
               <br/>
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>From Network Portal: </b>
                 <br/>
                   Navigate to OVERLAY - Security Groups - Edit <br />
                  
               
                  Users can do the following tasks
                  <ul className="text-left">
                    <li>Modifying the Default Security Group</li>
                    <li>Creating a Security Group</li>
                    <li>Adding, Removing, and Updating Rules</li>
                    <li>Changing an Instance's Security Groups</li>
                    <li>Deleting a Security Group</li>
                    <li>Deleting the default Security Group</li>
                  </ul>
                  <ul className="text-left">
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>IP Protocol</b> &nbsp; Select the IP protocol to apply
                      for this rule: TCP, UDP, ICMP.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>From Port</b> &nbsp; Select the port from which traffic
                      originates to apply this rule. For TCP and UDP, enter a
                      single port or a range of ports. For ICMP rules, enter an
                      ICMP type code.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>To Port</b> &nbsp;The port to which traffic is destined
                      that applies to this rule, using the same options as in
                      the From Port field.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Source</b> &nbsp; Select the source of traffic to be
                      allowed by this rule. Specify subnet—the CIDR IP address
                      or address block of the inter-domain source of the traffic
                      that applies to this rule, or you can choose security
                      group as source. Selecting security group as source allows
                      any other instance in that security group access to any
                      other instance via this rule.
                    </li>
                  </ul>
               
                <br />

                <div class="tabx">
                  <input type="checkbox" id="chck3" checked />
                  <label class="tabx-label" for="chck3">
                    {" "}
                    Tag Based Security
                  </label>
                  <div class="tabx-content">
                   
                      A tag-based security policy is an additional layer of
                      security for your project that acts as a firewall (L3/L4)
                      for controlling traffic based on multiple dimensions and
                      categories such as application, tier, deployment, site,
                      and user group.
                      <br />
                      In modern cloud environments, workloads are moving from
                      one cloud(public) to another cloud (Private) and vice
                      versa. Therefore, users must rely less on using IP
                      addresses or other network coordinates to identify the
                      endpoints to be protected. Instead users must leverage
                      application attributes to define policies, so that the
                      policies don't need to be updated on account of workload
                      mobility.
                      <br />
                      It also provides analytics which helps to see the holistic
                      view of traffic flow of the policy set.
                      <br />
                   
                    <br />
                    <img src="assets/Images/vol23.png" />
                  </div>
                </div>
              
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Day0: </b>
                 
                    A user can segregate and filter traffic on different
                    categories, such as the following
                    <ul className="text-left">
                      <li>Application—The application being protected</li>
                      <li>
                        Tier—The tier (or component), within the application,
                        being protected{" "}
                      </li>
                      <li>
                        Deployment—The environment in which the instance of the
                        application is deployed in
                      </li>
                      <li>
                        Site—The geographical location in which the application
                        is deployed in
                      </li>
                      <li>
                        Many more possibilities for needing to segregate
                        traffic.
                      </li>
                    </ul>
                    The following are the configuration objects for the new
                    security policy
                    <ul className="text-left">
                      <li>firewall-policy</li>
                      <li>firewall-rule</li>
                      <li>policy-management</li>
                      <li>application-policy</li>
                      <li>service-group</li>
                      <li>address-group</li>
                      <li>tag</li>
                      <li>global-application-policy</li>
                    </ul>
                    Predefined tags include:
                    <ul className="text-left">
                      <li>application</li>
                      <li>application-tier</li>
                      <li>deployment</li>
                      <li>site</li>
                      <li>
                        label (a special tag that allows the user to label
                        objects)
                      </li>
                    </ul>
                
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Create tags:</b>
                  <br/>

                <b style={{ color:"#004bdd", fontWeight:"600"}}> From Network Portal:</b>
                  <br/>
Navigate to Security - Tags 
                  <br /> Tags are key and value pairs. Create tags as
                  appropriate for your environment. Tags can be created with a
                  Project scope or a Global scope
              
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Map the tags</b><br/>
                  Once the tags are created, users can map it the desire
                  networks/ports of the virtual instances to leverage security
                  policy.
                  <br /><br/>
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>
                  From Network Portal: </b>
                  <br/>
Navigate to OVERLAY - Virtual Ports - Edit -Tags
                    <br />
                    Select the required tags in the properties field.
                 
                  <ul className="text-left">
                    <li>Application—The application being protected</li>
                    <li>
                      Tier—The tier (or component), within the application,
                      being protected
                    </li>
                    <li>
                      Deployment—The environment in which the instance of the
                      application is deployed in
                    </li>
                    <li>
                      Site—The geographical location in which the application is
                      deployed in
                    </li>
                  </ul>
              
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>From Network Portal:</b>
                  <br/>
                  Navigate to OVERLAY - Virtual Networks - Edit -Tags
                  <br/>
                  Select the required tags in the properties field.
                  <br/>
                  <ul>
<li>Application—The application being protected</li>
<li>Tier—The tier (or component), within the application, being protected</li>
<li>Deployment—The environment in which the instance of the application is deployed in</li>
<li>Site—The geographical location in which the application is deployed in</li>
</ul>
                
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Create Logical Router:</b>
                  <br/>
                  Once the tags are mapped to networks/ports, user need to
                  attach the networks to the logical router to establish the
                  base communication. Later the security policy applied over the
                  communication to restrict the required ports.
                  <br />
                  <br />
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>
                  From Network Portal:
                  </b>
                    <br />
                    Navigate to OVERLAY - Logical Router - Create - attach network
<br/>
                 
               
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Create Firewall Policy:</b>
                  Firewall polices will be used to add the firewall ruleset for
                  tagged endpoints.
                  <br />
                  <br />
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>
                    From ECP Networks UI:
                    <br />
                    Navigate to Security-Project Scoped Policies-Firewall
                    Polices-Create
                  </b>
              
                  Enter the name and add the firewall rules.
               
                  <ul className="text-left">
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Name</b> &nbsp; Enter a name for the policy you are
                      creating.{" "}
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Firewall Rules</b> &nbsp; Use this area to define the
                      rules for the policy you are creating. Click the + (plus
                      sign) to open up the fields for defining the rules. Click
                      the – (minus sign) to delete any rule. Multiple rules can
                      be added to a policy. Each policy rule field is described
                      in the following table rows.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Action</b> &nbsp;Define the action to take with traffic
                      that matches the current rule. Select from a list: Pass,
                      Deny.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Endpoint Type1</b> &nbsp; Select the source network for
                      traffic associated with this policy rule. Choose ANY or
                      select from the menu list of all available sources.
                      Sources are displayed in the form: domain-name:
                      project-name: network-name.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Service</b> &nbsp; Use this field to specify that
                      traffic from source ports are associated with this policy
                      rule. Identify traffic from any port or enter a specific
                      port, a list of ports separated with commas, or a range of
                      ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Direction</b> &nbsp; Define the direction of traffic to
                      match the rule. For traffic moving in and out,
                      select  (bidirectional). For traffic moving in one
                      direction, select  (unidirectional).
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Endpoint Type2</b> &nbsp; Select the destination
                      network for traffic to match this rule. Choose ANY or
                      select from the menu of all available destinations.
                      Destinations are displayed in the form: domain-name:
                      project-name: network-name.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Destination</b> &nbsp; Select the destination port for
                      traffic to match this rule. Enter ANY for any destination
                      port or enter a specific port, a list of ports separated
                      with commas, or a range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Match Tags</b> &nbsp; Choose the tag type which is
                      configured for applications/server
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}> Log</b> &nbsp;Enable the logging of the policy
                    </li>
                  </ul>
               
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Create Security Policy Sets:</b>
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>
                    <br />
                    <br />
                    From Network Portal:

                    <br />
                    Navigate to SECURITY - Policies Sets - Create
                  </b><br/>
                  Create the policy set and attach the security policies created for tag.
                  <br/>
                  <ul className="text-left">
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Name</b> - Enter a name for the policy you are creating.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Available Firewall Policies</b> - Polices created for tag
                      based will be listed in available polices which can be
                      associated to security policy set.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Associated Firewall Policy</b> - List of polices already
                      associated to the policy set
                    </li>
                  </ul>
              
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Day1: </b>
               
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Security Policy</b>
                  <br />
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>From Network Portal: </b>
                  <br />
                 
                   Navigate to SECURITY - Policies - Edit
                    <br />
                
                  User can edit the security policy and change the any fields
                  when required.
                  <ul className="text-left">
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Firewalls Rules</b> - Use this area to define the rules
                      for the policy you are creating. Click the + (plus sign)
                      to open up the fields for defining the rules. Click
                      the – (minus sign) to delete any rule. Multiple rules can
                      be added to a policy. Each policy rule field is described
                      in the following table rows.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Action</b> - Define the action to take with traffic that
                      matches the current rule. Select from a list: Pass, Deny.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Endpoint Type1</b> - Select the source network for traffic
                      associated with this policy rule. Choose ANY or select
                      from the menu list of all available sources. Sources are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Service</b> - Use this field to specify that traffic from
                      particular source ports are associated with this policy
                      rule. Identify traffic from any port or enter a specific
                      port, a list of ports separated with commas, or a range of
                      ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Direction</b> - Define the direction of traffic to match
                      the rule. For traffic moving in and out,
                      select  (bidirectional). For traffic moving in one
                      direction, select  (unidirectional).
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Endpoint Type2</b> - Select the destination network for
                      traffic to match this rule. Choose ANY or select from the
                      menu of all available destinations. Destinations are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Destination</b> - Select the destination port for traffic
                      to match this rule. Enter ANY for any destination port or
                      enter a specific port, a list of ports separated with
                      commas, or a range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Match Tags</b> - Choose the tag type which is configured
                      for applications/server
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Log</b> - Enable the logging of the policy
                    </li>
                  </ul>
               
                <br />
               
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Security Policy Sets:</b>
                  <br />
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>From Network Portal:</b>
                  <br />
                 
                   Navigate to SECURITY - Policies Sets - Edit
                    <br />
                 
                  Security policy can be associated or removed when required.
                  <ul className="text-left">
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Available Firewall Policies</b> - Polices created for tag
                      based will be listed in available polices which can be
                      associated to security policy set.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Associated Firewall Policies</b> - List of polices already
                      associated to the policy set
                    </li>
                  </ul>
               
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Analytics reference output for tag-based policy:</b>
                  <br />
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>From Network Portal:</b>
                  <br/>
Navigate to SECURITY - Insights
                  <br /><br/>
                  <img src="assets/Images/ana.png" />
                
<br/>
                <div class="tabx">
                  <input type="checkbox" id="chck4" checked />
                  <label class="tabx-label" for="chck4">
                    {" "}
                    OEM- Firewall Support
                  </label>
                  <div class="tabx-content">
                   
                     <b style={{ color:"#004bdd", fontWeight:"600"}}> Prerequisite:</b> Basic network knowledge in
                      IPv4/IPv6, Network Subnetting, Gateway, Routing, NAT,
                      TCP/UDP/IPSEC protocol.
                      <br />
                      We support BYOL and TCS provided license for FWaaS, so
                      users can bring their own license for OEM network firewall
                      or pay for the security solutions provided to their OEM
                      choice in projects. OEM device are NGFW have all the
                      feature respective to their vendor manufacture. Users can
                      opt for the license based on required features to enable
                      in the devices. TCS provided license- User pay for the
                      license and feature enablement in course of the usage and
                      project requirement. BYOL – Users can bring own license
                      and install, so they buy and maintain license of their
                      usage. The physical and virtual Cisco Firepower NGFW
                      appliances offer the same threat protection features and
                      centralized management, resulting in consistent security
                      effectiveness and visibility across physical and virtual
                      workloads.
                   
                    <br />
                    <img src="assets/Images/oem.jpg" />
                  </div>
                </div>
               
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Day0:</b>
                  <br />
                  <br />
                  Initial deployment of OEM firewall consists of the following
                  perquisite steps to configure and bind OEM firewall for a
                  project. Deploy the firewall OEM virtual appliance as a VM
                  with already created and required virtual networks along with
                  management. Configure the network policies for source,
                  destination network and ports traffic flow through the OEM
                  firewall. Configure the Service chain instances for OEM
                  firewall to bond with virtual network and ports to enable the
                  traffic flow. Configure the health check for monitoring and
                  failover traffic in H/A failure situation.
                  <br />
                  <br />
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Deploy Firewall Appliance:</b>
                  NGFW firewall either deployed as a VM like virtual instances
                  or physically installed. Once firewall deployed, they can be
                  integration tightly with networks through service chaining
                  solutions.
                  <br />
                  Components of a Service Chain Service chaining requires the
                  following configuration components to build the chain:
                  <ul>
                    <li>Service template</li>
                    <li>Virtual networks</li>
                    <li>Service instance</li>
                    <li>Network policy</li>
                  </ul>
                  <br />
                  Services are offered by instantiating service virtual machines
                  to dynamically apply single or multiple services to virtual
                  machine (VM) traffic. It is also possible to chain physical
                  appliance-based services. The service VM spawns the service,
                  using the convention of left interface (left IF) and right
                  interface (right IF). When you create a service chain, the SDN
                  software creates tunnels across the underlay network that span
                  through all services in the chain.
                  <br />
                  The following are the modes of services that can be
                  configured.
                  <br />
                  <ul>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Transparent or bridge mode</b>
                      <br />
                      Used for services that do not modify the packet. Also
                      known as bump-in-the-wire or Layer 2 mode. Examples
                      include Layer 2 firewall, IDP, and so on.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>In-network or routed mode</b>
                      <br />
                      Provides a gateway service where packets are routed
                      between the service instance interfaces. Examples include
                      NAT, Layer 3 firewall, load balancer, HTTP proxy, and so
                      on.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>In-network-nat mode</b>
                      <br />
                      Similar to in-network mode, however, return traffic does
                      not need to be routed to the source network.
                      In-network-nat mode is particularly useful for NAT
                      service. Service Templates
                    </li>
                  </ul>
                  <br />
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Day0:</b>
                  <br />
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Service template</b>
                  <br />
                  Service templates map out the basic configuration that uses to
                  instantiate a service instance or container. You configure
                  service templates in the scope of a domain, and you can use
                  the templates on all projects within a domain. You can use a
                  template to launch multiple service instances of the same type
                  in different projects within a domain.
                  <br />
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>From Network Portal:</b>
                  <br/>
Navigate to SERVICES - Catalog - Create
                  <br />
                  Here users can find the way to create templates use for
                  service chaining. Give the detail for below fields to create
                  new template.
                  <br />
                  <br />
                  <ul>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Name</b>&nbsp;Enter a name for the policy you are
                      creating.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Version</b>&nbsp;Version-2
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Virtualization type</b>&nbsp;Choose the option for
                      virtual machine
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Service mode</b>&nbsp;There are three types of service
                      mode available. User can choose based on the use cases.
                      In-Network, In-Network NAT and Transparent.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Interfaces and Interface Types</b>&nbsp;Add the
                      interfaces types needed for the service chaining.
                      Interface requirement based on the mode of service
                      chaining instance.Management, Left, Right and Others.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Service Type</b>&nbsp;There are two types of services
                      available for instances. Firewall and Analyzer
                    </li>
                  </ul>
                  <br />
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>Virtual networks</b>
                  <br />
                  Users have complete control over virtual networking
                  environment, including selection of own IP address range,
                  creation of subnets, and configuration of route tables and
                  network gateways. Users can use both IPv4 and IPv6 for secure
                  and easy access to resources and applications.
                  <br />
                  Users can place backend systems, such as databases or
                  application servers, in a private-facing subnet with no
                  internet access also can use multiple layers of security,
                  including security groups and network access control lists, to
                  help control access to instances in each subnet.
                  <br />
                  <br />
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>From Network Portal:</b>
                  <br/>
Navigate to OVERLAY - Virtual Networks - Create
                  
                  <br />
                  <br />
                  Create network subnets for project instances and assign to the
                  network policy for security services.
                  <br />
                  Minimum fields to need to entered like network Name,IPAM(
                  Default/Custom),Subnet CIDR, DNS/DHCP option for basic network
                  creation.
                  <br />
                  <br />
                  Below are the available fields for virtual network creation.
                  <br />
                  <ul>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Network Name</b>&nbsp;Enter a name for the network.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Subnet Name</b>&nbsp;Enter a name for the subnetwork.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>IPAM</b>&nbsp;Select the IPAM associated with the IP
                      block. For new projects, an IPAM can be added while
                      creating the virtual network. VM instances created in this
                      virtual network are assigned an address from this address
                      block automatically by the system when a VM is launched.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Network Address</b>&nbsp;Enter the network address in
                      CIDR format.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>IP version*</b>&nbsp;Select IPv4 or IPv6.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Gateway IP</b>&nbsp;Optionally, enter an explicit
                      gateway IP address for the IP address block. Check the
                      Disable Gateway box if no gateway is to be used.
                    </li>
                    <li>
                     <b style={{ color:"#004bdd", fontWeight:"600"}}>Network Policy</b>&nbsp;Any policies already created
                      are listed. To select a policy, click the check box for
                      the policy.
                    </li>
                  </ul>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Service instance</b>
                  A service instance is the instantiation of the selected
                  service template to create one or more containers that provide
                  the service (for example, a firewall). When you create a
                  service instance, you select a service template that defines
                  the instance. You also associate the interfaces in the service
                  template with the virtual networks needed to direct traffic
                  into and out of the service instance.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Creating Service Instance:</b>
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From Network Portal:</b>
                  <br />
                  Navigate to SERVICES - Deployments - Create
                  <br />
                  Here users can create service chaining instance from available
                  service templates.
                  <br />
                  Give the detail for below fields to create new template.
                  <br />
                  <ul>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Name</b>&nbsp;Enter a name for the policy you are
                      creating.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Service Template</b>&nbsp;The available templates will
                      be listed, and user shall choose the right one for the
                      service instance type.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Interface Types</b>&nbsp;Select the virtual network for
                      interfaces types needed for the service chaining.
                      Interface requirement based on the mode of service
                      chaining instance. Management, Left, Right and Others.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Port Tuples</b>&nbsp;With a port-tuple object, the user
                      can select ports and pass the port information when
                      creating a service instance. The ports can be created as
                      part of a VM launch from Nova or without using a VM
                      launch.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Service Health Check</b>&nbsp;It allows service
                      instance health check configuration on a per interface.
                      This is used to monitor the health of the service.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Route Policy</b>&nbsp;There are two types of services
                      available for instances. Firewall and Analyzer
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Route Aggregate</b>&nbsp;Route aggregation is
                      configured on the service instance. The user can attach
                      multiple route aggregation objects to a service instance.
                      For example, if routes from the Right VN need to be
                      aggregated and re-originated in the route table of the
                      Left VN, the route aggregate object is created with a
                      prefix of the Right VN’s subnet prefix and attached to the
                      left interface of the service instance.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Allowed Address Pair</b>&nbsp;Using the allowed address
                      pair extension enables additional IP/MAC pairs to be
                      allowed through ports in service chaining instance.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Static Route</b>&nbsp;The static route table will be
                      attached to the correct VM ports of the port tuples to
                      forward traffic to specific direction through VM ports.
                    </li>
                  </ul>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Network policy:</b>
                  <br />
                  A network policy/fwaas is an additional layer of security for
                  your project that acts as a firewall (L3/L4) for controlling
                  traffic in and out for one or more networks. Users can define
                  a policy, then define a rule or rules to be applied in that
                  policy. Users can define parameters such as the type and
                  direction of traffic for the rule, the source and destination
                  of that traffic, traffic originating from or destined for
                  specific ports, the sequence in which to apply a rule.
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From Network Portal:</b>
                  <br />
                  Navigate to OVERLAY - Network Policies - Create
                  <br />
                  Create Network policy when need to allow more than one virtual
                  network needs to talk each other. User can deny/permit based
                  on the requirement specific to network/CIDR/Security Group and
                  source/destination ports/protocol. Mandatory fields need to
                  entered like policy Name, action, source/destination network ,
                  port and direction option for basic network policy creation.
                  <br />
                  Below are the available fields for network policy creation.
                  <br />
                  <ul>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Name</b>&nbsp;Enter a name for the policy you are
                      creating.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Policy Rules</b>&nbsp;Use this area to define the rules
                      for the policy you are creating. Click the + (plus sign)
                      to open up the fields for defining the rules. Click
                      the – (minus sign) to delete any rule. Multiple rules can
                      be added to a policy. Each policy rule field is described
                      in the following table rows.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Action</b>&nbsp;Define the action to take with traffic
                      that matches the current rule. Select from a list: Pass,
                      Deny.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Protocol</b>&nbsp;Define the protocol associated with
                      traffic for this policy rule. Select from a list of
                      available protocols (or ANY): ANY, TCP, UDP, ICMP.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Source</b>&nbsp;Select the source network for traffic
                      associated with this policy rule. Choose ANY or select
                      from the menu list of all available sources. Sources are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Ports</b>&nbsp;Use this field to specify that traffic
                      from particular source ports are associated with this
                      policy rule. Identify traffic from any port or enter a
                      specific port, a list of ports separated with commas, or a
                      range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Direction</b>&nbsp;Define the direction of traffic to
                      match the rule. For traffic moving in and out,
                      select  (bidirectional). For traffic moving in one
                      direction, select  (unidirectional).
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Destination</b>&nbsp;Select the destination network for
                      traffic to match this rule. Choose ANY or select from the
                      menu of all available destinations. Destinations are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Destination</b>&nbsp;Select the destination port for
                      traffic to match this rule. Enter ANY for any destination
                      port or enter a specific port, a list of ports separated
                      with commas, or a range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Services</b>&nbsp;Select this check box to open a field
                      where you can select from a list of available services to
                      apply to this policy. The services are applied in the
                      order in which they are selected. There is a restricted
                      set of options that can be selected when applying services
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Mirror</b>&nbsp;Select this check box to open a field
                      where you can select from the list of configured services
                      that you want to mirror in this policy. You can select a
                      maximum of two services to mirror.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Log</b>&nbsp;Enable the logging of the policy
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>QoS</b>&nbsp;Enable QoS packets tag for the policy
                      rules traffics
                    </li>
                  </ul>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Day1:</b>
                  <br />
                  <br />
                  When network changes required, users can configure changes in
                  service instance and network policies.
                  <br />
                  Edit Network Policy
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From Network Portal:</b>
                  <br />
                  Navigate to OVERLAY - Network Policies - Edit
                  <br />
                  User can edit the network policy to add/edit/delete rules in
                  policy.
                  <br />
                  Users can align and move rules up/down if required.
                  <br />
                  Edit check box to enable/Disable Log, Service Instance, Mirror
                  from network policies.
                  <br />
                  <ul>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Action</b>&nbsp;Define the action to take with traffic
                      that matches the current rule. Select from a list: Pass,
                      Deny.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Protocol</b>&nbsp;Define the protocol associated with
                      traffic for this policy rule. Select from a list of
                      available protocols (or ANY): ANY, TCP, UDP, ICMP.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Source</b>&nbsp;Select the source network for traffic
                      associated with this policy rule. Choose ANY or select
                      from the menu list of all available sources. Sources are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Ports</b>&nbsp;Use this field to specify that traffic
                      from particular source ports are associated with this
                      policy rule. Identify traffic from any port or enter a
                      specific port, a list of ports separated with commas, or a
                      range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Direction</b>&nbsp;Define the direction of traffic to
                      match the rule. For traffic moving in and out,
                      select  (bidirectional). For traffic moving in one
                      direction, select  (unidirectional).
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Destination</b>&nbsp;Select the destination network for
                      traffic to match this rule. Choose ANY or select from the
                      menu of all available destinations. Destinations are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Destination</b>&nbsp;Select the destination port for
                      traffic to match this rule. Enter ANY for any destination
                      port or enter a specific port, a list of ports separated
                      with commas, or a range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Services</b>&nbsp;Select this check box to open a field
                      where you can select from a list of available services to
                      apply to this policy. The services are applied in the
                      order in which they are selected. There is a restricted
                      set of options that can be selected when applying services
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Mirror</b>&nbsp;Select this check box to open a field
                      where you can select from the list of configured services
                      that you want to mirror in this policy. You can select a
                      maximum of two services to mirror.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Log</b>&nbsp;Enable the logging of the policy
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>QoS</b>&nbsp;Enable QoS packets tag for the policy
                      rules traffic.
                    </li>
                  </ul>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Edit Service Instance:</b>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From Network Portal:</b>
                  <br />
                  Navigate to SERVICES - Deployments - Create
                  <br />
                  Users can edit the existing service instances
                  <br />
                  Give the detail for below fields to create new template.
                  <br />
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Service Template</b>&nbsp;The available templates will be
                    listed, and user shall choose the right one for the service
                    instance type.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Interface Types</b>&nbsp;Select the virtual network for
                    interfaces types needed for the service chaining. Interface
                    requirement based on the mode of service chaining instance.
                    Management, Left, Right and Others.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Port Tuples</b>&nbsp;With a port-tuple object, the user
                    can select ports and pass the port information when creating
                    a service instance. The ports can be created as part of a VM
                    launch from Nova or without using a VM launch.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Service Health Check</b>&nbsp;It allows service instance
                    health check configuration on a per interface. This is used
                    to monitor the health of the service.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Route Policy</b>&nbsp;There are two types of services
                    available for instances. Firewall and Analyzer
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Route Aggregate</b>&nbsp;Route aggregation is configured
                    on the service instance. The user can attach multiple route
                    aggregation objects to a service instance. For example, if
                    routes from the Right VN need to be aggregated and
                    re-originated in the route table of the Left VN, the route
                    aggregate object is created with a prefix of the Right VN’s
                    subnet prefix and attached to the left interface of the
                    service instance.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Allowed Address Pair</b>&nbsp;Using the allowed address
                    pair extension enables additional IP/MAC pairs to be allowed
                    through ports in service chaining instance.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Stactic Route</b>&nbsp;he static route table will be
                    attached to the correct VM ports of the port tuples to
                    forward traffic to specific direction through VM ports.
                  </li>
               
                <br />

                <div class="tabx">
                  <input type="checkbox" id="chck5" checked />
                  <label class="tabx-label" for="chck5">
                    {" "}
                    Port Mirroring
                  </label>
                  <div class="tabx-content">
                   
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                      Network Subnetting, Gateway, Network Ports ,MAC Address,
                      TCP/UDP protocol.
                      <br />
                      Port Mirroring will helps to copy / mirror the traffic
                      entering or exiting a port to validate / screen with any
                      security appliance for and sends the copies to a local
                      interface for local monitoring or to a VLAN for remote
                      monitoring. Use port mirroring to send traffic to
                      applications that analyze traffic for purposes such as
                      monitoring compliance, enforcing policies, detecting
                      intrusions, monitoring and predicting traffic patterns,
                      correlating events, and so on.
                   
                    <br />

                    <img src="assets/Images/port.jpg" />
                  </div>
                </div>
               
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}> Day 0 </b>
                  <ul>
                    <li> Analyzer Image upload </li>
                    <ul>
                      <li>GUI</li>
                      <li>API</li>
                    </ul>
                    <li>Enable Analyzer in required port</li>
                    <li>Network Policy creation </li>
                  </ul>
                
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}> Day 1 </b>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>
                  From Network Portal:
                    <br />
                    Navigate to OVERLAY - Virtual Ports - Edit - Advance Options - Mirroring
                  </b>
                  <br />
                  Below Fields are available to configure more advance setting.
                  <ul>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Analyzer Name</b> &nbsp; Enter the Analyzer name
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>NIC Assisted Mirroring</b> &nbsp; In this approach, it
                      doesn’t mirror the packets. When NIC assisted mirroring is
                      enabled, ingress packets coming from the VM that must be
                      mirrored are sent to the NIC with a configured vlan tag.
                      The NIC is programmed to do VLAN port mirroring, that is
                      any packet with the configured VLAN is mirrored
                      additionally by the NIC. Note that this change is only for
                      traffic coming from the VMs. Traffic coming from the
                      fabric is directly mirrored from the NIC itself and there
                      is no additional mirroring need.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Analyzer IP Address</b> &nbsp; IP of the Analyzer to be
                      entered
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Analyzer Mac Address</b> &nbsp;Mac of the Analyzer to
                      be entered
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Direction</b>&nbsp;Both / Ingress / Egress
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Juniper Header</b> &nbsp;Enabled / Disable{" "}
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Next Hop Mode</b> &nbsp;Dynamic / Static{" "}
                    </li>
                  </ul>
                  <ul>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}> Port Mirroring Benefits </b>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>More Secure:</b> - Packets are captured at network
                      interface, which cannot be disabled or tampered with from
                      a user space.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Individual port monitoring: </b> - Individual ports can
                      be monitored and Analyzed.
                    </li>
                  </ul>
              

                <div class="tabx">
                  <input type="checkbox" id="chck6" checked />
                  <label class="tabx-label" for="chck6">
                    {" "}
                    Web Application Firewall
                  </label>
                  <div class="tabx-content">
                  
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                      Network Subnetting, Gateway, Routing, NAT, TCP/UDP
                      protocol and basic/advanced Load Balancer algorithm,
                      advanced Load balancer types and features. Basic/advanced
                      knowledge in application and program functions. Knowledge
                      in application security threats and mitigations.
                      <br />A web application firewall (WAF) will be deployed in
                      front of the Application Load Balancer that fronts your
                      web servers. It gives you control over how traffic reaches
                      your applications by enabling you to create security rules
                      that block common attack patterns, such as SQL injection
                      or cross-site scripting, and rules that filter out
                      specific traffic patterns you define.
                   
                    <br />
                    
                   <b style={{ color: "#004dbb" , fontWeight:"600"}}>Features </b> 
<br/><br/>
<ul>
<li>WAF protects web applications from attacks by filtering traffic based on rules that you create. For example, you can filter any part of the web request, such as IP addresses, HTTP headers, HTTP body, or URI strings. This allows you to block common attack patterns, such as SQL injection or cross-site scripting.</li>
<li>WAF offers comprehensive logging by capturing each inspected web request’s full header data for use in security automation, analytics, or auditing purposes.</li>
<li>WAF rule propagation and updates take under a minute, enabling you to quickly update security across your environment when issues arise. WAF supports hundreds of rules that can inspect any part of the web request with minimal latency impact to incoming traffic</li>
</ul>
<br/>
                    <img src="assets/Images/webx.png" />
                    <br/><br/>
                    <br/>
               <b style={{ color: "#004dbb" , fontWeight:"600"}}>     DAY 0</b>
<br/><br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>Create Policy </b>
<br/>
                  The core of Web application firewall functionality centers around the security policy, which secures a web application server from malicious traffic, Security polices can also include protection against web scraping, cross-site request forgery, and multiple attacks from an IP address.
<br/><br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>Enable Attack Signatures </b>
<br/>
             Security features provide the ability to detect and thwart known attack patterns, such as those defined in attack signatures.
<br/><br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>Security Profile Applied in Virtual server </b>
<br/>
              To enforce the security policy and start sending traffic through the system, create a virtual server with an http profile, and enable the security policy you created in the virtual server resources.
<br/><br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>Create Application Security Logging Profile </b>
<br/>
             Logging profiles determine where events are logged, and which items (such as which parts of requests, or which type of errors) are logged. Events can be logged either locally on the system and viewed in the Event Logs screens, or remotely by the client’s server. 
<br/><br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>Apply Logging Profile </b>
<br/>
              The logging profile records requests to the virtual server. By default, when you create a security policy using the Deployment wizard, the system associates the log illegal requests profile to the virtual server associated with the policy. You can change which logging profile is associated with the security policy by editing the virtual server.
<br/><br/>
           
                  </div>
                </div>

                <div class="tabx">
                  <input type="checkbox" id="chck7" checked />
                  <label class="tabx-label" for="chck7">
                    {" "}
                    DDOS
                  </label>
                  <div class="tabx-content">
                  
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                      Network Subnetting, Gateway, Routing, NAT, TCP/UDP/IPSEC
                      protocol. Basic/advanced knowledge in application and
                      program functions, application security and threats.
                      Knowledge in network and security attacks and mitigation.
                      <br />
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>OEM DDOS Solution:</b>
                      Advanced Firewall Manager (AFM) provides “Deep” packet
                      inspection it means that AFM is concerned with source IP
                      address and port, destination IP address and port, and
                      protocol, you can apply L4 firewall rules to ALL addresses
                      in Network, SIP and DNS level. AFM adds more than 80 L2-4
                      denial of service attack vector detections and
                      mitigations. This may be combined with ASM to provide L4-7
                      protection.
                   
                    <br />

                    <img src="assets/Images/oems.png" />
                  </div>
                </div>
              
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}> DAY 0</b>
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Create Protection profile</b>
                  <br />
                  We need to create a DoS protection profile to define which
                  protection mechanisms to apply to specific protected objects
                  in your network. You can apply one protection profile to
                  multiple protected objects, if they have similar
                  characteristics.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>DDoS device protection attack types</b>
                  <br />
                  In Device Protection, we can specify thresholds, rate
                  increase, rate limit, and other parameters for device-level
                  DoS attack types, to more accurately detect, track, and rate
                  limit attacks. Broken packets, such as those with bad headers,
                  should be severely rate limited. For Network, DNS & SIP
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Pool Creation </b>
                  <br />
                  For network Dos protection required pool as member for the
                  next hop IP to where the packet will forward after inspection,
                  in most of case it will be an perimeter FW IP.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Configuring dynamic signatures at the device level</b>
                  <br />
                  Dynamic DoS detection creates dynamic signatures for attacks
                  based on changing traffic patterns over time. When an attack
                  is detected, a dynamic signature is created and added to the
                  dynamic signatures list. All packets are then checked against
                  the dynamic signature and mitigated according to internal
                  logic.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>DDoS protection Applied in Virtual server </b>
                  <br />
                  To enforce the network DDoS protection, create a virtual
                  server as source and destination as any network with all
                  protocols and Vlan and tunnel traffic, and apply the DoS
                  protection in security. Apply the respective pool member in
                  resources.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Create DDoS Logging Profile </b>
                  <br />
                  Logging profiles determine where events are logged, if packets
                  of the specified types cross the percentage threshold, an
                  attack is logged and reported. The system continues to check
                  every second and registers an attack for the duration that the
                  threshold is exceeded.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Apply Logging Profile </b>
                  <br />
                  The logging profile records requests for the DDoS protection.
                  We can change which logging profile is associated with the
                  DDoS protection by editing the virtual server security tab.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>DAY 1</b>
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Application Even Logs:</b>
                  <br />
                  Once we enabled the DDoS protection in the respective VIP for
                  NW , we can check the logs Configuration Utility Event log
                  request.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Log Analyze:</b>
                  <br />
                  logging profile determines the type of requests the Network
                  and Protocol logs. We can check the Event logs Network, DNS &
                  SIP protocol wise also through the filter option. Moreover, in
                  Network Events, Auto threshold and Dynamic signatures as well.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Modify Existing Policy:</b>
                  <br />
                  We can modify or Edit existing protection profile at any time
                  for based our requirement and we can reapply.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Modify Existing Signature:</b>
                  <br />
                  We can change the state of a Dynamic attack signature Enable
                  and Disable and other parameters also.
                
                <br />

               
                  LBaaS – Load Balancer as a Service
              
                <div class="tabx">
                  <input type="checkbox" id="chck8" checked />
                  <label class="tabx-label" for="chck8">
                    {" "}
                    LBaaS – Load Balancer as a Service
                  </label>
                  <div class="tabx-content">
                   
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                      Network Subnetting, Gateway, Routing, TCP/UDP protocol and
                      basic Load Balancer algorithm.
                      <br />
                      Load Balancer automatically distributes incoming
                      application traffic across multiple targets, such as
                      instances, containers, IP addresses. It can also handle
                      the varying load of your application traffic in a single
                      Availability Zone or across multiple Availability Zones
                      <br />
                      LBaaS Load Balancing is capable of handling rapid changes
                      in network traffic patterns. Additionally, deep
                      integration with Auto Scaling ensures enough application
                      capacity to meet varying levels of application load
                      without requiring manual intervention.
                    
                    <br />
                   <ul>
                        <b style={{ color: "#004dbb" , fontWeight:"600"}}>Features:</b>
                        <li>
                          Load balancing of traffic from clients to a pool of
                          backend servers. The load balancer proxies all
                          connections to its virtual IP.
                        </li>
                        <li>
                          Provides load balancing for HTTPS (Pass-Through),
                          HTTP, Terminated HTTPS (SSL Offloading), TCP and UDP
                        </li>
                        <li>
                          Provides health-monitoring capabilities for
                          applications, including HTTPS, HTTP, PING, TCP,
                          TLS-Hello and UDP-Connect.
                        </li>
                      </ul>
                   
                    <br />
                    <img src="assets/Images/loadx.png" />
                  </div>
                </div>
               
                  Each load balancer consists of one or more listeners, pools,
                  pool members, and health monitors.
                  <ul>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Listener Details:</b> &nbsp; Port that listens for
                      traffic from a load balancer. Multiple listeners can be
                      associated with a single load balancer.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Pool Details:</b> &nbsp; Group of hosts that serves
                      traffic from the load balancer.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Pool Members:</b> &nbsp; Server that is specified by
                      the IP address and port for which it uses to serve the
                      traffic it receives from the load balancer.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Monitor Details</b> &nbsp; Health monitors are
                      associated with pools and help divert traffic away from
                      pool members that are temporarily offline.
                      <ul>
                        <li>
                          Monitors TCP by creating a TCP connection at
                          intervals.
                        </li>
                        <li>
                          Monitors HTTP by creating a TCP connection and issuing
                          an HTTP request at intervals.
                        </li>
                        <li>
                          Monitors ping by checking if a member can be reached
                          by pinging.
                        </li>
                      </ul>
                    </li>
                    <li>
                      The pool member is selected using one of following
                      methods:
                      <ul>
                        <li>
                          Weighted round robin (WRR), based on the weight
                          assignment
                        </li>
                        <li>
                          Least connection, selects the member with the fewest
                          connections
                        </li>
                        <li>
                          Source IP selects based on the source-IP of the packet
                        </li>
                      </ul>
                    </li>
                  </ul>
               
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Day 0:</b>
                  <br />
                  <br />
                  Use the following steps to create a load balancer with the
                  load balancer wizard.
                  <br />
                  LBaaS creates relevant objects for load balancer, including
                  virtual-IP, Loadbalancer-pool, Loadbalancer-member, and
                  loadbalancer-healthmonitor.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From Console Portal:</b><br/>
                  Navigate to Projects - Networks -Load Balancers
                  <br />
                  Click on create to initiate the load balancer configuration.
                  Add the load balancer information:
                  <br />
                  <ul>
                    Enter below field details.
                    <br />
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Name</b> &nbsp;Enter name for the Load Balancer.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>IP Address </b> &nbsp;Enter IP Address for the Load
                      Balancer.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Description </b> &nbsp;Enter description for the Load
                      Balancer
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Flavor </b> &nbsp;Select flavor for the Load Balancer
                      (Optional).
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Subnet </b> &nbsp;Select IPv4 or IPv6 Subnet for Load
                      Balancer VIP.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Admin State UP </b> &nbsp;Yes/No
                    </li>
                    <br />
                    <li>Click Next. The Listener fields are displayed. </li>
                    <li>Add the listener information:</li>
                  </ul>
                  <ul>
                    Enter below field details.
                    <br />
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Name</b> &nbsp;Enter name for the Listener
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Description </b> &nbsp;Enter description for the
                      Listener
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Protocol </b> &nbsp;Select Protocol types (HTTPS, HTTP,
                      Terminated_HTTPS, TCP, UDP)
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Port </b> &nbsp;TCP/UDP Port (1-65535)
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Client Data Timed out </b> &nbsp;50000 (Optional)
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>TCP Inspect Timeout </b> &nbsp;0 (Optional)
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Member Connect Timeout </b> &nbsp;50000 (Optional)
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Member Data Timeout </b> &nbsp;50000 (Optional)
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Connection Limit </b> &nbsp;-1
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Admin State UP </b> &nbsp;Yes/No
                    </li>
                  </ul>
               
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Day 1:</b>
                  <br />
                  <br />
                  Viewing or Editing Load Balancers
                  <br />
                  Use the following steps to view or edit existing load
                  balancers.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From Console Portal:</b>
                  Navigate to Projects - Networks - Load Balancers
                  <br />
                  <br />
                  <ul>
                    <li>
                      A summary screen of the Load Balancers is displayed.
                    </li>
                    <li>
                      To view or edit a load balancer, click Edit Load Balancer
                      listed option.{" "}
                    </li>
                    <li>
                      To view the list of listeners associated with the load
                      balancer, click the name of - load balancer.{" "}
                    </li>
                    <li>
                      To view or edit a listener, click the name of - load
                      balancer{" "}
                    </li>
                    <li>
                      To view a list of pools associated with the listener,
                      click the name of - load balancer -Listener.
                    </li>
                    <li>
                      To view or edit a pool, click the name of - load balancer
                      - Listener- Pool.
                    </li>
                    <li>
                      To view a list of members associated with the pool, click
                      the name of - load balancer - Listener- Pool
                    </li>
                    <li>
                      To view the health monitor details associated with the
                      pool, click the name of - load balancer - Listener - Pool-
                      Health Monitor tab.{" "}
                    </li>
                  </ul>
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Deleting a Load Balancer</b>
                  <br />
                  Use the following steps to delete a load balancer.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From Console Portal:</b>
                  <br />
                  Navigate to Projects - Networks - Load Balancers

                  <br />
                  <ul>
                    <li>
                      Delete the members of the pools. Select the pool members
                      you want to delete,{" "}
                    </li>
                    <li>
                      Delete the pools. Select the pools you want to delete,{" "}
                    </li>
                    <li>
                      Delete the listeners. Select the listeners you want to
                      delete,{" "}
                    </li>
                    <li>
                      Delete the load balancer. Select the load balancer you
                      want to delete,{" "}
                    </li>
                  </ul>
                  <ul>
                    LBaaS currently has these recommendations to follow for
                    smooth operations:
                    <li>A pool should be deleted before deleting the VIP.</li>
                    <li>
                      Multiple VIPs cannot be associated with the same pool. If
                      pool needs to be reused, create another pool with the same
                      members and bind it to the second VIP.
                    </li>
                    <li>
                      Members cannot be moved from one pool to another. If
                      needed, first delete the members from one pool, then add
                      to a different pool.
                    </li>
                    <li>
                      Each load balancer can have multiple pools with one or
                      more listeners for each pool.
                    </li>
                  </ul>
                
                <br />

                <div class="tabx">
                  <input type="checkbox" id="chck9" checked />
                  <label class="tabx-label" for="chck9">
                    OEM Load balancer Support
                  </label>
                  <div class="tabx-content">
                   
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                      Network Subnetting, Gateway, Routing, NAT, TCP/UDP
                      protocol and basic/advanced Load Balancer algorithm,
                      advanced Load balancer types and features.
                      <br />
                      If customers want to have OEM based load balancers like
                      Citrix ADC, F5 LTM, etc. we can also enable into our
                      environment. This will enable the customers to utilize the
                      OEM based advance load balancing features like their
                      existing on-premise data center environment.
                    
                    <br />
                    <img src="assets/Images/load.png" />
                  </div>
                </div>
                
                  We can support the typical deployment model of load balancers
                  like “one-arm” mode or routed mode. We can deploy the OEM load
                  balancers in standalone and HA cluster based on customer
                  requirement. Customers can also bring their own license to use
                  or TCS ECP can also provide the necessary license. If customer
                  bringing their own license, they have pay the VM resources
                  (CPU, Memory, HDD, etc.). User can fetch the required
                  operating system or image to spin up the respective OEM LB
                  image for the instance. They can attach required networks
                  during the instance deployme
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Day 0:</b>
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>
                  Deployment steps for the VM Citrix ADC / F5 LTM for tenant.
                  </b>
                  <br />
                  1. Login to the tenant environment in open stack to deploy the VM ADC as instance.
                  
                  <br />
                  2. Spin up the OEM load balancers as new instance.
                  <br />
                 <b style={{ color: "#004dbb" , fontWeight:"600"}}> From Console UI:</b>
                 <br/>
Navigate to Compute - Instances 
                  <br />
                  to create the new instance of OEM LB.
Provide the necessary CPU, Memory and storage volume for the respective model.
Provide the number of quantity either 1 or 2.
In the network tab, ensure the first interface selected as management network if you are attaching multiple networks. Because the first interface will be allocated for OEM LB management interface.
Alternatively, spin up the instance with only management interface, once instance spun up, you can later attach the required additional network interfaces like load balancer VIP or frontend, backend server farm network, etc. whichever required.
After booting up, you can take the remote access through management IP assigned from the DHCP pool to the instance.
<br/><br/>
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>
                    Following changes are necessary to enable the reachability
                    from portal:
                  </b>
                  <br />
                 <ul>
                   <li>Configure a virtual SNIP address for VIP/Pool networks in each partition of OEM LB.</li>
<li>Add the virtual SNIP in the Address Pair setting of the VM attached virtual ports.</li>
<li>Enable the Dynamic Address Learning option in VIP/Pool network
</li>
                 </ul>
                  <br /><br/>
                  Add the virtual SNIP in the Address Pair setting of the VM attached virtual ports.
                  <br/><br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>Navigate to OVERLAY - Virtual Ports - Edit</b>
<br/>
Add the virtual SNIP address under the Allowed Address Pair setting.
<br/><br/>
Add the virtual SNIP in the Address Pair setting of the VM attached virtual ports.
<br/><br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>Navigate to OVERLAY - Virtual Networks - Edit</b>
<br/>
	Under the advanced option, select the Dynamic Address Learning option.
  <br/><br/>
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Changes required on OEM Citrix </b>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Prerequisite:</b><br/>
From network portal Create VIP networks with allocation pool (.21 to .200) , first 20 IP will used for reservation (Infra,SNIP) purpose and enable dynamic learning option.
Make sure proper security group mapped for VPX attached interfaces.
                  <br />


              <b style={{ color: "#004dbb" , fontWeight:"600"}}>    Primary Node: </b>
              <br/> <br/>
              <ul>
<li>HA configure with INC enabled </li>
<li>Take a note of all VM virtual ports IP attached to VM and configure them as SNIP address in appliance in default Partition. </li>
<li>Create VLAN and bind to Virtual interface and respective SNIP along with partition sharing (mandatory).</li>
<li>Create admin partition and give dummy mac (22:33:44:55:66:77)</li>
<li>And map respective vlan to admin partition</li>
<li>Repeat the above steps for additional partitions.</li>
</ul>
<br/><br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>Switch to respective partition:</b>
<ul>
<li>Create secondary virtual SNIP</li>
<li>Add address pair for secondary SNIP in attached/local interfaces of VM</li>
<li>Add required route (default) pointing to SNIP gateway</li>
<li>Configure required VIP and pool member and test the application reachability through VIP.</li>
<li>Repeat the above steps for additional partitions.</li>
</ul>
<br/><br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>Secondary Node:</b>
<ul>
<li>Take a note of all VM virtual ports IP attached to VM and configure them as SNIP address in appliance in default Partition. </li>
<li>Create VLAN and bind to physical interface and respective SNIP along with partition sharing (mandatory). </li>
<li>Create admin partition and give dummy mac (22:33:44:55:66:77) ( will be replicated from primary) </li>
<li>And map respective vlan to partition </li>
<li>Repeat the above steps for additional partitions. </li>
</ul>
<br/><br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>Switch to respective partition:</b>
<ul>
<li>Create secondary virtual SNIP</li>
<li>Add address pair for virtual SNIP in attached/local interfaces of VM</li>
<li>Add required route (default) pointing to SNIP gateway</li>
<li>Configure required VIP and pool member and test the application reachability through VIP.( will be replicated from primary)</li>
<li>Repeat the above steps for additional partitions.</li>
</ul>
<br/><br/>
Now you can reach the entire network from Citrix ADC to backend server farm, and we can start configuring the LB based on application / customer requirement.
<br/><br/>

<b style={{ color: "#004dbb" , fontWeight:"600"}}>Changes required in Big IP F5 LTM:</b>
<br/>
<b style={{ color: "#004dbb" , fontWeight:"600"}}>We must use below option to take web GUI:</b>
<br/>
If single interface attached use https:// mgmt-ip :8443 <br/>
If multiple interface attached, use https:// mgmt-ip <br/>
After logged into the Big IP LTM, complete the initial setup.<br/>
Apply the required license.<br/>
Give the hostname, VLAN, Self and Floating IP and routes inside the F5 LTM.<br/>
Configure the HA between the F5 using dedicated HA interfaces.<br/>
Add the default route for the respective LB VIP network, once done we can reach the VIP network from other networks.<br/>




               
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Day 1:</b>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>If customer required adding new interfaces:</b>
                  <br />
                  To be add for backend server communications, we can add the
                  required interfaces to the OEM load balancers.
                  <br />
                  Add the required interface(s) as additional interface for the
                  LB instance.
                  <br />
                  Restart the LB instance to make the changes take effect.
                  <br />
                  Configure the interfaces with necessary VLAN and interface binding.
                  <br />
                  Configure the Subnet IP and Address Pair and Dynamic Address Learning for new Virtual Network.
Now you can reach the backend server from LB via newly attached interface.
                <br/>
               
                <br />

              
                <b style={{ color: "#004dbb" , fontWeight:"600"}}>  Internet Gateway </b>
                
                <br />
                <br />
                <div class="tabx">
                  <input type="checkbox" id="chck10" checked />
                  <label class="tabx-label" for="chck10">
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>SNAT </b>
                  </label>
                  <br />
                  <div class="tabx-content">
                   
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}> Overview </b>
                      <br />
                      Source Network Address Translation (source-nat or SNAT)
                      allows traffic from a private network to go out to the
                      internet. When SNAT is configured in Portal, VMs launched
                      on a private network can send packets to a public network
                      without exposing its own IP address by going through a
                      gateway service instance.
                      <br />
                      Virtual machines launched on a private network can get to
                      the internet by going through a gateway capable of
                      performing SNAT. The gateway has one arm on the public
                      network and as part of SNAT, it replaces the source IP of
                      the originating packet with its own public side IP. As
                      part of SNAT, the source port is also updated so that
                      multiple VMs can reach the public network through a single
                      gateway public IP.
                    
                    <br />

                    <img src="assets/Images/snat.png" />
                  </div>
                </div>
               
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>
                    {" "}
                    SNAT Types:
                    <br />
                    <br />
                    Router SNAT
                    <br />
                    Distributed SNAT
                    <br />
                  </b>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Router SNAT:</b> - SNAT will be enabled at logical router,
                  internet will be extended to all attached virtual network in
                  the router.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Day 0:</b>
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From Network Portal:</b>
                  <br />
                  Navigate to OVERLAY - Logical Router - Create
                  <br />
                  Users can attach the virtual networks which are needed
                  internet access to logician router and by default SNAT
                  function option is enabled router. Users need to attach the
                  external gateway for internet access.
                  <ul>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Name</b>&nbsp;Name of your logical router
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Admin State</b>&nbsp;Administrative state you want the
                      logical router to have when activated
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Extend to Physical Router</b>&nbsp;Add the devices that
                      will provide routing services. Note: For CRB, select the
                      spine devices to provide routing.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>External Gateway</b>&nbsp;Specify a gateway to reach
                      networks external to the fabric
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Connected networks</b>&nbsp;Add the virtual networks
                      (VLANs or VNIs) that you want to connect through the
                      logical router
                    </li>
                  </ul>
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Distributed SNAT:</b> - SNAT will be enabled at Virtual
                  network providing internet to the created network.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Day 0:</b>
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>
                  From Network Portal: </b>
                  <br/>
Navigate to OVERLAY - Virtual Networks - Create
                 
                  <br />
                  <br />
                  Create network subnets for project instances and enable SNAT
                  setting from advanced options.
                  <br />
                  Minimum fields to need to entered like network Name, IPAM(
                  Default/Custom),Subnet CIDR, DNS/DHCP option for basic network
                  creation.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>
                    Below are the available fields for virtual network creation.
                  </b>
                  <br />
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Network Name</b>&nbsp;Enter a name for the network.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Subnet Name</b>&nbsp;Enter a name for the subnetwork.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>IPAM</b>&nbsp;Select the IPAM associated with the IP
                    block. For new projects, an IPAM can be added while creating
                    the virtual network. VM instances created in this virtual
                    network are assigned an address from this address block
                    automatically by the system when a VM is launched.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Network Address</b>&nbsp;Enter the network address in
                    CIDR format.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}> IP Version*</b>&nbsp;Select IPv4 or IPv6.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Gateway IP</b>&nbsp;Optionally, enter an explicit gateway
                    IP address for the IP address block. Check the Disable
                    Gateway box if no gateway is to be used.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Network Policy</b>&nbsp;Any policies already created are
                    listed. To select a policy, click the check box for the
                    policy.
                  </li>
                  <li>
                    <b style={{ color: "#004dbb" , fontWeight:"600"}}>Advanced Options</b>&nbsp;Use this area to add or remove
                    advanced options, including identifying the Admin State as
                    Up or Down, to identify the network as Shared or External,
                    to add DNS servers, SNAT and define a VxLAN Identifier.
                  </li>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Day 1</b>
                  <br />
                  <br />
                  Users can disable the SNAT If not required for virtual
                  network.
                  <br />
                  Below are the available fields for virtual network.
                  <br />
                  <ul>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Subnet Name</b>&nbsp;Enter a name for the subnetwork.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>IPAM</b>&nbsp;Select the IPAM associated with the IP
                      block. For new projects, an IPAM can be added while
                      creating the virtual network. VM instances created in this
                      virtual network are assigned an address from this address
                      block automatically by the system when a VM is launched.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Network Address</b>&nbsp;Enter the network address in
                      CIDR format.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}> IP Version*</b>&nbsp;Select IPv4 or IPv6.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Gateway IP</b>&nbsp;Optionally, enter an explicit
                      gateway IP address for the IP address block. Check the
                      Disable Gateway box if no gateway is to be used.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Network Policy</b>&nbsp;Any policies already created
                      are listed. To select a policy, click the check box for
                      the policy.
                    </li>
                    <li>
                      <b style={{ color: "#004dbb" , fontWeight:"600"}}>Advanced Options</b>&nbsp;Use this area to add or
                      remove advanced options, including identifying the Admin
                      State as Up or Down, to identify the network as Shared or
                      External, to add DNS servers, SNAT and define a VxLAN
                      Identifier.
                    </li>
                  </ul>
               
                <br />

                <div class="tabx">
                  <input type="checkbox" id="chck11" checked />
                  <label class="tabx-label" for="chck11">
                    {" "}
                    Floating IP
                  </label>
                  <div class="tabx-content">
                   
                      Floating IP is Public IPv4 Address, which will help to
                      extend the access to or from Internet. Users can retrieve
                      the floating IP from the Floating IP Pools, maximum number
                      of IP’s can be assigned based on their quota defined, and
                      these IP addresses will be dedicated for the user, once
                      they obtained from the pool, it will be their until they
                      release back to the pool even if its assigned to instance
                      or not. Users can associate a Floating IP address for
                      following services to allow the communication to or from
                      the internet. <br />
                      <ul>
                        <li>Virtual Machine / Network Interfaces</li>
                        <li>Internet Facing Load balancers</li>
                      </ul>
                   
                    <br />

                    <img src="assets/Images/floating.png" />
                  </div>
                </div>
              
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}> Day 0:</b>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From Network Portal:</b>
                  <br />
                  Navigate to OVERLAY - Floating Ips - Create
                  <br />
                  User can get the required number of floating IPs from the pool
                  by determining the numbers required
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>Day 1:</b>
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From Network Portal:</b>
                  <br />
                  Navigate to OVERLAY - Virtual Ports - Edit
                  <br />
                  User can associate the Floating IP to the respective Instance
                  / Load balancer VIP Ports.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From Network Portal:
</b>
                  <br />
                  Navigate to OVERLAY - Floating IPs
                  <br />
                  User can dis-associate the Floating IP from the respective
                  Instance / Load balancer VIP Ports.
                  <br />
                  <br />
                  <b style={{ color: "#004dbb" , fontWeight:"600"}}>From ECP Networks UI:</b>
                  <br />
                  Navigate to Configure-Networking-Floating IPs-Disassociate
                  Port
                  <br />
                  User can release the specific Floating IPs address back to the
                  pool whenever they don’t need. Users cannot get the same IPs
                  once its released back to the pool, as it will be allocated
                  for different Project / Users.
              
                <br />

               <b style={{ color: "#004dbb" , fontWeight:"600"}}>
                  Colo Device / Appliance Support
                  </b>
                
                  Prerequisite: Physical server hardware and software
                  configuration. Basic network knowledge in IPv4/IPv6, Network
                  Subnetting, Gateway, Routing, TCP/UDP protocol, Storage
                  connectivity and types.
              
                <div class="tabx">
                  <input type="checkbox" id="chck12" checked />
                  <label class="tabx-label" for="chck12">
                    {" "}
                    COLO Network
                  </label>
                  <div class="tabx-content">
                   
                      Alpha4 cloud supports Co-location sever solution to be
                      coexist with cloud instance. User can bring their own
                      existing legacy application server and attach to TCS Cloud
                      infra. This co-location server can be maintained and
                      integrated with TCS cloud and leverage network and
                      security functions
                    
                    <br />
                    <img src="assets/Images/colo.png" />
                  </div>
                </div>

                <div class="tabx">
                  <input type="checkbox" id="chck13" checked />
                  <label class="tabx-label" for="chck13">
                    {" "}
                    COLO Storage
                  </label>
                  <div class="tabx-content">
                   ser can leverage cloud storage solution for their
                      COLO/BMS servers. Server will have secure communication to
                      storage cluster. Based on the requirement, storage type
                      and pools will be allocated to the servers. The COLO
                      server can use the TCS cloud storage as part of Storage
                      solution which provides high performance, reliability and
                      scalability.
                   
                    <br />

                    <img src="assets/Images/colos.jpg" />
   
              </div></div></div></span></p></div></section></div>
</section>

<section className="section">
    <div class="section__header">
        <section className="quote desert" id="compute" style={{paddingLeft:"90px"}} >
         
       <h1>Alpha Compute Services</h1>
         <div className="byline">
           <div className="avatar" />
           by <span>Engineering Team</span>
        
         </div>
        
        </section>
        </div>
        
        <div class="section__content" id="style-1">
        <section>
        <div className="container">
        {currentUser =="1447282" ?
   <div>
     <PdfUploader 
        section="compute"
        func={handleComputeContent}
      />
   
 </div>
   : 
   <div style={{display:"none"}}>  <PdfUploader 
   section="compute"
   func={handleComputeContent}
 /></div>}
      
       <div
        
        style={{ position: "relative", minHeight: "100%", overflowY: "auto" }} // Added overflowY for better scroll handling
        dangerouslySetInnerHTML={{ __html: third }}
      ></div>
            <p style={{color:"#0d0d0d" , fontFamily:"inter", fontSize:"16px"}}><span className="drop">Compute</span> STORAGE HARDWARE – AN ENDLESS BUYING GAME
            <br/>
            A typical organization will refresh their storage infrastructure
                every 3-5 years. But between refresh cycles there is often the
                need to purchase additional disk shelves, array fiber port
                expansions, network switches, software licenses, etc. In recent
                years, there has also been a need to accelerate performance at
                the midpoint of a system’s life cycle in the form of a flash/SSD
                upgrade, adding even more cost to the storage infrastructure
                stack. In short, the storage infrastructure environment rarely
                remains static for long; it is subject to constant change.
            </p>
            <p style={{color:"#0d0d0d" , fontFamily:"inter", fontSize:"16px"}}>
          
             

              {/* <Col lg="6" style={{paddingTop:"50px"}}>

<div class="buttonx">
<a class="downloadx" href={require("assets/img/Storage.pdf")} download target="_blank" rel="noopener noreferrer">
<svg className="blinking" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download-cloud"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" className="blinking"></path></svg>
</a>
<p class="topx">Compute Docs</p>
<p class="bottomx">873 kb</p>
</div>

</Col>*/}

             
                2ECP Platform Overview
             
                Enterprise cloud platform (ECP) that delivers assured high
                performance, steady, reliable and scalable IaaS service provided
                by TCS for mission critical workloads. Software-defined
                infrastructure enables automation and agility at all levels, and
                accelerates time to market of critical applications. Enterprise
                Cloud Platform (ECP) delivers a seamless user experience.
            
              <br />

              <b style={{ color:"#004bdd", fontWeight:"600"}}>   Features & Benefits of ECP Cloud <br />
                Instance types </b> 
             
                ECP Cloud offers predefined Instance type configurations for
                every need from small general purpose workloads to large memory
                instensive workloads and high performance computing workloads.
                Each instance type has precise specifications, including the
                number of vCPUs, memory capacity, and network performance.
             
              <br />
            
                Instance
            
                An ECP instance is a Virtual Machine that includes basic
                computing components such as CPU, memory, operating system,
                network and disks.
           
              <br />
             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>  ECP Image </b> 
            
                An ECP image stores information that you essential for creating
                an ECP instance. Image is a single file which contains a virtual
                disk that has a bootable operating system installed on it.
                Images are used to create virtual machine instances within the
                ECP cloud. Several Linux distributions and Windows Server
                operating systems are supported in ECP cloud. <br />
                Public images provided by ECP Cloud. Public images include
                Windows Operating system images and Linux Operating system
                images.
             
              <br />
               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Block Storage
                </b>
            
                Robust, high performance block storage for your VM instances.
                You can create persistent disks in HDD, SSD and Nvme formats.
                User can also take snapshots and create new persistent disks
                from that snapshot. If a VM instance is terminated, its
                persistent disk retains data and can be attached to another
                instance and depends upon the option seleted during the instance
                creation.
              
              <br />
               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Snapshot
                </b>
             
                A snapshot is a stateful data file of a cloud disk at a certain
                point in time. Snapshots are often used to back up and restore
                data or to create custom images.
            
              <br />
             
                 <b style={{ color:"#004bdd", fontWeight:"600"}}>   Security group </b>
               
                  A security group works as a cloud virtual firewall for the ECP
                  instances. A security group is a logical grouping of instances
                  placed within the same region that have the same security
                  requirements and require access to each other.
              
                <br />
               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Network
                </b>
             
                ECP Networking handles the creation and management of a virtual
                networking infrastructure, including networks, switches,
                subnets, and routers.
            
              <br />
              <b style={{ color:"#004bdd", fontWeight:"600"}}>
                SSH KeyPair
                </b>
             
                Secured way to login to ECP instances. Key Pairs are how you
                login to your instance after it is launched. A Key pair allows
                you to SSH into your newly created instance. You may select an
                existing key pair, import a key pair, or generate a new key
                pair.
             
              <br />
             <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Load Balancer
                </b>
             
                Load balancing enhances reliability to the web application layer
                by configuring two or more servers or databases to respond to
                requests. Load Balancing features helps you to distribute
                incoming requests across pools of instances. It avoids overload
                of a single server thereby preventing a single point of failure
                for the application. This further improves the performance,
                network throughput, and response time of the servers.
             
              <br />
              <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Server Group
                </b>
             
                A Server group defines deployment strategy for your instances.
                Server group defines the placement of instances on underlying
                compute hosts. Anti-Affinity Server Group provides higher
                reliability by placing instances on different compute host,
                decreasing the impact of underlying compute failures. Affinity
                Server Group provides lower latency between nodes by placing
                instances close together within the same compute host.
            
              <br />
              <br />
               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Regions and Availability Zones
                </b>
             
                This topic provides a comprehensive list of ECP Cloud regions
                and Avaiability zones. Each Region in ECP Cloud are independent
                physical location that are spread all over the world.
                Availability Zones in ECP Cloud are completely isolated
                locations. Though, Availability zones in the same region are
                connected through links with low latency. Intranet communication
                between ECP Cloud resources that are not in the same region is
                not supported, which means that ECP instances and other
                resources, cannot communicate with one another over the intranet
                if they are in different regions. The following figure shows the
                relationship between regions and availability zones in ECP
                Cloud.
               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                The following is the list of all available ECP Cloud </b>
                Geographies. <br />
                Available Geographies <br />
              
                  <ul className="text-left">
                    <li>US East (Ashburn) </li>
                    <li>US West (Franklin Park) </li>
                    <li>Asia Pacific (Osaka) </li>
                    <li>Asia Pacific (Mitaka) </li>
                    <li>Asia Pacific (Singapore)</li>
                    <li>Asia Pacific (Sydney) </li>
                    <li>Asia Pacific (Melbourne) </li>
                    <li>Europe (Frankfurt) </li>
                    <li>Europe (UK) </li>
                    <li>Europe (Finland) </li>
                    <li>Europe (Sweden) </li>
                  </ul>
               
              <br />
              <br />

             <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Availability Zones
                </b>
            
                An availability zone provides a form of physical isolation and
                redundancy from other availability zones. Availability Zones are
                physical areas with independent of Data center and networks
                within one region. The network latency for instances within the
                same availability zone is lower. Intranet communication can take
                place between instances in different availability zones of the
                same region, and fault isolation can be accomplished among
                availability zones. When you provision resources, you specify
                from which availability zone you want your instance to be built.
                By segregating resources into availability zones, you can ensure
                that your application resources are spread across different
                availability zone to achieve high availability in the event of
                zone failure or other failures.
              
              <br />

            
                <b style={{ color:"#004bdd", fontWeight:"600"}}>  High Availability for the Instances </b>
             <br/>
                To ensure business reliability and stability, we recommend
                multi-zone deployment and Load Balancer for high availability.
                Instances can be deployed in the same Availability Zone depends
                on the requirements for high availability and network latency.
                If your application needs high availability, design and deploy
                your application to run across different availability zones
                (Data Centers) of same region.
             
              <br />
              <br />

             <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Instances
                </b>
           
                This topic provides the overview of TCS ECP instances. An ECP
                instance is a virtual machine that consists of basic computing
                components such as CPU, Memory, Storage and Network. When you
                launch an ECP instance you can choose the predefined instance
                types available in TCS ECP cloud which determines the number of
                vCPU, memory, network for your instance which is coming from
                compute host. You can create and manage an instance by using TCS
                ECP end user portal.
             <b style={{ color:"#004bdd", fontWeight:"600"}}>
                ECP Instance Families
                </b>
            
                This topic provides an overview of available TCS ECP instance
                families and their landscapes, capabilities and specifications.
                ECP instances are characterized into different instance families
                based on the business scenarios and different workloads. Each
                ECP instance family is divided into different instance types
                based on their CPU, Memory, Network and Storage
                specifications. ECP instance type describes the basic properties
                of an ECP instance, such as CPU, clock speed, memory, storage
                and network type. Choose an instance families and instance type
                based on the workload requirements, software that you plan to
                run on your instance. If the instance type does not suit your
                workload requirements, you can change the instances types within
                the same instance family or across instance families. For more
                information, see Resizing instance families section. <br />
                Following are the available Instance Families offered on TCS ECP
                cloud. Choose the right compute instance for optimal cloud
                workloads.
             
                <ul className="text-left">
                  <li>
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>General-purpose:</b> Provide a balance of compute, memory
                    and network resources and are a good choice for many
                    applications such as small and mid-sized databases, data
                    processing tasks, caching fleets and backend servers for
                    various applications.
                  </li>
                  <li>
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Compute-Intensive:</b> Optimized for applications that
                    benefit from high compute power and are recommended for
                    running CPU-bound applications such as high traffic
                    front-end fleets, on-demand batch processing, distributed
                    analytics, web servers, batch processing and high
                    performance science and engineering applications.
                  </li>
                  <li>
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Memory-Intensive:</b> Optimized for memory-intensive
                    applications which offers high memory per core than other
                    instance families. Memory intensive family is recommended
                    for applications such as databases, memcached and other
                    distributed caches and larger deployments of enterprise
                    applications.
                  </li>
                </ul>
            
              <b style={{ color:"#004bdd", fontWeight:"600"}}>   GENERAL PURPOSE INSTANCE TYPE:</b>
             <br/>
                General-purpose instances offer the best cost-performance and
                balanced CPU-to-memory ratio for a variety of workloads. If you
                are not sure which compute instance is best for your workload,
                using a general-purpose instance type is a good place to start.
             
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>Advantages and Ideal Workload Scenario </b>
                It is generally suited for testing, development, small to medium
                databases, and low to medium traffic web servers. The typical
                workloads for general-purpose compute instance include:
                <ul className="text-left">
                  <li>Web Server</li>
                  <li>File Server</li>
                  <li>Caching Server </li>
                  <li>Development Environment </li>
                  <li>FTP/DNS/DHCP </li>
                  <li>Active Directory </li>
                </ul>
            
              <br />
          <b style={{ color:"#004bdd", fontWeight:"600"}}>
                GP Instance Types
                </b>   
           <br/>
                Summary of GP instance types <br />
                Offers a vCPU-to-memory ratio of 1:2
            
              <br />
              <img src="assets/Images/cap1.jpg" />
              <br />
              <br />
              <br />

              <b style={{ color:"#004bdd", fontWeight:"600"}}>
                GP2 Instance Types
                </b>
             <br/>
                Provide a balance of compute, memory and network resources and
                are a good choice for many applications such as small and
                mid-sized databases, data processing tasks, caching fleets and
                backend servers for various applications. <br />
                <br />
                Summary of GP2 Instance types <br />
                Offers a vCPU-to-memory ratio of 1:4.
           
              <br />
              <img src="assets/Images/cap2.jpg" />
              <br />
              <br />
              <br />

              <b style={{ color:"#004bdd", fontWeight:"600"}}>
                GP3 Instance Types
                </b>
               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Summary of GP3 Instance types
                </b>
                <br />
                Offers a vCPU-to-memory ratio of 1:4
            
              <br />
              <img src="assets/Images/cap3.jpg" />
              <br />
              <br />
              <br />

             
             <b style={{ color:"#004bdd", fontWeight:"600"}}>     COMPUTE-INTENSIVE INSTANCE TYPE: </b>
              
                Compute-Intensive instances types are optimized for applications
                that benefit from high compute power. Compute-intensive instance
                types are recommended for running CPU-bound applications.
            
              <br />

               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Advantages and Ideal Workload Scenario
                </b>
                <br/>
                Compute-intensive instances provide ultra-high performance for
                compute-intensive workloads
             <br/>
                The typical workloads for compute-intensive compute instance
                include:
             
                <ul className="text-left">
                  <li>Application Servers</li>
                  <li>Database Workloads </li>
                  <li>
                    Medium-traffic Web Servers/High-performance Web Servers
                  </li>
                  <li>Batch Processing Workloads</li>
                  <li>Dedicated Gaming Servers </li>
                  <li>Media Transcoding </li>
                  <li>High Performance Computing (HPC) </li>
                  <li>Scientific Modeling </li>
                  <li>Ad Server Engines </li>
                  <li>Distributed Analytics </li>
                  <li>
                    Machine Learning Inference and other compute intensive
                    applications{" "}
                  </li>
                </ul>
             
              <br />
              <img src="assets/Images/cap4.jpg" />
              <br />
              <br />

               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                MEMORY-INTENSIVE INSTANCE TYPE:
                </b>
            <br/>
                Memory Intensive instance types are designed to deliver fast
                performance for workloads that process large data sets in
                memory. These instances are optimized for memory-intensive
                applications, and are recommended for applications such as
                databases, memcached and other distributed caches and larger
                deployments of enterprise applications
             
              <br />

            
              <b style={{ color:"#004bdd", fontWeight:"600"}}>    Advantages and Ideal Workload Scenario  </b>
             
          <br/>
                Memory-Intensive instances offer high amounts of memory compared
                to CPU. As a result,
              <br/>
                They are well suited for applications that use a lot of memory,
                which include:
             
                <ul className="text-left">
                  <li>
                    In-Memory Databases like Spark, Aerospike, Redis Labs,
                    Oracle TimesTen, Oracle Coherence, Memcached{" "}
                  </li>
                  <li>Critical and Enterprise Workloads such as SAP-HANA </li>
                  <li>Relational Database Servers</li>
                  <li>Medium to Large Caches </li>
                  <li>Distributed Caches </li>
                  <li>In-Memory Analytics </li>
                </ul>
            <br/>
              <img src="assets/Images/cap5.jpg" />
              <br />
              <br />
              <br />

             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Images  </b>
           <br/>
             
                An ECP image stores information that you essential for creating
                an ECP instance. Image is a single file which contains a virtual
                disk that has a bootable operating system installed on it.
                Images are used to create virtual machine instances within the
                ECP cloud.
              <br/>
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Image Types </b>
                <br />
                The following are the types of ECP images.
              
                 <b style={{ color:"#004bdd", fontWeight:"600"}}> Public Images: </b>
              
            <br/>
                Public images provided by ECP Cloud. Public images include
                Windows Operating system images and Linux Operating system
                images.
           
              <b style={{ color:"#004bdd", fontWeight:"600"}}>    Private Images:  </b>
             <br/>
                Private images are created from instances or snapshots. Only the
                author of a Private image can use, share, and delete the image.
             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Creating a Private Image: </b>
             <br/>
                After you create an ECP instance by using an existing image, you
                can construct the instance as required. For example, you can do
                the security hardnening, install softwares and deploy
                application on the instance, and create a private image from the
                instance. Instances created from the private image contain all
                the custom items that you have constructed.
                <br />
                You can create a private image from a running instances from API
                or from a system disk snapshots on ECP dashboard For more
                information, see Create a Private image from a Snapshot
             <br/>

              
                <b style={{ color:"#004bdd", fontWeight:"600"}}>  Creating the Private image from Snapshot: </b>
              <br/>
                This topic describes how to construct a private image by using
                an Snapshot. After creating an instance, you can customize the
                instance according to your requirement and create a private
                image from it. New instances created from the private image
                inherit all the customizations you have made for the original
                instance.
             <br/>
                During private image creation, snapshots are created for all
                disks of the instance, including the system disk and data disks.
                All the created snapshots compose a new private image. The
                following steps details this process.
            <br/>
                <ul className="text-left">
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Compute tab and
                    click Instances category.{" "}
                  </li>
                  <li>
                    In the Launch Instance dialog box, specify the following
                    values for instances with its name, image name, Availability
                    Zone, ECP Instance Type, Network, Security Group, Key Pair.
                    For more information, see Launch an Instance section.
                    <br />
                    Click on Launch Instance
                  </li>
                  <li>
                    Cutomize the Instance by installing the software and
                    applications.{" "}
                  </li>
                  <li>Select the instance from which to create a snapshot. </li>
                  <li>In the actions column, click Create Snapshot. </li>
                  <li>
                    In the Create Snapshot dialog box, enter a name for the
                    snapshot, and click Create Snapshot.{" "}
                  </li>
                  <li>
                    Private image will be created and available in image
                    category.{" "}
                  </li>
                  <li>
                    Launch instance from the newly created private image.{" "}
                  </li>
                </ul>
             
              <br />

             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Delete a Private Image: </b>
             <br/>
                Delete the private images that you no longer need. After a
                private image is deleted, you can no longer use it to create a
                ECP instances. A private image created from an ECP instance
                consists of the snapshots of disks that are attached to the
                instance. If you delete a private image, snapshots contained in
                the image will not be deleted. If you do not want to keep the
                snapshots, navigate to the Snapshots page and delete the
                snapshots on ECP dashboard. For more information, see Delete a
                Snapshot section.
               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                The following steps details Deleting a Private image.
                </b>
                <ul className="text-left">
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Compute tab and
                    click image category.{" "}
                  </li>
                  <li>Select your private image </li>
                  <li>Click on Delete image from image category. </li>
                  <li>
                    Private image will be deleted from the image section.{" "}
                  </li>
                </ul>
             
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>Note:</b> If Snapshot deleted for private image, you no
                longer use private image to create a ECP instance. Launch
                instance will fail.
            
              <br />
             
                The following are the list of availabile Operating Systems for
                ECP image.
             
                <ul className="text-left">
                  <li>
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Windows </b>{" "}
                  </li>
                  <li>Windows Server 2019 </li>
                  <li>Windows Server 2016 </li>
                  <li>Windows Server 2012 R2 </li>
                  <li>Windows Server 2012 </li>
                  <li>
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Linux (SUSE, RHEL, UBUNTU)</b>{" "}
                  </li>
                  <li>
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>SUSE </b>
                  </li>
                  <li>SUSE Linux Enterprise Server 12 SP1 </li>
                  <li>SUSE Linux Enterprise Server 12 SP2</li>
                  <li>SUSE Linux Enterprise Server 12 SP3</li>
                  <li>SUSE Linux Enterprise Server 12 SP4</li>
                  <li>SUSE Linux Enterprise Server 12 SP5</li>
                  <li>SUSE Linux Enterprise Server 15 </li>
                  <li>SUSE Linux Enterprise Server 15 SP1 </li>
                  <li>
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Ubuntu </b>
                  </li>
                  <li>Ubuntu 16.04 LTS </li>
                  <li>Ubuntu 16.04.1 LTS </li>
                  <li>Ubuntu 16.04.2 LTS </li>
                  <li>Ubuntu 16.04.3 LTS </li>
                  <li>Ubuntu 16.04.4 LTS </li>
                  <li>Ubuntu 16.04.5 LTS </li>
                  <li>Ubuntu 16.04.6 LTS </li>
                  <li>Ubuntu 18.04 LTS </li>
                  <li>Ubuntu 18.04.1 LTS </li>
                  <li>Ubuntu 18.04.2 LTS </li>
                  <li>Ubuntu 18.04.3 LTS </li>
                  <li>Ubuntu 18.04.4 LTS </li>
                  <li>
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Red Hat Enterprise </b>
                  </li>
                  <li>Red Hat Enterprise Linux 7.3 </li>
                  <li>Red Hat Enterprise Linux 7.4</li>
                  <li>Red Hat Enterprise Linux 7.5</li>
                  <li>Red Hat Enterprise Linux 7.6</li>
                  <li>Red Hat Enterprise Linux 7.7</li>
                  <li>Red Hat Enterprise Linux 8</li>
                  <li>Red Hat Enterprise Linux 8.1</li>
                </ul>
             
              <br />

              
                <b style={{ color:"#004bdd", fontWeight:"600"}}>  Login to Dashboard </b>
             <br/>
                This topic describes how to login to TCS ECP dashboard, If you
                are a new TCS ECP customer and don’t have an ECP account,
                contact the cloud administrator and you can Create an account
                and complete the account information and sign up with TCS ECP
                dashboard.
             

             <br/>
                <ul className="text-left">
                  <li>
                    Ask the cloud administrator for the host name or public IP
                    address from which you can access the dashboard, and for
                    your user name and password. If the cloud supports
                    multi-domain model, you also need to ask for your domain
                    name.{" "}
                  </li>
                  <li>
                    Open a web browser, in the address bar, enter the host name
                    or IP address for the dashboard, for
                    example, https://ipAddressOrHostName/.{" "}
                  </li>
                  <li>
                    On the Log In page, enter your user name and password, and
                    click Sign In. If the cloud supports multi-domain model, you
                    also need to enter your domain name.{" "}
                  </li>
                </ul>
             <br/>
                The top of the window displays your user name. You can also
                access the Settings tab (OpenStack dashboard — Settings tab) or
                sign out of the dashboard.
              <br/>
                The visible tabs and functions in the dashboard depend on the
                access permissions, or roles, of the user you are logged in as.
             <br/>
                <ul className="text-left">
                  <li>
                    If you are logged in as an end user, the Project tab
                    (OpenStack dashboard — Project tab) and Identity tab
                    (OpenStack dashboard — Identity tab) are displayed.{" "}
                  </li>
                  <li>
                    If you are logged in as an administrator, the Project tab
                    (OpenStack dashboard — Project tab) and Admin tab (OpenStack
                    dashboard — Admin tab) and Identity tab (OpenStack dashboard
                    — Identity tab) are displayed.{" "}
                  </li>
                </ul>
             
              <br />

            
                <b style={{ color:"#004bdd", fontWeight:"600"}}>  Dashboard – Project Tab </b>
              <br/>
                Projects are organizational units in the cloud and are also
                known as tenants or accounts. Each user is a member of one or
                more projects. Within a project, a user creates and manages
                instances.
                <br />
                From the Project tab, you can view and manage the resources in a
                selected project, including instances and images. You can select
                the project from the drop-down menu at the top left. If the
                cloud supports multi-domain model, you can also select the
                domain from this menu.
             <br/>
                 <b style={{ color:"#004bdd", fontWeight:"600"}}> Compute Tab: </b>
                <ul className="text-left">
                  <li>Overview: View reports for the project. </li>
                  <li>
                    Instances: View, launch, create a snapshot from, stop,
                    pause, or reboot instances, or connect to them through VNC.{" "}
                  </li>
                  <li>
                    Images: View images and instance snapshots created by
                    project users, plus any images that are publicly available.
                    Create, edit, and delete images, and launch instances from
                    images and snapshots.{" "}
                  </li>
                  <li>
                    Key Pairs: View, create, edit, import, and delete key pairs.
                  </li>
                </ul>
             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>  Volume Tab: </b> 
                <ul className="text-left">
                  <li>Volumes: View, create, edit, and delete volumes. </li>
                  <li>Backups: View, create, edit, and delete backups. </li>
                  <li>
                    Snapshots: View, create, edit, and delete volume snapshots.{" "}
                  </li>
                  <li>
                    Consistency Groups: View, create, edit, and delete
                    consistency groups.{" "}
                  </li>
                  <li>
                    Consistency Group Snapshots: View, create, edit, and delete
                    consistency group snapshots.{" "}
                  </li>
                </ul>
              
                <b style={{ color:"#004bdd", fontWeight:"600"}}>  Network Tab: </b>
                <ul className="text-left">
                  <li>Network Topology: View the network topology. </li>
                  <li>
                    Networks: Create and manage public and private networks.{" "}
                  </li>
                  <li>Routers: Create and manage routers. </li>
                  <li>
                    Security Groups: View, create, edit, and delete security
                    groups and security group rules..{" "}
                  </li>
                  <li>
                    Floating IPs: Allocate an IP address to or release it from a
                    project.{" "}
                  </li>
                </ul>
             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Object Store Tab: </b>
                <ul className="text-left">
                  <li>
                    Containers: Create and manage containers and objects.{" "}
                  </li>
                </ul>
              
              <br />

             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Launch and Manage Instances </b>
             <br/>
                Instances are virtual machines that run inside the TCS Private
                Cloud. Users can launch an instance by following the
                instructions prompted on the launch instance dashboard which
                provides you variety of configuration to meet your custom-made
                deployment.
                <br />
                Pre-requities for Launching the Instance:
              <br/>
                Below are the requirements for launching the instances on TCS
                Private Cloud
                <ul className="text-left">
                  <li>Availability Zone </li>
                  <li>Instance Name </li>
                  <li>Instance Count </li>
                  <li>ECP Instance type </li>
                  <li>Instance Boot Source </li>
                  <li>Image </li>
                  <li>Network </li>
                  <li>Security Groups </li>
                  <li>Key Pairs </li>
                  <li>Server Groups </li>
                  <li>Metadata </li>
                </ul>
             
              <br />

              
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Launch an Instance </b>
             <br/>
                Below steps explains step by workflow creation of Adding New
                ESXi host to New VMware Cluster, Provision Storage and other
                fields required for workflow creation.
                <ul className="text-left">
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Compute tab and
                    click Instances category.{" "}
                  </li>
                  <li>
                    The dashboard shows the available instances with its name,
                    image name, private and floating IP addresses, ECP Instance
                    Type, Key Pair, Status, Availability Zone, power state, and
                    so on.{" "}
                  </li>
                  <li>Click on Launch Instance. </li>
                  <li>
                    In the Launch Instance dialog box, specify the following
                    values: Details tab
                    <ul>
                      <li>
                          <b style={{ color:"#004bdd", fontWeight:"600"}}>Instance Name:</b>
                        <br />
                        Assign a name to the Instance. The name you assign here
                        becomes the host name of the server inside the guest
                        operating system.
                      </li>
                      <li>
                          <b style={{ color:"#004bdd", fontWeight:"600"}}>Availability Zone: </b>
                        <br />
                        Select Availability zones for a region. For more
                        information about how to select a Availability Zone, see
                        Regions and Availability Zones sec 2.1. <br />
                        Note: You cannot change the zone after the instance is
                        Launched.
                      </li>
                      <li>
                          <b style={{ color:"#004bdd", fontWeight:"600"}}>Instance Count:</b>
                        <br />
                        To launch multiple instances, enter a value greater
                        than 1. The default is 1.
                      </li>
                      <li>
                          <b style={{ color:"#004bdd", fontWeight:"600"}}>Instance Boot Source: </b>
                        <br />
                        Select Boot source as Image and create a New Volume by
                        entering the size for your root volume. Select Yes on
                        Delete Volume on Instance Delete option delete the
                        volume on instance deletion.
                        <br />
                        Select an image. You can select an image from the lists
                        of available Public Images, Private Custom Images.
                      </li>
                      <li>
                          <b style={{ color:"#004bdd", fontWeight:"600"}}>ECP Instance Types (Flavor): </b>
                        <br />
                        ECP Instance Type defines the compute, memory, and
                        storage capacity of instances. A Instance Type is an
                        available hardware configuration for a server. It
                        defines the size of a virtual server that can be
                        launched.
                      </li>
                      <li>
                          <b style={{ color:"#004bdd", fontWeight:"600"}}>Network Tab </b>
                        <br />
                        Select the Network from the list of available networks.
                        For more information about how to create a new network
                        and assign the subnet, see Create Network sec 4.1.
                      </li>
                      <li>
                          <b style={{ color:"#004bdd", fontWeight:"600"}}>Security Group</b>
                        <br />A security groups are kind of cloud firewall that
                        defines incoming network traffic to your instance. When
                        you launch an instance in a portal, you can select an
                        existing security group to the instance or you can
                        assign the default security group to the instance.
                      </li>
                      <li>
                          <b style={{ color:"#004bdd", fontWeight:"600"}}>Key Pair</b>
                        <br />A key pair allows you to SSH into your newly
                        created instance. You may select an existing key pair,
                        import a key pair, or generate a new key pair.
                      </li>
                      <li>
                          <b style={{ color:"#004bdd", fontWeight:"600"}}>Server Groups</b>
                        <br />
                        High Availability Instance with Anti-affinity Rule
                        <br />A Server group defines deployment strategy for
                        your instances. Select an existing placement group, or
                        create a new one to define the placement of instances on
                        underlying hosts.
                      </li>
                      <li>Click Launch Instance</li>
                    </ul>
                  </li>
                </ul>
              
              <br />

                <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Connect to Instances
                </b>
<br/>
                Connect to the instances that you have launched on the ECP
                dashboard.  Select a suitable tool to connect to ECP instances
                based on the operating systems of the instances, the operating
                system of your local machine. <br />
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>Connection Methods: </b>
                <ul className="text-left">
                  <li>ECP Console </li>
                  <li>PuTTY </li>
                  <li>Remote Desktop Connection </li>
                  <li>SSH Clients</li>
                </ul>
             
              <br />

              
                <b style={{ color:"#004bdd", fontWeight:"600"}}>  Connect to Linux Instances </b>
              <br/>

                There are multiple ways to connect to your instances, the
                operating system of your local computer determines the oprtions
                that you have to connect from your local computer to your linux
                instance
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>Connect to a Linux instance by using an SSH key pair: </b>
                <br />
                This topic defines how to use an SSH key pair to connect to a
                Linux instance from a client that supports SSH commands. SSH key
                pairs are a secure and convenient method for logon
                authentication.
                <br />
                The following section uses PuTTYgen to convert the private key
                file format from .pem to .ppk. The section also describes how to
                use an SSH key pair to connect to a Linux instance from Windows
                machine.
                <ul className="text-left">
                  <li>
                    Download and install PuTTYgen and PuTTY on the windows
                    machine.{" "}
                  </li>
                  <li>
                    Convert the private key file format from .pem to .ppk.
                    <ul>
                      <li>Start PuTTYgen. </li>
                      <li>
                        Set Type of key to generate to RSA and click Load{" "}
                      </li>
                      <li>
                        Select the .pem private key file that you want to
                        convert.{" "}
                      </li>
                      <li>In the dialog box that appears, click OK</li>
                      <li>Click Save private key. </li>
                      <li>In the dialog box that appears, click Yes. </li>
                      <li>
                        Specify the name of the .ppk private key file and
                        click Save.{" "}
                      </li>
                    </ul>
                  </li>
                  <li>Start PuTTY. </li>
                  <li>
                    Configure the private key file that is used for
                    authentication
                    <ul>
                      <li>Choose Connection - SSH - Auth. </li>
                      <li>Click Browse…. </li>
                      <li>
                        Select the .ppk private key file that has been
                        converted.{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    Configure the required parameters to connect to a Linux
                    instance.
                    <ul>
                      <li>Click Session. </li>
                      <li>
                        In Host Name (or IP address), enter the account and
                        public IP address of the instance. The format is root@IP
                        address, such as root@10.10.xx.xxx.{" "}
                      </li>
                      <li>In Port, enter the port number 22. </li>
                      <li>Set Connection type to SSH. </li>
                    </ul>
                  </li>
                  <li>
                    Click Open. Now you have logged on to the instance by using
                    the SSH key pair.{" "}
                  </li>
                </ul>
             
              <br />

             
                 <b style={{ color:"#004bdd", fontWeight:"600"}}> Connect to Windows Instances </b>
             <br/>
                Instance created from ECP Windows operating images by default
                enable you to connect using Remote Desktop. Remote Desktop uses
                the Remote Desktop Protocol (RDP) and enables you to connect to
                the ECP instance.
                <br />
                If the local machine is running Windows Operating system, you
                can use the Remote Desktop Connection to create a remote
                connection to a Windows instance.
                <ul className="text-left">
                  <li>
                    Use any one of the following methods to start Remote Desktop
                    Connection:
                    <ul>
                      <li>Select Start - icon - Remote Desktop Connection. </li>
                      <li>
                        Click the Start icon and search for Remote Desktop
                        Connection.{" "}
                      </li>
                      <li>
                        Press the Windows key + R to open the Run window,
                        type mstsc, and then press Enter.{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    In the Remote Desktop Connection dialog box, follow these
                    steps:
                    <ul>
                      <li>Click the Show Options drop-down box. </li>
                      <li>Enter the name of the Instance or instance IP. </li>
                      <li>
                        Type the user name. The default user name
                        is Administrator{" "}
                      </li>
                      <li>Click Connect. </li>
                    </ul>
                  </li>
                </ul>
             
              <br />

                <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Manage Instances
                </b>

              <br/>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}> Start an Instance </b>
                This topic describes how to start an ECP instance in the ECP
                dashboard.
                <br />
                To start an instance, follow these steps:
                <ul className="text-left">
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    In the left-side navigation pane, choose Project tab, open
                    the Compute tab and click the Instances category.{" "}
                  </li>
                  <li>
                    Find the instance to be started in Instance Category, select
                    the required instance and then, choose More Actions - Start
                    Instances.{" "}
                  </li>
                </ul>
                Note If you want to start multiple Stopped instances, select the
                required instances and then, under the instance list,
                click Start. Read and confirm you agree to the note displayed in
                the dialog box by clicking OK. After the instance is started, it
                enters the Running state. You can also start an instance by
                calling API action through the ECP Cloud CLI.
            <br/>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}> Stop an Instance </b>
                This topic describes how to stop an ECP instance in the ECP
                dashboard.
                <br />
                To start an instance, follow these steps:
                <ul className="text-left">
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    In the left-side navigation pane, choose Project tab, open
                    the Compute tab and click the Instances category.{" "}
                  </li>
                  <li>
                    Find the instance to be stopped in Instance Category, select
                    the required instance and then, choose More Actions - Stop
                    Instances.{" "}
                  </li>
                </ul>
                Note If you want to stop multiple instances, select the required
                instances and then, under the instance list, click Stop. Read
                and confirm you agree to the note displayed in the dialog box by
                clicking OK. After the instance is stopped, it enters
                the Stopped state. You can also start an instance by calling API
                action through the ECP Cloud CLI.
             
             <br/>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}> Hibernate an Instance </b>
                This topic describes how to Hibernate an instance in the ECP
                dashboard.
                <br />
                To Hibernate an instance, follow these steps:
                <ul className="text-left">
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    In the left-side navigation pane, choose Project tab, open
                    the Compute tab and click the Instances category.{" "}
                  </li>
                  <li>
                    Find the instance to be Hibernated in Instance Category,
                    select the required instances and then, choose More
                    Actions - Hibernate Instances.{" "}
                  </li>
                </ul>
                Read and confirm you agree to the note displayed in the dialog
                box by clicking OK. You can also start an instance by
                calling API action through the ECP Cloud CLI.
             

             <br/>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}> Reboot an Instance </b>
                This topic describes how to Reboot an ECP instance in the ECP
                dashboard.
                <br />
                To Reboot an instance, follow these steps:
                <ul className="text-left">
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    In the left-side navigation pane, choose Project tab, open
                    the Compute tab and click the Instances category.{" "}
                  </li>
                  <li>
                    Find the instance to be Rebooted in Instance Category,
                    select the required instance and then, choose More
                    Actions - Soft Reboot Instances.{" "}
                  </li>
                </ul>
                Read and confirm you agree to the note displayed in the dialog
                box by clicking OK. After the instance is Rebooted, it enters
                the Running state. You can also Reboot an instance by
                calling API action through the ECP Cloud CLI.
             

             <br/>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}> Resize an Instance </b>
                This topic describes how to Resize an ECP instance in the ECP
                dashboard.
                <br />
                To Resize an instance, follow these steps:
                <ul className="text-left">
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    In the left-side navigation pane, choose Project tab, open
                    the Compute tab and click the Instances category.{" "}
                  </li>
                  <li>
                    Find the instance to be Resized in Instance Category, select
                    the required instance and then, choose More Actions - Resize
                    Instances.
                  </li>
                </ul>
                Read and confirm you agree to the note displayed in the dialog
                box by clicking OK. You can also Delete an instance by
                calling API action through the ECP Cloud CLI.
             
              <br />

               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Create and Manage Networks
                </b>

             <br/>
                ECP Networking service allows users to set up and define network
                connectivity and addressing in the cloud. ECP Networking handles
                the creation and management of a virtual networking
                infrastructure, including networks, switches, subnets, and
                routers. ECP Network supports each tenant having multiple
                private networks and enables tenants to choose their own IP
                addressing scheme.
             
              <br />

              
                <b style={{ color:"#004bdd", fontWeight:"600"}}>  Create Network </b>
             <br/>
                This topic describes how to create a network in the ECP
                dashboard.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Network tab and
                    click Networks category.{" "}
                  </li>
                  <li>Click Create Network. </li>
                  <li>
                    In the Create Network dialog box, specify the following
                    values.
                    <br />
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Network tab </b>
                    Network Name: Specify a name to identify the network.
                    Shared: Share the network with other projects. Non admin
                    users are not allowed to set shared option. Admin State: The
                    state to start the network in. Create Subnet: Select this
                    check box to create a subnet You do not have to specify a
                    subnet when you create a network, but if you do not specify
                    a subnet, the network can not be attached to an instance.{" "}
                    <br />
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Subnet tab </b>
                    Subnet Name: Specify a name for the subnet. Network Address:
                    Specify the IP address for the subnet. IP Version: Select
                    IPv4 or IPv6. Gateway IP: Specify an IP address for a
                    specific gateway. This parameter is optional. Disable
                    Gateway: Select this check box to disable a gateway IP
                    address. Subnet Details tab Enable DHCP: Select this check
                    box to enable DHCP. Allocation Pools: Specify IP address
                    pools. DNS Name Servers: Specify a name for the DNS server.
                    Host Routes: Specify the IP address of host routes.
                  </li>
                  <li>
                    Click Create. The dashboard shows the network on
                    the Networks tab.{" "}
                  </li>
                </ul>
             
              <br />

              
                <b style={{ color:"#004bdd", fontWeight:"600"}}> Create Router </b> 
              <br/>
                A router is a logical component that forwards data packets
                between networks. Routers provide virtual layer-3 services such
                as routing and NAT between self-service and provider networks or
                among self-service networks belonging to a project.
                <br />
                This topic describes how to create a router in the ECP
                dashboard.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Network tab and
                    click Routers category.{" "}
                  </li>
                  <li>Click Create Router. </li>
                  <li>
                    In the Create Router dialog box, specify a name for the
                    router and External Network, and click Create Router. The
                    new router is now displayed in the Routers tab.{" "}
                  </li>
                  <li>
                    To connect a private network to the newly created router,
                    perform the following steps:
                    <ul>
                      <li>
                        On the Routers tab, click the name of the router.{" "}
                      </li>
                      <li>
                        On the Router Details page, click the Interfaces tab,
                        then click Add Interface.{" "}
                      </li>
                      <li>
                        In the Add Interface dialog box, select a Subnet.
                        Optionally, in the Add Interface dialog box, set an IP
                        Address for the router interface for the selected
                        subnet.
                        <br />
                        If you choose not to set the IP Address value, then by
                        default OpenStack Networking uses the first host IP
                        address in the subnet.
                        <br />
                        The Router Name and Router ID fields are automatically
                        updated.{" "}
                      </li>
                      <li>
                        Click Add Interface.
                        <br />
                        You have successfully created the router. You can view
                        the new topology from the Network Topology tab.
                      </li>
                    </ul>
                  </li>
                </ul>
             
              <br />

            
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Create Port </b>
             <br/>
                A port is a connection point for attaching a single device, such
                as the NIC of a virtual server, to a virtual network. The port
                also describes the associated network configuration, such as the
                MAC and IP addresses to be used on that port.
                <br />
                This topic describes how to create a Port in the ECP dashboard.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>On the Project tab, click Networks category. </li>
                  <li>
                    Click on the Network Name of the network in which the port
                    has to be created.{" "}
                  </li>
                  <li>Go to the Ports tab and click Create Port. </li>
                  <li>
                    In the Create Port dialog box, specify the following values.{" "}
                    <br />
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Name:</b> Specify name to identify the port.
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Device ID:</b> Device ID attached to the port.
                    <br />
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Device Owner:</b> Device owner attached to the port.
                    <br />
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Binding Host:</b> The ID of the host where the port is
                    allocated.
                    <br />
                      <b style={{ color:"#004bdd", fontWeight:"600"}}>Binding VNIC Type:</b> Select the VNIC type that is bound
                    to the neutron port.
                  </li>
                  <li>
                    Click Create Port.
                    <br />
                    The new port is now displayed in the Ports list.
                  </li>
                </ul>
            
              <br />

             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Access and Security for Instance </b>
             <br/>
                Before you launch an instance, user should add security group
                rules to enable users to ping and use SSH to connect to the
                instance. Security groups are sets of IP filter rules that
                define networking access and are applied to all instances within
                a project. To do so, you either add rules to the default
                security group Add a rule to the default security group or add a
                new security group with rules.
                <br />
                Key pairs are SSH credentials that are injected into an instance
                when it is launched. To use key pair injection, the image that
                the instance is based on must contain the cloud-init package.
                Each project should have at least one key pair. For more
                information, see the section Add a key pair.
                <br />
                If you have generated a key pair with an external tool, you can
                import it into ECP Cloud. The key pair can be used for multiple
                instances that belong to a project. For more information, see
                the section Import a key pair.
                <br />
                When an instance is created in ECP dashboard, it is
                automatically assigned a fixed IP address in the network to
                which the instance is assigned. This IP address is permanently
                associated with the instance until the instance is terminated.
                However, in addition to the fixed IP address, a floating IP
                address can also be attached to an instance. Unlike fixed IP
                addresses, floating IP addresses are able to have their
                associations modified at any time, regardless of the state of
                the instances involved.
              
              <br />

            
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Add a Key Pair </b>
             <br/>
                This topic describes how to create a Key pair in the ECP
                dashboard. Create at least one key pair for each project.
                <br />
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>On the Project tab, open the Compute tab. </li>
                  <li>
                    Click the Key Pairs tab, which shows the key pairs that are
                    available for this tenant.{" "}
                  </li>
                  <li>Click Create Key Pair. </li>
                  <li>
                    In the Create Key Pair dialog box, enter a name for your key
                    pair, and click Create Key Pair.{" "}
                  </li>
                  <li>Respond to the prompt to download the key pair. </li>
                </ul>
             
              <br />

             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Import a Key Pair </b>
             <br/>
<br/>
                This topic describes how to import a Key pair in the ECP
                dashboard.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>On the Project tab, open the Compute tab. </li>
                  <li>
                    Click the Key Pairs tab, which shows the key pairs that are
                    available for this tenant.{" "}
                  </li>
                  <li>Click Import Key Pair. </li>
                  <li>
                    In the Import Key Pair dialog box, enter the name of your
                    key pair, you can use PuTTYGen to create public keys. Use
                    the PuTTY Key Generator to create and save the keys, then
                    load the public key file or copy the public key into
                    the Public Key box, and then click Import Key Pair.{" "}
                  </li>
                  <li>Save the *.pem file locally. </li>
                  <li>
                    To change its permissions so that only you can read and
                    write to the file, run the following command: $ chmod 0600
                    yourPrivateKey.pem If you are using the Dashboard from a
                    Windows computer, use PuTTYgen to load the *.pem file and
                    convert and save it as *.ppk. For more information see
                    the WinSCP web page for PuTTYgen.{" "}
                  </li>
                  <li>
                    To make the key pair known to SSH, run the ssh-add command.
                    $ ssh-add yourPrivateKey.pem{" "}
                  </li>
                </ul>
                <br />
                The Compute database registers the public key of the key pair.
                <br />
                The Dashboard lists the key pair on the Key Pairs tab.
              
              <br />

                <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Delete a Key Pair
                </b>
<br/>
                Delete the Key Pairs that you no longer needed. After a Key Pair
                is deleted, you can no longer use it to ECP instances. This
                topic describes how to delete a Key pair in the ECP dashboard.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>On the Project tab, open the Compute tab. </li>
                  <li>
                    Click the Key Pairs tab, which shows the key pairs that are
                    available for this tenant.{" "}
                  </li>
                  <li>Select the key pair and click on Delete Key Pair. </li>
                  <li>Confirm Delete Key Pair pop up screen appears. </li>
                  <li>Click Delete Key Pair to delete the Key Pair. </li>
                </ul>
             
              <br />

             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Security Group </b>
              
<br/>
                A security groups are kind of cloud firewall that defines
                incoming network traffic to your instance. You can configure
                security group rules to control the inbound and outbound traffic
                of ECP instance. When you launch an instance in a portal, you
                can select an existing security group to the instance or you can
                assign the default security group to the instance. Each ECP
                instance must belong to at least one security group and can be
                added to multiple security groups at the same time.
           
              <br />

             
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Create a Security Group </b>
              
<br/>
                This topic describes how to Create a Security Group in the ECP
                dashboard.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Network tab. The Security
                    Groups tab shows the security groups that are available for
                    this project.{" "}
                  </li>
                  <li>Click on the Create Security group button. </li>
                  <li>
                    In the Create Security Group dialog box, Enter the name of
                    your new Security Group and the description.{" "}
                  </li>
                  <li>Click the Create Security Group button. </li>
                  <li>
                    After this we can see the new security group created and
                    listed in the groups tab.{" "}
                  </li>
                </ul>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>Note:</b> By default all ports are opened for outbound
                connections and no inbound connections are allowed.
             
              <br />

               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Security Group
                </b>

              <br/>
                A security groups are kind of cloud firewall that defines
                incoming network traffic to your instance. You can configure
                security group rules to control the inbound and outbound traffic
                of ECP instance. When you launch an instance in a portal, you
                can select an existing security group to the instance or you can
                assign the default security group to the instance. Each ECP
                instance must belong to at least one security group and can be
                added to multiple security groups at the same time.
            
              <br />

                <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Add a Rule to Security Group
                </b>

              <br/>
                This topic describes how to Add a Rule to existing Security
                Group in the ECP dashboard.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Network tab. The Security
                    Groups tab shows the security groups that are available for
                    this project.{" "}
                  </li>
                  <li>Select the security group and click Manage Rules. </li>
                  <li>To allow SSH access, click Add Rule. </li>
                  <li>
                    In the Add Rule dialog box, enter the following values:{" "}
                    <br />
                    <ul>
                      <li>Rule: SSH </li>
                      <li>Remote: CIDR </li>
                      <li>CIDR: 0.0.0.0/0 </li>
                        <b style={{ color:"#004bdd", fontWeight:"600"}}>Note:</b> To accept requests from a particular range of
                      IP addresses, specify the IP address block in the CIDR box
                    </ul>
                  </li>
                  <li>Click Add. </li>
                  <li>
                    Instances will now have SSH port 22 open for requests from
                    any IP address.
                  </li>
                  <li>To add an ICMP rule, click Add Rule. </li>
                  <li>
                    In the Add Rule dialog box, enter the following values:{" "}
                    <br />
                    <ul>
                      <li>Rule: All ICMP </li>
                      <li>Direction: Ingress </li>
                      <li>Remote: CIDR </li>
                      <li>CIDR: 0.0.0.0/0 </li>
                    </ul>
                  </li>
                  <li>
                    Click Add.
                    <br />
                    Instances will now accept all incoming ICMP packets.
                  </li>
                </ul>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>Note:</b> By default all ports are opened for outbound
                connections and no inbound connections are allowed.
             
              <br />

               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Create and Manage Volumes
                </b>
<br/>
                This topic provides an overview of available TCS ECP Volumes and
                their features, specifications, and application scenarios.
                <br />
                Volumes are block storage devices that you attach to instances
                to enable persistent storage. You can attach a volume to a
                running instance or detach a volume and attach it to another
                instance at any time. You can also create a snapshot from volume
                or delete a volume.
              
              <br />

                <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Create a Volume
                </b>

              <br/>
                This topic describes how to create a Volume in the ECP
                dashboard.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Volumes tab and
                    click Volumes category.{" "}
                  </li>
                  <li>
                    Click Create Volume. In the dialog box that opens, enter or
                    select the following values. Volume Name: Specify a name for
                    the volume. Description: Optionally, provide a brief
                    description for the volume. Volume Source: Select one of the
                    following options:
                    <ul>
                      <li>
                        No source, empty volume: Creates an empty volume. An
                        empty volume does not contain a file system or a
                        partition table.{" "}
                      </li>
                      <li>
                        Snapshot: If you choose this option, a new field for Use
                        snapshot as a source displays. You can select the
                        snapshot from the list.{" "}
                      </li>
                      <li>
                        Image: If you choose this option, a new field for Use
                        image as a source displays. You can select the image
                        from the list.{" "}
                      </li>
                      <li>
                        Volume: If you choose this option, a new field for Use
                        volume as a source displays. You can select the volume
                        from the list. Options to use a snapshot or a volume as
                        the source for a volume are displayed only if there are
                        existing snapshots or volumes. Type: Select volume form
                        the list of available volume based on the IOPS
                        requirement for the application. Size (GB): The size of
                        the volume in gibibytes (GiB). Availability Zone: Select
                        the Availability Zone from the list. By default, this
                        value is set to the availability zone given by the cloud
                        provider (for example, us-west-az01 or apac-south-az01).
                        For some cases, it could be nova.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Click Create Volume. The dashboard shows the volume on
                    the Volumes tab.
                  </li>
                </ul>
                  <b style={{ color:"#004bdd", fontWeight:"600"}}>Note:</b> By default all ports are opened for outbound
                connections and no inbound connections are allowed.
             
              <br />

              
               <b style={{ color:"#004bdd", fontWeight:"600"}}>   Attach a Volume to Instance </b>
             <br/>
                This topic describes how to attach a volume to an Instance in
                the ECP dashboard. After you create one or more volumes, you can
                attach them to instances. You can attach a volume to one
                instance at a time.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Volumes tab and
                    click Volumes category.{" "}
                  </li>
                  <li>
                    Select the volume to add to an instance and click Manage
                    Attachments.{" "}
                  </li>
                  <li>
                    In the Manage Volume Attachments dialog box, select an
                    instance.{" "}
                  </li>
                  <li>
                    Enter the name of the device from which the volume is
                    accessible by the instance.{" "}
                  </li>
                  <li>
                    Click Attach Volume. The dashboard shows the instance to
                    which the volume is now attached and the device name.{" "}
                  </li>
                </ul>
                You can view the status of a volume in the Volumes tab of the
                dashboard. The volume is either Available or In-Use. Now you can
                log in to the instance and mount, format, and use the disk.
              
              <br />

              
                 <b style={{ color:"#004bdd", fontWeight:"600"}}> Deattach a Volume from an Instance </b>
            <br/>
                This topic describes how to deattach a volume from an Instance
                in the ECP dashboard.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Volumes tab and
                    click Volumes category.{" "}
                  </li>
                  <li>Select the volume and click Manage Attachments. </li>
                  <li>Click Detach Volume and confirm your changes. </li>
                </ul>
              
              <br />

              <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Edit Volume
                </b>

            <br/>
                This topic describes how to edit a volume in the ECP dashboard.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Volumes tab and
                    click Volumes category.{" "}
                  </li>
                  <li>Select the volume that you want to edit. </li>
                  <li>In the Actions column, click Edit Volume. </li>
                  <li>
                    In the Edit Volume dialog box, update the name and
                    description of the volume.{" "}
                  </li>
                  <li>Click Edit Volume. </li>
                </ul>
             
              <br />

              
                <b style={{ color:"#004bdd", fontWeight:"600"}}>  Extend Volume </b>
              
<br/>
                This topic describes how to Extend a volume in the ECP
                dashboard. You can extend the capacity of your system disks and
                data disks to satisfy your business needs and increased
                application requirements. In-use volume cannot be extended if it
                is attached to the instances, requires downtime for the server.
                This requires an attached volume to be detached from an instance
                before the volume can be extended. This means taking the volume
                offline from the Instances.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Volumes tab and
                    click Volumes category.{" "}
                  </li>
                  <li>
                    Select the volume to be extended and click Manage
                    Attachments.{" "}
                  </li>
                  <li>
                    In the Manage Volume Attachments dialog box, select an
                    volume and click on Detach Volume.{" "}
                  </li>
                  <li>Now volume will be changed to Available state. </li>
                  <li>Select the volume that you want to Extend. </li>
                  <li>In the Actions column, click Extend Volume. </li>
                  <li>
                    In the Extend Volume dialog box, choose the new Volume size.{" "}
                  </li>
                  <li>Click Extend Volume in the Extend Volume dialog box. </li>
                  <li>
                    Follow the steps for attaching the volume to instances{" "}
                  </li>
                  <li>
                    Select the volume to add to an instance and click Manage
                    Attachments.{" "}
                  </li>
                  <li>
                    In the Manage Volume Attachments dialog box, select an
                    instance.{" "}
                  </li>
                  <li>Click Attach Volume. </li>
                  <li>
                    Discover the new size of the volume in Operating System.{" "}
                  </li>
                </ul>
             
              <br />

               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Change Volume Type
                </b>

              <br/>
                This topic describes how to change the Volume Type for the
                existing volume in the ECP dashboard. After you created one or
                more volumes, you can attach them to instances. You can attach a
                volume to one instance at a time.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Volumes tab and
                    click Volumes category.{" "}
                  </li>
                  <li>
                    Select the volume that you want to Change the Volume Type.{" "}
                  </li>
                  <li>In the Actions column, click Change Volume Type.</li>
                  <li>
                    In the Change Volume Type dialog box, select the desired
                    volume type from the volume list{" "}
                  </li>
                  <li>
                    Select the Migration Policy as On Demand
                    <br />
                    If the "Migration Policy" is "On Demand", the back end will
                    perform volume migration. Note that migration may take a
                    significant amount of time to complete, sometimes it takes
                    longer time for the larger volume.{" "}
                  </li>
                </ul>
             
              <br />

                <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Delete a Volume
                </b>

              <br/>
                This topic describes how to delete a available volume from an
                Instance in the ECP dashboard. When you delete an instance, the
                data in its attached volumes is not deleted.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Volumes tab and
                    click Volumes category.{" "}
                  </li>
                  <li>
                    Select the check boxes for the volumes that you want to
                    delete.{" "}
                  </li>
                  <li>In the Actions column, click Change Volume Type.</li>
                  <li>Click Delete Volumes and confirm your choice. </li>
                  <li>
                    A message indicates whether the action was successful.{" "}
                  </li>
                </ul>
             
              <br />

               <b style={{ color:"#004bdd", fontWeight:"600"}}>
                Create a Snapshot
                </b>

              <br/>
                This topic describes how to Create a Snapshot from an Instance
                in the ECP dashboard.
                <ul>
                  <li>Log in to the ECP dashboard. </li>
                  <li>
                    On the Project tab, open the Compute tab and click
                    the Instances category.{" "}
                  </li>
                  <li>Select the instance from which to create a snapshot. </li>
                  <li>In the actions column, click Create Snapshot. </li>
                  <li>
                    In the Create Snapshot dialog box, enter a name for the
                    snapshot, and click Create Snapshot.{" "}
                  </li>
                  <li>The Images category shows the instance snapshot </li>
                </ul>
                To launch an instance from the snapshot, select the snapshot and
                click Launch. Proceed with launching an instance.
              
              <br />
          
                </p>

          </div>
        </section>
        </div>
</section>



<section className="section">
    <div class="section__header">
        <section className="quote desert" id="adps" style={{paddingLeft:"90px"}}>
        <h1>Alpha Data Production Services</h1>
            <div className="byline">
              <div className="avatar" />
              by <span>Security Team</span>
            
            </div>
        </section>
        </div>
        
        <div class="section__content" id="style-1">
        <section>
        <div className="container">
        {currentUser =="1447282" ?
   <div>
     <PdfUploader 
        section="AlphaDataProtection"
        func={handleAlphaDataProtection}
      />
  
 </div>
   : 
   <div style={{display:"none"}}>  <PdfUploader 
   section="AlphaDataProtection"
   func={handleAlphaDataProtection}
 /></div>}
      
       <div
        
        style={{ position: "relative", minHeight: "100%", overflowY: "auto" }} // Added overflowY for better scroll handling
        dangerouslySetInnerHTML={{ __html: fourth }}
      ></div>
            <p style={{color:"#0d0d0d" , fontFamily:"inter", fontSize:"16px"}}><span className="drop">ADPS</span> STORAGE HARDWARE – AN ENDLESS BUYING GAME
            <br/>
            A typical organization will refresh their storage infrastructure
                every 3-5 years. But between refresh cycles there is often the
                need to purchase additional disk shelves, array fiber port
                expansions, network switches, software licenses, etc. In recent
                years, there has also been a need to accelerate performance at
                the midpoint of a system’s life cycle in the form of a flash/SSD
                upgrade, adding even more cost to the storage infrastructure
                stack. In short, the storage infrastructure environment rarely
                remains static for long; it is subject to constant change.
            </p>
            <p style={{color:"#0d0d0d" , fontFamily:"inter", fontSize:"16px"}}>
            One of the fundamental issues in trying to manage the storage
                procurement process is that the cost of storage capacity
                constantly goes down over time. This is a good thing; however,
                it has a direct effect on storage purchasing decisions. For
                example, many organizations will purchase only what they think
                the business will need over a 12-month period. That way when
                additional storage capacity is added a year later, the
                acquisition costs may be significantly less than the previous
                purchase. The challenge with this approach is that if the needs
                of the business suddenly change and storage demands unexpectedly
                spike up, IT is left into a clumsy state.
                </p>

          </div>
        </section>
        </div>
</section>

       

<section className="section">
    <div class="section__header">
        <section className="quote desert" id="useraccess" style={{paddingLeft:"90px"}}>
        <h1>User Access Guide</h1>
            <div className="byline">
              <div className="avatar" />
              by <span>Engineering Team</span>
          
            </div>
        </section>
        </div>
        
        <div class="section__content" >
        <section>
        <div className="container" >
        {currentUser =="1447282" ?
   <div>
     <PdfUploader 
        section="Guide"
        func={handleAccessGuide}
      />
  
 </div>
   : 
   <div style={{display:"none"}}>  
    <PdfUploader 
        section="Guide"
        func={handleAccessGuide}
      /></div>}
       
   <div
        
   style={{ position: "relative", minHeight: "100%", overflowY: "auto" }} // Added overflowY for better scroll handling
   dangerouslySetInnerHTML={{ __html: fifth }}
 ></div>
            <p style={{color:"#0d0d0d" , fontFamily:"inter", fontSize:"16px"}}><span className="drop">Guide</span> STORAGE HARDWARE – AN ENDLESS BUYING GAME
            <br/>
            A typical organization will refresh their storage infrastructure
                every 3-5 years. But between refresh cycles there is often the
                need to purchase additional disk shelves, array fiber port
                expansions, network switches, software licenses, etc. In recent
                years, there has also been a need to accelerate performance at
                the midpoint of a system’s life cycle in the form of a flash/SSD
                upgrade, adding even more cost to the storage infrastructure
                stack. In short, the storage infrastructure environment rarely
                remains static for long; it is subject to constant change.
            </p>
            <p style={{color:"#0d0d0d" , fontFamily:"inter", fontSize:"16px"}}>
            One of the fundamental issues in trying to manage the storage
                procurement process is that the cost of storage capacity
                constantly goes down over time. This is a good thing; however,
                it has a direct effect on storage purchasing decisions. For
                example, many organizations will purchase only what they think
                the business will need over a 12-month period. That way when
                additional storage capacity is added a year later, the
                acquisition costs may be significantly less than the previous
                purchase. The challenge with this approach is that if the needs
                of the business suddenly change and storage demands unexpectedly
                spike up, IT is left into a clumsy state.
                </p>

          </div>
        </section>
        </div>
</section>

       
        <section className="comments">
          <div className="container">
            <input type="checkbox" id="toggle" />
            <label className="toggle" htmlFor="toggle">
              Toggle Comments <i className="indicator" />
            </label>
            <div className="wrapper">
              {/* COMMENT 
              <div className="comment">
                <div className="user">
                  <div className="pic" />
                  <div className="date">06/16/2017</div>
                </div>
                <div className="text">
                  <div className="author">Joaquin Phoenix</div>
                  <p>Thats an advanced modern oxymoron. It was good, I like it and I beleived it. Man you got a way with using words. Thats like a lariat that does a snake whip on your back legs, I mean on the back of your legs - not that you have 4 legs - and pulls you this way, and thats what that line did to me and I believed every minute of it. Until I looked at the quadrangle that it produced with the verbs used in the sentence.</p>
                </div>
              </div>
              */}
            </div>
          </div>
        </section>
       
      
      
      </>
    );
  };