import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import {useDispatch} from 'react-redux'
import {set_login} from '../../Redux/Authentication/action.js'
const Navbar = () => {
  const dispatch = useDispatch()
  console.log(dispatch)
  function handleLogout(){
   dispatch(set_login(false))
  }
  return (
    <div>
        <div className={styles.Nav_Container} >
           <NavLink className={(Active)=>{
           return Active.isActive?styles.Active:styles.isNotActive}} to='/' >HOME</NavLink>
           <NavLink className={(Active)=>{
           return Active.isActive?styles.Active:styles.isNotActive}} to='/login'>LOGIN</NavLink>
           <NavLink className={(Active)=>{
           return Active.isActive?styles.Active:styles.isNotActive}}  to='/SignUp' >SIGNUP</NavLink>
        </div>
    </div>
  )
}

export default Navbar