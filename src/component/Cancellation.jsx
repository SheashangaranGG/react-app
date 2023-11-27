import { Button } from '@mui/material';
import React from 'react'
import '../assert/login.css';
import { useNavigate } from 'react-router-dom';

const Cancellation = () => {
    const navigation=useNavigate();
    const handleevent =()=>
    {
      alert('Thank you!!!');
        navigation('/cancled');
    }
  return (
    <div style={{paddingLeft:'600px'}} className='cancle'>
      <div className='backgroundimage' >
      </div>
      <fieldset style={{width:500,height:525,paddingTop:30,color:'white',top:"12%",right:"6%",position:"absolute",backgroundColor:"rgb"}}>
        <legend>
            Cancellation:
        </legend>

        <div style={{textAlign:'left',paddingLeft:50}}>

      <input type='checkbox'></input>
      <lable><b>Due to issues with the travelling arrangement</b></lable><br></br>
      <input type='checkbox'></input>
      <lable><b>Due to change in my Plan</b></lable><br></br>
      <input type='checkbox'></input>
      <lable><b>Due to bad planning</b></lable><br></br>
      <input type='checkbox'></input>
      <lable><b>Due to late arrival of the bus</b></lable><br></br>
      <textarea style={{width:'300px',height:'200px'}}>
        
          If other's:
      </textarea><br></br>
      <br></br>
      <textarea style={{width:'300px',height:'100px'}}>
        Queries 'If any':
      </textarea><br></br>
      <br></br>
     <Button variant='contained' onClick={handleevent}> Submit </Button>
        </div>
      </fieldset> 
    </div>
  );
}
export default Cancellation;