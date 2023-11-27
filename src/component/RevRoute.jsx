import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CustomerReviewPage from './review'
import Reviewsub from './reviewsubmited'

const RevRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<CustomerReviewPage/>}></Route>
            <Route path='/Reviewsub' element={<Reviewsub/>}></Route>
        </Routes>
      
    </div>
  )
}

export default RevRoute
