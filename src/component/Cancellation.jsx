import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cancellation = () => {
    const navigation=useNavigate();
    const handleevent =()=>
    {
        navigation('/cancled');
    }
  return (
    <div style={{paddingLeft:'600px'}}>
      <fieldset style={{width:500,height:400,paddingTop:30}}>
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
     <Button variant='contained' onClick={handleevent}> Submit </Button>
        </div>
      </fieldset> 
    </div>
  );
}
export default Cancellation
