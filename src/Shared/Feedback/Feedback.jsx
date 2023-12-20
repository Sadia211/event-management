import React from 'react';
import { Link } from 'react-router-dom';
const Feedback = ({reviews}) => {
    const{clientName,feedback}=reviews
    return (
        
        <div className="card w-96 bg-white ">
        
        <div className="card-body items-center text-center">
          <h2 className="card-title text-black">{clientName}</h2>
          <p className='text-black'>{feedback}</p>
        
        </div>
        <div className='grid grid-cols-3 gap-2'>
            {reviews.map(feedbacks=><Feedback
    key={feedbacks.clientName}
    reviews={feedbacks}
    ></Feedback>)}
        </div>
      </div>
    );
};

export default Feedback;