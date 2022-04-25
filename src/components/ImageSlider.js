import React, {useState} from 'react';
import './Slider.css';
import { images } from './SliderData.js';
import arrowback from './Images/arrowback.png';
import arrowforward from './Images/arrowforward.png';

function ImageSlider() {

    const [currImg, setCurrImg] = useState(1);

  return (
    <div className="imageslider">
        <div className="sliderInner" style={{backgroundImage: `url(${images[currImg].img})` }} >

            <div className="left">
                <arrowforward />
            </div>
            <div className="center"></div>
            <div className="right">
                <arrowforward />
            </div>
            
            
        </div>
      
    </div>
  )
}

export default ImageSlider
