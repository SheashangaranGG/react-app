import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getalldata } from '../axiosapi';
const defaultTheme = createTheme();

export default function Login() {
    const navigation=useNavigate();
    const [ldata,setLData]=useState([""]);
  
  useEffect(()=>
  {
    const fetchdata = async()=>
    {
      const res=await getalldata();
      setLData(res.data);
    }
    fetchdata();
  },[])
  const handleSubmit = (event) => {
    event.preventDefault();
    const em=document.getElementById("email").value;
    const pass=document.getElementById("password").value;
    const emailexist=ldata.findIndex((user)=>user.email===em)
    if(emailexist===-1)
    alert("Invalid email Id");
    else if(emailexist!==-1&&ldata[emailexist].pass===pass)
    navigation('/Navbar');
    else
    alert("Incorrect password");
  };

  const handleevent=()=>
  {
       navigation('/Forgot');
  }
  const handleclick=()=>
  {
    navigation('/Signup');
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.pexels.com/photos/2790391/pexels-photo-2790391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                isRequired
             />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                isRequired
                
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                 <Button varient='text' onClick={handleclick}>
                    Don't have an account? Sign Up
                 </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}