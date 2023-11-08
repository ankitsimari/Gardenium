import axios from "axios";
import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQ,
  ADD_TO_CART_SUCCESS,
  ADMIN_GET_ALL_PLANTS,
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

export const getDataFunction = (page,paramsObj) => (dispatch) => {
  dispatch({ type: GET_PLANT_REQ });
  axios
    .get(`https://plant-api-opjp.onrender.com/plants/?page=${page}&limit=6`,paramsObj)
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
  axios.get('https://plant-api-opjp.onrender.com/plants/').then((res)=>{
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



//change this route not putting the limit direct / route 

export const getAdminData = (dispatch) => {
  
  axios
    .get(`https://plant-api-opjp.onrender.com/plants/`)
    .then((res) => {
     // console.log(res.data.plants,"adminhemanth");
      dispatch({ type: ADMIN_GET_ALL_PLANTS, payload: res.data.plants });
    })
    .catch((err) => {
      console.log(err,"err while fetching admin plants data")
    });
};


export const addAdminProduct=(data)=>(dispatch)=>{

  const token = localStorage.getItem("token");
         // console.log(token);
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            },
          };
         // console.log(config, "con");
        
      
        axios
            .post(`https://plant-api-opjp.onrender.com/plants/add`,data, config)
            .then((res) => {
             // console.log(res, "newdata added");
            })
            .catch((err) => {
           console.log(err,"err")
            });
}
export const editAdminProduct=(id,data)=>(dispatch)=>{

  const token = localStorage.getItem("token");
         // console.log(token);
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            },
          };
         // console.log(config, "con");
        
      
     axios
            .patch(`https://plant-api-opjp.onrender.com/plants/update/${id}`,data, config)
            .then((res) => {
              console.log(res, "newdata added");
            })
            .catch((err) => {
           console.log(err,"err")
            });
}


