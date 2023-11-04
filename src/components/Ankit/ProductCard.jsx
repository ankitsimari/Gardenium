import React, { useEffect, useState } from "react";
import styled from "styled-components";
import product1 from "./img/product1.png";
import product2 from "./img/product2.png";
import product3 from "./img/product3.png";
import product4 from "./img/product4.png";
import product5 from "./img/product5.png";
import product6 from "./img/product6.png";
import axios from "axios";
import { useSelector } from "react-redux";
export default function ProductCard() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:8080/plants/?page=2&limit=6")
      .then((res) => {
        console.log(res.data);
        setData(res.data.plants);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const all = useSelector((state) => state);
  console.log(all);

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <DIV>
      <div></div>

      <div className="container mt-5 pt-2">
        <div className="row">
          <div className="col-md-2 ">
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
                    data.map((e) => (
                      <article className="product__card">
                        <div className="product__circle"></div>

                        <img src={e.image} alt="" className="product__img" />

                        <h3 className="product__title">{e.name}</h3>

                        <span className="product__price"> ₹5{e.price}</span>

                        <button className="button--flex product__button">
                          <i className="ri-shopping-bag-line"></i>
                        </button>
                      </article>
                    ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
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
  }
`;
