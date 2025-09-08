import React from "react";
import "./Products.css";
import productsData from "./ProductsData";
import { useNavigate } from "react-router-dom";
import { SHOWBACK_API_URL } from "../RootUrl/rooturl";
import {message} from "antd"
import { NETWORK_URL } from "../RootUrl/rooturl";
import { ROOT_URL } from "../RootUrl/rooturl";
function Products() {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).username : null;
  const domainName = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).domainName : null;
  const password = localStorage.getItem('password');
  const handleProductClick = async (product) => {
    const authToken = localStorage.getItem('authToken');
  
    if (product.title === "Console") {
      try {
        if (!authToken) {
          throw new Error('No authentication token found');
        }
  
        // Get all applications
        const appsRes = await fetch('http://172.10.10.244:5000/api/applications', {
          headers: { 
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!appsRes.ok) {
          throw new Error(`Failed to fetch applications: ${appsRes.status}`);
        }
        
        const appsData = await appsRes.json();
        
        // Find console app configuration
        const consoleApp = appsData.data.find(app => app.app_name === "Console");
        if (!consoleApp) throw new Error('Console application not registered');
  
        // Get user data from localStorage
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) throw new Error('User data not found in localStorage');
  
        // Request authorization with userData included
        const authfinal = localStorage.getItem('authToken')
        const authRes = await fetch('http://172.10.10.244:5000/api/authorize-app', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
          body: JSON.stringify({
            ssoCode: consoleApp.sso_code,
            projectId: userData.projectId,
            userData: userData,  // Include userData in the request body
            ScopedToken:authToken
          })
        });
  
        // Handle non-JSON responses
        const contentType = authRes.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid response from server');
        }
  
        const authResult = await authRes.json();
        
        if (!authRes.ok) {
          throw new Error(authResult.error || 'Authorization failed');
        }
  
        const tempToken = localStorage.getItem('cachetemp');
        const scoped = localStorage.getItem('authToken');
        const redirectUrl = new URL(consoleApp.redirect_url);
        redirectUrl.searchParams.set('ScopedToken', scoped);
        redirectUrl.searchParams.set('jwt', authResult.jwtToken); // JWT now contains userData
        redirectUrl.searchParams.set('ostoken', authResult.openstackToken);
        redirectUrl.searchParams.set('expires', authResult.TCSECP);
        redirectUrl.searchParams.set('secondaryauth', tempToken);
        
        window.open(redirectUrl.toString(), 'noopener,noreferrer');
      } catch (error) {
        console.error('Console auth failed:', error);
        alert(`Error: ${error.message}`);
        localStorage.removeItem('authToken');
        window.location.reload();
      }
      return;
    }
  

    if (product.title === "Monitoring") {
      try {
        const appsRes = await fetch('http://172.10.10.244:5000/api/applications', {
          headers: { 
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
          }
        });
        if (!appsRes.ok) {
          throw new Error(`Failed to fetch applications: ${appsRes.status}`);
        }
        const appsData = await appsRes.json();
    
        // Check if "monitoring" app is registered (case-insensitive match if needed)
        const consoleApp = appsData.data.find(app => app.app_name.toLowerCase() === "monitoring");
        if (!consoleApp) {
          alert('Monitoring application is not registered. Access denied.');
          return;
        }
    
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData || !userData.username || !userData.projectId) {
          throw new Error('Required user data (username or projectId) is missing in localStorage.');
        }
    
        const userName = userData.username;
        const projectId = userData.projectId;
    
        const redirectUrl = `http://172.10.10.244:5000/saml/login?userName=${encodeURIComponent(userName)}&projectId=${encodeURIComponent(projectId)}`;
        window.open(redirectUrl, '_blank');
        
    
      } catch (error) {
        console.error('Monitoring SAML redirect failed:', error);
        alert(`Error: ${error.message}`);
      }
    
      return;
    }
    
    
    if (product.title === "Network") {
      try {
        const response = await fetch("https://172.10.10.62", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`, // optional depending on your backend
          },
          body: JSON.stringify({ authToken }),
        });
  
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Network response:", data);
  
        // Optionally redirect or notify the user here
      } catch (error) {
        console.error("Error in network product click:", error);
      }
      return;
    }
  
    // Add other product logic if needed
  };
  //console.log(JSON.parse(localStorage.getItem('userData')).username,"console");
  
  return (
    <div className="Productscontainer">
      <div>
        <div className="ProductsAlignContainer">
          <div className="Explore">Explore</div>
          <div className="digitally">Our Products</div>
        
        </div>
      </div>

      {productsData.map((product) => (
        <div className="TotalWidthContainer" key={product.id}>
          <div className="GifCont">
            <img height={100} src={product.gifSrc} alt={product.title} />
          </div>
          <div className="ContentCont">
            <div className="ContentContInner">
              <div
                style={{
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: "36px",
                }}
              >
                {product.title}
              </div>
              <div className={product.status=="LIVE"?"live-indicator-block-greena":"live-indicator-block-product"}>
                <span className={product.status=="LIVE"?"live-indicator-greena":"live-indicator"}>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z"
                      fill="#fff"
                    />
                    <animate
                      attributeName="opacity"
                      dur="1s"
                      values="0;1;0"
                      repeatCount="indefinite"
                      begin="0.1"
                    />
                  </svg>
                  &nbsp;{product.status}
                </span>
              </div>
            </div>
            <p>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z"
                  fill="#62B62C"
                />
              </svg>{" "}
              &nbsp;{product.description}
            </p>
          </div>
          <div className="ButtonCont">
            <button 
              className="button shiny"
              onClick={() => handleProductClick(product)}
            >
              {product.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;