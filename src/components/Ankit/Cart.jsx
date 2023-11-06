import React, { useEffect, useState } from 'react'
import {AiOutlineMinusCircle,  AiOutlinePlusCircle,AiFillDelete} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCartFunction, updateCartUi } from '../../Redux/ProductRoute/Action';
import axios from 'axios';


export default function Cart() {
  const cart = useSelector(state=>state.PlantReducer.cart);
  const cartTotal = useSelector(state=>state.PlantReducer.cartTotal);
const[total,setTotal]=useState(0)

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

      //ui update 
      const arr=cart.filter((e)=>{
        return e._id!==id
      })
      console.log(arr,"cartarr delete manual")
      dispatch(updateCartUi(arr))

      //total value update code
      let sum=0;
      for(let i=0;i<arr.length;i++){
        if(arr[i].quantity==undefined){
          sum+=arr[i].price
        }else{
          sum+=(arr[i].price*arr[i].quantity)
        }
      }
      dispatch(updateCartUi(arr,sum))

  }


//increment the quantity of one item

  const handleInc=(q,id)=>{

  // for intial quantity is 1 updating to 2
  const arr=cart.map((e)=>{
      if(e._id==id){
        if(e.quantity!=undefined){
          e.quantity++
        }else{
          e.quantity=2
        }
      }
      return e
  })

  let sum=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i].quantity==undefined){
      sum+=arr[i].price
    }else{
      sum+=(arr[i].price*arr[i].quantity)
    }
  }
  dispatch(updateCartUi(arr,sum))

  console.log(arr,"cartarr handleINC manual")
 

   if(q==undefined){
          const token = localStorage.getItem("token");
          console.log(token);
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            },
          };
          console.log(config, "con");
        
          axios
            .patch(`https://plant-api-opjp.onrender.com/cart/update/${id}`,{"quantity":2}, config)
            .then((res) => {
              console.log(res.data, "cartData");
            })
            .catch((err) => {
           console.log(err,"err")
            });
  
   }
   else{
    // qyantity of 1 item greater than 2 
          const token = localStorage.getItem("token");
          console.log(token);
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            },
          };

          console.log(config, "con");
       
          axios
            .patch(`https://plant-api-opjp.onrender.com/cart/update/${id}`,{"quantity":++q}, config)
            .then((res) => {
              console.log(res.data, "cartData");
            })
            .catch((err) => {
          console.log(err,"err in cart")
            });
   }
  }






  // decrementing  the quantity of one item 

  const handleDec=(q,id)=>{

    console.log(typeof(q),"typeofq")
    console.log(q,id,"q,id")

    const arr=cart.map((e)=>{
      if(e._id==id){
        if(e.quantity!=undefined){
          if(e.quantity>1){
            e.quantity--
          }
        }
      }
      return e
  })

  let sum=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i].quantity==undefined){
      sum+=arr[i].price
    }else{
      sum+=(arr[i].price*arr[i].quantity)
    }
  }
 
  
  dispatch(updateCartUi(arr,sum))

  if(q>1){
    const token = localStorage.getItem("token");
          console.log(token);
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            },
          };

          console.log(config, "con");
       
          axios
            .patch(`https://plant-api-opjp.onrender.com/cart/update/${id}`,{"quantity":--q}, config)
            .then((res) => {
              console.log(res.data, "cartData");
            })
            .catch((err) => {
          console.log(err,"err in cart")
            });
  }
  }






  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(getCartFunction)
  },[])
  console.log(cart,cartTotal,"cart,cartTotal")
  return (
  
    <DIV className="container mt-5 pt-5">
      <div className="row">
  <div className=" col-md-9 ps-5  py-5 rounded" >
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
        <button className="plusMin " onClick={() => { handleDec(e.quantity,e._id); }}>
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

  <div className=" col-md-3 border-start " >
    <h3 className="sideHead my-4  ms-3">Order Summary</h3>
    <hr />
    <p className="ms-3 fs-5" >
     Number Of Items : <span className="span1">{cart.length}</span>
    </p>
    {<p  className="ms-3 fs-5">
      Total Amount: <span className="span2">₹{Math.floor(cartTotal)}</span>
    </p>}
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
