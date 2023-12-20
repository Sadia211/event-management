import React from 'react';

import { Link } from 'react-router-dom';
const Services = ({events}) => {
    const{id,name,image,short_description,price,button}=events
    return (
       
           
           
            <div className="card w-96 bg-white ">
  <figure className="px-10 pt-5">
    <img src={image} />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-black">{name}</h2>
    <p className='text-black'>{short_description}</p>
    <p className='text-black'>Price: {price} BDT</p>
    <div className="card-actions">
    <Link to={`/events/${id}`}>
      <button className="rounded text-white px-5 py-3 bg-amber-800">{button}</button></Link>
    </div>
  </div>
</div>
        
    );
};

export default Services;