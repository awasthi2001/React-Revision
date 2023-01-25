import { SET_ERROR, SET_ISAUTH, SET_LOADING, SET_REGISTER } from "./actionTypes";

let initState = {
    isRegistered : false,
    isAuth : false,
    loading : false,
    error : false
}

export function AuthReducer(state=initState,{type,payload}){
    switch(type){
        case SET_LOADING :{
            return {...state,loading:true}
        }
        case SET_ERROR : {
            return {...state,error:true}
        }
        case SET_ISAUTH : {
           return {...state,isAuth:payload,loading:false,error:false}           
        }
        case SET_REGISTER : {
            return {...state,isRegistered:payload,loading:false,error:false}
        }
        default : {
            return state
        }
    }
}