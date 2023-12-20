import React from 'react';
import { NavLink } from 'react-router-dom';

import image from '../../../public/img/venue.png'
    
    const Banner = () => {
        return (
            <div className="carousel w-full bg-black opacity-90 h-full">
            <div id="slide1" className="carousel-item relative w-full h-full bg-black opacity-40 ">

              <img src='./img/venue.png' className="w-full h-full" />
             </div>
                <p className='text-4xl  font-serif text-gray-300 font-bold absolute flex justify-between  left-40 top-80'>
                Immerse yourself in a world of celebration <br></br>
                with our Services.
                </p>
   
            </div> 
           
            
        );
    };
    
    export default Banner;