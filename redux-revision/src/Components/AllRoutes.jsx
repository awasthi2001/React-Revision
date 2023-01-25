import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const AllRoutes = () => {
  return (
     <Routes>
      <Route path='/' element={<h1>Home Page</h1>} ></Route>
      <Route path='/login' element={<h1>Login Page</h1>}></Route>
      <Route path='/signUp' element={<h1>SignUp Page</h1>}></Route>
    </Routes>
  )
}
