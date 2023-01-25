import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { SignUp } from '../Pages/SignUp'
import { PrivateRoute } from './PrivateRoute'

export const AllRoutes = () => {
  return (
     <Routes>
      <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>} ></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signUp' element={<SignUp/>}></Route>
    </Routes>
  )
}
