import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loginFunction, signupFunction } from '../../Redux/AuthRouter/action';
import Swal from 'sweetalert2';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginFail, LoginSuccess } from '../../Redux/AuthRouter/actionTypes';

export default function Login() {
  const [isSignUpMode, setSignUpMode] = useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
const dispatch = useDispatch();
const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    if(email=="admin@gmail.com"){
      navigate("/admin")
    }else{

     // dispatch(loginFunction({email,password}))

     // user login , after successful req we are checking the response
       // if => for wrong email alert
       // else if => for wrong password alert
       // else => login successful
     let user={email,password}

     axios
     .post("https://plant-api-opjp.onrender.com/users/login", user)
     .then((res) => {
        console.log("login UPDate",res.data)

        if(res.data.msg=="wrong email"){
          Swal.fire({
            title: 'Wrong Credentials ',
            text: 'please enter valid Email!',
            icon: 'error', 
            confirmButtonColor: 'red'
          });

        }
        else if(res.data.msg=="wrong password"){
          Swal.fire({
            title: 'Wrong Credentials ',
            text: 'please enter valid password!',
            icon: 'error', 
            confirmButtonColor: 'red'
          });

        }else{
         localStorage.setItem("token", res.data.token);
           dispatch({ type:LoginSuccess , payload: res.data});

        }
        
     })
     .catch((err) => {
       console.log(err,"err login")
       dispatch({ type:LoginFail , payload: err.message });
     })

    }
  }

  const handleSignUp=(e)=>{
  
    e.preventDefault();
    let user={
      name,email,password
    }

      axios
      .post("https://plant-api-opjp.onrender.com/users/signup", user)
      .then((res) => {
        console.log(res.data)
        // if email alreday exists its will show alert 
        if(res.data.userAlreadyPresent=="Yes"){
          Swal.fire({
            title: 'Email Already exist',
            text: 'please Login!',
            icon: 'warning', 
            confirmButtonColor: 'red'
          });
        }
        // if successfully register shows below alert
        else{
          Swal.fire({
            title: 'registered Successful',
            text: 'please Login!',
            icon: 'success', 
            confirmButtonColor: 'rgb(62,101,83)'
          });
          setSignUpMode(false)//this command for showing login form
        }
      })
      .catch((err) => {
       console.log(err)
      });

    }





  
  const all = useSelector((state)=>state.AuthReducer.token);
 // console.log(all)

  const isAuth = useSelector((state)=>state.AuthReducer.isAuth);
  if(isAuth){
    navigate(-1)
    Swal.fire({
      title: 'Login Successful',
      text: 'You are Logged in Successfully!',
      icon: 'success', // Set the icon to 'success'
      confirmButtonColor: 'rgb(62,101,83)'
    });
  }

  const toggleMode = () => {
    setSignUpMode(!isSignUpMode);
  };
 

  return (
    <DIV className='mt-5 pt-3'>
      <div className={`container  ${isSignUpMode ? ' sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form className={`sign-in-form${isSignUpMode ? ' hide' : ''}`} onSubmit={handleLogin}>
              <h2 className="">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              {/* Add your social media icons and links here */}
            </form>
            <form action="#" onSubmit={handleSignUp} className={`sign-up-form${isSignUpMode ? '' : ' hide'}`}>
              <h2 className="title">Sign up</h2>
              {/* Add your form input fields and buttons for sign-up here */}
              {/* Use onChange and value to manage form inputs */}
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)}  />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              {/* Add your social media icons and links here */}
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className={`panel left-panel${isSignUpMode ? '' : ' hide'}`}>
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btn transparent" onClick={toggleMode}>
                Sign up
              </button>
            </div>
            <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
          </div>
          <div className={`panel right-panel${isSignUpMode ? ' hide' : ''}`}>
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" onClick={toggleMode}>
                Sign in
              </button>
            </div>
            <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
          </div>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}

body,
input {
  font-family: 'Montserrat', sans-serif;
}

.container {
  position: relative;
  width: 100% !important;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: rgb(62,101,83);
  border-color: rgb(62,101,83);
}

.btn {
  width: 150px;
  background-color: rgb(62,101,83);
  border: none;
  outline: none;
  height: 49px;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: rgb(62,101,83);
}
.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, rgb(62,101,83) 0%, rgb(62,101,83) 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }
  .signin-signup {
    width: 100%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .signin-signup,
  .container.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .container:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}
`