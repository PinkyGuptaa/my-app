
import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import {login} from '../features/userSlice'
import "./Login.css"
import axios from 'axios';

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [details, setDetails] = useState('')

    const dispatch = useDispatch();

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     dispatch(login({
    //         name: name,
    //         email: email,
    //         password: password,
    //         loggedIn: true,
    //     }))

    // }
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check if the entered credentials match the specific user's credentials
      if (name === "pinky" && password === "12345") {
        dispatch(
          login({
            name: name,
            loggedIn: true,
          })
        );
      } else {
        alert("Invalid credentials");
      }
    };
  
  

  return (
    <div className='login'>
    <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
            <input type="name" 
            placeholder='Name' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            {/* <input type="email" 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            /> */}

            <input type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit" className='submit-btn'>Submit</button>
    </form>
    </div>
  )
}

export default Login