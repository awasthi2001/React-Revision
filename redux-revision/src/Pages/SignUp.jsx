import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleRegister } from '../Redux/Authentication/action'
let initState = {
    name : '',
    email : '',
    age : '',
    pass : ''
}
export const SignUp = () => {
    const [details,setdetails] = useState(initState)
    const {isRegistered} = useSelector(state=>state.Auth)
    console.log(isRegistered)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function HandleInput(e){
        let {name,value} = e.target;
        return setdetails({...details,[name]:value})
    }
  function SendDetails(){
    dispatch(handleRegister(details))
  }
  useEffect(()=>{
    if(isRegistered){
        navigate('/login')
    }
  },[isRegistered])
  return (
    <div>

            <input type="text" name='name' placeholder='Please Enter Your Name' value={details.name} onChange={HandleInput} />
            <input type="text" name='email' placeholder='Please Enter Your Email' value={details.email} onChange={HandleInput}/>
            <input type="number" name="age" placeholder='Please Enter Your Age'value={details.age} onChange={HandleInput}/>
            <input type="text" name='pass' placeholder='Please Enter Your Password' value={details.pass} onChange={HandleInput} />
            <input type="button" value='REGISTER' onClick={SendDetails} />

    </div>
  )
}
