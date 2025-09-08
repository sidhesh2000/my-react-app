import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Nav from "./components/NavBar";
// import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Register from "./screens/Register";
import SideBar from "./Sidebar";
// import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Hero } from "./Header";

export const Docs = () => {
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
  
      <div
      style={{
        overflowY: "hidden",
        overflowX: "hidden",
        paddingTop: "50px",
        paddingLeft: "30px",
        paddingRight: "60px",
        textAlign: "justify",}}>
        <SideBar
          setSideNavExpanded={setSideNavExpanded}
          sideNavExpanded={sideNavExpanded}
        />
        <div style={contentStyle}>

        <Hero/>
        <div id="ACS">
              {/*  <Col lg="6" style={{paddingTop:"50px"}}>

<div class="buttonx">
<a class="downloadx" href={require("assets/img/Storage.pdf")} download target="_blank" rel="noopener noreferrer">
<svg className="blinking" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download-cloud"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" className="blinking"></path></svg>
</a>
<p class="topx">Storage Docs</p>
<p class="bottomx">873 kb</p>
</div>

</Col>*/}
              <br />
              <br />
              <br />
              <br />
              <br />
              <h4 class="title-color ">Alpha Storage</h4>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <p
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  STORAGE HARDWARE – AN ENDLESS BUYING GAME
                </p>
                A typical organization will refresh their storage infrastructure
                every 3-5 yearsj. But between refresh cycles there is often the
                need to purchase additional disk shelves, array fiber port
                expansions, network switches, software licenses, etc. In recent
                years, there has also been a need to accelerate performance at
                the midpoint of a system’s life cycle in the form of a flash/SSD
                upgrade, adding even more cost to the storage infrastructure
                stack. In short, the storage infrastructure environment rarely
                remains static for long; it is subject to constant change.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Selecting the right storage hardware can often be a no-win
                proposition for the IT professional. The endless cycle of
                storage tech refreshes and capacity upgrades puts IT planners
                and their administrators into an infinite loop of assessing and
                re-assessing their storage infrastructure requirements. Beyond
                the capital and operational costs and risks of buying and
                implementing new gear are also lost opportunity costs.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                WHAT IS STORAGE AS A SERVICE?
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Storage as a service (SaaS) is a business model in which a
                  company leases or rents its storage infrastructure to another
                  company or individuals to store data. Small companies and
                  individuals often find this to be a convenient methodology for
                  managing backups, and providing cost savings in personnel,
                  hardware and physical space.
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  A company providing SaaS may be called a storage service
                  provider (SSP). Storage as a service can also be referred to
                  as hosted storage.
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  TCS Enterprise Cloud is one of the most trusted storage
                  service provider (SSP) that has a prominent presence across
                  the globe in various geographies hosting multiple enterprise
                  customers. TCS Enterprise Cloud being in the industry for over
                  a decade, clearly understands the road ahead and have already
                  moved into a software defined storage based offering, powered
                  by open source community products, this has proven results
                  with respect to costs, performance and scalability.
                </h5>
              </h5>{" "}
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                WHAT IS SOFTWARE DEFINED STORAGE?
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Software-defined storage is a marketing term for computer data
                  storage software for policy-based provisioning and management
                  of data storage independent of the underlying hardware.
                  However, the marketing term software-defined storage is most
                  often associated with software products designed to run
                  on commodity server hardware with Intel x86 processors and to
                  enable cost savings over traditional storage area network
                  (SAN) and network-attached storage (NAS) systems that tightly
                  couple software and hardware. Factors contributing to the
                  increase in SDS products include the explosive growth of
                  unstructured data, creating a greater need for a scale-out
                  storage architecture; the availability of high-performance
                  server hardware with multicore processors; the general
                  acceptance of virtualization in servers, desktops,
                  applications and networking; and the popularity of cloud
                  technologies.
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Use cases for software-defined storage vary by product with
                  respect to the capability. For instance, common use cases for
                  scale-out object and file SDS include applications that
                  generate significant amounts of unstructured data, such as
                  data analytics and internet of things. Scale-out block SDS may
                  target higher performance workloads such as databases and
                  transactional workloads.
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Preferred SDS products in the market are predominantly open
                  source ones, as it offers abundance of flexibility, scope to
                  add features by customized scripts and capability to integrate
                  with any product that acts as the orchestrator or abstraction
                  layer as the API’s are readily available. In addition, SDS is
                  THE product that offers all three storage services without any
                  additional components or stack.
                </h5>
              </h5>{" "}
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                ALPHA BLOCK STORAGE : Overview/Offering
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  ABS is the block storage service provided by TCS ECP through a
                  dedicated storage network unlike other cloud providers. ABS
                  can be attached to Alpha Cloud Instance (ACI), with file
                  systems and mounting, these devices can be used to host a
                  plethora of applications or databases that demand high
                  performance block storage.
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Based on the widespread performance requirements and industry
                  trend, ABS is backed by high performing NVMe drives for
                  extremely latency sensitive workloads, transactional workloads
                  and Spinning media for low performance entities.
                </h5>
                <br />
                <img
                  alt=""
                  src="assets/Images/st3.png"
                  style={{ width: "60%", alignSelf: "center" }}
                />{" "}
                <br /> <br />
              </h5>{" "}
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Capabilitiies
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Any ABS volume will always have two & three replica copies
                within the respective availability zone. The protection
                capability varies with respect to the underlying tier chosen and
                this framework yields a guaranteed 4 9’s.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Some key features and capabilities that are currently supported
                by ABS are listed below,
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <ul className="text-left">
                  <li>Volume snapshot </li>
                  <li>Snapshot with Layering </li>
                  <li>Volume backups </li>
                  <li>Extending a volume </li>
                  <li>Live Migration </li>
                  <li>Asynchronous Replication </li>
                  <li>Trash for accidental deletion </li>
                  <li>D@RE </li>
                </ul>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Reference Use cases{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Volume type / RU based workload recommendations
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Volume Management{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Creation, Attachment, Multi-Attach, Removal, Extension
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                As a self-service offering, tenants can create volumes from the
                portal, under the Volumes menu, using Create Volume button.
                Below diagram shows a simple volume creation procedure,
                parameters that need to be given as input is
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Volume Name{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Description (Optional)
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Volume Source à Source to create a volume can be any of the
                following,
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <ul className="text-left">
                  <li>Image already placed in AIS </li>
                  <li>
                    Snapshot of a volume to make a copy of an existing volume
                    for recovery / refresh reasons
                  </li>
                  <li>Volume by itself </li>
                </ul>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Volume Type{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Volume type is where the performance aspects required for a
                specific volume comes into effect.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Size of the volume{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Availability Zone à A volume can be spun in an availability zone
                and comes with an additional copy within the same availability
                zone. The availability zone is the common landing entity for
                both ACS and ABS, cross AZ attachment is not supported.
              </h5>
              <br />
              <img src="assets/Images/vol1.jpg" />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Multi-Attach of Volumes{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Applications that require high availability, demand a need for
                shared storage across multiple instances. TCS ECP caters to this
                need with the multi-attach volume types, it’s a separate volume
                type that needs to be chosen, as the standard volume types does
                not offer multi-attach feature. At the moment, Multi-attach
                feature is only available for Stable1 RU in both the
                availability zones.
                <br />
                <br />
                While creating volumes that need multi-attach feature, as
                mentioned in the above step, choose the type that has “ma” as
                suffix. While creation of multi-attach volumes can be performed
                from our console, attaching the volume to instances can only be
                performed through command line.
                <br />
                <br />
                Please note the following known issues and limitations,
                <br />
                <br />
                <ul>
                  <li>
                    Retyping (changing volume-type) an in-use volume from a
                    multi-attach-capable type to a non-multi-attach-capable
                    type, or vice-versa, is not supported.
                  </li>
                  <li>
                    It is not recommended to retype an in-use multi-attach
                    volume if that volume has more than one active read/write
                    attachment.
                  </li>
                </ul>
              </h5>
              <br />
              <img
                alt=""
                src="assets/Images/st1.png"
                style={{ width: "60%" }}
              />{" "}
              <br /> <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Association of volume types{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Once the volume is created, select Manage Attachments from the
                drop-down menu against the volume and a new window appears.
                Choose the instance to which the volume needs to be attached,
                after which the volume gets attached to an instance and changes
                to “In Use” state.
              </h5>
              <br />
              <img src="assets/Images/vol2.png" /> <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Association of Multi-Attach volume types{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Association of multi-attach enabled volume types can only happen
                in command line. Below are the steps to be performed from the
                infra node. Please note that, you may need to get access to the
                infra nodes.
                <br />
                <br />
                Here is the command,
                <br />
                <br />
                openstack --os-compute-api-version 2.60 server add volume{" "}
                <b>server’s uid</b> <b>name of the volume</b>
                <br />
                <br />
                Repeat the same for the other instance with the same volume
                name.
              </h5>
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Protection of Volumes & Instances{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Snaps:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Snapshots are a point in time read only copies of the instances
                and volumes that are live and in use state of a tenant.
                Snapshots provided by ABS offers additional intelligence like
                layering, which helps to maintain a hierarchical structure, with
                which, cloning and recreating an instance for refresh purpose
                will be quicker and simple. Since snapshots are unaware of the
                operating system level file system, it is crash-consistent. We
                recommend to quiesce the IO before initiating snapshots in order
                to obtain a consistent copy.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Snapshots of the instance:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Snapshots of instance, as mentioned above is a crash-consistent
                and is available as a self-service entity. Navigate to Compute à
                Instances à Choose an instance from the list à From the
                drop-down options, choose Create Snapshot à Give a meaningful
                name for the snapshot à Click on Create Snapshot
              </h5>
              <br />
              <img src="assets/Images/vol3.png" />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Note: Scheduling of snapshots are not available now.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Snapshots of volumes:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Like instances, snapshots of volume, is also crash-consistent
                and is available as a self-service entity. Navigate to Volumes à
                Volumes à Choose a volume from the list à From the drop-down
                options, choose Create Snapshot à Give a meaningful name for the
                snapshot à Click on Create Volume Snapshot
              </h5>
              <br />
              <img src="assets/Images/vol4.png" /> <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Note: Default number of snapshots for a volume is 100, if you
                want to increase this number for specific reasons, a request
                needs to be raised to modify the same. Scheduling of snapshots
                are not available now.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Mirroring{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                ABS Volume mirroring :
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Volume mirroring is a functionality enables a specific ABS
                volume to be replicated across Availability zones, in addition
                to the secondary / third copies within the availability zone. In
                order to avail Volume Mirroring, specific volume type must be
                requested as a resource unit during onboarding process and
                choose the same while creating ABS volumes. <br />
                Volume types that is backed by mirroring capability will have a
                suffix of “R”, create a volume in this volume type, no
                additional effort is required to replicate, platform takes care
                of data availability across availability zones.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Data Security{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                D@RE enabled volumes
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Recovery{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                }}
              >
                Recover a volume from Snapshot :
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Recovery of a previously taken snapshots to rebuild against a
                failure, duplicate a production environment is simple and this
                creates a replica including the volumes automatically. <br />
                Navigate to Compute à Images à Choose the snapshot from the list
                à From the drop-down options, choose Launch à Follow the steps
                used to spin an instance, you can choose any name and attributes
                based on the requirements.
              </h5>
              <br />
              <img src="assets/Images/vol5.png" /> <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Navigate again to Compute à Instances à You will be able to the
                instance name that you chose while launching, Power state of the
                instance should Running. If the status is something other than
                this, then please redo the operation, else log a support ticket.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Recover instance from snapshot :
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Like recovery of instance, snapshots of volumes taken are meant
                to retain specific sensitive data. Most prominent use case of
                this is to just protect the volume and contents. <br />
                Navigate to Volumes à Snapshots à Choose the snapshot from the
                list à From the drop-down options, choose Create Volume à Give a
                meaning name alone for the new volume.
              </h5>
              <br />
              <img src="assets/Images/vol6.png" /> <br />
              <img src="assets/Images/vol7.png" /> <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Please note that the newly created volume will inherit the
                volume type from that of the source volume, if you intend to
                change the same, then, please do it before attaching it to the
                instance.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Life Cycle Management{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                RU change from one tier to another :
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Resource unit change is changing a volume’s tier mapping from
                  one volume type to another, this could possibly be done for
                  two major reasons.
                  <ul className="text-left">
                    <li>Change in Performance Requirement </li>
                    <li>Commercial Reasons </li>
                  </ul>
                </h5>
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                We leave the decision on the tenant, to perform these changes,
                while recommendations are always available as part of our
                services. A pre-requisite to change the volume type is to detach
                the volume from the instance, ensure that the status of the
                volume is Available. Please note that volume type change cannot
                be performed on volume with status “In-use”. <br />
                Navigate to Volumes à Volumes à Choose a volume from the list à
                From the drop-down options, choose Change Volume Type à Choose
                the desired Type from the drop-down list à Select Migration
                Policy as On Demand à Click on Change Volume Type
              </h5>
              <br />
              <img src="assets/Images/vol8.png" /> <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                You may be re-directed to the Volumes page and see that Type of
                the volume is changed. Upon confirmation, the volume can be
                attached to the instance.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Reporting <br /> Reporting of capacity provisioned{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Monitoring and Reporting :
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Monitoring & reporting capability of ABS is so overwhelming
                that, over 350 different metrics available, offering an
                exhaustive set of parameters and choose the most essential ones.
                Monitoring of the relevant estate can be fully automated and
                augmented as and when new features are released
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Metering{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Chargeback report
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                ALPHA FILE STORAGE{" "}
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Overview – <br />
                Offering <br />
                Capabilities <br />
                Performance parameters <br />
                Tier wise performance parameters
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Reference Use cases
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                File Share type / RU based workload recommendations
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                File Services Management –
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Creation, Attachment, Multi-Attach, Removal, Extension <br />
                Association of volume types
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Protection of Volumes & Instances –
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Snaps <br />
                Mirroring
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Data Security
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Permissions management
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Recovery
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Recover a share from Snapshot
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Life Cycle Management –
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                RU change from one tier to another
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Reporting
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Reporting of capacity provisioned
                <br />
                Performance Reporting
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Metering
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Chargeback report
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                ALPHA OBJECT STORAGE : Overview/Offering
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Overview TCS Alpha Object Storage is an object storage interface
                built to provide applications with a RESTful gateway. AOS
                supports two interfaces: <br />
                <br />
                a.S3-compatible: Provides object storage functionality with an
                interface that is compatible with a large subset of the Amazon
                S3 RESTful API. <br />
                b.Swift-compatible: Provides object storage functionality with
                an interface that is compatible with a large subset of the
                OpenStack Swift API.
                <br />
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Offering
              </h5>
              <br />
              {/*<img alt="" src={require("assets/img/vol9.png")} style={{width:"60%"}} />  <br/>  <br/>*/}
              <img
                alt=""
                src="assets/Images/st2.png"
                style={{ width: "60%" }}
              />{" "}
              <br /> <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Object Versioning
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Essentially the user has to enable versioning on the per-bucket
                level, otherwise they won't be able to restore deleted/changed
                objects in them. Versioning can be enabled via the aws cli or
                api:
                <br />
                <br />
                To enable versioning of "test2" bucket:
                <br />
                <br />
                aws --endpoint https://aos.us-central-1.tcsecp.com s3api
                put-bucket-versioning --bucket test2 --versioning-configuration
                Status=Enabled
                <br />
                <br />
                After that the request for versions of the bucket "test2" will
                return non-Null versions reflecting creating, changing and
                deleting objects. To restore changed/deleted objects it is just
                necessary to either create a copy of the object from the
                particular version within S3, or simply download the object of
                the particular version:
                <br />
                <br />
                To list the object versions of bucket "test2":
                <br /> <br />
                <img alt="" src="assets/Images/aos_aws.png" /> <br /> <br />
                To copy an object's previous versions:
                <br /> <br />
                aws --endpoint https://aos.us-central-1.tcsecp.com s3api
                copy-object --bucket test2 --key newfile2 --copy-source
                test2/newfile1?versionId=8cEdg4oGBIDuB5yNhuNLRYTn-T7jcOb
                <br /> <br />
                Before enabling the object versioning, the user has to keep in
                mind that this action will increase the utilization of the arbor
                storage and thus will have an impact on the billing.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Bucket Management
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Creation of Buckets / Containers :
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Buckets creation can happen in two different ways, from the
                Alpha platform and S3 Connection SDK’s like Boto. <br />
                Below is the procedure to create a Container (Bucket) from Alpha
                platform. <br />
                Navigate to Project à Object Store à Containers à Button on the
                left named +Container à Below screen appears, give a meaningful
                name to the Container (Bucket) <br />
                Please note the following while creating Container (Buckets),{" "}
                <br />
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <ul className="text-left">
                  <li>
                    Choose Container Access as Not Public, else the container
                    created would be available across Tenants.{" "}
                  </li>
                  <li>Container Names should be unique </li>
                  <li>Container names cannot be formatted as IP Address </li>
                  <li>
                    Container names can range anywhere between 3 to 63
                    characters long{" "}
                  </li>
                  <li>Live Migration </li>
                  <li>
                    Container names must not contain uppercase characters and
                    underscores{" "}
                  </li>
                  <li>
                    Container names must start with a lowercase letter or number{" "}
                  </li>
                  <li>
                    Container names must be a series of one or more labels.
                    Adjacent labels are separated by a single period (.)
                    Container names can contain lowercase letters, numbers and
                    hyphens, each label must start and end with a lower case
                    letter or a number.{" "}
                  </li>
                </ul>
              </h5>
              <br />
              <img src="assets/Images/vol2.png" /> <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                In addition to creating Containers from portal, developers can
                use SDK clients like BOTO (3 and above) to create buckets from
                their respective machines / servers and use them as repos.
                Scripts are available to download from internet. Having chosen
                this route, users will need to get their credentials created
                through a service request.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Uploading & Downloading files / folders
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Once the Container is created using the above-mentioned
                portal-based steps, click on the respective container and you
                would be able to see the options to create folders and upload
                files as shown in the picture below. <br />
                In the below example, we are uploading a file onto the container
                named, test-container. A circle highlighted on top of a button,
                is used to upload files. <br />
                +Folder button right next to it, is used to create folder to
                segregate contents uploaded onto the container
                <br />
                Similarly, S3 enabled SDK clients can also be used to upload
                files and folder to the buckets, without having to access the
                portal. As a pre-requisite, credentials for the respective users
                should have already been obtained.
              </h5>
              <br />
              <img src="assets/Images/vol11.png" /> <br />
              <img src="assets/Images/vol12.png" /> <br />
              <img src="assets/Images/vol13.png" /> <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Deletion / Removal of Buckets / Files
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Like creation requirements, deletion tasks can also be addressed
                from the portal. The below list of images furnishes steps on how
                to delete the files and folders from portal. <br />
                Navigate to Project à Object Store à Containers à Choose the
                container where the file resides à Drop down on the menu to the
                right and click Delete <br />
                <img src="assets/Images/vol20.png" /> <br />
                Like files, please navigate to the folder in the respective
                container and click Delete. <br />
                <img src="assets/Images/vol21.png" /> <br />
                Please note that, when you click Delete on a parent folder, a
                confirmation window pops up, upon confirming, all files and
                folders underneath will get deleted.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Protection of Buckets
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Backup of Buckets : In Road map
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Data Security
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Encrypted Traffic
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Recovery
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Recover a bucket and contents
                <br />
                In Road map
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  Life Cycle Management
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Re-hydration
                  <br />
                  In Road map
                </h5>
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Reporting
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Reporting of buckets provisioned
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Metering
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Chargeback report
              </h5>
            </div>

            <div id="network">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h4 class="title-color ">Network</h4>
              <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Use cases for software-defined storage vary by product with
                  respect to the capability. For instance, common use cases for
                  scale-out object and file SDS include applications that
                  generate significant amounts of unstructured data, such as
                  data analytics and internet of things. Scale-out block SDS may
                  target higher performance workloads such as databases and
                  transactional workloads.
                </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <ul className="text-left">
                  <li>
                    <b>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                    Network Subnetting, Gateway, Routing.
                  </li>
                  <li>
                    <b>Shared Network and Security Group: </b>
                  </li>
                </ul>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Networks can be shared across multiple project within customer
                domain by Domain Administrator. User can host and access
                resources like applications and data in shared network which
                will be accessible for specific or all projects with in customer
                domain. <br />
                Shared resources can be allocated on demand and requirement to
                specific project with limited or full privileges. <br />
                Administrator can leverage Security Groups across multiple
                projects with in customer domain to enable/restrict
                communication for resource in projects. Also, can leverage
                Security Groups and assign a security group from one project to
                another project within domain. <br />
              </h5>
              <br />
              <img src="assets/Images/vol22.png" /> <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Project Networks:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                Network Subnetting, Gateway, Routing.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Users have complete control over virtual networking environment,
                including selection of own IP address range, creation of
                subnets, and configuration of route tables and network gateways.
                Users can use both IPv4 and IPv6 for secure and easy access to
                resources and applications. <br />
                Users can place backend systems, such as databases or
                application servers, in a private-facing subnet with no internet
                access also can use multiple layers of security, including
                security groups and network access control lists, to help
                control access to instances in each subnet.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>Day0: </b>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Creation of Network(s)
                  <ul className="text-left">
                    <li>GUI</li>
                    <li>API</li>
                  </ul>
                </h5>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>From Network Portal: </b>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Navigate to OVERLAY - virtual networks - create virtual network - Create
                  <ul className="text-left">
                    <li>
                      Create network subnets for project instances and assign to
                      the network policy for security services.
                    </li>
                    <li>
                      Minimum fields to need to entered like network Name, IPAM(
                      Default/Custom),Subnet CIDR, DNS/DHCP option for basic
                      network creation.{" "}
                    </li>
                  </ul>
                </h5>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Below are the available fields for virtual network creation.
                <ul className="text-left">
                  <li>
                    <b>Network Name</b> &nbsp; Enter a name for the network.{" "}
                  </li>
                  <li>
                    <b>Subnet Name</b> &nbsp; Enter a name for the subnetwork.{" "}
                  </li>
                  <li>
                    <b>IPAM</b> &nbsp; Select the IPAM associated with the IP
                    block. For new projects, an IPAM can be added while creating
                    the virtual network. VM instances created in this virtual
                    network are assigned an address from this address block
                    automatically by the system when a VM is launched.
                  </li>
                  <li>
                    <b>Network Address</b> &nbsp; Enter the network address in
                    CIDR format.{" "}
                  </li>
                  <li>
                    <b>IP Version*</b> &nbsp; Select IPv4 or IPv6.{" "}
                  </li>
                  <li>
                    <b>Gateway IP</b> &nbsp; Optionally, enter an explicit
                    gateway IP address for the IP address block. Check the
                    Disable Gateway box if no gateway is to be used.
                  </li>
                  <li>
                    <b>Network Policy</b> &nbsp; Any policies already created
                    are listed. To select a policy, click the check box for the
                    policy.{" "}
                  </li>
                </ul>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>Day1: </b>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>From Network Portal:</b>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  
                  Navigate to OVERLAY- Virtual Networks- Edit  <br />
                  <br/>
                  <ul className="text-left">
                  <li>
                  User can edit virtual network for various purpose like to
                  enable network policy and leverage service instances. <br />
                  </li>
                  </ul>
                </h5>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Below Fields are available to configure more advance setting.
                <ul className="text-left">
                  <li>
                    <b>Network Policy</b> &nbsp; Select the policy to be applied
                    to this network from the list of available policies.You can
                    select more than one policy by clicking each one needed.{" "}
                  </li>
                  <li>
                    <b>Subnets</b> &nbsp; Use this area to identify and manage
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
                    <b>Host Routes</b> &nbsp;Use this area to add or remove host
                    routes for this network. Click the + icon to open fields
                    where you can enter the Route Prefix and the Next Hop. Click
                    the + icon to add the information or click the - icon to
                    remove the information.{" "}
                  </li>
                  <li>
                    <b>Advanced Options</b> &nbsp; Use this area to add or
                    remove advanced options, including identifying the Admin
                    State as Up or Down, to identify the network as Shared or
                    External, to add DNS servers, or to define a VxLAN
                    Identifier.{" "}
                  </li>
                  <li>
                    <b>Floating IP Pools</b> &nbsp; Use this area to identify
                    and manage the floating IP address pools for this virtual
                    network. Click the + icon to open fields where you can enter
                    the Pool Name and Projects. Click the + icon to add the
                    information or click the - icon to remove the information.{" "}
                  </li>
                  <li>
                    <b>Route Target</b> &nbsp; Move the scroll bar down to
                    access this area, then specify one or more route targets for
                    this virtual network. Click the + icon to open fields where
                    you can enter route target identifiers. Click the + icon to
                    add the information or click the - icon to remove the
                    information.{" "}
                  </li>
                </ul>
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Network Segments
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Forwarding / Routing within projects and outside projects
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
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
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
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
                </h5>
                <br />
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  Virtual Network:
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
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
                </h5>
                <br />
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Security Group:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Allowed Address Pair:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Logical Router
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                A router is a logical component that forwards data packets
                between networks. It also provides Layer 3 and NAT forwarding to
                provide external network access for servers on project networks.
                The attached networks to router can communicate each other
                without any L3/L4 resections by default. Once the network
                attached the gateway of the virtual instances will be reside the
                logical router.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Network Policy
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                A network policy/FWaaS is an additional layer of security for
                your project that acts as a firewall (L3/L4) for controlling
                traffic in and out for one or more networks. Users can define a
                policy, then define a rule or rules to be applied in that
                policy. Users can define parameters such as the type and
                direction of traffic for the rule, the source and destination of
                that traffic, traffic originating from or destined for specific
                ports, the sequence in which to apply a rule.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Security Policy (Tag based)
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Service Instance
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                A service instance is the instantiation of the selected service
                template to create one or more containers that provide the
                service (for example, a firewall). When you create a service
                instance, you select a service template that defines the
                instance. You also associate the interfaces in the service
                template with the virtual networks needed to direct traffic into
                and out of the service instance.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                External Network (Floating IP Network)
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                External network will be attached to Logical router as gateway
                and used for connecting the internet from project virtual
                networks. From external network, float IP pool will be carved
                out and can be assigned to specific projects. Project virtual
                instances and load balancer VIP can leverage the float IP to
                establish access from internet to project.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                SNAT (Source Network Address Translation)
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                IP Addressing – v4 & v6
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                TCS Cloud supported IPv4 and IPv6 address schema. Users can
                leverage and configure IP schema per requirements and host the
                applications and resources for the projects. At present user can
                use the IPv4 and IPv6 from Day 0 for all type of network and
                security policies. There are some network functions like load
                balancer still only support using IPv4 and IPv6 support is on
                the roadmap.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Security
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                Network Subnetting, Gateway, Routing, NAT, TCP/UDP/IPSEC
                protocol.
              </h5>
              <br />
              <div class="tabx">
                <input type="checkbox" id="chck1" checked />
                <label class="tabx-label" for="chck1">
                  FWaaS/Network policy
                </label>
                <div class="tabx-content">
                  <h5
                    style={{
                      fontFamily:
                        "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5em",
                    }}
                  >
                    A network policy/fwaas is an additional layer of security
                    for your project that acts as a firewall (L3/L4) for
                    controlling traffic in and out for one or more networks.
                    Users can define a policy, then define a rule or rules to be
                    applied in that policy. Users can define parameters such as
                    the type and direction of traffic for the rule, the source
                    and destination of that traffic, traffic originating from or
                    destined for specific ports, the sequence in which to apply
                    a rule.
                  </h5>
                  <br />

                  <img src="assets/Images/oem.jpg" />
                </div>
              </div>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>Day0: </b>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>From Network Portal: </b>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
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
                </h5>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Below are the available fields for network policy creation.
                <ul className="text-left">
                  <li>
                    <b>Name</b> &nbsp; Enter a name for the policy you are
                    creating.{" "}
                  </li>
                  <li>
                    <b>Policy Rules</b> &nbsp; Use this area to define the rules
                    for the policy you are creating. Click the + (plus sign) to
                    open the fields for defining the rules. Click the – (minus
                    sign) to delete any rule. Multiple rules can be added to a
                    policy. Each policy rule field is described in the following
                    table rows.{" "}
                  </li>
                  <li>
                    <b>Action</b> &nbsp; Define the action to take with traffic
                    that matches the current rule. Select from a list:
                    <b>Pass, Deny.</b>
                  </li>
                  <li>
                    <b>Protocol</b> &nbsp; Define the protocol associated with
                    traffic for this policy rule. Select from a list of
                    available protocols (or ANY): ANY, TCP, UDP, ICMP
                  </li>
                  <li>
                    <b>Ports</b> &nbsp; Use this field to specify that traffic
                    from source ports are associated with this policy rule.
                    Identify traffic from any port or enter a specific port, a
                    list of ports separated with commas, or a range of ports in
                    the form nnnn-nnnnn.
                  </li>
                  <li>
                    <b>Direction</b> &nbsp; Define the direction of traffic to
                    match the rule. For traffic moving in and out, select
                    - (bidirectional). For traffic moving in one direction,
                    select - (unidirectional).
                  </li>
                  <li>
                    <b>Destination</b> &nbsp; Select the destination network for
                    traffic to match this rule. Choose ANY or select from the
                    menu of all available destinations. Destinations are
                    displayed in the form: domain-name:
                    project-name:network-name.
                  </li>
                  <li>
                    <b>Destination</b> &nbsp; Select the destination port for
                    traffic to match this rule. Enter ANY for any destination
                    port or enter a specific port, a list of ports separated
                    with commas, or a range of ports in the form nnnn-nnnnn.
                  </li>
                  <li>
                    <b>Services</b> &nbsp; Select this check box to open a field
                    where you can select from a list of available services to
                    apply to this policy. The services are applied in the order
                    in which they are selected. There is a restricted set of
                    options that can be selected when applying services
                  </li>
                  <li>
                    <b>Mirror</b> &nbsp; Select this check box to open a field
                    where you can select from the list of configured services
                    that you want to mirror in this policy. You can select a
                    maximum of two services to mirror.
                  </li>
                  <li>
                    <b>Log</b> &nbsp; Enable the logging of the policy
                  </li>
                  <li>
                    <b>QoS</b> &nbsp; Enable QoS packets tag for the policy
                    rules traffics
                  </li>
                </ul>
              </h5>
              <b>From Network Portal:</b>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                 Navigate to OVERLAY - Virtual Networks - Edit<br />
                
                 <br/>            

	Once the network policy created, it shall be mapped to the necessary virtual networks.
It can be achieved by edit virtual network and map the policy in the network polices tab.
</h5>
<br/>    
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>Day1: </b>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>From Network Portal:</b>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                 Navigate to OVERLAY - Network Policies - Edit  <br />
                </h5>
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
                    <b>Action</b> &nbsp; Define the action to take with traffic
                    that matches the current rule. Select from a list: Pass,
                    Deny.{" "}
                  </li>
                  <li>
                    <b>Protocol</b> &nbsp; Define the protocol associated with
                    traffic for this policy rule. Select from a list of
                    available protocols (or ANY): ANY, TCP, UDP, ICMP.
                  </li>
                  <li>
                    <b>Source</b> &nbsp;Select the source network for traffic
                    associated with this policy rule. Choose ANY or select from
                    the menu list of all available sources. Sources are
                    displayed in the form: domain-name:
                    project-name:network-name.
                  </li>
                  <li>
                    <b>Ports</b> &nbsp; Use this field to specify that traffic
                    from source ports are associated with this policy rule.
                    Identify traffic from any port or enter a specific port, a
                    list of ports separated with commas, or a range of ports in
                    the form nnnn-nnnnn.
                  </li>
                  <li>
                    <b>Directions</b> &nbsp; Define the direction of traffic to
                    match the rule. For traffic moving in and out,
                    select - (bidirectional). For traffic moving in one
                    direction, select  (unidirectional).
                  </li>
                  <li>
                    <b>Destination</b> &nbsp; Select the destination network for
                    traffic to match this rule. Choose ANY or select from the
                    menu of all available destinations. Destinations are
                    displayed in the form: domain-name:
                    project-name:network-name.
                  </li>
                  <li>
                    <b>Destination</b> &nbsp; Select the destination port for
                    traffic to match this rule. Enter ANY for any destination
                    port or enter a specific port, a list of ports separated
                    with commas, or a range of ports in the form nnnn-nnnnn.
                  </li>
                  <li>
                    <b>Services</b> &nbsp; Select this check box to open a field
                    where you can select from a list of available services to
                    apply to this policy. The services are applied in the order
                    in which they are selected. There is a restricted set of
                    options that can be selected when applying services
                  </li>
                  <li>
                    <b>Mirror</b> &nbsp; Select this check box to open a field
                    where you can select from the list of configured services
                    that you want to mirror in this policy. You can select a
                    maximum of two services to mirror.
                  </li>
                  <li>
                    <b>Log</b> &nbsp; Enable the logging of the policy
                  </li>
                  <li>
                    <b>QoS</b> &nbsp; Enable QoS packets tag for the policy
                    rules traffic.
                  </li>
                </ul>
              </h5>
              <br />
              <div class="tabx">
                <input type="checkbox" id="chck2" checked />
                <label class="tabx-label" for="chck2">
                  Security Groups
                </label>
                <div class="tabx-content">
                  <h5
                    style={{
                      fontFamily:
                        "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5em",
                    }}
                  >
                    <b>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
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
                  </h5>
                  <br />
                  <div class="row">
                    <div class="col-lg-6">
                      <h6 className="text-left" style={{ color: "#01acc1" }}>
                        Security Group UseCase-1
                      </h6>
                      <h5
                        style={{
                          fontFamily:
                            "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                          fontWeight: "500",
                          fontSize: "16px",
                          color: "#000",
                          lineHeight: "1.5em",
                        }}
                      >
                        User can create and assign separate security group to
                        the instances based on the network zones
                      </h5>
                      <img src="assets/Images/sc1.png" />
                    </div>

                    <div className="col-lg-6">
                      <h6 className="text-left" style={{ color: "#01acc1" }}>
                        Security Group UseCase-2
                      </h6>
                      <h5
                        style={{
                          fontFamily:
                            "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                          fontWeight: "500",
                          fontSize: "16px",
                          color: "#000",
                          lineHeight: "1.5em",
                        }}
                      >
                        User can create and assign one or multiple security
                        group to the instances based on the applications
                        requirement to allow/deny access across networks.
                      </h5>
                      <img src="assets/Images/sc2.jpg" />
                    </div>
                  </div>
                </div>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Day0: </b>
                  <h5
                    style={{
                      fontFamily:
                        "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5em",
                    }}
                  >
                    <ul className="text-left">
                      <li>RBAC for Security group at project level.</li>
                      <li>RBAC for Security group at domain level </li>
                    </ul>
                  </h5>
                </h5>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>
                    SECURITY GROUP CREATION
                    <br />
                    From Network Portal:
                  </b>
                  <h5
                    style={{
                      fontFamily:
                        "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5em",
                    }}
                  >
                   Navigate to OVERLAY - Security Groups - Create
                   <br/>
                    <ul className="text-left">
                      <li>Enter the name of the security group.</li>
                      <li>
                        Add the rule for Ingress/Egress with specific CIDR and
                        ports details.
                      </li>
                    </ul>
                  </h5>
                </h5>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Below are the field needs to be filled in security group
                  creation.
                  <ul className="text-left">
                    <li>
                      <b>IP Protocol</b> &nbsp; Select the IP protocol to apply
                      for this rule: TCP, UDP, ICMP.
                    </li>
                    <li>
                      <b>From Port</b> &nbsp; Select the port from which traffic
                      originates to apply this rule. For TCP and UDP, enter a
                      single port or a range of ports. For ICMP rules, enter an
                      ICMP type code.
                    </li>
                    <li>
                      <b>To Port</b> &nbsp; The port to which traffic is
                      destined that applies to this rule, using the same options
                      as in the From Port field.
                    </li>
                    <li>
                      <b>Source</b> &nbsp; Select the source of traffic to be
                      allowed by this rule. Specify subnet—the CIDR IP address
                      or address block of the inter-domain source of the traffic
                      that applies to this rule, or you can choose security
                      group as source. Selecting security group as source allows
                      any other instance in that security group access to any
                      other instance via this rule.
                    </li>
                  </ul>
                </h5>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Day1: </b>
                </h5>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>From Network Portal: </b>
                  <h5
                    style={{
                      fontFamily:
                        "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5em",
                    }}
                  >
                   Navigate to OVERLAY - Security Groups - Edit <br />
                  </h5>
                </h5>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
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
                      <b>IP Protocol</b> &nbsp; Select the IP protocol to apply
                      for this rule: TCP, UDP, ICMP.
                    </li>
                    <li>
                      <b>From Port</b> &nbsp; Select the port from which traffic
                      originates to apply this rule. For TCP and UDP, enter a
                      single port or a range of ports. For ICMP rules, enter an
                      ICMP type code.
                    </li>
                    <li>
                      <b>To Port</b> &nbsp;The port to which traffic is destined
                      that applies to this rule, using the same options as in
                      the From Port field.
                    </li>
                    <li>
                      <b>Source</b> &nbsp; Select the source of traffic to be
                      allowed by this rule. Specify subnet—the CIDR IP address
                      or address block of the inter-domain source of the traffic
                      that applies to this rule, or you can choose security
                      group as source. Selecting security group as source allows
                      any other instance in that security group access to any
                      other instance via this rule.
                    </li>
                  </ul>
                </h5>
                <br />

                <div class="tabx">
                  <input type="checkbox" id="chck3" checked />
                  <label class="tabx-label" for="chck3">
                    {" "}
                    Tag Based Security
                  </label>
                  <div class="tabx-content">
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
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
                    </h5>
                    <br />
                    <img src="assets/Images/vol23.png" />
                  </div>
                </div>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Day0: </b>
                  <h5
                    style={{
                      fontFamily:
                        "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5em",
                    }}
                  >
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
                  </h5>
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Create tags:</b>
                  <br/>

                 <b> From Network Portal:</b>
                  <br/>
Navigate to Security - Tags 
                  <br /> Tags are key and value pairs. Create tags as
                  appropriate for your environment. Tags can be created with a
                  Project scope or a Global scope
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Map the tags</b><br/>
                  Once the tags are created, users can map it the desire
                  networks/ports of the virtual instances to leverage security
                  policy.
                  <br /><br/>
                  <b>
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
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>From Network Portal:</b>
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
                  </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Create Logical Router:</b>
                  <br/>
                  Once the tags are mapped to networks/ports, user need to
                  attach the networks to the logical router to establish the
                  base communication. Later the security policy applied over the
                  communication to restrict the required ports.
                  <br />
                  <br />
                  <b>
                  From Network Portal:
                  </b>
                    <br />
                    Navigate to OVERLAY - Logical Router - Create - attach network
<br/>
                 
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Create Firewall Policy:</b>
                  Firewall polices will be used to add the firewall ruleset for
                  tagged endpoints.
                  <br />
                  <br />
                  <b>
                    From ECP Networks UI:
                    <br />
                    Navigate to Security-Project Scoped Policies-Firewall
                    Polices-Create
                  </b>
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Enter the name and add the firewall rules.
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <ul className="text-left">
                    <li>
                      <b>Name</b> &nbsp; Enter a name for the policy you are
                      creating.{" "}
                    </li>
                    <li>
                      <b>Firewall Rules</b> &nbsp; Use this area to define the
                      rules for the policy you are creating. Click the + (plus
                      sign) to open up the fields for defining the rules. Click
                      the – (minus sign) to delete any rule. Multiple rules can
                      be added to a policy. Each policy rule field is described
                      in the following table rows.
                    </li>
                    <li>
                      <b>Action</b> &nbsp;Define the action to take with traffic
                      that matches the current rule. Select from a list: Pass,
                      Deny.
                    </li>
                    <li>
                      <b>Endpoint Type1</b> &nbsp; Select the source network for
                      traffic associated with this policy rule. Choose ANY or
                      select from the menu list of all available sources.
                      Sources are displayed in the form: domain-name:
                      project-name: network-name.
                    </li>
                    <li>
                      <b>Service</b> &nbsp; Use this field to specify that
                      traffic from source ports are associated with this policy
                      rule. Identify traffic from any port or enter a specific
                      port, a list of ports separated with commas, or a range of
                      ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b>Direction</b> &nbsp; Define the direction of traffic to
                      match the rule. For traffic moving in and out,
                      select  (bidirectional). For traffic moving in one
                      direction, select  (unidirectional).
                    </li>
                    <li>
                      <b>Endpoint Type2</b> &nbsp; Select the destination
                      network for traffic to match this rule. Choose ANY or
                      select from the menu of all available destinations.
                      Destinations are displayed in the form: domain-name:
                      project-name: network-name.
                    </li>
                    <li>
                      <b>Destination</b> &nbsp; Select the destination port for
                      traffic to match this rule. Enter ANY for any destination
                      port or enter a specific port, a list of ports separated
                      with commas, or a range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b>Match Tags</b> &nbsp; Choose the tag type which is
                      configured for applications/server
                    </li>
                    <li>
                      <b> Log</b> &nbsp;Enable the logging of the policy
                    </li>
                  </ul>
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Create Security Policy Sets:</b>
                  <b>
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
                      <b>Name</b> - Enter a name for the policy you are creating.
                    </li>
                    <li>
                      <b>Available Firewall Policies</b> - Polices created for tag
                      based will be listed in available polices which can be
                      associated to security policy set.
                    </li>
                    <li>
                      <b>Associated Firewall Policy</b> - List of polices already
                      associated to the policy set
                    </li>
                  </ul>
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Day1: </b>
                </h5>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Security Policy</b>
                  <br />
                  <b>From Network Portal: </b>
                  <br />
                  <h5
                    style={{
                      fontFamily:
                        "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5em",
                    }}
                  >
                   Navigate to SECURITY - Policies - Edit
                    <br />
                  </h5>
                </h5>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  User can edit the security policy and change the any fields
                  when required.
                  <ul className="text-left">
                    <li>
                      <b>Firewalls Rules</b> - Use this area to define the rules
                      for the policy you are creating. Click the + (plus sign)
                      to open up the fields for defining the rules. Click
                      the – (minus sign) to delete any rule. Multiple rules can
                      be added to a policy. Each policy rule field is described
                      in the following table rows.
                    </li>
                    <li>
                      <b>Action</b> - Define the action to take with traffic that
                      matches the current rule. Select from a list: Pass, Deny.
                    </li>
                    <li>
                      <b>Endpoint Type1</b> - Select the source network for traffic
                      associated with this policy rule. Choose ANY or select
                      from the menu list of all available sources. Sources are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                      <b>Service</b> - Use this field to specify that traffic from
                      particular source ports are associated with this policy
                      rule. Identify traffic from any port or enter a specific
                      port, a list of ports separated with commas, or a range of
                      ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b>Direction</b> - Define the direction of traffic to match
                      the rule. For traffic moving in and out,
                      select  (bidirectional). For traffic moving in one
                      direction, select  (unidirectional).
                    </li>
                    <li>
                      <b>Endpoint Type2</b> - Select the destination network for
                      traffic to match this rule. Choose ANY or select from the
                      menu of all available destinations. Destinations are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                      <b>Destination</b> - Select the destination port for traffic
                      to match this rule. Enter ANY for any destination port or
                      enter a specific port, a list of ports separated with
                      commas, or a range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b>Match Tags</b> - Choose the tag type which is configured
                      for applications/server
                    </li>
                    <li>
                      <b>Log</b> - Enable the logging of the policy
                    </li>
                  </ul>
                </h5>
                <br />
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Security Policy Sets:</b>
                  <br />
                  <b>From Network Portal:</b>
                  <br />
                  <h5
                    style={{
                      fontFamily:
                        "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "1.5em",
                    }}
                  >
                   Navigate to SECURITY - Policies Sets - Edit
                    <br />
                  </h5>
                </h5>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Security policy can be associated or removed when required.
                  <ul className="text-left">
                    <li>
                      <b>Available Firewall Policies</b> - Polices created for tag
                      based will be listed in available polices which can be
                      associated to security policy set.
                    </li>
                    <li>
                      <b>Associated Firewall Policies</b> - List of polices already
                      associated to the policy set
                    </li>
                  </ul>
                </h5>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Analytics reference output for tag-based policy:</b>
                  <br />
                  <b>From Network Portal:</b>
                  <br/>
Navigate to SECURITY - Insights
                  <br /><br/>
                  <img src="assets/Images/ana.png" />
                  </h5>
<br/>
                <div class="tabx">
                  <input type="checkbox" id="chck4" checked />
                  <label class="tabx-label" for="chck4">
                    {" "}
                    OEM- Firewall Support
                  </label>
                  <div class="tabx-content">
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
                      <b> Prerequisite:</b> Basic network knowledge in
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
                    </h5>
                    <br />
                    <img src="assets/Images/oem.jpg" />
                  </div>
                </div>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Day0:</b>
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
                  <b>Deploy Firewall Appliance:</b>
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
                      <b>Transparent or bridge mode</b>
                      <br />
                      Used for services that do not modify the packet. Also
                      known as bump-in-the-wire or Layer 2 mode. Examples
                      include Layer 2 firewall, IDP, and so on.
                    </li>
                    <li>
                      <b>In-network or routed mode</b>
                      <br />
                      Provides a gateway service where packets are routed
                      between the service instance interfaces. Examples include
                      NAT, Layer 3 firewall, load balancer, HTTP proxy, and so
                      on.
                    </li>
                    <li>
                      <b>In-network-nat mode</b>
                      <br />
                      Similar to in-network mode, however, return traffic does
                      not need to be routed to the source network.
                      In-network-nat mode is particularly useful for NAT
                      service. Service Templates
                    </li>
                  </ul>
                  <br />
                  <b>Day0:</b>
                  <br />
                  <b>Service template</b>
                  <br />
                  Service templates map out the basic configuration that uses to
                  instantiate a service instance or container. You configure
                  service templates in the scope of a domain, and you can use
                  the templates on all projects within a domain. You can use a
                  template to launch multiple service instances of the same type
                  in different projects within a domain.
                  <br />
                  <b>From Network Portal:</b>
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
                      <b>Name</b>&nbsp;Enter a name for the policy you are
                      creating.
                    </li>
                    <li>
                      <b>Version</b>&nbsp;Version-2
                    </li>
                    <li>
                      <b>Virtualization type</b>&nbsp;Choose the option for
                      virtual machine
                    </li>
                    <li>
                      <b>Service mode</b>&nbsp;There are three types of service
                      mode available. User can choose based on the use cases.
                      In-Network, In-Network NAT and Transparent.
                    </li>
                    <li>
                      <b>Interfaces and Interface Types</b>&nbsp;Add the
                      interfaces types needed for the service chaining.
                      Interface requirement based on the mode of service
                      chaining instance.Management, Left, Right and Others.
                    </li>
                    <li>
                      <b>Service Type</b>&nbsp;There are two types of services
                      available for instances. Firewall and Analyzer
                    </li>
                  </ul>
                  <br />
                  <b>Virtual networks</b>
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
                  <b>From Network Portal:</b>
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
                      <b>Network Name</b>&nbsp;Enter a name for the network.
                    </li>
                    <li>
                      <b>Subnet Name</b>&nbsp;Enter a name for the subnetwork.
                    </li>
                    <li>
                      <b>IPAM</b>&nbsp;Select the IPAM associated with the IP
                      block. For new projects, an IPAM can be added while
                      creating the virtual network. VM instances created in this
                      virtual network are assigned an address from this address
                      block automatically by the system when a VM is launched.
                    </li>
                    <li>
                      <b>Network Address</b>&nbsp;Enter the network address in
                      CIDR format.
                    </li>
                    <li>
                      <b>IP version*</b>&nbsp;Select IPv4 or IPv6.
                    </li>
                    <li>
                      <b>Gateway IP</b>&nbsp;Optionally, enter an explicit
                      gateway IP address for the IP address block. Check the
                      Disable Gateway box if no gateway is to be used.
                    </li>
                    <li>
                      <b>Network Policy</b>&nbsp;Any policies already created
                      are listed. To select a policy, click the check box for
                      the policy.
                    </li>
                  </ul>
                  <br />
                  <b>Service instance</b>
                  A service instance is the instantiation of the selected
                  service template to create one or more containers that provide
                  the service (for example, a firewall). When you create a
                  service instance, you select a service template that defines
                  the instance. You also associate the interfaces in the service
                  template with the virtual networks needed to direct traffic
                  into and out of the service instance.
                  <br />
                  <br />
                  <b>Creating Service Instance:</b>
                  <br />
                  <br />
                  <b>From Network Portal:</b>
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
                      <b>Name</b>&nbsp;Enter a name for the policy you are
                      creating.
                    </li>
                    <li>
                      <b>Service Template</b>&nbsp;The available templates will
                      be listed, and user shall choose the right one for the
                      service instance type.
                    </li>
                    <li>
                      <b>Interface Types</b>&nbsp;Select the virtual network for
                      interfaces types needed for the service chaining.
                      Interface requirement based on the mode of service
                      chaining instance. Management, Left, Right and Others.
                    </li>
                    <li>
                      <b>Port Tuples</b>&nbsp;With a port-tuple object, the user
                      can select ports and pass the port information when
                      creating a service instance. The ports can be created as
                      part of a VM launch from Nova or without using a VM
                      launch.
                    </li>
                    <li>
                      <b>Service Health Check</b>&nbsp;It allows service
                      instance health check configuration on a per interface.
                      This is used to monitor the health of the service.
                    </li>
                    <li>
                      <b>Route Policy</b>&nbsp;There are two types of services
                      available for instances. Firewall and Analyzer
                    </li>
                    <li>
                      <b>Route Aggregate</b>&nbsp;Route aggregation is
                      configured on the service instance. The user can attach
                      multiple route aggregation objects to a service instance.
                      For example, if routes from the Right VN need to be
                      aggregated and re-originated in the route table of the
                      Left VN, the route aggregate object is created with a
                      prefix of the Right VN’s subnet prefix and attached to the
                      left interface of the service instance.
                    </li>
                    <li>
                      <b>Allowed Address Pair</b>&nbsp;Using the allowed address
                      pair extension enables additional IP/MAC pairs to be
                      allowed through ports in service chaining instance.
                    </li>
                    <li>
                      <b>Static Route</b>&nbsp;The static route table will be
                      attached to the correct VM ports of the port tuples to
                      forward traffic to specific direction through VM ports.
                    </li>
                  </ul>
                  <br />
                  <b>Network policy:</b>
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
                  <b>From Network Portal:</b>
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
                      <b>Name</b>&nbsp;Enter a name for the policy you are
                      creating.
                    </li>
                    <li>
                      <b>Policy Rules</b>&nbsp;Use this area to define the rules
                      for the policy you are creating. Click the + (plus sign)
                      to open up the fields for defining the rules. Click
                      the – (minus sign) to delete any rule. Multiple rules can
                      be added to a policy. Each policy rule field is described
                      in the following table rows.
                    </li>
                    <li>
                      <b>Action</b>&nbsp;Define the action to take with traffic
                      that matches the current rule. Select from a list: Pass,
                      Deny.
                    </li>
                    <li>
                      <b>Protocol</b>&nbsp;Define the protocol associated with
                      traffic for this policy rule. Select from a list of
                      available protocols (or ANY): ANY, TCP, UDP, ICMP.
                    </li>
                    <li>
                      <b>Source</b>&nbsp;Select the source network for traffic
                      associated with this policy rule. Choose ANY or select
                      from the menu list of all available sources. Sources are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                      <b>Ports</b>&nbsp;Use this field to specify that traffic
                      from particular source ports are associated with this
                      policy rule. Identify traffic from any port or enter a
                      specific port, a list of ports separated with commas, or a
                      range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b>Direction</b>&nbsp;Define the direction of traffic to
                      match the rule. For traffic moving in and out,
                      select  (bidirectional). For traffic moving in one
                      direction, select  (unidirectional).
                    </li>
                    <li>
                      <b>Destination</b>&nbsp;Select the destination network for
                      traffic to match this rule. Choose ANY or select from the
                      menu of all available destinations. Destinations are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                      <b>Destination</b>&nbsp;Select the destination port for
                      traffic to match this rule. Enter ANY for any destination
                      port or enter a specific port, a list of ports separated
                      with commas, or a range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b>Services</b>&nbsp;Select this check box to open a field
                      where you can select from a list of available services to
                      apply to this policy. The services are applied in the
                      order in which they are selected. There is a restricted
                      set of options that can be selected when applying services
                    </li>
                    <li>
                      <b>Mirror</b>&nbsp;Select this check box to open a field
                      where you can select from the list of configured services
                      that you want to mirror in this policy. You can select a
                      maximum of two services to mirror.
                    </li>
                    <li>
                      <b>Log</b>&nbsp;Enable the logging of the policy
                    </li>
                    <li>
                      <b>QoS</b>&nbsp;Enable QoS packets tag for the policy
                      rules traffics
                    </li>
                  </ul>
                  <br />
                  <b>Day1:</b>
                  <br />
                  <br />
                  When network changes required, users can configure changes in
                  service instance and network policies.
                  <br />
                  Edit Network Policy
                  <br />
                  <b>From Network Portal:</b>
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
                      <b>Action</b>&nbsp;Define the action to take with traffic
                      that matches the current rule. Select from a list: Pass,
                      Deny.
                    </li>
                    <li>
                      <b>Protocol</b>&nbsp;Define the protocol associated with
                      traffic for this policy rule. Select from a list of
                      available protocols (or ANY): ANY, TCP, UDP, ICMP.
                    </li>
                    <li>
                      <b>Source</b>&nbsp;Select the source network for traffic
                      associated with this policy rule. Choose ANY or select
                      from the menu list of all available sources. Sources are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                      <b>Ports</b>&nbsp;Use this field to specify that traffic
                      from particular source ports are associated with this
                      policy rule. Identify traffic from any port or enter a
                      specific port, a list of ports separated with commas, or a
                      range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b>Direction</b>&nbsp;Define the direction of traffic to
                      match the rule. For traffic moving in and out,
                      select  (bidirectional). For traffic moving in one
                      direction, select  (unidirectional).
                    </li>
                    <li>
                      <b>Destination</b>&nbsp;Select the destination network for
                      traffic to match this rule. Choose ANY or select from the
                      menu of all available destinations. Destinations are
                      displayed in the
                      form: domain-name:project-name:network-name.
                    </li>
                    <li>
                      <b>Destination</b>&nbsp;Select the destination port for
                      traffic to match this rule. Enter ANY for any destination
                      port or enter a specific port, a list of ports separated
                      with commas, or a range of ports in the form nnnn-nnnnn.
                    </li>
                    <li>
                      <b>Services</b>&nbsp;Select this check box to open a field
                      where you can select from a list of available services to
                      apply to this policy. The services are applied in the
                      order in which they are selected. There is a restricted
                      set of options that can be selected when applying services
                    </li>
                    <li>
                      <b>Mirror</b>&nbsp;Select this check box to open a field
                      where you can select from the list of configured services
                      that you want to mirror in this policy. You can select a
                      maximum of two services to mirror.
                    </li>
                    <li>
                      <b>Log</b>&nbsp;Enable the logging of the policy
                    </li>
                    <li>
                      <b>QoS</b>&nbsp;Enable QoS packets tag for the policy
                      rules traffic.
                    </li>
                  </ul>
                  <br />
                  <b>Edit Service Instance:</b>
                  <br />
                  <b>From Network Portal:</b>
                  <br />
                  Navigate to SERVICES - Deployments - Create
                  <br />
                  Users can edit the existing service instances
                  <br />
                  Give the detail for below fields to create new template.
                  <br />
                  <li>
                    <b>Service Template</b>&nbsp;The available templates will be
                    listed, and user shall choose the right one for the service
                    instance type.
                  </li>
                  <li>
                    <b>Interface Types</b>&nbsp;Select the virtual network for
                    interfaces types needed for the service chaining. Interface
                    requirement based on the mode of service chaining instance.
                    Management, Left, Right and Others.
                  </li>
                  <li>
                    <b>Port Tuples</b>&nbsp;With a port-tuple object, the user
                    can select ports and pass the port information when creating
                    a service instance. The ports can be created as part of a VM
                    launch from Nova or without using a VM launch.
                  </li>
                  <li>
                    <b>Service Health Check</b>&nbsp;It allows service instance
                    health check configuration on a per interface. This is used
                    to monitor the health of the service.
                  </li>
                  <li>
                    <b>Route Policy</b>&nbsp;There are two types of services
                    available for instances. Firewall and Analyzer
                  </li>
                  <li>
                    <b>Route Aggregate</b>&nbsp;Route aggregation is configured
                    on the service instance. The user can attach multiple route
                    aggregation objects to a service instance. For example, if
                    routes from the Right VN need to be aggregated and
                    re-originated in the route table of the Left VN, the route
                    aggregate object is created with a prefix of the Right VN’s
                    subnet prefix and attached to the left interface of the
                    service instance.
                  </li>
                  <li>
                    <b>Allowed Address Pair</b>&nbsp;Using the allowed address
                    pair extension enables additional IP/MAC pairs to be allowed
                    through ports in service chaining instance.
                  </li>
                  <li>
                    <b>Stactic Route</b>&nbsp;he static route table will be
                    attached to the correct VM ports of the port tuples to
                    forward traffic to specific direction through VM ports.
                  </li>
                </h5>
                <br />

                <div class="tabx">
                  <input type="checkbox" id="chck5" checked />
                  <label class="tabx-label" for="chck5">
                    {" "}
                    Port Mirroring
                  </label>
                  <div class="tabx-content">
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
                      <b>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
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
                    </h5>
                    <br />

                    <img src="assets/Images/port.jpg" />
                  </div>
                </div>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b> Day 0 </b>
                  <ul>
                    <li> Analyzer Image upload </li>
                    <ul>
                      <li>GUI</li>
                      <li>API</li>
                    </ul>
                    <li>Enable Analyzer in required port</li>
                    <li>Network Policy creation </li>
                  </ul>
                </h5>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b> Day 1 </b>
                  <br />
                  <b>
                  From Network Portal:
                    <br />
                    Navigate to OVERLAY - Virtual Ports - Edit - Advance Options - Mirroring
                  </b>
                  <br />
                  Below Fields are available to configure more advance setting.
                  <ul>
                    <li>
                      <b>Analyzer Name</b> &nbsp; Enter the Analyzer name
                    </li>
                    <li>
                      <b>NIC Assisted Mirroring</b> &nbsp; In this approach, it
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
                      <b>Analyzer IP Address</b> &nbsp; IP of the Analyzer to be
                      entered
                    </li>
                    <li>
                      <b>Analyzer Mac Address</b> &nbsp;Mac of the Analyzer to
                      be entered
                    </li>
                    <li>
                      <b>Direction</b>&nbsp;Both / Ingress / Egress
                    </li>
                    <li>
                      <b>Juniper Header</b> &nbsp;Enabled / Disable{" "}
                    </li>
                    <li>
                      <b>Next Hop Mode</b> &nbsp;Dynamic / Static{" "}
                    </li>
                  </ul>
                  <ul>
                    <b> Port Mirroring Benefits </b>
                    <li>
                      <b>More Secure:</b> - Packets are captured at network
                      interface, which cannot be disabled or tampered with from
                      a user space.
                    </li>
                    <li>
                      <b>Individual port monitoring: </b> - Individual ports can
                      be monitored and Analyzed.
                    </li>
                  </ul>
                </h5>

                <div class="tabx">
                  <input type="checkbox" id="chck6" checked />
                  <label class="tabx-label" for="chck6">
                    {" "}
                    Web Application Firewall
                  </label>
                  <div class="tabx-content">
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
                      <b>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
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
                    </h5>
                    <br />
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
                   <b>Features </b> 
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
               <b>     DAY 0</b>
<br/><br/>
<b>Create Policy </b>
<br/>
                  The core of Web application firewall functionality centers around the security policy, which secures a web application server from malicious traffic, Security polices can also include protection against web scraping, cross-site request forgery, and multiple attacks from an IP address.
<br/><br/>
<b>Enable Attack Signatures </b>
<br/>
             Security features provide the ability to detect and thwart known attack patterns, such as those defined in attack signatures.
<br/><br/>
<b>Security Profile Applied in Virtual server </b>
<br/>
              To enforce the security policy and start sending traffic through the system, create a virtual server with an http profile, and enable the security policy you created in the virtual server resources.
<br/><br/>
<b>Create Application Security Logging Profile </b>
<br/>
             Logging profiles determine where events are logged, and which items (such as which parts of requests, or which type of errors) are logged. Events can be logged either locally on the system and viewed in the Event Logs screens, or remotely by the client’s server. 
<br/><br/>
<b>Apply Logging Profile </b>
<br/>
              The logging profile records requests to the virtual server. By default, when you create a security policy using the Deployment wizard, the system associates the log illegal requests profile to the virtual server associated with the policy. You can change which logging profile is associated with the security policy by editing the virtual server.
<br/><br/>
         </h5>     
                  </div>
                </div>

                <div class="tabx">
                  <input type="checkbox" id="chck7" checked />
                  <label class="tabx-label" for="chck7">
                    {" "}
                    DDOS
                  </label>
                  <div class="tabx-content">
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
                      <b>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                      Network Subnetting, Gateway, Routing, NAT, TCP/UDP/IPSEC
                      protocol. Basic/advanced knowledge in application and
                      program functions, application security and threats.
                      Knowledge in network and security attacks and mitigation.
                      <br />
                      <b>OEM DDOS Solution:</b>
                      Advanced Firewall Manager (AFM) provides “Deep” packet
                      inspection it means that AFM is concerned with source IP
                      address and port, destination IP address and port, and
                      protocol, you can apply L4 firewall rules to ALL addresses
                      in Network, SIP and DNS level. AFM adds more than 80 L2-4
                      denial of service attack vector detections and
                      mitigations. This may be combined with ASM to provide L4-7
                      protection.
                    </h5>
                    <br />

                    <img src="assets/Images/oems.png" />
                  </div>
                </div>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b> DAY 0</b>
                  <br />
                  <br />
                  <b>Create Protection profile</b>
                  <br />
                  We need to create a DoS protection profile to define which
                  protection mechanisms to apply to specific protected objects
                  in your network. You can apply one protection profile to
                  multiple protected objects, if they have similar
                  characteristics.
                  <br />
                  <br />
                  <b>DDoS device protection attack types</b>
                  <br />
                  In Device Protection, we can specify thresholds, rate
                  increase, rate limit, and other parameters for device-level
                  DoS attack types, to more accurately detect, track, and rate
                  limit attacks. Broken packets, such as those with bad headers,
                  should be severely rate limited. For Network, DNS & SIP
                  <br />
                  <br />
                  <b>Pool Creation </b>
                  <br />
                  For network Dos protection required pool as member for the
                  next hop IP to where the packet will forward after inspection,
                  in most of case it will be an perimeter FW IP.
                  <br />
                  <br />
                  <b>Configuring dynamic signatures at the device level</b>
                  <br />
                  Dynamic DoS detection creates dynamic signatures for attacks
                  based on changing traffic patterns over time. When an attack
                  is detected, a dynamic signature is created and added to the
                  dynamic signatures list. All packets are then checked against
                  the dynamic signature and mitigated according to internal
                  logic.
                  <br />
                  <br />
                  <b>DDoS protection Applied in Virtual server </b>
                  <br />
                  To enforce the network DDoS protection, create a virtual
                  server as source and destination as any network with all
                  protocols and Vlan and tunnel traffic, and apply the DoS
                  protection in security. Apply the respective pool member in
                  resources.
                  <br />
                  <br />
                  <b>Create DDoS Logging Profile </b>
                  <br />
                  Logging profiles determine where events are logged, if packets
                  of the specified types cross the percentage threshold, an
                  attack is logged and reported. The system continues to check
                  every second and registers an attack for the duration that the
                  threshold is exceeded.
                  <br />
                  <br />
                  <b>Apply Logging Profile </b>
                  <br />
                  The logging profile records requests for the DDoS protection.
                  We can change which logging profile is associated with the
                  DDoS protection by editing the virtual server security tab.
                  <br />
                  <br />
                  <b>DAY 1</b>
                  <br />
                  <br />
                  <b>Application Even Logs:</b>
                  <br />
                  Once we enabled the DDoS protection in the respective VIP for
                  NW , we can check the logs Configuration Utility Event log
                  request.
                  <br />
                  <br />
                  <b>Log Analyze:</b>
                  <br />
                  logging profile determines the type of requests the Network
                  and Protocol logs. We can check the Event logs Network, DNS &
                  SIP protocol wise also through the filter option. Moreover, in
                  Network Events, Auto threshold and Dynamic signatures as well.
                  <br />
                  <br />
                  <b>Modify Existing Policy:</b>
                  <br />
                  We can modify or Edit existing protection profile at any time
                  for based our requirement and we can reapply.
                  <br />
                  <br />
                  <b>Modify Existing Signature:</b>
                  <br />
                  We can change the state of a Dynamic attack signature Enable
                  and Disable and other parameters also.
                </h5>
                <br />

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  LBaaS – Load Balancer as a Service
                </h5>
                <div class="tabx">
                  <input type="checkbox" id="chck8" checked />
                  <label class="tabx-label" for="chck8">
                    {" "}
                    LBaaS – Load Balancer as a Service
                  </label>
                  <div class="tabx-content">
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
                      <b>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
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
                    </h5>
                    <br />
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
                      <ul>
                        <b>Features:</b>
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
                    </h5>
                    <br />
                    <img src="assets/Images/loadx.png" />
                  </div>
                </div>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Each load balancer consists of one or more listeners, pools,
                  pool members, and health monitors.
                  <ul>
                    <li>
                      <b>Listener Details:</b> &nbsp; Port that listens for
                      traffic from a load balancer. Multiple listeners can be
                      associated with a single load balancer.
                    </li>
                    <li>
                      <b>Pool Details:</b> &nbsp; Group of hosts that serves
                      traffic from the load balancer.
                    </li>
                    <li>
                      <b>Pool Members:</b> &nbsp; Server that is specified by
                      the IP address and port for which it uses to serve the
                      traffic it receives from the load balancer.
                    </li>
                    <li>
                      <b>Monitor Details</b> &nbsp; Health monitors are
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
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Day 0:</b>
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
                  <b>From Console Portal:</b><br/>
                  Navigate to Projects - Networks -Load Balancers
                  <br />
                  Click on create to initiate the load balancer configuration.
                  Add the load balancer information:
                  <br />
                  <ul>
                    Enter below field details.
                    <br />
                    <li>
                      <b>Name</b> &nbsp;Enter name for the Load Balancer.
                    </li>
                    <li>
                      <b>IP Address </b> &nbsp;Enter IP Address for the Load
                      Balancer.
                    </li>
                    <li>
                      <b>Description </b> &nbsp;Enter description for the Load
                      Balancer
                    </li>
                    <li>
                      <b>Flavor </b> &nbsp;Select flavor for the Load Balancer
                      (Optional).
                    </li>
                    <li>
                      <b>Subnet </b> &nbsp;Select IPv4 or IPv6 Subnet for Load
                      Balancer VIP.
                    </li>
                    <li>
                      <b>Admin State UP </b> &nbsp;Yes/No
                    </li>
                    <br />
                    <li>Click Next. The Listener fields are displayed. </li>
                    <li>Add the listener information:</li>
                  </ul>
                  <ul>
                    Enter below field details.
                    <br />
                    <li>
                      <b>Name</b> &nbsp;Enter name for the Listener
                    </li>
                    <li>
                      <b>Description </b> &nbsp;Enter description for the
                      Listener
                    </li>
                    <li>
                      <b>Protocol </b> &nbsp;Select Protocol types (HTTPS, HTTP,
                      Terminated_HTTPS, TCP, UDP)
                    </li>
                    <li>
                      <b>Port </b> &nbsp;TCP/UDP Port (1-65535)
                    </li>
                    <li>
                      <b>Client Data Timed out </b> &nbsp;50000 (Optional)
                    </li>
                    <li>
                      <b>TCP Inspect Timeout </b> &nbsp;0 (Optional)
                    </li>
                    <li>
                      <b>Member Connect Timeout </b> &nbsp;50000 (Optional)
                    </li>
                    <li>
                      <b>Member Data Timeout </b> &nbsp;50000 (Optional)
                    </li>
                    <li>
                      <b>Connection Limit </b> &nbsp;-1
                    </li>
                    <li>
                      <b>Admin State UP </b> &nbsp;Yes/No
                    </li>
                  </ul>
                </h5>

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>Day 1:</b>
                  <br />
                  <br />
                  Viewing or Editing Load Balancers
                  <br />
                  Use the following steps to view or edit existing load
                  balancers.
                  <br />
                  <br />
                  <b>From Console Portal:</b>
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
                  <b>Deleting a Load Balancer</b>
                  <br />
                  Use the following steps to delete a load balancer.
                  <br />
                  <br />
                  <b>From Console Portal:</b>
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
                </h5>
                <br />

                <div class="tabx">
                  <input type="checkbox" id="chck9" checked />
                  <label class="tabx-label" for="chck9">
                    OEM Load balancer Support
                  </label>
                  <div class="tabx-content">
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
                      <b>Prerequisite:</b> Basic network knowledge in IPv4/IPv6,
                      Network Subnetting, Gateway, Routing, NAT, TCP/UDP
                      protocol and basic/advanced Load Balancer algorithm,
                      advanced Load balancer types and features.
                      <br />
                      If customers want to have OEM based load balancers like
                      Citrix ADC, F5 LTM, etc. we can also enable into our
                      environment. This will enable the customers to utilize the
                      OEM based advance load balancing features like their
                      existing on-premise data center environment.
                    </h5>
                    <br />
                    <img src="assets/Images/load.png" />
                  </div>
                </div>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
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
                  <b>Day 0:</b>
                  <br />
                  <br />
                  <b>
                  Deployment steps for the VM Citrix ADC / F5 LTM for tenant.
                  </b>
                  <br />
                  1. Login to the tenant environment in open stack to deploy the VM ADC as instance.
                  
                  <br />
                  2. Spin up the OEM load balancers as new instance.
                  <br />
                 <b> From Console UI:</b>
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
                  <b>
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
<b>Navigate to OVERLAY - Virtual Ports - Edit</b>
<br/>
Add the virtual SNIP address under the Allowed Address Pair setting.
<br/><br/>
Add the virtual SNIP in the Address Pair setting of the VM attached virtual ports.
<br/><br/>
<b>Navigate to OVERLAY - Virtual Networks - Edit</b>
<br/>
	Under the advanced option, select the Dynamic Address Learning option.
  <br/><br/>
                  <b>Changes required on OEM Citrix </b>
                  <br />
                  <b>Prerequisite:</b><br/>
From network portal Create VIP networks with allocation pool (.21 to .200) , first 20 IP will used for reservation (Infra,SNIP) purpose and enable dynamic learning option.
Make sure proper security group mapped for VPX attached interfaces.
                  <br />


              <b>    Primary Node: </b>
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
<b>Switch to respective partition:</b>
<ul>
<li>Create secondary virtual SNIP</li>
<li>Add address pair for secondary SNIP in attached/local interfaces of VM</li>
<li>Add required route (default) pointing to SNIP gateway</li>
<li>Configure required VIP and pool member and test the application reachability through VIP.</li>
<li>Repeat the above steps for additional partitions.</li>
</ul>
<br/><br/>
<b>Secondary Node:</b>
<ul>
<li>Take a note of all VM virtual ports IP attached to VM and configure them as SNIP address in appliance in default Partition. </li>
<li>Create VLAN and bind to physical interface and respective SNIP along with partition sharing (mandatory). </li>
<li>Create admin partition and give dummy mac (22:33:44:55:66:77) ( will be replicated from primary) </li>
<li>And map respective vlan to partition </li>
<li>Repeat the above steps for additional partitions. </li>
</ul>
<br/><br/>
<b>Switch to respective partition:</b>
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

<b>Changes required in Big IP F5 LTM:</b>
<br/>
<b>We must use below option to take web GUI:</b>
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
                  <b>Day 1:</b>
                  <br />
                  <b>If customer required adding new interfaces:</b>
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
                </h5>
                <br />

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  Internet Gateway
                </h5>
                <br />
                <br />
                <div class="tabx">
                  <input type="checkbox" id="chck10" checked />
                  <label class="tabx-label" for="chck10">
                    SNAT
                  </label>
                  <br />
                  <div class="tabx-content">
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
                      <b> Overview </b>
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
                    </h5>
                    <br />

                    <img src="assets/Images/snat.png" />
                  </div>
                </div>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b>
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
                  <b>Router SNAT:</b> - SNAT will be enabled at logical router,
                  internet will be extended to all attached virtual network in
                  the router.
                  <br />
                  <br />
                  <b>Day 0:</b>
                  <br />
                  <br />
                  <b>From Network Portal:</b>
                  <br />
                  Navigate to OVERLAY - Logical Router - Create
                  <br />
                  Users can attach the virtual networks which are needed
                  internet access to logician router and by default SNAT
                  function option is enabled router. Users need to attach the
                  external gateway for internet access.
                  <ul>
                    <li>
                      <b>Name</b>&nbsp;Name of your logical router
                    </li>
                    <li>
                      <b>Admin State</b>&nbsp;Administrative state you want the
                      logical router to have when activated
                    </li>
                    <li>
                      <b>Extend to Physical Router</b>&nbsp;Add the devices that
                      will provide routing services. Note: For CRB, select the
                      spine devices to provide routing.
                    </li>
                    <li>
                      <b>External Gateway</b>&nbsp;Specify a gateway to reach
                      networks external to the fabric
                    </li>
                    <li>
                      <b>Connected networks</b>&nbsp;Add the virtual networks
                      (VLANs or VNIs) that you want to connect through the
                      logical router
                    </li>
                  </ul>
                  <b>Distributed SNAT:</b> - SNAT will be enabled at Virtual
                  network providing internet to the created network.
                  <br />
                  <br />
                  <b>Day 0:</b>
                  <br />
                  <br />
                  <b>
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
                  <b>
                    Below are the available fields for virtual network creation.
                  </b>
                  <br />
                  <li>
                    <b>Network Name</b>&nbsp;Enter a name for the network.
                  </li>
                  <li>
                    <b>Subnet Name</b>&nbsp;Enter a name for the subnetwork.
                  </li>
                  <li>
                    <b>IPAM</b>&nbsp;Select the IPAM associated with the IP
                    block. For new projects, an IPAM can be added while creating
                    the virtual network. VM instances created in this virtual
                    network are assigned an address from this address block
                    automatically by the system when a VM is launched.
                  </li>
                  <li>
                    <b>Network Address</b>&nbsp;Enter the network address in
                    CIDR format.
                  </li>
                  <li>
                    <b> IP Version*</b>&nbsp;Select IPv4 or IPv6.
                  </li>
                  <li>
                    <b>Gateway IP</b>&nbsp;Optionally, enter an explicit gateway
                    IP address for the IP address block. Check the Disable
                    Gateway box if no gateway is to be used.
                  </li>
                  <li>
                    <b>Network Policy</b>&nbsp;Any policies already created are
                    listed. To select a policy, click the check box for the
                    policy.
                  </li>
                  <li>
                    <b>Advanced Options</b>&nbsp;Use this area to add or remove
                    advanced options, including identifying the Admin State as
                    Up or Down, to identify the network as Shared or External,
                    to add DNS servers, SNAT and define a VxLAN Identifier.
                  </li>
                  <br />
                  <b>Day 1</b>
                  <br />
                  <br />
                  Users can disable the SNAT If not required for virtual
                  network.
                  <br />
                  Below are the available fields for virtual network.
                  <br />
                  <ul>
                    <li>
                      <b>Subnet Name</b>&nbsp;Enter a name for the subnetwork.
                    </li>
                    <li>
                      <b>IPAM</b>&nbsp;Select the IPAM associated with the IP
                      block. For new projects, an IPAM can be added while
                      creating the virtual network. VM instances created in this
                      virtual network are assigned an address from this address
                      block automatically by the system when a VM is launched.
                    </li>
                    <li>
                      <b>Network Address</b>&nbsp;Enter the network address in
                      CIDR format.
                    </li>
                    <li>
                      <b> IP Version*</b>&nbsp;Select IPv4 or IPv6.
                    </li>
                    <li>
                      <b>Gateway IP</b>&nbsp;Optionally, enter an explicit
                      gateway IP address for the IP address block. Check the
                      Disable Gateway box if no gateway is to be used.
                    </li>
                    <li>
                      <b>Network Policy</b>&nbsp;Any policies already created
                      are listed. To select a policy, click the check box for
                      the policy.
                    </li>
                    <li>
                      <b>Advanced Options</b>&nbsp;Use this area to add or
                      remove advanced options, including identifying the Admin
                      State as Up or Down, to identify the network as Shared or
                      External, to add DNS servers, SNAT and define a VxLAN
                      Identifier.
                    </li>
                  </ul>
                </h5>
                <br />

                <div class="tabx">
                  <input type="checkbox" id="chck11" checked />
                  <label class="tabx-label" for="chck11">
                    {" "}
                    Floating IP
                  </label>
                  <div class="tabx-content">
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
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
                    </h5>
                    <br />

                    <img src="assets/Images/floating.png" />
                  </div>
                </div>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  <b> Day 0:</b>
                  <br />
                  <b>From Network Portal:</b>
                  <br />
                  Navigate to OVERLAY - Floating Ips - Create
                  <br />
                  User can get the required number of floating IPs from the pool
                  by determining the numbers required
                  <br />
                  <br />
                  <b>Day 1:</b>
                  <br />
                  <b>From Network Portal:</b>
                  <br />
                  Navigate to OVERLAY - Virtual Ports - Edit
                  <br />
                  User can associate the Floating IP to the respective Instance
                  / Load balancer VIP Ports.
                  <br />
                  <br />
                  <b>From Network Portal:
</b>
                  <br />
                  Navigate to OVERLAY - Floating IPs
                  <br />
                  User can dis-associate the Floating IP from the respective
                  Instance / Load balancer VIP Ports.
                  <br />
                  <br />
                  <b>From ECP Networks UI:</b>
                  <br />
                  Navigate to Configure-Networking-Floating IPs-Disassociate
                  Port
                  <br />
                  User can release the specific Floating IPs address back to the
                  pool whenever they don’t need. Users cannot get the same IPs
                  once its released back to the pool, as it will be allocated
                  for different Project / Users.
                </h5>
                <br />

                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  Colo Device / Appliance Support
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  Prerequisite: Physical server hardware and software
                  configuration. Basic network knowledge in IPv4/IPv6, Network
                  Subnetting, Gateway, Routing, TCP/UDP protocol, Storage
                  connectivity and types.
                </h5>
                <div class="tabx">
                  <input type="checkbox" id="chck12" checked />
                  <label class="tabx-label" for="chck12">
                    {" "}
                    COLO Network
                  </label>
                  <div class="tabx-content">
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
                      Alpha4 cloud supports Co-location sever solution to be
                      coexist with cloud instance. User can bring their own
                      existing legacy application server and attach to TCS Cloud
                      infra. This co-location server can be maintained and
                      integrated with TCS cloud and leverage network and
                      security functions
                    </h5>
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
                    <h5
                      style={{
                        fontFamily:
                          "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#000",
                        lineHeight: "1.5em",
                      }}
                    >
                      User can leverage cloud storage solution for their
                      COLO/BMS servers. Server will have secure communication to
                      storage cluster. Based on the requirement, storage type
                      and pools will be allocated to the servers. The COLO
                      server can use the TCS cloud storage as part of Storage
                      solution which provides high performance, reliability and
                      scalability.
                    </h5>
                    <br />

                    <img src="assets/Images/colos.jpg" />
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


            <div id="compute">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <h4 class="title-color ">Compute</h4>

              {/* <Col lg="6" style={{paddingTop:"50px"}}>

<div class="buttonx">
<a class="downloadx" href={require("assets/img/Storage.pdf")} download target="_blank" rel="noopener noreferrer">
<svg className="blinking" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download-cloud"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" className="blinking"></path></svg>
</a>
<p class="topx">Compute Docs</p>
<p class="bottomx">873 kb</p>
</div>

</Col>*/}

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                2ECP Platform Overview
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Enterprise cloud platform (ECP) that delivers assured high
                performance, steady, reliable and scalable IaaS service provided
                by TCS for mission critical workloads. Software-defined
                infrastructure enables automation and agility at all levels, and
                accelerates time to market of critical applications. Enterprise
                Cloud Platform (ECP) delivers a seamless user experience.
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Features & Benefits of ECP Cloud <br />
                Instance types
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                ECP Cloud offers predefined Instance type configurations for
                every need from small general purpose workloads to large memory
                instensive workloads and high performance computing workloads.
                Each instance type has precise specifications, including the
                number of vCPUs, memory capacity, and network performance.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Instance
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                An ECP instance is a Virtual Machine that includes basic
                computing components such as CPU, memory, operating system,
                network and disks.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                ECP Image
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                An ECP image stores information that you essential for creating
                an ECP instance. Image is a single file which contains a virtual
                disk that has a bootable operating system installed on it.
                Images are used to create virtual machine instances within the
                ECP cloud. Several Linux distributions and Windows Server
                operating systems are supported in ECP cloud. <br />
                Public images provided by ECP Cloud. Public images include
                Windows Operating system images and Linux Operating system
                images.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Block Storage
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Robust, high performance block storage for your VM instances.
                You can create persistent disks in HDD, SSD and Nvme formats.
                User can also take snapshots and create new persistent disks
                from that snapshot. If a VM instance is terminated, its
                persistent disk retains data and can be attached to another
                instance and depends upon the option seleted during the instance
                creation.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Snapshot
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                A snapshot is a stateful data file of a cloud disk at a certain
                point in time. Snapshots are often used to back up and restore
                data or to create custom images.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  Security group
                </h5>
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
                  A security group works as a cloud virtual firewall for the ECP
                  instances. A security group is a logical grouping of instances
                  placed within the same region that have the same security
                  requirements and require access to each other.
                </h5>
                <br />
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Network
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                ECP Networking handles the creation and management of a virtual
                networking infrastructure, including networks, switches,
                subnets, and routers.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                SSH KeyPair
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Secured way to login to ECP instances. Key Pairs are how you
                login to your instance after it is launched. A Key pair allows
                you to SSH into your newly created instance. You may select an
                existing key pair, import a key pair, or generate a new key
                pair.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Load Balancer
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Load balancing enhances reliability to the web application layer
                by configuring two or more servers or databases to respond to
                requests. Load Balancing features helps you to distribute
                incoming requests across pools of instances. It avoids overload
                of a single server thereby preventing a single point of failure
                for the application. This further improves the performance,
                network throughput, and response time of the servers.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Server Group
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                A Server group defines deployment strategy for your instances.
                Server group defines the placement of instances on underlying
                compute hosts. Anti-Affinity Server Group provides higher
                reliability by placing instances on different compute host,
                decreasing the impact of underlying compute failures. Affinity
                Server Group provides lower latency between nodes by placing
                instances close together within the same compute host.
              </h5>
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Regions and Availability Zones
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                The following is the list of all available ECP Cloud
                Geographies. <br />
                Available Geographies <br />
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.5em",
                  }}
                >
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
                </h5>
              </h5>
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Availability Zones
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                High Availability for the Instances
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                To ensure business reliability and stability, we recommend
                multi-zone deployment and Load Balancer for high availability.
                Instances can be deployed in the same Availability Zone depends
                on the requirements for high availability and network latency.
                If your application needs high availability, design and deploy
                your application to run across different availability zones
                (Data Centers) of same region.
              </h5>
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Instances
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                This topic provides the overview of TCS ECP instances. An ECP
                instance is a virtual machine that consists of basic computing
                components such as CPU, Memory, Storage and Network. When you
                launch an ECP instance you can choose the predefined instance
                types available in TCS ECP cloud which determines the number of
                vCPU, memory, network for your instance which is coming from
                compute host. You can create and manage an instance by using TCS
                ECP end user portal.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                ECP Instance Families
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <ul className="text-left">
                  <li>
                    <b>General-purpose:</b> Provide a balance of compute, memory
                    and network resources and are a good choice for many
                    applications such as small and mid-sized databases, data
                    processing tasks, caching fleets and backend servers for
                    various applications.
                  </li>
                  <li>
                    <b>Compute-Intensive:</b> Optimized for applications that
                    benefit from high compute power and are recommended for
                    running CPU-bound applications such as high traffic
                    front-end fleets, on-demand batch processing, distributed
                    analytics, web servers, batch processing and high
                    performance science and engineering applications.
                  </li>
                  <li>
                    <b>Memory-Intensive:</b> Optimized for memory-intensive
                    applications which offers high memory per core than other
                    instance families. Memory intensive family is recommended
                    for applications such as databases, memcached and other
                    distributed caches and larger deployments of enterprise
                    applications.
                  </li>
                </ul>
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                GENERAL PURPOSE INSTANCE TYPE:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                General-purpose instances offer the best cost-performance and
                balanced CPU-to-memory ratio for a variety of workloads. If you
                are not sure which compute instance is best for your workload,
                using a general-purpose instance type is a good place to start.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>Advantages and Ideal Workload Scenario </b>
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
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                GP Instance Types
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Summary of GP instance types <br />
                Offers a vCPU-to-memory ratio of 1:2
              </h5>
              <br />
              <img src="assets/Images/cap1.jpg" />
              <br />
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                GP2 Instance Types
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Provide a balance of compute, memory and network resources and
                are a good choice for many applications such as small and
                mid-sized databases, data processing tasks, caching fleets and
                backend servers for various applications. <br />
                <br />
                Summary of GP2 Instance types <br />
                Offers a vCPU-to-memory ratio of 1:4.
              </h5>
              <br />
              <img src="assets/Images/cap2.jpg" />
              <br />
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                GP3 Instance Types
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Summary of GP3 Instance types
                <br />
                Offers a vCPU-to-memory ratio of 1:4
              </h5>
              <br />
              <img src="assets/Images/cap3.jpg" />
              <br />
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                COMPUTE-INTENSIVE INSTANCE TYPE:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Compute-Intensive instances types are optimized for applications
                that benefit from high compute power. Compute-intensive instance
                types are recommended for running CPU-bound applications.
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Advantages and Ideal Workload Scenario
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Compute-intensive instances provide ultra-high performance for
                compute-intensive workloads
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                The typical workloads for compute-intensive compute instance
                include:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />
              <img src="assets/Images/cap4.jpg" />
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                MEMORY-INTENSIVE INSTANCE TYPE:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Memory Intensive instance types are designed to deliver fast
                performance for workloads that process large data sets in
                memory. These instances are optimized for memory-intensive
                applications, and are recommended for applications such as
                databases, memcached and other distributed caches and larger
                deployments of enterprise applications
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Advantages and Ideal Workload Scenario
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Memory-Intensive instances offer high amounts of memory compared
                to CPU. As a result,
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                They are well suited for applications that use a lot of memory,
                which include:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <img src="assets/Images/cap5.jpg" />
              <br />
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Images
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                An ECP image stores information that you essential for creating
                an ECP instance. Image is a single file which contains a virtual
                disk that has a bootable operating system installed on it.
                Images are used to create virtual machine instances within the
                ECP cloud.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Image Types
                <br />
                The following are the types of ECP images.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Public Images:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Public images provided by ECP Cloud. Public images include
                Windows Operating system images and Linux Operating system
                images.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Private Images:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Private images are created from instances or snapshots. Only the
                author of a Private image can use, share, and delete the image.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Creating a Private Image:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Creating the Private image from Snapshot:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                This topic describes how to construct a private image by using
                an Snapshot. After creating an instance, you can customize the
                instance according to your requirement and create a private
                image from it. New instances created from the private image
                inherit all the customizations you have made for the original
                instance.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                During private image creation, snapshots are created for all
                disks of the instance, including the system disk and data disks.
                All the created snapshots compose a new private image. The
                following steps details this process.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Delete a Private Image:
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Delete the private images that you no longer need. After a
                private image is deleted, you can no longer use it to create a
                ECP instances. A private image created from an ECP instance
                consists of the snapshots of disks that are attached to the
                instance. If you delete a private image, snapshots contained in
                the image will not be deleted. If you do not want to keep the
                snapshots, navigate to the Snapshots page and delete the
                snapshots on ECP dashboard. For more information, see Delete a
                Snapshot section.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                The following steps details Deleting a Private image.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>Note:</b> If Snapshot deleted for private image, you no
                longer use private image to create a ECP instance. Launch
                instance will fail.
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                The following are the list of availabile Operating Systems for
                ECP image.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <ul className="text-left">
                  <li>
                    <b>Windows </b>{" "}
                  </li>
                  <li>Windows Server 2019 </li>
                  <li>Windows Server 2016 </li>
                  <li>Windows Server 2012 R2 </li>
                  <li>Windows Server 2012 </li>
                  <li>
                    <b>Linux (SUSE, RHEL, UBUNTU)</b>{" "}
                  </li>
                  <li>
                    <b>SUSE </b>
                  </li>
                  <li>SUSE Linux Enterprise Server 12 SP1 </li>
                  <li>SUSE Linux Enterprise Server 12 SP2</li>
                  <li>SUSE Linux Enterprise Server 12 SP3</li>
                  <li>SUSE Linux Enterprise Server 12 SP4</li>
                  <li>SUSE Linux Enterprise Server 12 SP5</li>
                  <li>SUSE Linux Enterprise Server 15 </li>
                  <li>SUSE Linux Enterprise Server 15 SP1 </li>
                  <li>
                    <b>Ubuntu </b>
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
                    <b>Red Hat Enterprise </b>
                  </li>
                  <li>Red Hat Enterprise Linux 7.3 </li>
                  <li>Red Hat Enterprise Linux 7.4</li>
                  <li>Red Hat Enterprise Linux 7.5</li>
                  <li>Red Hat Enterprise Linux 7.6</li>
                  <li>Red Hat Enterprise Linux 7.7</li>
                  <li>Red Hat Enterprise Linux 8</li>
                  <li>Red Hat Enterprise Linux 8.1</li>
                </ul>
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Login to Dashboard
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                This topic describes how to login to TCS ECP dashboard, If you
                are a new TCS ECP customer and don’t have an ECP account,
                contact the cloud administrator and you can Create an account
                and complete the account information and sign up with TCS ECP
                dashboard.
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                The top of the window displays your user name. You can also
                access the Settings tab (OpenStack dashboard — Settings tab) or
                sign out of the dashboard.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                The visible tabs and functions in the dashboard depend on the
                access permissions, or roles, of the user you are logged in as.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Dashboard – Project Tab
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Compute Tab:
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
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Volume Tab:
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
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Network Tab:
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
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Object Store Tab:
                <ul className="text-left">
                  <li>
                    Containers: Create and manage containers and objects.{" "}
                  </li>
                </ul>
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Launch and Manage Instances
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Instances are virtual machines that run inside the TCS Private
                Cloud. Users can launch an instance by following the
                instructions prompted on the launch instance dashboard which
                provides you variety of configuration to meet your custom-made
                deployment.
                <br />
                Pre-requities for Launching the Instance:
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Launch an Instance
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
                        <b>Instance Name:</b>
                        <br />
                        Assign a name to the Instance. The name you assign here
                        becomes the host name of the server inside the guest
                        operating system.
                      </li>
                      <li>
                        <b>Availability Zone: </b>
                        <br />
                        Select Availability zones for a region. For more
                        information about how to select a Availability Zone, see
                        Regions and Availability Zones sec 2.1. <br />
                        Note: You cannot change the zone after the instance is
                        Launched.
                      </li>
                      <li>
                        <b>Instance Count:</b>
                        <br />
                        To launch multiple instances, enter a value greater
                        than 1. The default is 1.
                      </li>
                      <li>
                        <b>Instance Boot Source: </b>
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
                        <b>ECP Instance Types (Flavor): </b>
                        <br />
                        ECP Instance Type defines the compute, memory, and
                        storage capacity of instances. A Instance Type is an
                        available hardware configuration for a server. It
                        defines the size of a virtual server that can be
                        launched.
                      </li>
                      <li>
                        <b>Network Tab </b>
                        <br />
                        Select the Network from the list of available networks.
                        For more information about how to create a new network
                        and assign the subnet, see Create Network sec 4.1.
                      </li>
                      <li>
                        <b>Security Group</b>
                        <br />A security groups are kind of cloud firewall that
                        defines incoming network traffic to your instance. When
                        you launch an instance in a portal, you can select an
                        existing security group to the instance or you can
                        assign the default security group to the instance.
                      </li>
                      <li>
                        <b>Key Pair</b>
                        <br />A key pair allows you to SSH into your newly
                        created instance. You may select an existing key pair,
                        import a key pair, or generate a new key pair.
                      </li>
                      <li>
                        <b>Server Groups</b>
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Connect to Instances
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Connect to the instances that you have launched on the ECP
                dashboard.  Select a suitable tool to connect to ECP instances
                based on the operating systems of the instances, the operating
                system of your local machine. <br />
                <b>Connection Methods: </b>
                <ul className="text-left">
                  <li>ECP Console </li>
                  <li>PuTTY </li>
                  <li>Remote Desktop Connection </li>
                  <li>SSH Clients</li>
                </ul>
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Connect to Linux Instances
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                There are multiple ways to connect to your instances, the
                operating system of your local computer determines the oprtions
                that you have to connect from your local computer to your linux
                instance
                <b>Connect to a Linux instance by using an SSH key pair: </b>
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Connect to Windows Instances
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Manage Instances
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b> Start an Instance </b>
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
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b> Stop an Instance </b>
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
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b> Hibernate an Instance </b>
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
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b> Reboot an Instance </b>
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
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b> Resize an Instance </b>
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Create and Manage Networks
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                ECP Networking service allows users to set up and define network
                connectivity and addressing in the cloud. ECP Networking handles
                the creation and management of a virtual networking
                infrastructure, including networks, switches, subnets, and
                routers. ECP Network supports each tenant having multiple
                private networks and enables tenants to choose their own IP
                addressing scheme.
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Create Network
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
                    <b>Network tab </b>
                    Network Name: Specify a name to identify the network.
                    Shared: Share the network with other projects. Non admin
                    users are not allowed to set shared option. Admin State: The
                    state to start the network in. Create Subnet: Select this
                    check box to create a subnet You do not have to specify a
                    subnet when you create a network, but if you do not specify
                    a subnet, the network can not be attached to an instance.{" "}
                    <br />
                    <b>Subnet tab </b>
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Create Router
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Create Port
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
                    <b>Name:</b> Specify name to identify the port.
                    <b>Device ID:</b> Device ID attached to the port.
                    <br />
                    <b>Device Owner:</b> Device owner attached to the port.
                    <br />
                    <b>Binding Host:</b> The ID of the host where the port is
                    allocated.
                    <br />
                    <b>Binding VNIC Type:</b> Select the VNIC type that is bound
                    to the neutron port.
                  </li>
                  <li>
                    Click Create Port.
                    <br />
                    The new port is now displayed in the Ports list.
                  </li>
                </ul>
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Access and Security for Instance
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Add a Key Pair
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Import a Key Pair
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Delete a Key Pair
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Security Group
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                A security groups are kind of cloud firewall that defines
                incoming network traffic to your instance. You can configure
                security group rules to control the inbound and outbound traffic
                of ECP instance. When you launch an instance in a portal, you
                can select an existing security group to the instance or you can
                assign the default security group to the instance. Each ECP
                instance must belong to at least one security group and can be
                added to multiple security groups at the same time.
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Create a Security Group
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
                <b>Note:</b> By default all ports are opened for outbound
                connections and no inbound connections are allowed.
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Security Group
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                A security groups are kind of cloud firewall that defines
                incoming network traffic to your instance. You can configure
                security group rules to control the inbound and outbound traffic
                of ECP instance. When you launch an instance in a portal, you
                can select an existing security group to the instance or you can
                assign the default security group to the instance. Each ECP
                instance must belong to at least one security group and can be
                added to multiple security groups at the same time.
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Add a Rule to Security Group
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
                      <b>Note:</b> To accept requests from a particular range of
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
                <b>Note:</b> By default all ports are opened for outbound
                connections and no inbound connections are allowed.
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Create and Manage Volumes
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                This topic provides an overview of available TCS ECP Volumes and
                their features, specifications, and application scenarios.
                <br />
                Volumes are block storage devices that you attach to instances
                to enable persistent storage. You can attach a volume to a
                running instance or detach a volume and attach it to another
                instance at any time. You can also create a snapshot from volume
                or delete a volume.
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Create a Volume
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
                <b>Note:</b> By default all ports are opened for outbound
                connections and no inbound connections are allowed.
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Attach a Volume to Instance
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Deattach a Volume from an Instance
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Edit Volume
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Extend Volume
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Change Volume Type
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Delete a Volume
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Create a Snapshot
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
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
              </h5>
              <br />
            </div>

            <br />
            <br />
            <br />

            <div id="adps">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h4 class="title-color ">Alpha Data Protection Services</h4>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b style={{ color: "rgb(0, 126, 185)" }}>
                  Storage Hardware – An Endless Buying game
                </b>
                <br />
                <br />
                A typical organization will refresh their storage infrastructure
                every 3-5 years. But between refresh cycles there is often the
                need to purchase additional <br /> disk shelves, array fiber
                port expansions, network switches, software licenses, etc.In
                recent years, there has also been a need to accelerate <br />{" "}
                performance at the midpoint of a system’s life cycle in the form
                of a flash/SSD upgrade, adding even more cost to the storage
                infrastructure stack.
                <br /> In short, the storage infrastructure environment rarely
                remains static for long; it is subject to constant change.
                <br />
                <br />
                One of the fundamental issues in trying to manage the storage
                procurement process is that the cost of storage capacity
                constantly goes down over time. <br />
                This is a good thing; however, it has a direct effect on storage
                purchasing decisions. For example, many organizations will
                purchase only what they think the business will need over a
                12-month period. That way when additional storage capacity is
                added a year later, the acquisition costs may be significantly
                less than the previous purchase. The challenge with this
                approach is that if the needs of the business suddenly change
                and storage demands unexpectedly spike up, IT is left into a
                clumsy state.
                <br />
                <br />
                Selecting the right storage hardware can often be a no-win
                proposition for the IT professional. The endless cycle of
                storage tech refreshes and capacity <br />
                upgrades puts IT planners and their administrators into an
                infinite loop of assessing and re-assessing their storage
                infrastructure requirements. <br /> Beyond the capital and
                operational costs and risks of buying and implementing new gear
                are also lost opportunity costs.
                <br />
                <br />
                <b style={{ color: "rgb(0, 126, 185)" }}>
                  What is Storage as a Service?
                </b>
                <br />
                <br />
                Storage as a service (SaaS) is a business model in which a
                company leases or rents its storage infrastructure to another
                company or individuals to store data.
                <br /> Small companies and individuals often find this to be a
                convenient methodology for managing backups, and providing cost
                savings in personnel, hardware and physical space.
                <br />
                <br />
                A company providing SaaS may be called a storage service
                provider (SSP). Storage as a service can also be referred to as
                hosted storage.
                <br />
                <br />
                TCS Enterprise Cloud is one of the most trusted storage service
                provider (SSP) that has a prominent presence across the globe in
                various geographies hosting multiple enterprise customers.
                <br /> TCS Enterprise Cloud being in the industry for over a
                decade, clearly understands the road ahead and have already
                moved into a software defined storage based offering, powered by
                open source community products, this has proven results with
                respect to costs, performance and scalability.
                <br />
                <br />
                <b style={{ color: "rgb(0, 126, 185)" }}>
                  What is software defined storage?{" "}
                </b>
                <br />
                <br />
                Software-defined storage is a marketing term for computer data
                storage software for policy-based provisioning and management of
                data storage independent of the underlying hardware. However,
                the marketing term software-defined storage is most often
                associated with software products designed to run on commodity
                server hardware with Intel x86 processors and to enable cost
                savings over traditional storage area network (SAN) and
                network-attached storage (NAS) systems that tightly couple
                software and hardware. Factors contributing to the increase in
                SDS products include the explosive growth of unstructured data,
                creating a greater need for a scale-out storage architecture;
                the availability of high-performance server hardware with
                multicore processors; the general acceptance
                of virtualization in servers, desktops, applications and
                networking; and the popularity of cloud technologies.
                <br />
                <br />
                Use cases for software-defined storage vary by product with
                respect to the capability. For instance, common use cases for
                scale-out object and file SDS include applications that generate
                significant amounts of unstructured data, such as data analytics
                and internet of things. Scale-out block SDS may target higher
                performance workloads such as databases and transactional
                workloads.
                <br />
                <br />
                Preferred SDS products in the market are predominantly open
                source ones, as it offers abundance of flexibility, scope to add
                features by customized scripts and capability to integrate with
                any product that acts as the orchestrator or abstraction layer
                as the API’s are readily available. In addition, SDS is THE
                product that offers all three storage services without any
                additional components or stack.
                <br />
                <br />
                <b style={{ color: "rgb(0, 126, 185)" }}>
                  Alpha DATA PROTECTION SERVICES{" "}
                </b>
                <br />
                <br />
                <b style={{ color: "#000" }}>Overview</b>
                <br />
                <br />
                Alpha Data Protection services offers protection of Alpha
                Compute Instances, Alpha Block Storage volumes into the Alpha
                Object Store of the respective tenant. Multitenant, Secure and
                Self-Service based protection services, ways to achieve the same
                is explained in the following sections.
                <br />
                <br />
                <b style={{ color: "#000" }}>Protection of Workloads</b>
                <br />
                <br />
                Backup of ABS & ACI to AOS
                <br />
                <img src="assets/Images/ex1.png" style={{ width: "70%" }} />
                <br />
                <br />
                From the menu on the left, choose Backups. Click Create Workload
                on the right side of the screen. A new window opens up.
                <br />
                <br />
                Below screenshots, explain the process of giving a name for the
                workload protection, type of workload, “Parallel” is appropriate
                for workloads whose backup need to start at the same time for
                consistency reasons.
                <br />
                <br />
                <img src="assets/Images/ex2.png" style={{ width: "70%" }} />
                <br />
                <br />
                Select the list of instances that needs to be protected as part
                of this protection schedule, by clicking on the + sign.
                <br />
                <br />
                <img src="assets/Images/ex3.png" style={{ width: "70%" }} />
                <br />
                <br />
                Select the Schedule entities like Start time for the backups and
                an end date, with the recurrence interval.
                <br />
                <br />
                <img src="assets/Images/ex4.png" style={{ width: "70%" }} />
                <br />
                <br />
                Choose the number of snapshots to be kept, depending on the
                business and RPO requirements. Always the first backup is a Full
                Backup and rest are incremental.
                <br />
                <br />
                <img src="assets/Images/ex5.png" style={{ width: "70%" }} />
                <br />
                <br />
                If pausing of instance is permitted then you could select the
                checkbox, else, click Create.
                <br />
                <br />
                <img src="assets/Images/ex6.png" style={{ width: "70%" }} />
                <br />
                <br />
                Now the workload created will be listed under the Workloads
                screen. From the drop down menu, the workload could be edited,
                to add/remove more instances, snapshot count & Interval of
                backup.
                <br />
                <br />
                From the same drop down, deleting a workload can be performed,
                by clicking Delete Workload, but please remove all snapshots
                before deleting the workload.
                <br />
                <br />
                An instant snap, out of the schedule can also be performed by
                clicking on Create Snapshot.
                <br />
                <br />
                <img src="assets/Images/ex7.png" />
                <br />
                <br />
                Click on the name of the workload, from the above picture, to
                view the details about the snapshots, status etc.
                <br />
                <br />
                <img src="assets/Images/ex8.png" />
                <br />
                <br />
                Similarly, multiple workloads can be created for protecting
                multiple instances. Please note that an instance can be part of
                one workload only.
                <br />
                <br />
                <b style={{ color: "#000" }}>Recovery of Workloads</b>
                <br />
                <br />
                One Click Restore
                <br />
                <br />
                One Click Restore is meant to recover an instance, in place.
                Which means, against a deletion/corruption of the primary
                instance.
                <br />
                <br />
                Click on the workloads, navigate to Snapshots,
                <br />
                <br />
                <img src="assets/Images/ex9.png" />
                <br />
                <br />
                A list of available schedule of job(s) is seen, click on
                job-scheduler,
                <br />
                <br />
                <img src="assets/Images/ex10.png" />
                <br />
                <br />
                Click on Restores on the top, Click on One-Click Restore.
                <img src="assets/Images/ex11.png" />
                <br />
                <br />
                Give it a name and Description, Click Restore and the instance
                along with all attributes will be restored backup. You can
                verify the same from the Instances tab.
                <br />
                <br />
                <img src="assets/Images/ex12.png" style={{ width: "70%" }} />
                <br />
                <br />
                OneClick is against a disaster on the respective compute, means
                source compute should not exist. If you try to do One-Click
                restore of a live instance, the job will fail.
                <br />
                <br />
                <b style={{ color: "#000" }}>Selective Restore</b>
                <br />
                <br />
                Selective Restore, provides the recovery capability with all
                sorts of flexibility right from changing network mappings,
                availability zones etc. You can also skip instance(s) that does
                not to be restored.
                <br />
                <br />
                <img src="assets/Images/ex13.png" style={{ width: "70%" }} />
                <br />
                <br />
                You could navigate to the respective instances from the listing
                on top, uncheck Include VM in Restore to exclude the VM from
                Restore.
                <br />
                <br />
                Any and all the options seen in the picture can be changed or
                retained as it is according to the restore requirements.
                <br />
                <br />
                <img src="assets/Images/ex14.png" style={{ width: "70%" }} />
                <br />
                <br />
                Network actions, like retaining the same network mapping like
                that of the primary instance, or choosing a different network
                from the list of available networks can also be performed.
                <br />
                <br />
                <img src="assets/Images/ex15.png" style={{ width: "70%" }} />
                <br />
                <br />
                From the volume Types mapping, Volumes attached can be restored
                into a different volume type than that of the primary instance.
                An example use case, is probably create a dev instance of the
                production in a lower tier for some testing / refresh purpose.
                <br />
                <br />
                <img src="assets/Images/ex16.png" style={{ width: "70%" }} />
                <br />
                <br />
                Status of the job can be seen on the Restores screen,
                <br />
                <br />
                <img src="assets/Images/ex17.png" />
                <br />
                <br />
                <b>In-Place Restore</b>
                <br />
                <br />
                In place restore is meant to restore the disks and re-attach to
                the instances. Disks could either be the bootable volume or the
                data disk, which had the application data.
                <br />
                <br />
                <img src="assets/Images/ex18.png" style={{ width: "70%" }} />
                <br />
                <br />
                <b>File and Folder Recovery</b>
                <br />
                <br />
                1. Tvault-frm use this image and spin an instance, preferably
                medium / large size instance, refer to Alpha Compute Service End
                user document for spinning instance.
                <br />
                <br />
                2. Attach a public IP (Floating IP) to the instance.
                <br />
                <br />
                3. Navigate to the snapshots of the respective workload(s),
                click on the dropdown to the right, choose Mount Snapshot.
                <br />
                <br />
                <img src="assets/Images/ex19.png" style={{ width: "70%" }} />
                <br />
                <br />
                4. A new screen appears listing the File Recovery manager(s) to
                choose for mounting,
                <br />
                <br />
                <img src="assets/Images/ex20.png" style={{ width: "70%" }} />
                <br />
                <br />
                5. Select the instance and click Mount.
                <br />
                <br />
                The above step will mount all the snapshots of the workload(s)
                into the File / Folder Recovery Manager instance.
                <br />
                <br />
                Please note, you can only mount one such snapshot at any given
                point in time.
                <br />
                <br />
                Login to the File/ Folder Recovery Manager instance, with user –
                root and password - 52T8FVYZJse. We strongly recommend changing
                the password of root account as soon as you login the first
                time.
                <br />
                <br />
                Type df -kh and you should be able to see all the snapshots
                taken for the workload chosen, this may a take a while to
                complete mounting all available snapshots.
                <br />
                <br />
                Navigate to the respective mount paths by doing a cd into the
                mount path and pick and choose the content that you want to
                restore.
                <br />
                <br />
                After completing the restores, please come back to the above
                screen and click on Unmount Snapshot. This will unmount all the
                snapshots mounted on the File and Folder Recovery manager
                instance.
                <br />
                <br />
                <img src="assets/Images/ex21.png" style={{ width: "70%" }} />
                <br />
                <br />
                You could delete the snapshots in a chronological order, oldest
                first.
                <br />
                <br />
                <b style={{ color: "#000" }}>Monitoring</b>
                <br />
                <br />
                Monitoring of the capacity used on AOS can be seen from the
                Show-back portal.
                <br />
                <br />
                Monitoring of the backup / recovery status can be done by
                navigating into the respective jobs.
                <br />
                <br />
              </h5>
            </div>

            <div id="useraccess">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h4 class="title-color ">User Access Guide</h4>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b style={{ color: "rgb(0, 126, 185)" }}>
                  Accessing ECP Platform{" "}
                </b>
                <br />
                <br />
                Configure Multi Factor Authentication for VPN Access(One Time):
                <br />
                First Time Login to VPN
                <br />
                <br />
                <b style={{ color: "rgb(0, 126, 185)" }}>
                  Login to Cisco AnyConnect Client
                </b>
                <br />
                <br />
                <b>VPN Credentials:</b> <br />
                <b>IP:</b> &nbsp; Beta.tcsecp.com <br />
                <b>Username:</b> &nbsp; EMPID <br />
                Password: (Shared In Mail) <br />
                <img src="assets/Images/pic1.png" />
                <br />
                <img src="assets/Images/pic2.png" />
                <br />
                <br />
                <b style={{ color: "rgb(0, 126, 185)" }}>
                  Remote Desktop to Jump server (ASHTIJMP03.beta.tcsecp.com)
                </b>
                <br />
                <br />
                <b>Note:</b> &nbsp; MAC Users Download Microsoft Remote Desktop
                Client.
                <br />
                <b>Server IP: </b>&nbsp; 172.31.55.21
                <br />
                <b>Hostname:</b> &nbsp; ASHTIJMP03.beta.tcsecp.com
                <br />
                <b>Username: </b>&nbsp; beta\EMPID
                <br />
                <b>Password:</b> &nbsp; BETA Domain password
                <br />
                <br />
                <img src="assets/Images/pic3.png" />
                <br />
                <br />
                <b style={{ color: "rgb(0, 126, 185)" }}>
                  Login to MFA server and generate your MFA token (one-time
                  setup)
                </b>
                <br />
                <br />
                <b>Prerequisite: -</b> From your mobile phone’s app store –
                download Google Authenticator app <br />
                <ul>
                  <li>
                    {" "}
                    SSH into MFA server using putty: ASHPRERAD01 (172.31.55.22)
                  </li>
                  <li>Login using your EMPID as username and your password</li>
                  <li>
                    To generate your own unique MFA Token run command,
                    google-auth
                  </li>
                  <li>
                    {" "}
                    It will generate the QR code for MFA token along with backup
                    codes (for emergency recovery)
                  </li>
                  <li>
                    {" "}
                    Open the Google Authenticator app and scan the QR code
                  </li>
                  <img src="assets/Images/pic4.png" />
                  <li>Logoff from SSH server, Jump server and VPN</li>
                </ul>
                <br />
                <br />
                <b style={{ color: "rgb(0, 126, 185)" }}>
                  Login Using Multi Factor Authentication for accessing (Beta)
                  Alpha 4.0:
                </b>
                <br />
                <ul>
                  <li> Open Cisco AnyConnect VPN client</li>
                  <li> Enter your EMPID as username</li>
                  <li>
                    {" "}
                    In Password field enter your password suffixed with 6 digit
                    token generated from Google Authenticator app
                  </li>
                </ul>
                <img src="assets/Images/pic5.png" />
                <br />
                <br />
                <b style={{ color: "rgb(0, 126, 185)" }}>
                  Login to Alpha4 ECP Console
                </b>
                <br />
                <br />
                The Below Steps will explain how to login to TCS ECP console,
                <br />
                <ul>
                  <li> After Login to VPN, Connect to Jump Server .</li>
                  <li>
                    Open a web browser, in the address bar, enter the below url
                    for accessing TCS ECP PORTAL, https://portal-beta.tcsecp.com
                  </li>
                  <li>
                    To Access TCS ECP Console Click on Console TAB, it will
                    Redirect to TCS Console.
                  </li>
                  <img src="assets/Images/pic6.png" style={{ width: "70%" }} />
                  <br />
                  <br />
                  <li>
                    4. On the Log In page, enter your user name and password,
                    and click Sign In. If the cloud supports multi-domain model,
                    you also need to enter your domain name BETA
                  </li>
                  <img src="assets/Images/pic7.png" />
                  <br />
                  <br />
                  The top of the window displays your user name. You can also
                  access the Settings tab (OpenStack dashboard — Settings tab)
                  or sign out of the dashboard. The visible tabs and functions
                  in the dashboard depend on the access permissions, or roles,
                  of the user you are logged in as.
                  <br />
                  <br />
                  <ul>
                    <li>
                      If you are logged in as an end user, the Project tab
                      (OpenStack dashboard — Project tab) and Identity tab
                      (OpenStack dashboard — Identity tab) are displayed.
                    </li>
                    <li>
                      If you are logged in as an administrator, the Project tab
                      (OpenStack dashboard — Project tab) and Admin tab
                      (OpenStack dashboard — Admin tab) and Identity tab
                      (OpenStack dashboard — Identity tab) are displayed.
                    </li>
                  </ul>
                </ul>
              </h5>
            </div>

            <div id="netsol">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h4 class="title-color ">Network Solution</h4>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                WHAT IS SOFTWARE DEFINED STORAGE?
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                TCS has vast experience in delivering IT services over last two
                decades to large customers on a global scale and we have the
                expertise to help customer’s find the right balance of
                cloud-based services and legacy applications. <br />
                TCS understands that the requirements of organizations migrating
                to the Cloud vary greatly, and we offer singular tailored
                solutions approach to each customer and make it all work
                together with a solution designed specifically for customer’s
                business needs and goals.
                <br />
                TCS ECP built SDN keeping in mind to deliver the listed
                objective and benefits to Enterprise-grade Customer’s;
                <br />
                Business Growth
                <br />
                Digitalize and enhance existing services through the cloud.
                <br />
                Support growth into new geographies and market segments.
                <br />
                Risk, cost and compliance
                <br />
                Integrate, manage and optimize deployments on an agile,
                pay-per-use model.
                <br />
                Assure safety and residency of customer's critical systems and
                data whilst innovating at pace.
                <br />
                Productivity
                <br />
                Enable customers across the globe to access the services faster
                from any location.
                <br />
                Empower IT and developers with the required tools, whilst
                ensuring visibility and governance of all IT systems.
                <br />
                Network Services is the central and core of enterprise
                connectivity, collaboration and productivity.
                <br />
                TCS ECP transforms traditional network services into a
                consolidated next generation network by leveraging next
                generation technologies.
                <br />
              </h5>
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Our <b>Key Solution Themes</b> are as follows:
                <br />
                <b>SDN</b>
                <br />
                Consolidated, Standardized and Business Aligned
                <br />
                Smooth Network Migration
                <br />
                TCS ECP SDN architecture will provide full redundancy at
                Availability Zone’s with respect to hardware which will impart
                maximum resiliency into the architecture. Architecture will
                ensure that the failure in single hardware in cloud network
                infrastructure will not affect the functioning of the other
                network infrastructure. It will also ensure that services will
                failover to alternate device(s) without impact to the
                application performance. <br />
                The following figure shows the TCS ECP network reference
                architecture.
              </h5>
              <br />
              <img src="assets/Images/image/netsol/sol1.jpg" alt="sol1" />
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                The unique features and value add can be achieved through
                proposed Network architecture are:
                <br />
                <br />
                <b>Scalability</b>&nbsp; translates into designs that
                accommodate new service offerings without major alteration in
                existing architecture or drastic changes outside the normal
                schedule maintenance windows. Components are modular and will
                have enough spare interfaces which can cater to the future
                requirement of expansion.
                <br />
                <b>Zero-trust Security Architecture</b>
                <br />
                Zero-trust network architecture assumes no trust by default
                between Endpoints unless the network fabric has a network and
                Security group policy explicitly defined to allow connectivity
                between networks and endpoints respectively. Otherwise the
                communication will not happen by default which means network
                fabric is in <b>Deny by Default (DnD)</b> mode. This will ensure
                that the business specific servers are completely isolated from
                each other providing the highest form of security. Policies are
                expressed as rules that permit, deny or log.
                <br />
                <b>Micro Segmentation</b>
                <br />
                TCS ECP SDN based cloud platform presents a sophisticated policy
                model which enforces security policies at a very granular level
                (micro segmentation), between individual workloads and
                application, to align with business requirements.
                <br />
                <b>IP Retention Schema</b> <br />
                Customer provided IP address schema of the existing systems
                could be used in the TCS ECP while migrating servers from the
                incumbent DCs to TCS ECP DC into the respective zones. Through
                Layer 2 Extension (L2 Extn) the same VLANs will be stretched
                across both DC to host the services actively across the DCs.
                After migration continue to leverage the same IP Address in the
                ECP environment:
                <br />
                TCS ECP software-defined cloud infrastructure with underlying
                Open stack management platform tightly integrated with Open
                stack, provides next generation cloud architecture enabled
                through centralised policy-based framework. This design provides
                flexibility, scalability performance and multi-layer security,
                which is the core DNA of this setup.
                <br />
                Air Gap Separation TCS ECP environment has control in
                segregating each customer’s Production Traffic and ECP’s
                Management traffic in a multi-tenant environment.
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Metro (Multi-AZ)
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Multi-AZ model defines the communication enablement across two
                different Availability Zones (DC1, DC2) within 40 KM distance,
                which will act HA as well as DR for the workloads / applications
                / appliances. Control Plane will be stretched across AZ’s for
                providing HA and as well as DR support. All the Workloads (VM /
                BareMetal / Container) / applications / appliances will be
                deployed in both AZ’s (one in AZ1 and another in AZ2) to form HA
                and as well as Disaster recovery. Workloads / BareMetal backup
                should be available across AZ’s over L2/L3. Stretched Model
                (Complete L2 / L3 across AZ’s) for Network / Compute / Storage
                etc. All WAN types connectivity will be deployed Active / Active
                or Active / standby across AZ’s (example - DC gateway / External
                Router one in AZ1 and another in AZ2).
              </h5>
              <br />
              <img src="assets/Images/image/netsol/sol2.jpg" alt="sol2" />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Non-Metro (Multi-AZ)
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Single-AZ model define networks communication within DC/DR
                Control and Data Plane will be local to the DC/DR. All the
                Workloads / applications / appliances / BareMetal will be
                spawned / positioned with in AZs. DC and DR communication will
                be over L3-DCI Connectivity for
                Workloads/BareMetal/Applications. All WAN types connectivity
                will be deployed Active / Active or Active / standby within AZ’s
                (example - DC gateway / External Router).
              </h5>
              <br />
              <img src="assets/Images/image/netsol/sol3.jpg" alt="sol3" />
              <br /> <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <p
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  DCI / External connectivity
                </p>
                Dark fiber / DWDM links will be used for the DCI connectivity,
                in all regions it will be enabled with Multi path failure
                availability to avoid any outage or split-brain scenario (for
                Multi-AZ’s). Encryption option should be available to enable
                on-demand for the traffic flowing through DCI (in transit
                traffic).
                <br />
                Dark fiber connectivity will be used for certain uses cases of
                migration to move the workload from one DC to another ( for
                example from UK DC to Germany DC ) , it will be used for both L2
                / L3 , this will be used only for tenant / customer specific.
                <br />
                Workloads (BareMetal / VM /container) deployed in one AZ should
                be able to communicate with workloads in another AZ on both L2 /
                L3 through DCI communication.
                <br />
                DCI communications should be able to allow all the protocols
                between AZ’s for the overlay / tenant specific traffic (for
                example Microsoft NLB, Keepalive, HSRP, VRRP etc.)
                <br />
                Tenant / Customer WAN connectivity will be deployed Active /
                Active or Active / standby across AZ’s (example - DC gateway /
                External Router / Border leaf, one in AZ1 and another in AZ2 in
                a stretched model). It will leverage DCI communications between
                Active nodes and workloads, <br />
                it will be same scenario for the internet circuits also.
              </h5>
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <p
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  Connectivity
                </p>
                TCS ECP supports all industry leading connectivity options that
                includes Internet and Public cloud connections through Cloud
                Exchange, Metro Ethernet MPLS and dark fibre to connect the
                Customer Head Quarters and other enterprise locations including
                remote datacentres. The listed Industry leading connectivity
                options are available to our Customers: MPLS/Point-to-point
                Internet Inter-DC Cloud Exchange
                <br />
                <br />
                TCS Enterprise Cloud Platform Network Capabilities are
                summarized as: Implements zero-trust security architecture -
                fabric inbuilt stateless firewall. Supports traditional APP, WEB
                and DB deployment with security zone model. Provides fabric
                network policy for intra zone security, firewall for inter zone
                security. Maintains tenant boundary across availability zones.
                Supports service management and public cloud integration.
              </h5>
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <p
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  TCS ECP Network Features
                </p>
                TCS ECP globally running cloud to drive innovation in the way
                they deliver IT services, achieving greater agility, reducing
                costs and deploying new capabilities much faster.
              </h5>
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <p
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  Security Groups:
                </p>
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
                <br />
                Security Group UseCase-1 User can create and assign separate
                security group to the instances based on the networks/CIDR as
                per below reference diagram.
                <br />
                <img src="assets/Images/image/netsol/sc1.png" alt="img" />
                <br />
                Security Group UseCase-2
                <br />
                User can create and assign one or multiple security group to the
                instances based on the groups to allow/deny access to VMs
                <br />
                <img src="assets/Images/image/netsol/sc2.png" alt="img" />
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <p
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  Tag based security
                </p>
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
                mobility.
                <br />
                It also provides analytics which helps to see the holistic view
                of traffic flow of the policy set.
                <br />
                <img src="assets/Images/image/netsol/sc3.png" alt="img" />
                <br />
                <br />
                <img src="assets/Images/image/netsol/sc4.png" alt="img" />
              </h5>
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <p
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  Port Mirroring
                </p>
                Port Mirroring will helps to copy / mirror the traffic entering
                or exiting a port to validate / screen with any security
                appliance for and sends the copies to a local interface for
                local monitoring or to a VLAN for remote monitoring. Use port
                mirroring to send traffic to applications that analyse traffic
                for purposes such as monitoring compliance, enforcing policies,
                detecting intrusions, monitoring and predicting traffic
                patterns, correlating events, and so on.
                <br />
                <img src="assets/Images/image/netsol/sc5.png" alt="img" />
                <br />
                <img src="assets/Images/image/netsol/s6.png" alt="img" />
                <br />
                <img src="assets/Images/image/netsol/s7.png" alt="img" />
                <br />
                <br />
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <p
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  LBaaS – Load Balancer as a Service:
                </p>
                LBaaS Load Balancing automatically distributes incoming
                application traffic across multiple targets, such as instances,
                containers, IP addresses. It can also handle the varying load of
                your application traffic in a single Availability Zone or across
                multiple Availability Zones
                <br />
                LBaaS Load Balancing is capable of handling rapid changes in
                network traffic patterns. Additionally, deep integration with
                Auto Scaling ensures enough application capacity to meet varying
                levels of application load without requiring manual
                intervention.
                <br />
                <img src="assets/Images/image/netsol/sc8.png" alt="img" />
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <p
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  COLO Network
                </p>
                Alpha4 cloud supports Co-location sever solution to be coexist
                with cloud instance. User can bring their own existing legacy
                application server and attach to TCS Cloud infra. This
                co-location server can be maintained and integrated with TCS
                cloud and leverage network and security functions
                <br />
                <img src="assets/Images/image/netsol/sc9.png" alt="img" />
              </h5>
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Internet Gateway
                <br />
                <br />
                <b>SNAT</b>
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                  lineHeight: "1.5em",
                }}
              >
                <b style={{ color: "000" }}> Overview </b>
                <br />
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Source Network Address Translation (source-nat or SNAT) allows
                traffic from a private network to go out to the internet. When
                SNAT is configured in Portal, VMs launched on a private network
                can send packets to a public network without exposing its own IP
                address by going through a gateway service instance.
                <br />
                Virtual machines launched on a private network can get to the
                internet by going through a gateway capable of performing SNAT.
                The gateway has one arm on the public network and as part of
                SNAT, it replaces the source IP of the originating packet with
                its own public side IP. As part of SNAT, the source port is also
                updated so that multiple VMs can reach the public network
                through a single gateway public IP.
              </h5>
              <br />
              <img src="assets/Images/image/netsol/snat.jpg" alt="snat" />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Floating IP
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Floating IP is Public IPv4 Address, which will help to extend
                the access to or from Internet. Users can retrieve the floating
                IP from the Floating IP Pools, maximum number of IP’s can be
                assigned based on their quota defined, and these IP addresses
                will be dedicated for the user, once they obtained from the
                pool, it will be their until they release back to the pool even
                if its assigned to instance or not. Users can associate a
                Floating IP address for following services to allow the
                communication to or from the internet. <br />
                <ul>
                  <li>Virtual Machine / Network Interfaces</li>
                  <li>Internet Facing Load balancers</li>
                </ul>
              </h5>
              <br />
              <img src="assets/Images/image/netsol/fip.jpg" alt="fip" />
              <br />
              <img src="assets/Images/image/netsol/fip1.jpg" alt="fip1" />
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Service Chaining - Network Appliance Integration
                <br />
                <br />
                OEM Load balancer: <br />
                <br />
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                <b>Prerequisite:</b>&nbsp; Basic network knowledge in IPv4/IPv6,
                Network Subnetting, Gateway, Routing, NAT, TCP/UDP protocol and
                basic/advanced Load Balancer algorithm, advanced Load balancer
                types and features.
                <br />
                <br />
                If customers want to have OEM based load balancers like Citrix
                ADC, F5 LTM, etc we can also enable into our environment. This
                will enable the customers to utilize the OEM based advance load
                balancing features like their existing on-premise data centre
                environment.
              </h5>
              <br />
              <img src="assets/Images/image/netsol/oem.jpg" alt="oem" />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                OEM-Firewall
              </h5>
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                We support BYOL and TCS provided license for FWaaS, so users can
                bring their own license for OEM network firewall or pay for the
                security solutions provided to their OEM choice in projects. OEM
                device are NGFW have all the feature respective to their vendor
                manufacture. Users can opt for the license based on required
                features to enable in the devices. <br />
                <br />
                TCS provided license- User pay for the license and feature
                enablement in course of the usage and project requirement.
                <br />
                <br />
                BYOL – Users can bring own license and install, so they buy and
                maintain license of their usage.
                <br />
                <br />
                The physical and virtual Cisco Firepower NGFW appliances offer
                the same threat protection features and centralized management,
                resulting in consistent security effectiveness and visibility
                across physical and virtual workloads.
              </h5>
              <br />
              <img src="assets/Images/image/netsol/oemfw.jpg" alt="oemfw" />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                NGFW firewall either deployed as a VM similar to virtual
                instances or physically installed. Once firewall deployed, they
                can be integration tightly with networks through service
                chaining solutions.
              </h5>
            </div>

            <div id="stosol">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h4 class="title-color ">Alpha Compute Solution</h4>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                TCS Enterprise Cloud Platform Overview
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                TCS Enterprise cloud platform (ECP) that delivers assured high
                performance, stable, secure, reliable and scalable IaaS service
                provided by TCS for hosting mission critical workloads.
                Software-defined infrastructure enables automation and agility
                at all levels, and accelerates time to market critical
                applications. TCS ECP Compute Services provide compute offerings
                for flexibility to run your most demanding business critical
                workloads, as well as less compute-intensive applications, in a
                secure and highly available cloud environment. Compute X-86
                Architecture Virtualization provides best options for
                Infrastructure-as-a-Service (IaaS) It offers Instances on a
                software-defined network with a secure, isolated virtualized
                cloud network. High Availability (HA) and Fault Tolerance (FT)
                at physical (hardware level) and logical level (Multipath,
                Virtualization, OS, DB and Application) of Compute, Storage,
                Network and Backup components. At the Physical level -
                redundancy is built at rack level, power and cooling systems,
                hypervisors hardware with redundancy. TCS Enterprise Cloud
                compute environment is hosted using the commodity hardware with
                no-SPOF (single point of failure) architecture at hardware,
                hypervisors, power and cooling etc., virtualization technology
                is used to virtualize and aggregate the underline compute.
                <br />
                <br />
                <b>Compute Highlights:</b>
                <br />
                <br />
                Flexible T Shirt size instances to choose as per requirements
                Optimum Instance Types – General Purpose, Compute intensive,
                Memory Intensive, Very Large Memory Persistent storage Volumes –
                Default Block Storage for root volume and data volume for
                instances Images: Predefined templates for instance
                provisioning, Public and Private images Server Group: Affinity
                and Anti-affinity Group for high availability for instance High
                performance compute, Memory and storage based on Enterprise
                Class Hardware Automated provisioning enables instances are
                available quickly for business needs End to End Integration and
                Automation with Instances life cycle Management Dedicated host
                for the Customer
                <br />
                Scalability of components – Horizontal Scaling
                <br />
                <br />
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Key Features and Benefits of ECP Cloud
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                TCS ECP Cloud Compute offers the best built-in virtualization
                for improving server utilization. Its key features are as
                follows:
                <br />
                <br />
                Instance types
                <br />
                <br />
                ECP Cloud offers predefined Instance type configurations for
                every need from small general purpose workloads to large memory
                instensive workloads and high performance computing workloads.
                Each instance type has precise specifications, including the
                number of vCPUs, memory capacity, and network performance.
                <br />
                <br />
                Instance
                <br />
                <br />
                An ECP instance is a Virtual Machine that includes basic
                computing components such as CPU, memory, operating system,
                network and disks.
                <br />
                <br />
                ECP Image
                <br />
                <br />
                An ECP image stores information that you essential for creating
                an ECP instance. Image is a single file which contains a virtual
                disk that has a bootable operating system installed on it.
                Images are used to create virtual machine instances within the
                ECP cloud. Several Linux distributions and Windows Server
                operating systems are supported in ECP cloud.
                <br />
                <br />
                Public images provided by ECP Cloud. Public images include
                Windows Operating system images and Linux Operating system
                images.
                <br />
                <br />
                ECP provides an option to built Private Images from instances
                volumes or snapshots. Only the author of a Private image can
                use, share, and delete the image
                <br />
                <br />
                Bring your own images for the dedicated host.
                <br />
                <br />
                Supporting OS distributions from Ubuntu, SUSE, Windows and
                RedHat.
                <br />
                <br />
                ECP Block Storage
                <br />
                <br />
                Robust, high performance block storage for your VM instances.
                You can create persistent disks in HDD, SSD and Nvme formats.
                User can also take snapshots and create new persistent disks
                from that snapshot. If a VM instance is terminated, its
                persistent disk retains data and can be attached to another
                instance and depends upon the option seleted during the instance
                creation.
                <br />
                <br />
                Snapshot
                <br />
                <br />
                A snapshot is a stateful data file of a cloud disk at a certain
                point in time. Snapshots are often used to back up and restore
                data or to create custom images.
                <br />
                <br />
                Security group
                <br />
                <br />
                A security group works as a cloud virtual firewall for the ECP
                instances. A security group is a logical grouping of instances
                placed within the same region that have the same security
                requirements and require access to each other.
                <br />
                <br />
                Network
                <br />
                <br />
                ECP Networking handles the creation and management of a virtual
                networking infrastructure, including networks, switches,
                subnets, and routers.
                <br />
                <br />
                SSH KeyPair
                <br />
                <br />
                Secured way to login to ECP instances. Key Pairs are how you
                login to your instance after it is launched. A Key pair allows
                you to SSH into your newly created instance. You may select an
                existing key pair, import a key pair, or generate a new key
                pair.
                <br />
                <br />
                Load Balancer
                <br />
                <br />
                Load balancing enhances reliability to the web application layer
                by configuring two or more servers or databases to respond to
                requests. Load Balancing features helps you to distribute
                incoming requests across pools of instances. It avoids overload
                of a single server thereby preventing a single point of failure
                for the application. This further improves the performance,
                network throughput, and response time of the servers.
                <br />
                <br />
                Server Group
                <br />
                <br />
                A Server group defines deployment strategy for your instances.
                Server group defines the placement of instances on underlying
                compute hosts. Anti-Affinity Server Group provides higher
                reliability by placing instances on different compute host,
                decreasing the impact of underlying compute failures. Affinity
                Server Group provides lower latency between nodes by placing
                instances close together within the same compute host.
                <br />
                <br />
                <img src="assets/Images/image/netsol/sc10.png" alt="img" />
                <br />
                <br />
                <br />
                High Availability
                <br />
                <br />
                To ensure business reliability and stability, we recommend
                multi-zone deployment in same region for fault tolerance.
                Instances can be deployed in the same Availability Zone depends
                on the requirements for high availability and network latency.
                If your application needs high availability, design and deploy
                your application to run across different availability zones
                (Data Centers) of same region.
                <br />
                <br />
                Instance High Availability
                <br />
                <br />
                ECP provides automated instance recovery for running instance on
                clouds that use shared storage for its instances. The following
                functionality is provided:
                <br />
                <br />
                1. Evacuation of instances
                <br />
                In the event of hypervisor software failure the associated
                compute node is shut down and instance images are started on
                another hypervisor.
                <br />
                <br />
                2. Restarting of instances
                <br />
                A failed instance can be restarted on its current hypervisor.
                <br />
                <br />
              </h5>
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Regions and Availability Zones
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                This topic provides a comprehensive list of ECP Cloud regions
                and Avaiability zones. Each Region in ECP Cloud are independent
                physical location that are spread all over the world.
                Availability Zones in ECP Cloud are completely isolated
                locations. Though, Availability zones in the same region are
                connected through links with low latency. Intranet communication
                between ECP Cloud resources that are not in the same region is
                not supported, which means that ECP instances and other
                resources, cannot communicate with one another over the intranet
                if they are in different regions.
                <br />
                <br />
                An availability zone provides a form of physical isolation and
                redundancy from other availability zones. Availability Zones are
                physical areas with independent of Data center and networks
                within one region. The network latency for instances within the
                same availability zone is lower. Intranet communication can take
                place between instances in different availability zones of the
                same region, and fault isolation can be accomplished among
                availability zones. When you provision resources, you can
                specify from which availability zone you want your instance to
                be available. By segregating resources into availability zones,
                you can ensure that your application resources are spread across
                different availability zone to achieve high availability in the
                event of zone failure or other failures.
                <br />
                <br />
                The following is the list of all available ECP Cloud
                Geographies.
                <br />
                <br />
                Available Geographies
                <br />
                <br />
                <img src="assets/Images/image/netsol/sc11.png" alt="img" />
                <img src="assets/Images/image/netsol/sc12.png" alt="img" />
                <br />
                <br />
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                ECP Instance Families
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                This topic provides an overview of available TCS ECP instance
                families and their landscapes, capabilities and specifications.
                ECP instances are characterized into different instance families
                based on the business scenarios and different workloads. Each
                ECP instance family is divided into different instance types
                based on their CPU, Memory, Network and Storage
                specifications. ECP instance type describes the basic properties
                of an ECP instance, such as CPU, clock speed, memory, storage
                and network type.
                <br />
                <br />
                Choose an instance families and instance type based on the
                workload requirements, software that you plan to run on your
                instance.
                <br />
                <br />
                If the instance type does not suit your workload requirements,
                you can change the instances types within the same instance
                family or across instance families.
                <br />
                <br />
                Following are the available Instance Families offered on TCS ECP
                cloud. Choose the right compute instance for optimal cloud
                workloads.
                <br />
                <br />
                1. <b>General-purpose:</b> Provide a balance of compute, memory
                and network resources and are a good choice for many
                applications such as small and mid-sized databases, data
                processing tasks, caching fleets and backend servers for various
                applications.
                <br />
                <br />
                2. <b>Compute-Intensive:</b> Optimized for applications that
                benefit from high compute power and are recommended for running
                CPU-bound applications such as high traffic front-end fleets,
                on-demand batch processing, distributed analytics, web servers,
                batch processing and high performance science and engineering
                applications.
                <br />
                <br />
                3.<b> Memory-Intensive:</b> Optimized for memory-intensive
                applications which offers high memory per core than other
                instance families. Memory intensive family is recommended for
                applications such as databases, memcached and other distributed
                caches and larger deployments of enterprise applications.
                <br />
                <br />
                <b>GENERAL PURPOSE INSTANCE TYPE:</b>
                <br />
                <br />
                General-purpose instances offer the best cost-performance and
                balanced CPU-to-memory ratio for a variety of workloads. If you
                are not sure which compute instance is best for your workload,
                using a general-purpose instance type is a good place to start.
                <br />
                <br />
                <b>Advantages and Ideal Workload Scenario</b>
                <br />
                <br />
                It is generally suited for testing, development, small to medium
                databases, and low to medium traffic web servers. The typical
                workloads for general-purpose compute instance include:
                <br />
                <br />
                Web Server
                <br />
                File Server
                <br />
                Caching Server
                <br />
                Development Environment
                <br />
                FTP/DNS/DHCP
                <br />
                Active Directory
                <br />
                Features
                <br />
                <br />
                Latest Generation CPU platforms gives high performance to
                workloads Runs on Intel® Xeon® Scalable Processors (Cascade
                Lake), improves end-end computing performance Offers a
                vCPU-to-memory ratio of 1:2, 1:4 and 1:8 Intel Advanced Vector
                Extensions (AVX-512) – Improves performance for the
                computational Tasks. Persistent Block Storage by default and can
                be migrated to NVMe-based storage.
                <br />
                <br />
                <b>GP Instance Type 1</b>
                <br />
                <br />
                Summary of GP instance type 1
                <br />
                <br />
                Offers a vCPU-to-memory ratio of 1:2
                <br />
                <br />
                <img src="assets/Images/image/netsol/sc13.png" alt="img" />
              </h5>
              <br />
              <br />
              <b>GP Instance Type 2</b>
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Provide a balance of compute, memory and network resources and
                are a good choice for many applications such as small and
                mid-sized databases, data processing tasks, caching fleets and
                backend servers for various applications.
                <br />
                <br />
                Summary of GP2 Instance type 2 Offers a vCPU-to-memory ratio of
                1:4
              </h5>
              <br />

              <img
                src="assets/Images/image/netsol/gp2.jpg"
                alt="GP Instance Type 2"
                style={{ height: "20%" }}
              />
              <br />

              <b>GP Instance Type 3</b>
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Provides a memory enriched for Application Servers, Webservers
                needing higher memory capacity. These instances types are
                optimized for memory-intensive applications in general purpose
                category. Good choice for many applications such as small and
                mid-sized databases, data processing tasks, caching fleets and
                backend servers for various applications.
                <br />
                <br />
                Summary of GP Instance type 3 Offers a vCPU-to-memory ratio of
                1:8
              </h5>
              <br />

              <img
                src="assets/Images/image/netsol/gp3.jpg"
                alt="GP Instance Type 3"
                style={{ height: "20%" }}
              />
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                COMPUTE-INTENSIVE INSTANCE TYPE:
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Compute-Intensive instances types are optimized for applications
                that benefit from high compute power. Compute-intensive instance
                types are recommended for running CPU-bound applications. <br />
                <br />
                <b>Advantages and Ideal Workload Scenario</b> <br />
                <br />
                Compute-intensive instances provide ultra-high performance for
                compute-intensive workloads. The typical workloads for
                compute-intensive compute instance include:
              </h5>
              <ul>
                <li>Application Servers</li>
                <li>JBoss</li>
                <li>Weblogic</li>
                <li>Websphere</li>
                <li>Splunk</li>
                <li>Database Workloads</li>
                <li>Medium-traffic Web Servers/High-performance Web Servers</li>
                <li>Batch Processing Workloads</li>
                <li>Dedicated Gaming Servers</li>
                <li>Media Transcoding</li>
                <li>AI Inference</li>
                <li>High Performance Computing (HPC)</li>
                <li>Scientific Modeling</li>
                <li>Ad Server Engines</li>
                <li>Distributed Analytics</li>
                <li>
                  Machine Learning Inference and other compute intensive
                  applicationss
                </li>
              </ul>
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Features
              </h5>

              <ul style={{ color: "#000", lineHeight: "1.5em" }}>
                <li>
                  Latest Generation CPU platforms gives high performance to
                  workloads
                </li>
                <li>Runs on Intel® Xeon® Platinum Processor (Cascade Lake)</li>
                <li>
                  A vCPU is a single hardware hyper-thread on Intel® Xeon®
                  Platinum Processors{" "}
                </li>
                <li>Offers a vCPU-to-memory ratio of 1:4</li>
                <li>
                  Persistent Block Storage by default and can be migrated to
                  NVMe-based storage
                </li>
              </ul>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Summary of Compute Intensive Instance types Offers a
                vCPU-to-memory ratio of 1:4
              </h5>
              <br />

              <img
                src="assets/Images/image/netsol/features.jpg"
                alt="features"
                style={{ height: "20%" }}
              />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                MEMORY-INTENSIVE INSTANCE TYPE:
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Memory Intensive instance types are designed to deliver fast
                performance for workloads that process large data sets in
                memory. These instances are optimized for memory-intensive
                applications, and are recommended for applications such as
                databases, memcached and other distributed caches and larger
                deployments of enterprise applications.
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Advantages and Ideal Workload Scenario
              </h5>

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Memory-Intensive instances offer high amounts of memory compared
                to CPU. As a result, they are well suited for applications that
                use a lot of memory, which include:
                <br />
                <ul style={{ color: "#000", lineHeight: "1.5em" }}>
                  <li>
                    In-Memory Databases like Spark, Aerospike, Redis Labs,
                    Memcached
                  </li>
                  <li>Relational Database Servers</li>
                  <li>Medium to Large Caches</li>
                  <li>Distributed Caches</li>
                  <li>In-Memory Analytics</li>
                </ul>
                <br />
                <h5
                  style={{
                    fontFamily:
                      "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "rgb(0, 126, 185)",
                  }}
                >
                  Features
                </h5>
                <br />
                <ul style={{ color: "#000", lineHeight: "1.5em" }}>
                  <li>
                    Latest Generation CPU platforms gives high performance to
                    workloads
                  </li>
                  <li>
                    Runs on Intel® Xeon® Platinum Processor (Cascade Lake)
                  </li>
                  <li>Offers a vCPU-to-memory ratio 1:8 and 1.16</li>
                  <li>
                    A vCPU is a single hardware hyper-thread on Intel® Xeon®
                    Platinum Processors{" "}
                  </li>
                  <li>
                    Persistent Block Storage by default and can be migrated to
                    NVMe-based storage.
                  </li>
                </ul>
                <br />
              </h5>
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Memory Instance Type 1
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Summary of Memory Intensive Instance types 1 Offers a
                vCPU-to-memory ratio of 1:8
              </h5>
              <br />
              <img
                src="assets/Images/image/netsol/mi1.jpg"
                alt="mi1"
                style={{ height: "20%" }}
              />
              <br />
              <br />

              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Memory Instance Type 2
              </h5>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5em",
                }}
              >
                Summary of Memory Intensive Instance types 3 Offers a
                vCPU-to-memory ratio of 1:16
              </h5>
              <br />
              <img
                src="assets/Images/image/netsol/mi2.jpg"
                alt="mi2"
                style={{ height: "20%" }}
              />
              <br />
              <br />
            </div>

            <div id="intro">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h4 class="title-color ">Alpha 4 Practitioner Training</h4>
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Introduction
              </h5>
              <br />
              <video
                controls="controls"
                frameborder="0"
                allowfullscreen
                controlsList="nodownload"
                src="assets/Images/video/Session1_Introduction.mp4"
                width="1000px"
                height="400px"
                type="video/mp4"
              ></video>
            </div>

            <div id="compute_video">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Compute
              </h5>
              <br />
              <video
                controls="controls"
                frameborder="0"
                allowfullscreen
                controlsList="nodownload"
                src="assets/Images/video/Session2_Compute.mp4"
                width="1000px"
                height="400px"
              ></video>
            </div>

            <div id="network_video">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Network - Session1
              </h5>
              <br />
              <video
                controls="controls"
                frameborder="0"
                allowfullscreen
                controlsList="nodownload"
                src="assets/Images/video/Session3_Network 1.mp4"
                width="1000px"
                height="400px"
              ></video>
              <br /><br /><br /><br /><br /><br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Network - Session2
              </h5>
              <br />

              <video
                controls="controls"
                frameborder="0"
                allowfullscreen
                controlsList="nodownload"
                src="assets/Images/video/Session4_Network 2.mp4"
                width="1000px"
                height="400px"
              ></video>

              <br /><br /><br /><br /><br /><br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Network - Session3
              </h5>
              <br />
              <video
                controls="controls"
                frameborder="0"
                allowfullscreen
                controlsList="nodownload"
                src="assets/Images/video/Session5_Network 3.mp4"
                width="1000px"
                height="400px"
              ></video>
              
            </div>

            <div id="storage_video">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Storage
              </h5>
              <br />
              <video
                controls="controls"
                frameborder="0"
                allowfullscreen
                controlsList="nodownload"
                src="assets/Images/video/Session6_Storage.mp4"
                width="1000px"
                height="400px"
              ></video>
            </div>

            <div id="onboarding_video">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Orchestration
              </h5>
              <br />
              <video
                controls="controls"
                frameborder="0"
                allowfullscreen
                controlsList="nodownload"
                src="assets/Images/video/Session7 and 8_Onboarding.mp4"
                width="1000px"
                height="400px"
              ></video>
            </div>

            <div id="migration_video">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h5
                style={{
                  fontFamily:
                    "'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif",
                  fontWeight: "500",
                  color: "rgb(0, 126, 185)",
                }}
              >
                Migration
              </h5>
              <br />
              <video
                controls="controls"
                frameborder="0"
                allowfullscreen
                controlsList="nodownload"
                src="assets/Images/video/Session9_Migration.mp4"
                width="1000px"
                height="400px"
              ></video>
              <br /><br /><br /><br />
            </div>

        </div>
      </div>
      </>
    
  );
};


