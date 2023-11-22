import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Login from './Login'
import Signup from './signup'
import Search from './Search'
import Cancled from './cancled'
import Cancellation from './Cancellation'

import Faq from './Faq'
import { General } from './general'
import { Tickets } from './tickets'
import { Cancle } from './cancle'
import Payment from './payment'

const RoutingCancel = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Navbar/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/Login'  element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/cancled' element={<Cancled/>}/>
        <Route path='/Cancellation' element={<Cancellation/>}/>
        <Route path='/' element={<Faq/>}/>
            <Route path='/Faq' element={<Faq/>}/>
            <Route path='/Faq' element={<Faq/>}/>
            <Route path='/general' element={<General/>}/>
            <Route path='/tickets' element={<Tickets/>}/>
            <Route path='/Payment' element={<Payment/>}/>
            <Route path='/Cancle' element={<Cancle/>}/>
      </Routes>
    </div>
  )
}

export default RoutingCancel;
