
import React, { useEffect, useState } from 'react';
import { logout, selectUser } from '../features/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
const Logout = () => {
    const [details, setDetails]= useState('')
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const handleLogout = (e) =>{
    e.preventDefault();
   
    dispatch(logout())
}
useEffect(()=>{
    axios.get('http://10.226.42.237:8000/').then((res)=>{
      setDetails(res.data);
      console.log(res.data)
    }).catch(err=>console.log(err))
  },[])

  return (
    <div>
        <h1>Welcome <span className='user__name'>{details}</span></h1>
        <button className='logout__button' onClick={(e)=>handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout