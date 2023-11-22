import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'

export const General = () => {
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
         <Button variant='text' onClick={handleclick}><h3>Can i track of my booked bus online?</h3></Button>
        {data ? <p></p>:<p>
        Yes, you can track your bus online by using our bus tracking app feature called Track My Bus. This feature allows passengers and their families to track the live bus tracking location. You may follow your bus on a map and use the information to plan your trip to the boarding point and to get off at the correct stop. Family and friends may also check the bus position to plan pick-ups and ensure your safety.
            </p>}    
            </li>
            <li>
         <Button variant='text' onClick={handleclick1}><h3>What are the advantages of pruchasing a bus ticket with sks travel?</h3></Button>
        {data1 ? <p></p>:<p>
        There are many advantages to purchasing online bus tickets with sks. sks is India’s most trusted bus ticket company, where you can book any type of private or Government owned buses. redBus allows you to find the different types of buses, choose the preferred bus seats, and your nearest boarding and dropping points. You can also filter the buses based on timings like morning, evening bus etc.
            </p>}      
            </li>
            <li>
         <Button variant='text' onClick={handleclick2}><h3>Why book bus tickets online?</h3></Button>
        {data2 ? <p></p>:<p>
        Booking bus tickets online on redBus is increasingly becoming the preferred choice for travelers due to its numerous advantages over traditional methods.With redBus, customers can book their bus tickets effortlessly from the comfort of their homes, avoiding the inconvenience of standing in long lines at bus stations or travel agencies. Online bus booking not only offers the luxury of comparing different bus schedules and operators but also presents various discount offers and exclusive deals, resulting in significant savings.
<br></br><br></br>
Payment security is another notable feature of online booking, which ensures that your financial information is well-protected against fraud. Additionally, customers get the privilege to pick their seats, providing a customized travel experience. Online bus booking platforms give real-time updates about any changes in the bus timetable, including delays or cancellations, enabling better planning.
<br></br>
<br></br>
The convenience doesn't stop here; travelers can even compare onboard amenities like charging points or snacks, further enhancing the travel experience.
            </p>}      
            </li>
            <li>
         <Button variant='text' onClick={handleclick3}><h3>Do i need to create an account on the site to book ticket?</h3></Button>
        {data3 ? <p></p>:<p>
        No, you don’t have to create an account on sks site to book your bus ticket. But it is advisable to create one to accelerate the process next time you want to book bus tickets. Also redBus has many discounts and offers that you can easily access if you have an account with us.
            </p>}      
            </li>  
            <li>
            <Button variant='text' onClick={handleclick4}><h3>Does bus booking online cost more?</h3></Button> 
            {data4 ? <p></p>:<p>
            Not at all! The price of the bus ticket is the same as you would get from the bus operator/ counter of any bus ticket agency. Redbus reduces the travel budget by comparing the bus ticket prices among various operators, making it a more cost-effective choice. Therefore, online bus booking is increasingly being recognized as a more convenient, efficient, and economical mode of securing travel arrangements.
                </p>}
            </li>
            <li>
            <Button variant='text' onClick={handleclick5}><h3>How can i get the discount on bus booking?</h3></Button>
            {data5 ? <p></p>:<p>
            To get the discount on bus booking please visit: https://www.sks.in/info/OfferTerms and check the available offers. Copy the coupon code and paste it during checkout to avail the discount.
                </p>}
            </li>
        </ul>
        <Button variant='contained' onClick={handleevent}>Back</Button>
      </div> 
    )
}
