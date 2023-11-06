import { ADD_TO_CART_REQ, ADD_TO_CART_SUCCESS, GET_All_PLANTS_FAIL, GET_All_PLANTS_REQ, GET_All_PLANTS_SUCCESS, GET_CART_FAIL, GET_CART_REQ, GET_CART_SUCCESS, GET_PLANT_FAIL, GET_PLANT_REQ, GET_PLANT_SUCCESS, UPDATE_CART_UI } from "./ActionType"

const initialState ={
    isLoading: false,
    isError: false,
    plants: [],
    totalPage: 0,
    cart: [],
    totalPlants: [],
    cartTotal:0
}

export const reducer = (state=initialState,{type,payload,sum})=>{

    switch(type){
        case GET_PLANT_REQ:
            return {...state,isLoading:true}
        case GET_PLANT_SUCCESS:
            // return {...state,isLoading:false,plants:payload.plants,totalPage:payload.totalPages}
           return {...state,isLoading:false,plants:payload.plants,totalPage:payload.totalPages}
        case GET_PLANT_FAIL:
           return {...state,isLoading:false,isError:true}
        case GET_CART_REQ:
            return {...state,isLoading:true}
        case GET_CART_SUCCESS:
            return{...state,isLoading:false,cart:payload,cartTotal:sum}
        case GET_CART_FAIL:
            return{...state,isLoading:false,isError:true}
        case ADD_TO_CART_REQ:
            return{...state,isLoading:true}
        case ADD_TO_CART_SUCCESS:
           return {...state,isLoading:false}
        case GET_All_PLANTS_REQ:
            return{...state,isLoading:true}
        case GET_All_PLANTS_SUCCESS:
            return{...state,isLoading:false,totalPlants:payload}
        case GET_All_PLANTS_FAIL:
            return{...state,isLoading:false,isError:true}
            //hemanthchanges
            case UPDATE_CART_UI:
                return{...state,isLoading:false,cart:payload,cartTotal:sum}
            //hemanthchanges
        default : return state
    }

}