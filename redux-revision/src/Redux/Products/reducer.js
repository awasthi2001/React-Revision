import { SET_ERROR, SET_LOADING, SET_DATA } from "./actionTypes";

let initState = {
    data : [],
    loading : false,
    error : false
}

export function ProductReducer(state=initState,{type,payload}){
    switch(type){
        case SET_LOADING :{
            return {...state,loading:true}
        }
        case SET_ERROR : {
            return {...state,error:true}
        }
        case SET_DATA : {
           return {...state,data:payload,loading:false,error:false}           
        }
        default :{
            return state
        }
    }
}