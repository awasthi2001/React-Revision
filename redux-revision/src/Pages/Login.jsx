import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleLogin } from '../Redux/Authentication/action'
let initState = {
    email : '',
    pass : ''
}
export const Login = () => {
    const [details,setdetails] = useState(initState)
    const {isAuth} = useSelector(state=>state.Auth)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    function HandleInput(e){
        let {name,value} = e.target;
        return setdetails({...details,[name]:value})
    }
  function SendDetails(){
    dispatch(handleLogin(details))
  }
  useEffect(()=>{
    if(isAuth){
        navigate('/')
    }
  },[isAuth])
  return (
    <div>
            <input type="text" name='email' placeholder='Please Enter Your Email' value={details.email} onChange={HandleInput}/>
            <input type="text" name='pass' placeholder='Please Enter Your Password' value={details.pass} onChange={HandleInput} />
            <input type="button" value='LOGIN' onClick={SendDetails} />

    </div>
  )
}
