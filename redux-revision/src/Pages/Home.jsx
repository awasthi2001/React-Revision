import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_products_Data } from '../Redux/Products/action'

export const Home = () => {
    let {data,loading,error} = useSelector(state=>state.Product)
    let dispatch = useDispatch()
    console.log(data)
    useEffect(()=>{
     dispatch(get_products_Data())
    },[])
    if(loading){
        return <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" />
    }
    if(error){
        return alert('please refresh the page')
    }

  return (
    <div>
        {
            data.map((ele)=>{
                return <div key={ele.id}>
                    <img src={ele.imageURL} alt="" />
                    <h1>{ele.name}</h1>
                </div>
            })
        }
    </div>
  )
}
