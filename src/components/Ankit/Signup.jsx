import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginImg from "./img/Login.png"
import axios from 'axios'
import Swal from 'sweetalert2';

export default function Signup() {

  const [name,setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")



  const navigate = useNavigate()
  const handleMovetoLogin = ()=>{
navigate("/loginPage")
  }

  const handleSignup = (e)=>{
e.preventDefault();
axios.post('http://localhost:8080/users/signup',{name,email,password}).then((res)=>{
  console.log(res.data)
  const AlreadyPresent = res.data.userAlreadyPresent
  if(AlreadyPresent) {
    Swal.fire({
      title: 'Email Already Registered',
      text: 'You are Already Registered',
      icon: 'warning', // Set the icon to 'success'
      confirmButtonColor: 'rgb(62,101,83)'
    });
  }else{
    Swal.fire({
      title: 'SignUp Successful',
      text: 'You are SignUp Successfully!',
      icon: 'success', // Set the icon to 'success'
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
                <div className="col-md-6">
                    <form onSubmit={handleSignup}>
                    <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} className='rounded-0 m-auto form-control w-75 my-3' />
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className=' rounded-0 m-auto form-control w-75 my-3' />
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className=' rounded-0 m-auto form-control w-75 mt-3' />
                    <a className='float-end my-0 py-0 me-5 pe-4 themeColor' onClick={handleMovetoLogin} style={{cursor:"pointer"}}>Already Registered?</a>
                    <input type="submit" placeholder='Password' className=' rounded-0 m-auto form-control authBtn w-75 my-3' />
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}
