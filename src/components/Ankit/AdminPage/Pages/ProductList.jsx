import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";

import { Link, useSearchParams } from "react-router-dom";

import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { getAdminData, getDataFunction } from "../../../../Redux/ProductRoute/Action";
import { Box, Button, Modal, Typography } from "@mui/material";

export const ProductList=()=>{
    
   
    const[search,setSearch]=useState("")
    const dispatch=useDispatch()

    const products = useSelector(state=>state.PlantReducer.adminPlantsList);
    const product = useSelector(state=>state.PlantReducer);



    
    const [searchParams] = useSearchParams();
  
    const paramsObj = {
      params: {
        category: searchParams.getAll("category"),
        brand:searchParams.getAll("cate"),
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
      },
    };
  
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
      .delete(`https://plant-api-opjp.onrender.com/plants/delete/${id}`, config)
      .then((res) => {
        //console.log(res,"delete cart");
        dispatch( getAdminData) 
      })
      .catch((err) => {
        console.log(err,"err cart delete")
      });

  }






    useEffect(() => {
     dispatch( getAdminData) 
         // dispatch(getDataFunction(1))    
    }, []);
    
 //console.log(product)




    return(
   <>
        {/* <input type="text" onChange={(e)=>{setSearch(e.target.value)}} /> */}

                  {/* <Link className="editBtn text-decoration-none" to='/addNewProduct'>ADD NEW Product</Link> */}
             

        <DIV>
          <div className="ms-3 mt-5" style={{width:"20%"}}>
     
          </div>
        <div className="outerDiv">
    <table className="headerTable">
      <thead>
        <tr>
          <th>Item</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="gap-3">
        {products &&
          products.map((e, i) => {
            return (
              <tr className="container shadow " key={i} style={{height:"80px"}}>
                <td>
                  <img src={e.image} alt="" />
                </td>
                <td>{e.title}</td>
                <td>{e.category}</td>
                <td>{Math.floor(e.price)}</td>
                <td>1</td>
                <td>
                  <button className="editBtn" > 
                  <Link className="editBtn text-decoration-none " to={`/adminEditProduct/${e._id}`}><AiFillEdit className="my-1 fs-4"/></Link>
                  </button>
                 
              
                </td>
               
                <td>
                  <button className="deleteBtn" onClick={() => { handleDelete(e._id); }}><MdDeleteForever className="my-1 fs-4"/></button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  </div>

  
</DIV>

     </>   
        
 
    )    
    
}
const DIV=styled.div`
    .outerDiv{
  width: 100%;
}

  display: flex;
  margin-top: 25px;
  img {
    width: 20%;
    border-radius: 10px;
  }

  .headerTable {
  width: 75%;
  border-collapse: collapse;
  margin-left: 20px;
}

.headerTable th, .headerTable td {
  text-align: center;
  padding: 10px;
  border: none; 
}

.item-image {
  width: 50px;
  border-radius: 10px;
}
.headerTable tr {
 margin: 5px;
 
  
}


.pay {
  background-color: white;
  color: #dc3545;
  border: 1px solid #dc3545;
}
.plusMin{
  border:none;

  border-radius: 4px;
}

.deleteBtn{
  border:none;
  background-color:#dc3545;
  color: white;
  border-radius: 3px;
  width: 50px;
}
.editBtn{
  border:none;
  background-color:green;
  color: white;
  border-radius: 3px;
  width: 40px;
}
`