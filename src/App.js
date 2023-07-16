import logo from './logo.svg';
import './App.css';
import Netflix from './views/Netflix';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Netflix1 from './views/Netflix1';
import  SwipperSlide from './views/SwipperSlide';
function App() {
  return (
    
   <Routes>
     <Route path="/" element={<Netflix />}/>
     <Route path="/home" element={<Netflix1 />}/>
     <Route path="/house" element={< SwipperSlide />}/>
   </Routes>  
    

    
  );
}

export default App;
