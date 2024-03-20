import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css"; // Import CSS file for additional styles


import p6 from "../assest/p6.png";
import p7 from "../assest/p7.png";

const Slider = () => {
    const onChange = (index) => {
        console.log(`Carousel slide changed to index ${index}`);
    };
    
    const onClickItem = (index, item) => {
        console.log(`Clicked item ${index}`);
    };
    
    const onClickThumb = (index, item) => {
        console.log(`Clicked thumbnail ${index}`);
    };

    return (
        <div className="slider-container">
            <Carousel 
                showArrows={true} 
                showThumbs={false} 
                onChange={onChange} 
                onClickItem={onClickItem} 
                onClickThumb={onClickThumb}
            >
                <div className="slider-item">
                    <img src={p6} alt="Slide 1" />
                    
                </div>


                <div className="slider-item">
                    <img src={p7} alt="Slide 1" />
                    
                </div>
                
               
            </Carousel>
        </div>
    );
};

export default Slider;
