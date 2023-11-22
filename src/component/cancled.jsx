import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cancled = () => {
    const navigation=useNavigate();
    const handleevent=()=>
    {
        navigation('/Navbar')
    }
  return (
    <div>
        <h3>Your ticket has been cancelled.Amount will be added to your Account soon.</h3>
      <Button varient='contained' onClick={handleevent}>Home</Button>
    </div>
  )
}

export default Cancled
