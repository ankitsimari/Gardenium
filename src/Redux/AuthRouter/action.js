// import axios from "axios";
// import { GetUsersData, LoginFail, LoginRequest, LoginSuccess, LoginUpdate, LogoutUpdate, SignUpFail, SignUpRequest, SignUpSuccess, adminLogin } from "./actionTypes";
// import { getProductRequest } from "../ProductReducer/actionTypes";

import axios from "axios";
import { LoginFail, LoginSuccess, LogoutUpdate } from "./actionTypes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const signupFunction=(userData)=>(dispatch)=>{
  axios
  .post("https://plant-api-opjp.onrender.com/users/signup", userData)
  .then((res) => {
    //console.log(res.data)
  })
  .catch((err) => {
   //console.log(err)
  });
}

  export const loginFunction=(emData)=>(dispatch)=>{
  return axios
      .post("https://plant-api-opjp.onrender.com/users/login", emData)
      .then((res) => {
         console.log("login UPDate",res.data.msg)
         
           localStorage.setItem("token", res.data.token);
            dispatch({ type:LoginSuccess , payload: res.data});
         
      })
      .catch((err) => {
        console.log(err,"err login")
        dispatch({ type:LoginFail , payload: err.message });
      });
  };


    export const logoutFunction=(dispatch)=>{
    axios.get('https://plant-api-opjp.onrender.com/users/logout').then((response)=>{
      dispatch({type:LogoutUpdate})
    }).catch((error)=>{
      console.log(error)
    })
  }


