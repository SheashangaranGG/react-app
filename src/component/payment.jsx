import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'

const Payment = () => {
  const [data,setData]=useState('True');
  const [data1,setData1]=useState('True');
  const [data2,setData2]=useState('True');
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
    const handleevent=()=>
    {
      navigation('/Navbar');
    }
    return (
      <div>
        <ul style={{listStyle:'none',textSizeAdjust:'40px'}}>
          <li>
        <Button variant='text' onClick={handleclick}><h3>is it safe to use my credit or debit card to buy bus tickets ?</h3></Button>
        {data ? <p></p>:<p>
       
         Transactions on sks are very safe. We employ the best-in-class security and the transactions done are secure. Apart from being certified by Verisign, sks uses Secure Socket Layers (SSL) data encryption. Using SSL ensures that the information exchanged with us is never transmitted unencrypted, thus protecting the information from being viewed by unauthorized individuals.
            </p>}
          </li>
          <li>
        <Button variant='text' onClick={handleclick1}><h3>What are the different payment options available on bus ticket booking?</h3></Button>
        {data1 ? <p></p>:<p>
        There are many payment modes available to book buses on the sks website and app. Some of these payment modes that are available for the bus ticket booking process are:
<ul>
  <li>
Debit Card/Credit Card/ATM Cards (Visa, MasterCard, Maestro & Rupay)
  </li>
  <li>
Net Banking (HDFC Bank, ICICI Bank, Indian Bank, Axis Bank, SBI and all major banks)
  </li>
  <li>
UPI (Google Pay, Amazon Pay, PhonePe)
  </li>
  <li>
Book Now, Pay Later (Simpl)
  </li>
  <li>
Wallets (Paytm)
  </li>
</ul>
Make sure to check the coupon code to get the discounts on bus booking online, sks offers a lot of redDeals to book the bus ticket on budget.
            </p>}
          </li>
          <li>
        <Button variant='text' onClick={handleclick2}><h3>How does the transaction appear on my card/account statement?</h3></Button>
        {data2 ? <p></p>:<p>
        Transactions on sks will appear as sks.IN, www.sks.in in your bank statement.  
           </p>}
          </li>
        </ul>
        <Button variant='contained' onClick={handleevent}>Back</Button>
      </div> 
    )
}
export default Payment;
