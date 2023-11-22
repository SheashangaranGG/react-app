import React from 'react';
import { useNavigate } from 'react-router-dom';
import From from './From';
import To from './To';
import Datefix from './Datefix';
import Button from '@mui/material/Button'
import Gender from './gender';

export default function Fromto() {
  const navigation = useNavigate();

  const handleEvent = () => {
    alert('Thanks for choosing us!!!');
    navigation('/Search');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigation('/Search');
  };
 

  return (
    <div className='nontats'>

    <div style={{outlineStyle:'groove',outlineWidth:'4px',outlineColor:'lavender'}}>
      <h1 style={{textAlign:"center",color:'black',alignContent:'center'}}>Booking Details</h1>
    <div style={{paddingLeft:'500px'}}>
    <form
      style={{backgroundColor:"White",width: 400, height: 400, action:"/action_page.php",alignContent:'center' }}
      onSubmit={handleSubmit}
      >
        <fieldset>
        <legend >
            Details:
        </legend>
      <label> 
       <From/>
      </label>
      <hr></hr>
      <label>
       <To/>
      </label>
      <hr></hr>
      <label>      
        <Datefix/>
        <hr></hr>
        <lable>
          <Gender/>
        </lable>
        <hr></hr>
      </label>
      <Button variant="contained" type='submit' onClick={handleEvent} style={{width:'150px',height:'40px'}}>

      book ticket
      </Button>
      </fieldset>
    </form>
    </div>
      </div>
      <br></br>
    
   
        </div>
  );
}
