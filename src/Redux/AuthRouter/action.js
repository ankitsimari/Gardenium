// import axios from "axios";
// import { GetUsersData, LoginFail, LoginRequest, LoginSuccess, LoginUpdate, LogoutUpdate, SignUpFail, SignUpRequest, SignUpSuccess, adminLogin } from "./actionTypes";
// import { getProductRequest } from "../ProductReducer/actionTypes";

import axios from "axios";
import { LoginFail, LoginSuccess, LogoutUpdate } from "./actionTypes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";





  export const loginFunction=(emData)=>(dispatch)=>{
   axios
      .post("https://plant-api-opjp.onrender.com/users/login", emData)
      .then((res) => {
        // console.log("login UPDate",res.data)
       localStorage.setItem("token", res.data.token);
        dispatch({ type:LoginSuccess , payload: res.data});
      })
      .catch((err) => {
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


