import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getDataFunction } from "../../Redux/ProductRoute/Action";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";


export default function ProductCard() {
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state.PlantReducer.plants);
  const length = useSelector((state) => state.PlantReducer.plants.length);
  const loading = useSelector((state) => state.PlantReducer.isLoading);
  const totalPage = useSelector((state) => state.PlantReducer.totalPage);
  const all = useSelector((state) => state);
  console.log(all);
  console.log(totalPage);
  const paginationArray = new Array(totalPage).fill(0);
  const Total = Math.ceil(length / 6);
  const handlePage = (index) => {
    setPage(index + 1);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    if (page < length-1) {
      setPage((prev) => prev + 1);
    }
    window.scrollTo(0, 0);
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
    window.scrollTo(0, 0);
  };

  const navigate = useNavigate()

  const handleAddToCart = (obj) => {
    axios.post(`http://localhost:8080/cart/add`,obj).then((res)=>{
    console.log(res.data);
    if(res.data.err=="login_First"){
      navigate("/loginPage")
    }else{
      Swal.fire({
        title: 'Added to Cart',
        text: 'Product Added to Cart Successfully!',
        icon: 'success', // Set the icon to 'success'
        confirmButtonColor: 'rgb(62,101,83)'
      });
    }

    }).catch(err=>{
      console.log(err)
    
    })
  }

  const handleSignlePage = (id)=>{
    navigate(`/signlePage/${id}`)
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFunction(page));
  }, [page]);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  // console.log(data);
  if (loading) {
    return <Loader/>;
  }

  return (
    <DIV>
      <div></div>

      <div className="container mt-5 pt-2">
        <div className="row">
          <div className="col-md-2 d-none d-md-grid filter_part">
            <div>
              <h3 className="mt-5 pt-5 ">Category</h3>
              <span className="d-flex mt-4 p-0 m-0">
                <input type="checkbox" className=" p-0 m-0" />
                <label className="p-0 m-0 ms-3">Flower</label>
              </span>

              <span className="d-flex p-0 m-0">
                <input type="checkbox" className="p-0 m-0" />
                <label className="p-0 m-0 ms-3">Seeds</label>
              </span>

              <span className="d-flex p-0 m-0">
                <input type="checkbox" className="p-0 m-0" />
                <label className="p-0 m-0 ms-3">Medicinal</label>
              </span>

              <span className="d-flex p-0 m-0">
                <input type="checkbox" className=" p-0 m-0" />
                <label className="p-0 m-0 ms-3">Vegetable</label>
              </span>

              <span className="d-flex p-0 m-0">
                <input type="checkbox" className="p-0 m-0 bg-danger" />
                <label className="p-0 m-0 ms-3">Known</label>
              </span>
            </div>

            <div>
              <h3 className="mt-5">Price</h3>
              <span className="mt-4 d-flex p-0 m-0">
                <input type="radio" className="p-0 m-0" />
                <label className="p-0 m-0 ms-3">Low-to-High</label>
              </span>
              <span className="d-flex p-0 m-0">
                <input type="radio" className=" p-0 m-0 " />
                <label className="p-0 m-0 ms-3">High-to-Low</label>
              </span>
            </div>
          </div>
          <div className="col-md-10">
            <div>
              <section className="product " id="products">
                <div className="product__container grid">
                  {data.length > 0 &&
                    data.map((e, index) => (
                      <article className="product__card" key={index}>
                        <div className="product__circle"></div>

                        <img src={e.image} alt="" className="product__img" />

                        <h3 className="product__title">{e.title}</h3>
        

                        <span className="product__price"> ₹5{e.price}</span>

                        <button className="button--flex product__button" onClick={()=>handleSignlePage(e._id)}>
                          <i className="ri-shopping-bag-line"></i>
                        </button>
                      </article>
                    ))}
                </div>
              </section>
            </div>

            {/* pagination */}
            <div className="d-flex justify-content-center">
              <button
                disabled={page == 1}
                className="pageBtn rounded "
                onClick={handlePrev}
              >
                Prev
              </button>
              {paginationArray.map((item, index) => (
                <button
                  className="rounded"
                  style={{
                    backgroundColor:
                      page === index + 1 ? "rgb(62,101,83)" : "transparent",
                    padding: "5px 10px",
                    border:
                      page === index + 1
                        ? "1px solid rgb(62,101,83)"
                        : "1px solid gray",
                    margin: "2px",
                    color: page === index + 1 ? "white" : null,
                  }}
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                disabled={page == length-1}
                className="pageBtn rounded px-2"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
.filter_part{
  position:fixed;
  top: 80px;
}
.col-md-10{
  margin-left:220px;
}

  .product__description {
    text-align: center;
  }

  .product__container {
    padding: 3rem 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 3rem;
  }

  .product__card {
    display: grid;
    position: relative;
  }

  .product__img {
    position: relative;
    /* width: 100px; */
    height: 220px;
    justify-self: center;
    margin-bottom: var(--mb-0-75);
    transition: 0.3s;
  }

  .product__title,
  .product__price {
    font-size: var(--small-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
  }

  .product__title {
    margin-bottom: 0.25rem;
  }

  .product__button {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: var(--first-color);
    color: #fff;
    padding: 0.25rem;
    border-radius: 0.35rem;
    font-size: 1.15rem;
  }

  .product__button:hover {
    background-color: var(--first-color-alt);
  }

  .product__circle {
    width: 90px;
    height: 90px;
    background-color: var(--first-color-lighten);
    border-radius: 50%;
    position: absolute;
    top: 18%;
    left: 5%;
  }

  .product__card:hover .product__img {
    transform: translateY(-0.5rem);
  }

  @media screen and (max-width: 320px) {
    .product__container {
      grid-template-columns: 0.6fr;
      justify-content: center;
    }
    .col-md-10{
  margin-left:0px;
}
  }

  @media screen and (min-width: 576px) {
    .product__description {
      padding: 0 4rem;
    }
    .product__container {
      grid-template-columns: repeat(2, 170px);
      justify-content: center;
      column-gap: 5rem;
    }
    .col-md-10{
  margin-left:0px;
}
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .product__description {
      padding: 0 16rem;
    }
    .product__container {
      padding: 4rem 0;
      grid-template-columns: repeat(3, 185px);
      gap: 4rem 6rem;
    }
    .product__img {
      width: 160px;
    }
    .product__circle {
      width: 110px;
      height: 110px;
    }
    .product__title,
    .product__price {
      font-size: var(--normal-font-size);
    }
    .col-md-10{
  margin-left:150px;
}
  }
`;
