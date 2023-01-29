import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {set_login} from '../../Redux/Authentication/action.js'
const Navbar = () => {
  let {isAuth} = useSelector(state=>state.Auth)
  const dispatch = useDispatch()
  function handleLogout(){
   dispatch(set_login(false))
  }
  return (
    <div>
        <div className={styles.Nav_Container} >
           <NavLink className={(Active)=>{
           return Active.isActive?styles.Active:styles.isNotActive}} to='/' >HOME</NavLink>
           {
            isAuth ? <button onClick={handleLogout} >LOGOUT</button> :       <><NavLink className={(Active)=>{
              return Active.isActive?styles.Active:styles.isNotActive}} to='/login'>LOGIN</NavLink>
              <NavLink className={(Active)=>{
              return Active.isActive?styles.Active:styles.isNotActive}}  to='/SignUp' >SIGNUP</NavLink></>    
           }
 
        </div>
    </div>
  )
}

export default Navbar