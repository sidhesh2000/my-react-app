//import logo from './logo.svg';
import './App.css';

import { Desktop1 } from "./Components/Desktop1";
import { ScrollToTop } from './Components/ScrollToTop';
import { Home } from './Components/Home';
import { Products } from './Components/Products';
import { Routes, Route , Navigate } from 'react-router-dom';
import Signup from './Components/SignUp/Signup';
import Login from './Components/LogIn/Login';
import HomeLandingOs from './Components/OpenStackDashboard/HomeLandingOs';
import InstanceTable from './Components/OpenStackDashboard/InstanceTable';
import { AuthProvider } from './Components/ProjectSwitcher/AuthContext';
const App = () => {
   const isAuthenticated = () => {
      return localStorage.getItem('isAuthenticated') === 'true';
    };
  return (
     <>
     {/* Custom hook to refresh scroll position */}
      <ScrollToTop>
        <AuthProvider>
        <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route 
            path="/" 
            element={
              <Desktop1 /> 
            } 
          />
           {/* <Route path="/" element={<Desktop1 />} /> */}
           <Route path="/product" element={<Products />} />
           <Route path="/learn" element={<Home/>} />
           <Route path="/dashboard" element={<HomeLandingOs/>}/>
           <Route path="/Instance" element={<InstanceTable/>}/>
         
        </Routes>
        </AuthProvider>
        </ScrollToTop>
     </>
  );
 };
 
 export default App;