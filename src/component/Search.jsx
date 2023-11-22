import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'

const Search = () => {
  const navigation=useNavigate();
  const handleevent=()=>
  {
    navigation('/Navbar');
  }
  return (
    <div>
      <h3>Your bus ticket will be booked and It will be avaliable in your email</h3>
      <Button variant="outlined" onClick={handleevent}>Home</Button>
    </div>
  )
}

export default Search