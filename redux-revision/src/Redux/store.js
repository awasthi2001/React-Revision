import {applyMiddleware, legacy_createStore as createstore} from 'redux'
import { combineReducers } from 'redux'
import { AuthReducer } from './Authentication/reducer'
import { ProductReducer } from './Products/reducer'

const root = combineReducers(
    {
        Auth : AuthReducer,
        Product : ProductReducer
    }
)
const thunk = (store)=>(next)=>(action)=>{
 if(typeof action === 'function'){
    return action(store.dispatch);
 }else{
    next(action);
 }
}

export const store = createstore(root,applyMiddleware(thunk))