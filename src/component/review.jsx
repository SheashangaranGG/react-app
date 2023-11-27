import { Button, TextField } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewContext = createContext();

const CustomerReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const navigation=useNavigate();

  const addReview = () => {
    if (newReview.trim() !== '') {
      setReviews((prevReviews) => [...prevReviews, newReview]);
      setNewReview('');
      alert("Thankyou!!!");
    }
  };
  const handleevent=()=>
  {
    navigation('/Navbar');
  }

  return (
    <ReviewContext.Provider value={reviews}>
      <div style={{backgroundColor:"", color:"black"}}>
        <h1>Your points</h1>

        <div>
          <h2>Add your points</h2>
          <div>
            <textarea rows={20} cols={70} style={{fontSize:"20px"}}
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            >
            </textarea>
          </div>
          <div>
            <Button variant="contained" onClick={addReview}>Submit</Button>
          </div>

        </div>
        <br></br>
        <Button variant="contained" onClick={handleevent}>Home</Button>
        <div>
          
          <ReviewList />
        </div>
      </div>
    </ReviewContext.Provider>
  );
};

const ReviewList = () => {
  const reviews = useContext(ReviewContext);

  return (
    
    <ul type='none'>
    
      {reviews.map((review, index) => (
        <li key={index}>{review}</li>
      ))}
    </ul>
    
  );
};

export default CustomerReviewPage;