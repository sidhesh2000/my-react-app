import React from "react";
import './sidebar.css'

/* Floating Button */
import { FloatButton } from "./FloatButton";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

export const SideBar = ({ sideNavExpanded, setSideNavExpanded }) => {
  
  return (
    <>
      
   {/*  <SideNav
     
     onToggle={() => {
     
        setSideNavExpanded(!sideNavExpanded);
      }}
      expanded={sideNavExpanded}
      id="sdb"   
> 
    */}


<SideNav
      disabled={true}
      id="sdb"   
>
    
    

          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home" >
          <NavItem eventKey="solution">
            <NavIcon>
              <a href="#solution">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-download-cloud"
                >
                  <polyline points="8 17 12 21 16 17"></polyline>
                  <line x1="12" y1="12" x2="12" y2="21"></line>
                  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
                </svg> 
                 
              </a>
            </NavIcon>
            <NavText>
              <a href="#solution" style={{ fontWeight: "bold", color: "#407bff" }}>
                User Guide
              </a>
            </NavText>
            <NavItem eventKey="ACS">
              <NavIcon>
                <a href="#ACS"></a>
              </NavIcon>
              <NavText>
                <a href="#ACS" style={{ fontWeight: "bold", color: "#1B1212" , textDecoration:"none" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2234ae"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-hard-drive"
                  >
                    <line x1="22" y1="12" x2="2" y2="12"></line>
                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    <line x1="6" y1="16" x2="6.01" y2="16"></line>
                    <line x1="10" y1="16" x2="10.01" y2="16"></line>
                  </svg>
                  &nbsp; Alpha Storage Services
                </a>
              </NavText>
              <NavItem eventKey="ACS">
                <NavText></NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="network">
              <NavIcon>
                <a href="#network"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#network"
                  style={{ fontWeight: "bold", color: "#1B1212" , textDecoration:"none"}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2234ae"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-share-2"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  &nbsp; Alpha Network Services
                </a>
              </NavText>
              <NavItem eventKey="network">
                <NavText></NavText>
              </NavItem>
            </NavItem>

            
       

            <NavItem eventKey="compute">
              <NavIcon>
                <a href="#compute"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#compute"
                  style={{ fontWeight: "bold", color: "#1B1212" , textDecoration:"none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2234ae"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-monitor"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  &nbsp; Alpha Compute Services
                </a>
              </NavText>
              <NavItem eventKey="compute">
                <NavText></NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="adps">
              <NavIcon>
                <a href="#adps"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#adps"
                  style={{ fontWeight: "bold",color: "#1B1212" , textDecoration:"none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2234ae"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user-plus"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                  &nbsp; Alpha Data Protection Services
                </a>
              </NavText>
              <NavItem eventKey="adps">
                <NavText></NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="useraccess">
              <NavIcon>
                <a href="#useraccess"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#useraccess"
                  style={{ fontWeight: "bold",color: "#1B1212" , textDecoration:"none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2234ae"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                  </svg>
                  &nbsp; Access Guide
                </a>
              </NavText>
              <NavItem eventKey="useraccess">
                <NavText></NavText>
              </NavItem>
            </NavItem>
          </NavItem>

          <NavItem eventKey="access">
            <NavIcon>
              <a href="#accesss">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-users"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </a>
            </NavIcon>
            <NavText>
              <a href="#access" style={{ fontWeight: "bold",color: "#407bff" }}>
                Solutions
              </a>
            </NavText>

            <NavItem eventKey="netsol">
              <NavIcon>
                <a href="#netsol"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#netsol"
                  style={{ fontWeight: "bold",color: "#1B1212" , textDecoration:"none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2234ae"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-share-2"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  &nbsp; Alpha Network Solutions
                </a>
              </NavText>
              <NavItem eventKey="netsol">
                <NavText></NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="stosol">
              <NavIcon>
                <a href="#stosol"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#stosol"
                  style={{ fontWeight: "bold",color: "#1B1212" , textDecoration:"none"}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2234ae"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-share-2"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  &nbsp; Alpha Compute Solutions
                </a>
              </NavText>
              <NavItem eventKey="stosol">
                <NavText></NavText>
              </NavItem>
            </NavItem>
          </NavItem>

          <NavItem eventKey="training">
            <NavIcon>
              <a href="#trainings">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" height="20">
                  <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
                </svg>
              </a>
            </NavIcon>
            <NavText>
              <a href="#training" style={{ fontWeight: "bold", color: "#407bff" }}>
                Alpha 4 Training
              </a>
            </NavText>

            <NavItem eventKey="intro">
              <NavIcon>
                <a href="#intro"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#intro"
                  style={{ fontWeight: "bold", color: "#1B1212" , textDecoration:"none" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
                    <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM240 288c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-16.52l43.84 30.2C292.3 403.5 304 397.6 304 387.4V284.6c0-10.16-11.64-16.16-20.16-10.32L240 304.5V288z" /></svg>
                  &nbsp; Introduction
                </a>
              </NavText>
              <NavItem eventKey="intro">
                <NavText></NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="compute_video">
              <NavIcon>
                <a href="#compute_video"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#compute_video"
                  style={{ fontWeight: "bold", color: "#1B1212" , textDecoration:"none" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
                    <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM240 288c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-16.52l43.84 30.2C292.3 403.5 304 397.6 304 387.4V284.6c0-10.16-11.64-16.16-20.16-10.32L240 304.5V288z" /></svg>
                  &nbsp; Compute
                </a>
              </NavText>
              <NavItem eventKey="compute_video">
                <NavText></NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="network_video">
              <NavIcon>
                <a href="#network_video"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#network_video"
                  style={{ fontWeight: "bold", color: "#1B1212" , textDecoration:"none" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
                    <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM240 288c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-16.52l43.84 30.2C292.3 403.5 304 397.6 304 387.4V284.6c0-10.16-11.64-16.16-20.16-10.32L240 304.5V288z" /></svg>
                  &nbsp; Network
                </a>
              </NavText>
              <NavItem eventKey="network_video">
                <NavText></NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="storage_video">
              <NavIcon>
                <a href="#storage_video"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#storage_video"
                  style={{ fontWeight: "bold", color: "#1B1212" , textDecoration:"none" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
                    <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM240 288c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-16.52l43.84 30.2C292.3 403.5 304 397.6 304 387.4V284.6c0-10.16-11.64-16.16-20.16-10.32L240 304.5V288z" /></svg>
                  &nbsp; Storage
                </a>
              </NavText>
              <NavItem eventKey="storage_video">
                <NavText></NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="onboarding_video">
              <NavIcon>
                <a href="#onboarding_video"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#onboarding_video"
                  style={{ fontWeight: "bold", color: "#1B1212" , textDecoration:"none"}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
                    <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM240 288c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-16.52l43.84 30.2C292.3 403.5 304 397.6 304 387.4V284.6c0-10.16-11.64-16.16-20.16-10.32L240 304.5V288z" /></svg>
                  &nbsp; Orchestration
                </a>
              </NavText>
              <NavItem eventKey="onboarding_video">
                <NavText></NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="migration_video">
              <NavIcon>
                <a href="#migration_video"></a>
              </NavIcon>
              <NavText>
                <a
                  href="#migration_video"
                  style={{ fontWeight: "bold", color: "#1B1212" , textDecoration:"none"}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
                    <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM240 288c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-16.52l43.84 30.2C292.3 403.5 304 397.6 304 387.4V284.6c0-10.16-11.64-16.16-20.16-10.32L240 304.5V288z" /></svg>
                  &nbsp; Migration
                </a>
              </NavText>
              <NavItem eventKey="migration_video">
                <NavText></NavText>
              </NavItem>
            </NavItem>

          </NavItem>

       <FloatButton/>
          </SideNav.Nav>
        </SideNav>
      
    </>
  );
};

export default SideBar;
