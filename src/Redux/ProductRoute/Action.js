import axios from "axios";
import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQ,
  ADD_TO_CART_SUCCESS,
  GET_All_PLANTS_FAIL,
  GET_All_PLANTS_REQ,
  GET_All_PLANTS_SUCCESS,
  GET_CART_FAIL,
  GET_CART_REQ,
  GET_CART_SUCCESS,
  GET_PLANT_FAIL,
  GET_PLANT_REQ,
  GET_PLANT_SUCCESS,
  UPDATE_CART_UI,
} from "./ActionType";
import { useSelector } from "react-redux";

export const getDataFunction = (page) => (dispatch) => {
  dispatch({ type: GET_PLANT_REQ });
  axios
    .get(`https://plant-api-opjp.onrender.com/plants/?page=${page}&limit=6`)
    .then((res) => {
      console.log(res.data.PlantReducer);
      dispatch({ type: GET_PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PLANT_FAIL, payload: err });
    });
};

export const addToCartFunction = (obj) => (dispatch) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch({ type: ADD_TO_CART_REQ });
  axios
    .post(`https://plant-api-opjp.onrender.com/cart/add`, obj, config)
    .then((response) => {
      dispatch({ type: ADD_TO_CART_SUCCESS ,payload:response.data });
    })
    .catch((error) => {
      dispatch({ type: ADD_TO_CART_FAIL });
    });
};

export const getCartFunction = (dispatch) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config, "con");
  dispatch({ type: GET_CART_REQ });
  axios
    .get("https://plant-api-opjp.onrender.com/cart/", config)
    .then((res) => {
      console.log(res.data, "cartData");
          //chnages
    let sum=0;
    for(let i=0;i<res.data.length;i++){
      if(res.data[i].quantity==undefined){
        sum+=res.data[i].price
      }else{
        sum+=(res.data[i].price*res.data[i].quantity)
      }
    }
 // changes
      dispatch({ type: GET_CART_SUCCESS, payload: res.data,sum });
    })
    .catch((err) => {
      dispatch({ typr: GET_CART_FAIL });
    });
};


export const getAllPlantsFunction = (dispatch)=>{
  dispatch({ type: GET_All_PLANTS_REQ})
  axios.get('https://plant-api-opjp.onrender.com/plants/?limit=30').then((res)=>{
    console.log(res.data)
    dispatch({ type: GET_All_PLANTS_SUCCESS,payload:res.data})
  }).catch((err)=>{
    dispatch({ type: GET_All_PLANTS_FAIL})
  })
}


//hemanthchanges
export const updateCartUi = (arr,sum) => (dispatch) => {
  dispatch({type:UPDATE_CART_UI,payload:arr,sum})
};