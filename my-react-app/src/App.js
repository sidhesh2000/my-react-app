//import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Desktop1 } from "./Components/Desktop1";
import { ScrollToTop } from './Components/ScrollToTop';
import { Home } from './Components/Home';
import { Products } from './Components/Products';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
     <>
     {/* Custom hook to refresh scroll position */}
      <ScrollToTop>
        <Routes>
        
           <Route path="/" element={<Desktop1 />} />
           <Route path="/product" element={<Products />} />
           <Route path="/learn" element={<Home/>} />
         
        </Routes>
        </ScrollToTop>
     </>
  );
 };
 
 export default App;