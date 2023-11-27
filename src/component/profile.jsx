import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigation=useNavigate();
    const handleevent=()=>
    {
        navigation('/Navbar');
    }

    const[abi,setAbi]=useState([]);
    const[data,setData]=useState({});
    useEffect(()=>
    {
        const hello= async()=>
        {
        await axios.get("http://localhost:3999/LogInData")
        .then((res)=>{
            setAbi(res.data);
            setData(res.data[(res.data.length)-1]);
        }
        )
    }
    hello();
},[]);
  return (
    <div>
          <Paper elevation={200}>

        <div>
            <form style={{textAlign:"center",backgroundColor:"lightblue"}}>

            <h2>Your profile details:</h2><br></br>
            <lable><h4>Name: {data.firstName}</h4></lable>
            <lable><h4>Email: {data.email}</h4></lable>
            <lable><h4>Password: {data.pass}</h4></lable>
            <Button variant="contained" onClick={handleevent}>Home</Button>
            </form>
        </div>
        </Paper>
    </div>
  )
}

export default Profile;
