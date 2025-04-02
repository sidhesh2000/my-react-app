import React from "react";
import { HashLink } from 'react-router-hash-link';
import './blog.css';
export const FloatButton = () => {
  

  return (
  <>
     <div class="fab-wrapper">
  <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
  <label class="fab" for="fabCheckbox">
 
  <span class="fab-dots fab-dots-1"></span>
    <span class="fab-dots fab-dots-2"></span>
    <span class="fab-dots fab-dots-3"></span>
 
  </label>
  <div class="fab-wheel">
  {/*  <a class="fab-action fab-action-1">
      <i class="fas fa-question"></i>
    </a>
*/} 

    <HashLink class="fab-action fab-action-2" id="tooltip" to="http://localhost:3000" title="Home">
  
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
  
    </HashLink>
   

  
    <HashLink to="http://localhost:3000#solution" class="fab-action fab-action-3" title="solutions">     
<svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download-cloud"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>

    </HashLink>

        <HashLink class="fab-action fab-action-4" to="http://localhost:3000#product" title="products">
       
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
    </HashLink>
  </div>
</div>
  </>
  );
};