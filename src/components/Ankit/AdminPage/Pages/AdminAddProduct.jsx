import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// import { addAdminProduct } from "../../Redux/ProductReducer/action";
import AOS from "aos"
import 'aos/dist/aos.css'
import Swal from "sweetalert2";
import axios from "axios";
import { addAdminProduct } from "../../../../Redux/ProductRoute/Action";

const inintialState = {
  title: "",
  image: "",
  price: "",
  category: "",
  description: "",
};

export const AdminAddProduct = () => {
  const [data, setData] = useState(inintialState);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   // console.log(data)
    
    // dispatch(addAdminProduct(data)).then((res)=>{
    //     navigate("/AdminProductList")
    // })

     dispatch(addAdminProduct(data))
     

 
    
     setData(inintialState);

    Swal.fire({
      title: 'Product Added Successfully',
      text: 'Your Product is Added Successfully!',
      icon: 'success', // Set the icon to 'success'
      confirmButtonColor: 'var(--first-color)'
    });

  //  navigate("/admin")
    
  };

  console.log("data", data);
  useEffect(()=>{
    AOS.init({duration:2000})
    },[])
  return (
    <DIV className="mt-4">
      <form onSubmit={handleSubmit}>
        <h1>Add <span className="text-Area">Product</span></h1>
        <input
          type="text"
          name="title"
          placeholder="Name"
          onChange={handleChange}
          value={data.name}
          className="form-control"
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={handleChange}
          value={data.image}
          className="form-control"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={data.price}
          className="form-control"
        />
        
        <select name="category" onChange={handleChange} className="form-control">
          <option value="">Select Category</option>
          <option value="medicinal">medicinal</option>
            <option value="herbs">herbs</option>
            <option value="flowers">flowers</option>
            <option value="vegetable">vegetable</option>
            <option value="seeds">seeds</option>
        </select>
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={data.description}
          className="form-control"
        />
        <button type="submit">Add Product</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  max-width: 400px;
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

  .text-Area{
    color: var(--first-color);
  }

  button {
    width: 50%;
    height: 35px;
    border:1px solid var(--first-color);
    background-color: var(--first-color);
    color: white;
  }
  button:hover {
    background-color:white ;
    color: var(--first-color);
  }
`;
