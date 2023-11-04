import { GET_PLANT_FAIL, GET_PLANT_REQ, GET_PLANT_SUCCESS } from "./ActionType"

const initialState ={
    isLoading: false,
    isError: false,
    plants: [],
    totalPage: 0,
}

export const reducer = (state=initialState,{type,payload})=>{

    switch(type){
        case GET_PLANT_REQ:
            return {...state,isLoading:true}
        case GET_PLANT_SUCCESS:
            // return {...state,isLoading:false,plants:payload.plants,totalPage:payload.totalPages}
           return {...state,isLoading:false,plants:payload.plants,totalPage:payload.totalPages}
        case GET_PLANT_FAIL:
           return {...state,isLoading:false,isError:true}
        default : return state
    }

}