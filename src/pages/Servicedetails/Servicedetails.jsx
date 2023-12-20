import React, { useEffect, useState } from 'react';

import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
const Servicedetails = () => {
   <Navbar></Navbar>
    const {id} = useParams([]);
    console.log(id)
    const event = useLoaderData([]);
    console.log(event)
    const idInt = parseInt(id);
    const events=event.find(events=>events.id===idInt)
    console.log(events);
    return (
       <div>
             <Navbar></Navbar> 
           
  
             <div className='bg-white px-20'>
         <h2 className='text-3xl text-black font-serif text-center py-10'>{events.name}</h2>
                  <img classname='mx-auto max-w-2xl' src={events.image}  />
         <p className='text-black font-serif text-center py-10 mx-10'>{events.long_description}</p>
        </div>
          
        </div>
             
    );
};

export default Servicedetails;



