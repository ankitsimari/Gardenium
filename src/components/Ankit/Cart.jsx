import React, { useEffect, useState } from 'react'
import {AiOutlineMinusCircle,  AiOutlinePlusCircle,AiFillDelete} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCartFunction } from '../../Redux/ProductRoute/Action';
import axios from 'axios';


export default function Cart() {
  const cart = useSelector(state=>state.PlantReducer.cart);
  const [total,setTotal]=useState(0)

  console.log(cart,"cart")

  

 


  // cart single item delete 
  const handleDelete=(id)=>{
    const token = localStorage.getItem("token");
    console.log(token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(config, "con");
   
    axios
      .delete(`https://plant-api-opjp.onrender.com/cart/delete/${id}`, config)
      .then((res) => {
        console.log(res,"delete cart");
       
      })
      .catch((err) => {
        console.log(err,"err cart delete")
      });

  }

  const handleInc=(q,id)=>{

   if(q==undefined){
          const token = localStorage.getItem("token");
          console.log(token);
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"

            },
           // body:JSON.stringify({"quantity":2})
          };
          console.log(config, "con");
         // dispatch({ type: GET_CART_REQ });
          axios
            .patch(`https://plant-api-opjp.onrender.com/cart/update/${id}`,{quantity:2}, config)
            .then((res) => {
              console.log(res.data, "cartData");
             // dispatch({ type: GET_CART_SUCCESS, payload: res.data });
            })
            .catch((err) => {
             // dispatch({ typr: GET_CART_FAIL });
            });
  
   }else{

   }
  }
  const handleDec=(q)=>{
     if(q!=undefined){

     }
  }


  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(getCartFunction)
  },[])
  return (
  
    <DIV className="container mt-5 pt-5">
      <div className="row">
  <div className=" col-md-9 ps-5  py-5 rounded" data-aos="fade-right">
    <span className="d-flex justify-content-between">
<h3>Shopping Cart</h3>
{/* //hemanth */}
<h6 className="me-5 fs-5 " >
{cart.length} plants
    </h6>
    </span>
<hr />
    <table className="headerTable">
      <thead>
        <tr className="bg text-white">
          <th>Item</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="">
        {cart.length > 0 && cart.map((e)=>(
      <tr className="shadow  " >
      <td>
        <img src={e.image} alt="" />
      </td>
      <td>{e.title}</td>
      <td>{e.category}</td>
      <td>{Math.floor(e.price)}</td>
      <td className="more_width">
        {/* <button className="plusMin " onClick={() => { handleDec(e.id); }}>
          <AiOutlineMinusCircle className="text-danger"/>
        </button> */}
        <button className="plusMin " >
          <AiOutlineMinusCircle className="text-danger"/>
        </button>
        
    {e.quantity==undefined?<span className="mx-1 text-danger">

{1}
</span>:<span className="mx-1 text-danger">

      {e.quantity}
    </span>}


        <button className="plusMin " onClick={() => { handleInc(e.quantity,e._id); }}> <AiOutlinePlusCircle className="text-success" /></button>
        <span></span>
        {/* <button className="plusMin " > <AiOutlinePlusCircle className="text-success" /></button> */}
     
      </td>
      {e.quantity==undefined?<td>{Math.floor(e.price)}</td>:<td>{Math.floor(e.price*e.quantity)}</td>}
      <td>
        <button className="deleteBtn py-1" onClick={() => { handleDelete(e._id); }}>
          <AiFillDelete className="fs-4 "/>
        </button>
        {/* <button className="deleteBtn py-1">
          <AiFillDelete className="fs-4 "/>
        </button> */}
      </td>
    </tr>
        ))}

      </tbody>
    </table>
    <hr className="mt-5"/>
  </div>

  <div className=" col-md-3 border-start " data-aos="fade-left">
    <h3 className="sideHead my-4  ms-3">Order Summary</h3>
    <hr />
    <p className="ms-3 fs-5" >
     Number Of Items : <span className="span1">{"cartArr.length"}</span>
    </p>
    <p  className="ms-3 fs-5">
      Total Amount: <span className="span2">₹{Math.floor(total)}</span>
    </p>
    <div className=" ms-3">
   {/* <ButtonComponent onClick={handleCheckout} name="Checkout" /> */}
    </div>
  </div>
      </div>
</DIV>


  );
};
const DIV = styled.div`
  display: flex;
  margin-top: 25px;

  
.outerDiv{
  width: 70%;
}
  img {
    width: 30%;
    margin-left:0% !important; 
  }

  .headerTable {
  width: 90%;

}
.bg{
    background-color:rgb(62,101,83);
}

tbody tr{
  height: 80px;
/* border: 1px solid gray; */
}

.more_width{
  width: 100px;
}

.headerTable th, .headerTable td {
  text-align: center;
  padding: 10px;
  /* border: none;  */
}

.sideDiv {
  border: none;
  padding: 15px;
 
}



.plusMin{
  border:none;

  /* border-radius: 4px; */
}

.deleteBtn{
  border:1px solid rgb(62,101,83);
  background-color:rgb(62,101,83);
  color: white;
  margin-right:70px;
  /* border-radius: 4px; */
}

.deleteBtn:hover{
  background-color: white;
  color:rgb(62,101,83);
}
`;
