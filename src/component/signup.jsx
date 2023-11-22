import React, { useState } from 'react';
import '../assert/signup.css';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
const Signup = ()=>{
    const navigate=useNavigate();
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[number,setNumber]=useState("");
    const[email,setEmail]=useState("");
    const[firstname,SetFirstName]=useState("");
    const Username1 = (event) =>{
        setUsername(event.target.value);
    }
    const Password1 = (event) => {
        setPassword(event.target.value);
    }
    const Number1 =(event) =>{
        setNumber(event.target.value);
    }
    const Submit1 = (event) =>{
        event.preventDefault();
        console.log(setUsername+" "+setPassword+" "+setNumber);
        console.log(username+" "+password+" "+number+" "+email+" "+firstname);
        alert("You have Signed in!!!");
        navigate('/Navbar');
    }
    const email1 = (event) => {
        setEmail(event.target.value);
    }
    const FirstName1 = (event) =>{
        SetFirstName(event.target.value);
    }
    return(
        <div className='kkk'>
        <div className='reality'>   
        <Card variant="elevation">
        <h2>SIGN IN</h2>
        <form method="post" onSubmit={Submit1}>
            <label htmlFor="FirstName">FirstName:</label><br></br>
            <input type="text" name="firstname" id="firstname" onChange={FirstName1} required style={{borderRadius:"7px"}}></input><br></br>
            <label htmlFor="email">Email</label><br></br>
            <input type="email" name="email" id="email" onChange={email1} required style={{borderRadius:"7px"}}></input><br></br>
            <label htmlFor="Username">UserName</label><br></br>
            <input type="text" name="username" id="username" onChange={Username1} required style={{borderRadius:"7px"}}></input><br></br>
            <label htmlFor="Password">Create Password</label><br></br>
            <input type="password" name="password" id="password" onChange={Password1} style={{borderRadius:"7px"}}></input><br></br>
            <label htmlFor="MobileNumber">MobileNumber</label><br></br>
            <input type="text" name="MobileNumber" id="MobileNumber" onChange={Number1} style={{borderRadius:"7px"}}></input><br></br><br></br>
            <Button variant="contained" type="submit">submit</Button><br></br><br></br>
            <Button variant="contained"type="reset">reset</Button><br></br>
            </form>
            </Card>
        </div>
        </div>
    )
}
export default Signup;

