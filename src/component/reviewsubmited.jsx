import React, { createContext, useContext, useState } from 'react';

const ReviewContext = createContext();
const Reviewsub=()=>
{
    return(
        <div>
            <ReviewList/>
        </div>
    )
}

const ReviewList = () => {
    const reviews = useContext(ReviewContext);
  
    return (
  
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    );
  };
  export default Reviewsub;