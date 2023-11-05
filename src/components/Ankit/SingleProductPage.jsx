import React, { useEffect, useState } from 'react'
import productImg from "./img/about.png"
import {BsFillCartPlusFill} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { addToCartFunction } from '../../Redux/ProductRoute/Action';
export default function SingleProductPage() {
    const [data,setData]=useState({});
    const Plant =useSelector((state) => state.PlantReducer.plants);
    const {id}=useParams()

    const singlePlant = Plant.filter((e)=>{
        if(e._id==id){
            return e
        }
    })

    const dispatch = useDispatch()

    const handleAdd = ()=>{
        dispatch(addToCartFunction(data))
    }

    useEffect(()=>{
        setData(singlePlant[0])
    },[Plant])

    

    console.log(data)
  return (
    <div>
        <div className="container mt-5 pt-5" >
            <div className="row mt-lg-5">
                <div className="col-md-6">
                    <img src={data.image} className='w-75' alt="" />
                </div>
                <div className="col-md-6 ">
                    <h2 className='my-4'>{data.title}</h2>
                    <h5 className='my-4 text-danger'>{data.rating}</h5>
                    <p className='my-4'>{data.description}</p>
                    <span className='d-flex '>
                    {/* <h4 className='my-4 text-danger me-5'>₹7{data.price}</h4>     */}
                    <h4 className='my-4 '>₹5{data.price}</h4>
                    </span>
                    <h5 className='my-4'>Including All texes</h5>
                    <a  className="button button--flex fw-bold" onClick={handleAdd}>
                            Add To cart <BsFillCartPlusFill/>
                        </a>
                </div>
            </div>
        </div>
    </div>
  )
}


const DIV = styled.div`
    img{
        height: 300px;
    }
`