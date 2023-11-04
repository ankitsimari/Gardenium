import {LoginFail, LoginSuccess} from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    isAuth:false,
    Users:[],
    loginUser:{},
    adminAuth:false,
    token:""
}

export const reducer = (state=initialState,{type,payload})=>{
    console.log(type,"reducer")
    switch(type){
    case LoginSuccess:
        return{...state,token:payload.token,loginUser:payload.user,isAuth:true}

    case LoginFail:
        return{...state,isError:true}
        default: return state
    }
}