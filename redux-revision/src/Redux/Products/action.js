import { SET_DATA, SET_ERROR, SET_FILTER, SET_LOADING, SET_SEARCH } from "./actionTypes"

export const set_loading = ()=>{
    return {
        type : SET_LOADING
    }
}

export const set_data = (payload)=>{
 return {
    type : SET_DATA,
    payload : payload
 }
}
export const set_error = ()=>{
    return {
        type : SET_ERROR
    }
}


export const get_products_Data =()=>async(dispatch)=>{
  try {
       dispatch(set_loading());
       let res = await fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
       let data = await res.json();
       dispatch(set_data(data))
  } catch (error) {
    dispatch(set_error());
  }
}
