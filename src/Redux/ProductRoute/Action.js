
import axios from "axios"
import { ADD_TO_CART_FAIL, ADD_TO_CART_REQ, ADD_TO_CART_SUCCESS, GET_PLANT_FAIL, GET_PLANT_REQ, GET_PLANT_SUCCESS } from "./ActionType"


export const getDataFunction = (page)=> (dispatch) =>{
    dispatch({type:GET_PLANT_REQ})
axios.get(`http://localhost:8080/plants/?page=${page}&limit=6`).then((res)=>{
    console.log(res.data.PlantReducer)
dispatch({type:GET_PLANT_SUCCESS,payload:res.data})
}).catch((err)=>{
    dispatch({type:GET_PLANT_FAIL,payload:err})
})
}


export const addToCartFunction = (obj)=> (dispatch)=>{
    dispatch({type:ADD_TO_CART_REQ})
    axios.post(`http://localhost:8080/cart/add`,{obj}).then((response)=>{
        dispatch({type:ADD_TO_CART_SUCCESS})
    }).catch((error)=>{
        dispatch({type:ADD_TO_CART_FAIL})
    })
}