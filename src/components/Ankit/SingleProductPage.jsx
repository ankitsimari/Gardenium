import React from 'react'
import productImg from "./img/about.png"
import {BsFillCartPlusFill} from "react-icons/bs"
export default function SingleProductPage() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <img src={productImg} className='w-75' alt="" />
                </div>
                <div className="col-md-5">
                    <h2 className='my-4'>Product Name</h2>
                    <h5 className='my-4'>Rating</h5>
                    <p className='my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi labore molestiae enim officiis magnam dolorum?</p>
                    <h4 className='my-4'>Price</h4>
                    <h5 className='my-4'>Including All texes</h5>
                    <a  className="button button--flex fw-bold">
                            Add To cart <BsFillCartPlusFill/>
                        </a>
                </div>
            </div>
        </div>
    </div>
  )
}
