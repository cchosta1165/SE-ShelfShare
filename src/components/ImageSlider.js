import React, {useState} from 'react';
import './Slider.css';
import { images } from './SliderData.js';
//import arrowback from './Images/arrowback.png';
//import arrowforward from './Images/arrowforward.png';

function ImageSlider() {

    const [currImg, setCurrImg] = useState(8);

  return (
    <div className="imageslider">
        <div className="sliderInner" style={{backgroundImage: `url(${images[currImg].img})` }} >

            <div className="left">
                <img src="./Images/arrowback.png" alt="back" />
                
            </div>
            <div className="center"></div>
            <div className="right">
            <img src="./Images/arrowforward.png" alt="forward" />
            </div>
            
            
        </div>
      
    </div>
  )
}

export default ImageSlider
