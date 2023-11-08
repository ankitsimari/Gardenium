import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getDataFunction } from "../../Redux/ProductRoute/Action";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "./Loader";

export default function ProductCard() {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  const [order, setOrder] = useState(searchParams.get("order") || "");
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
    if (page < length - 1) {
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

  const handleSignlePage = (id) => {
    navigate(`/signlePage/${id}`);
  };

  const navigate = useNavigate();

  // sort

  const handleOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  // Filter

  const handleFilter = (e) => {
    const data = e.target.value;
    const newCat = [...category];

    if (newCat.includes(data)) {
      const index = newCat.indexOf(data);
      newCat.splice(index, 1);
    } else {
      newCat.push(data);
    }
    setCategory(newCat);
    setPage(1)
  };
  console.log(category);



  const paramsObj = {
    params: {
      category: searchParams.getAll("category"),
      _order: searchParams.get("order"),
    },
  };

  console.log(paramsObj);

  const dispatch = useDispatch();

  // pagination

  useEffect(() => {
    const updatedParamsObj = {
      params: {
        category,
        _order: order,
      },
    };
    dispatch(getDataFunction(page, updatedParamsObj));
  }, [page, category, order]);
  
  if (loading) {
    return <Loader />;
  }

  return (
    <DIV>
      <div className="container mt-5 pt-2">
        <div className="d-lg-none">
        <div className="mt-5 d-flex justify-content-center gap-3  ">
          <select onChange={handleFilter}
            className="px-2  option"
            style={{ height: "40px", background: "transparent" }}
          >
            <option value="">Category</option>
            <option value="flowers">Flower</option>
            <option value="seeds">Seeds</option>
            <option value="medicinal">Medicinal</option>
            <option value="vegetable">Vegetable</option>
            <option value="herbs">Herbs</option>
          </select>
          {/* <select
            className="px-2  option"
            style={{ height: "40px", background: "transparent" }}
          >
            <option value="">Price</option>
            <option value="inc">Low to High</option>
            <option value="desc">High to Low</option>
          </select> */}
        </div>
        </div>
    

        <div className="row">
          <div className="col-lg-2 d-none d-lg-grid mt-5 filter_part">
            <div>
              <div>

           
              <h3 className="mt-5 pt-5 ">Category</h3>
              <span className="d-flex mt-4 p-0 m-0">
                <input
                  value="flowers"
                  type="checkbox"
                  onChange={handleFilter}
                  className=" p-0 m-0"
                  checked={category.includes("flowers")}
                />
                <label className="p-0 m-0 ms-3">Flower</label>
              </span>

              <span className="d-flex p-0 m-0">
                <input
                  value="seeds"
                  type="checkbox"
                  onChange={handleFilter}
                  className="p-0 m-0"
                  checked={category.includes("seeds")}
                />
                <label className="p-0 m-0 ms-3">Seeds</label>
              </span>

              <span className="d-flex p-0 m-0">
                <input
                  value="medicinal"
                  type="checkbox"
                  onChange={handleFilter}
                  checked={category.includes("medicinal")}
                  className="p-0 m-0"
                />
                <label className="p-0 m-0 ms-3">Medicinal</label>
              </span>

              <span className="d-flex p-0 m-0">
                <input
                  value="vegetable"
                  type="checkbox"
                  onChange={handleFilter}
                  className=" p-0 m-0"
                  checked={category.includes("vegetable")}
                />
                <label className="p-0 m-0 ms-3">Vegetable</label>
              </span>

              <span className="d-flex p-0 m-0">
                <input
                  value="herbs"
                  type="checkbox"
                  onChange={handleFilter}
                  className="p-0 m-0 bg-danger"
                  checked={category.includes("herbs")}
                />
                <label className="p-0 m-0 ms-3">Herbs</label>
              </span>
            </div>
            <div onChange={handleOrder}>
              <h3 className="mt-5 ">Price</h3>
              <input
                className="form-check-input bg me-2"
                data-testid="sort-asc"
                type="radio"
                name="sort"
                value={"asc"}
                defaultChecked={order === "asc"}
              />
              <label>Ascending</label>
              <br />
              <input
                className="form-check-input bg me-2"
                data-testid="sort-desc"
                type="radio"
                name="sort"
                value={"desc"}
                defaultChecked={order === "desc"}
              />
              <label>Descending</label>
            </div>
            </div>
          </div>
          <div className="col-lg-9">
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

                        <button
                          className="button--flex product__button"
                          onClick={() => handleSignlePage(e._id)}
                        >
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
                disabled={page == length - 1}
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
  .filter_part {
    /* position: fixed; */
    top: 80px;
  }

  .option {
    color: var(--first-color);
    border: 1px solid var(--first-color);
  }
  .col-md-10 {
    margin-left: 220px;
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
    .col-md-10 {
      margin-left: 0px;
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
    .col-md-10 {
      margin-left: 0px;
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
    .col-md-10 {
      margin-left: 150px;
    }
  }
`;
