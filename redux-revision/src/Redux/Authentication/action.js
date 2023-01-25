import { SET_ERROR, SET_ISAUTH, SET_LOADING, SET_REGISTER } from "./actionTypes"

export const set_login = (payload)=>{
 return {
    type : SET_ISAUTH,
    payload : payload
 }
}

export const set_register = (payload)=>{
    return {
       type : SET_REGISTER,
       payload : payload
    }
}
export const set_loading = ()=>{
    return {
        type : SET_LOADING
    }
}
export const set_error = ()=>{
    return {
        type : SET_ERROR
    }
}
export const handleRegister = ()=>async (dispatch)=>{
    try {
      dispatch(set_loading())
      let res = await fetch('http://localhost:8080/user/register',{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'content-type' : 'application/json'
        }
      })
      
    } catch (error) {
        dispatch(set_error())
    }
    }
export const handleLogin = ()=>async (dispatch)=>{
try {
  dispatch(set_loading())
  let res = await fetch('http://localhost:8080/user/login',{
    method : 'POST',
    body : JSON.stringify(data),
    headers : {
        'content-type' : 'application/json'
    }
  })
  
} catch (error) {
    dispatch(set_error())
}
}
