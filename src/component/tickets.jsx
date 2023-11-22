import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'

export const Tickets = () => {
  const [data,setData]=useState('True');
  const [data1,setData1]=useState('True');
  const [data2,setData2]=useState('True');
  const [data3,setData3]=useState('True');
  const [data4,setData4]=useState('True');
  const [data5,setData5]=useState('True');
  const navigation =useNavigate();
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
        <Button variant='text' onClick={handleclick}><h3>How can I book bus tickets on sks?</h3></Button>
        {data ? <p></p>:<p>
        Bus ticket Booking is very easy on redBus. To book the bus tickets go to the main page, enter your source city and destination city, in the “From” and “To” fields respectively. Enter travel date and hit the search button. Now you will see the list of buses that are available on the given bus route. You can use the filter option , such as duration, fare, bus type, etc to rearrange the list accordingly. This makes it easier for the customer to book their bus ticket online with redBus.
          </p>}
      </li>
      <li>
        <Button variant='text' onClick={handleclick1}><h3>Can I change the data of my journey after I have booked my bus ticket?</h3></Button>
        {data1 ? <p></p>:<p>
        Yes. You can change the date of journey after booking bus ticket on redBus by clicking the “Reschedule” icon if you think your travel plan might get interrupted while booking . Bus operators with the “Reschedule icon” next to it offer rescheduling of the bus ticket in case your initially selected date is not viable to travel on.
           </p>}
      </li>
      <li>
        <Button variant='text' onClick={handleclick2}><h3>Is it mandatory to take printout of the ticket?</h3></Button>
        {data2 ? <p></p>:<p>
        It depends on the bus operator you have booked your online bus tickets with. Even mTickets are available on redBus. For operators that support mTickets, the SMS that is sent to your mobile can be produced at the time of boarding and you will be allowed to travel.

<br></br><br></br>
For operators that do not support mTickets it is a must to take a printout of the e-ticket and produce it at the time of boarding. The e-ticket is sent to the e-mail ID provided at the time of boarding.

<br></br><br></br>
To know which operators are mTicket enabled, look for the mTicket icon  under the mTicket column while searching for buses.
            </p>}
      </li>
      <li>
        <Button variant='text' onClick={handleclick3}><h3>I've lost my ticket. What should I do now?</h3></Button>
        {data3 ? <p></p>:<p>
        A copy of the bus ticket would have been sent to you by email when you booked bus ticket online . Please take a printout of that mail and produce it at the time of boarding. If you have not received the ticket e-mail, please call any of our call centers and our executive will resend you a copy by mail.
            </p>}
      </li>
      <li>
        <Button variant='text' onClick={handleclick4}><h3>What is an mTicket?</h3></Button>
        {data4 ? <p></p>:<p>
        An mTicket is an SMS that is sent to your mobile on booking bus tickets with select private bus operators. This SMS has the TIN number and the PNR number along with other ticket related information. It can be used to board the bus. Please note that not all operators accept mTickets. To know which operators are mTicket enabled, look for the mTicket icon  under the mTicket column while searching for buses.
            </p>}
      </li>
      <li>
        <Button variant='text' onClick={handleclick5}><h3>I didn't receive my mTicket. Can you resend it?</h3></Button>
        {data5 ? <p></p>:<p>
        You can generate your mTicket online. To generate m-Ticket online click on the Print/SMS ticket link on the redbus home page on www.sks.in. Enter your TIN number mentioned on the e-ticket we emailed you. Choose the SMS option and click on Submit. In case you don’t have a copy of the e-ticket either, contact our call center and our executive will assist you.  
           </p>}
      </li>
      </ul>
      <Button variant='contained' onClick={handleevent}>Back</Button>
    </div> 
  )
}
