import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { editAdminProduct } from '../../../../Redux/ProductRoute/Action';
//import { editAdminProduct } from '../../Redux/ProductReducer/action';

export const AdminEditProduct=()=>{
  
    const {id}=useParams();
    const[data,setData]=useState({})
    const navigate=useNavigate()
     const dispatch=useDispatch()
     const products = useSelector((store) => store.PlantReducer.adminPlantsList);
     console.log(products)
     const[price,setPrice]=useState(0);
     const[name,setName]=useState("");
     const[image,setImage]=useState("");
     const[about,setAbout]=useState("");
     const[category,setCategory]=useState("");
 
    const handleEdit=()=>{

     const userData={
         title:name,price,category,description:about,image
     }
   dispatch(editAdminProduct(id,userData))

   //setTimeout(()=>{Navigate(-1)},2000)



    }
     useEffect(()=>{
       
          const arr=products.filter((el)=>{return el._id==id})
          console.log(arr)
        setPrice(arr[0].price);
        setName(arr[0].title)
        setCategory(arr[0].category)
        setImage(arr[0].image)
       setAbout(arr[0].description)
     //console.log(price,title,"price title")
     
     },[])
   //  console.log(id,"id from params")
 return(
    <DIV >
     <div className='mt-4 text-center'>
     <h1>Edit <span className="text-danger">Product</span></h1>

         <input className='form-control my-3' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />

         <input className='form-control my-3' type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} />
  
         <select name="" className='form-control my-3' id="" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
         <option value="medicinal">medicinal</option>
            <option value="herbs">herbs</option>
            <option value="flowers">flowers</option>
            <option value="vegetable">vegetable</option>
            <option value="seeds">seeds</option>
         </select>

         <input className='form-control my-2' type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} />

         <input className='form-control my-3' type="text" value={about} onChange={(e)=>{setAbout(e.target.value)}} />

         <button onClick={handleEdit}>submit</button>   
     </div>
     </DIV>
 )
 }
 

 const DIV = styled.div`
  width: 400px;
  margin: auto;
  /* padding: 30px;  */

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  input,
  select {
    height: 40px;
    width: 100%;
    font-size: 20px;

  }

  button {
    width: 50%;
    height: 35px;
    border:1px solid #DC3545;
    background-color: #DC3545;
    color: white;
  }
  button:hover {
    background-color:white ;
    color: #DC3545;
  }
 `