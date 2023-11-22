import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'

export const Cancle = () => {
  const [data,setData]=useState('True');
  const [data1,setData1]=useState('True');
  const [data2,setData2]=useState('True');
  const [data3,setData3]=useState('True');
  const [data4,setData4]=useState('True');
  const [data5,setData5]=useState('True');
    const navigation = useNavigate();
    const handleclick=()=>
  {
      if(data === false)
      {
          setData(true);
      }
      else{
          setData(false);
      }
  }
    const handleclick1=()=>
  {
      if(data1 === false)
      {
          setData1(true);
      }
      else{
          setData1(false);
      }
  }
    const handleclick2=()=>
  {
      if(data2 === false)
      {
          setData2(true);
      }
      else{
          setData2(false);
      }
  }
    const handleclick3=()=>
  {
      if(data3 === false)
      {
          setData3(true);
      }
      else{
          setData3(false);
      }
  }
    const handleclick4=()=>
  {
      if(data4 === false)
      {
          setData4(true);
      }
      else{
          setData4(false);
      }
  }
    const handleclick5=()=>
  {
      if(data5 === false)
      {
          setData5(true);
      }
      else{
          setData5(false);
      }
  }

    const handleevent=()=>
    {
      navigation('/Navbar');
    }
    return (
      <div>
        <ul style={{listStyle:'none'}}>
          <li>
          <Button variant='text' onClick={handleclick}><h3>Can i cancel my bus ticket online?</h3></Button>
        {data ? <p></p>:<p>
        Yes you can cancel bus tickets online, Most of the tickets can be canceled online. However, there are some bus tickets that can only be canceled through our call center.

<br></br><br></br>
However please note that the cancellation fee and cancellation period may differ for specific bus services. Please contact any of our executives for cancellation details on any specific service.  
            </p>}
          </li>
          <li>
          <Button variant='text' onClick={handleclick1}><h3>How can i cancel my bus ticket online?</h3></Button>
        {data1 ? <p></p>:<p>
        To cancel the bus ticket online , you need to click on the cancellation link provided on our home page. Enter your ticket number and the e-mail ID that was provided at the time of bus booking and click on cancel ticket.  
            </p>}
          </li>
          <li>
          <Button variant='text' onClick={handleclick2}><h3>I missed the bus. Do I get a refund?(refund)</h3></Button>
        {data2 ? <p></p>:<p>
        sks provides a 100% refund if the bus is missed due to either sks or its partner company's fault. However, if the bus is missed due to any other reason not directly related to sks no refund is provided.
            </p>}
          </li>
          <li>
          <Button variant='text' onClick={handleclick3}><h3>How can I get refund in case I cancel my ticket?(refund)</h3></Button>
        {data3 ?  <p></p>:<p>
        The refund is provided as per cancellation policy of the operator. The refund can be credited to the source of payment (Example: debit card, credit card, net banking) or credited to redBus wallet. Wallet credit can be used for bus booking in future (within 6 months of cancellation).
            </p>}
          </li>
          <li>
          <Button variant='text' onClick={handleclick4}><h3>What happens if the bus does not leave on time or is canceled?</h3></Button>
        {data4 ? <p></p>:<p>
        If your bus does not leave on time or is canceled, in such situations, you will need to consult the counter of the respective bus operators. You can also call the redBus customer care to discuss the appropriate actions.  
            </p>}
          </li>
          <li>
          <Button variant='text' onClick={handleclick5}><h3>How can i reschedule my bus tickets?</h3></Button>
        {data5 ? <p></p>:<p style={{backgroundColor:'lightblue'}}>
          Go search for my booking and change the travel details.
            </p>}
          </li>
        </ul>
        <Button variant='contained' onClick={handleevent}>Back</Button> 
      </div> 
    )
}
