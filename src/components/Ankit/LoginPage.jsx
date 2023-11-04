import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginImg from "./img/Login.png"
import axios from 'axios'
import Swal from 'sweetalert2';
export default function LoginPage() {
  



  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

    const navigate = useNavigate()
    const handleMovetoSignup = ()=>{
  navigate("/signup")
    }

    // const Api = process.env.API
    // console.log(Api,"API")

    const handleLogin = (e)=>{
      e.preventDefault();
      axios.post('http://localhost:8080/users/login',{email,password}).then((res)=>{
        console.log(res.data.loginSuccessful)
        const token = res.data.loginSuccessful;
        if(token) {
          localStorage.setItem("token",token)
          Swal.fire({
            title: 'Login Successful',
            text: 'You are Logged in Successfully!',
            icon: 'success', // Set the icon to 'success'
            confirmButtonColor: 'rgb(62,101,83)'
          });
          navigate("/")
        }else{
          Swal.fire({
            title: 'Wrong credentials',
            text: 'Please enter correct credentials',
            icon: 'error', // Set the icon to 'success'
            confirmButtonColor: 'rgb(62,101,83)'
          });
        }
  
      }).catch((err)=>{
        console.log(err)
  
      })
    }


  return (
    <div>
                <div className="container mt-5 pt-5 ">
            <div className="row mt-5">
                <div className="col-md-6 d-none d-lg-flex">
                <img className='w-100' src={LoginImg} alt="" />
                </div>
                <div className="col-md-6 mt-lg-5">
                    <form onSubmit={handleLogin}>
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className=' rounded-0 m-auto form-control w-75 my-3' />
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className=' rounded-0 m-auto form-control w-75 mt-3' />
                    <a className='float-end my-0 py-0 me-5 pe-4 themeColor' onClick={handleMovetoSignup} style={{cursor:"pointer"}}>New to Website?</a>
                    <input type="submit" placeholder='Password' className=' rounded-0 m-auto form-control authBtn w-75 my-3' />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
