import React from 'react'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import '../assert/Navbar.css';
import { useNavigate } from 'react-router-dom';

import Fromto from './fromto';
import Faq from './Faq';
// import RoutingCancel from './Routingcancel';
var Dvstravel = require('../assert/images/Dvstravels.png');
const Navbar = () => {
  const navigation=useNavigate();
  const handleevent = () =>{
   navigation('/Login');
  }
  const handleSubmit = () =>{
    navigation('/signup')
  }
  const handleCancel=()=>
  {
    navigation('/Cancellation');
  }
  const handlereview=()=>
  {
    navigation('/Coustomerreviewpage');
  }
  const handleprofile=()=>
  {
    navigation('/Profile');
  }
  return (
    <>
  <div className='st' style={{width:"100%"}}>
    <div className='navbar__container'>
      <div className='one'>
      <img src={Dvstravel} alt='bus' width={400} height={80}/>
      </div>
        <div className='two'>
       <h1 style={{color:"#fffaf0"}}>DVS TRAVELS</h1>
       </div>
       <div className='seperate'>
        <Button variant="contained" style={{height:'45px',borderRadius:"25px"}} onClick={handleSubmit} className='realsign'>SignUp/Login</Button>
        <Button variant="contained" style={{height:'45px',borderRadius:"25px"}} onClick={handlereview} className='realsign'>Review</Button>
        <AccountCircleSharpIcon style={{height:'45px',width:'50px'}} onClick={handleprofile}/>
        </div>
    </div>
  </div>
  <div className='native'>
    <div>
       <Fromto/>
    </div>
    <div>
      <Faq/>
    </div>
    <div>
      <h1>Let's have a great ride together!</h1>
    </div>
    <div style={{backfaceVisibility:'visible'}}>
      <h3 style={{color:'red'}}>If you need to cancel ticket.Click here 🥹
      </h3>
      <Button variant='outlined' type='submit' onClick={handleCancel}>Cancel Ticket</Button>
    </div>
    </div>
    
    </>
  )
}
export default Navbar;