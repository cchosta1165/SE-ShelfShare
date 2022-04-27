
//import AliceCarousel from 'react-alice-carousel'
//import "react-alice-carousel/lib/alice-carousel.css"

import "./App.css";
import ImageSlider from  './components/ImageSlider';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import React from 'react';




function App() {

  
  return(
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>
      
      </Router>

    <Signup />

    </>

    
  )
  
  
}

export default App;

