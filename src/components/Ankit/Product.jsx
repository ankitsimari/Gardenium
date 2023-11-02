import React from 'react'
// import product1 from "../img/product1.png"
import product1 from "./img/product1.png"
import product2 from "./img/product2.png"
import product3 from "./img/product3.png"
import product4 from "./img/product4.png"
import product5 from "./img/product5.png"
import product6 from "./img/product6.png"

export default function Product() {
  return (
    <div>
               <section className="product section container" id="products">
                <h2 className="section__title-center" >
                    Check out our <br/> products
                </h2>

                <p className="product__description" >
                    Here are some selected plants from our showroom, all are in excellent 
                    shape and has a long life span. Buy and enjoy best quality.
                </p>

                <div className="product__container grid">
                    <article className="product__card" >
                        <div className="product__circle"></div>

                        <img src={product1} alt="" className="product__img"/>

                        <h3 className="product__title">Cacti Plant</h3>
                        <span className="product__price">₹190.99</span>

                        <button className="button--flex product__button">
                            <i className="ri-shopping-bag-line"></i>
                        </button>
                    </article>

                    <article className="product__card" >
                        <div className="product__circle"></div>

                        <img src={product2} alt="" className="product__img"/>

                        <h3 className="product__title">Cactus Plant</h3>
                        <span className="product__price">₹110.99</span>

                        <button className="button--flex product__button">
                            <i className="ri-shopping-bag-line"></i>
                        </button>
                    </article>

                    <article className="product__card" >
                        <div className="product__circle"></div>

                        <img src={product3} alt="" className="product__img"/>

                        <h3 className="product__title">Aloe Vera Plant</h3>
                        <span className="product__price">₹299.99</span>

                        <button className="button--flex product__button">
                            <i className="ri-shopping-bag-line"></i>
                        </button>
                    </article>

                    <article className="product__card" >
                        <div className="product__circle"></div>

                        <img src={product4} alt="" className="product__img"/>

                        <h3 className="product__title">Succulent Plant</h3>
                        <span className="product__price">₹125.99</span>

                        <button className="button--flex product__button">
                            <i className="ri-shopping-bag-line"></i>
                        </button>
                    </article>

                    <article className="product__card" >
                        <div className="product__circle"></div>

                        <img src={product5} alt="" className="product__img"/>

                        <h3 className="product__title">Succulent Plant</h3>
                        <span className="product__price">₹210.99</span>

                        <button className="button--flex product__button">
                            <i className="ri-shopping-bag-line"></i>
                        </button>
                    </article>

                    <article className="product__card" >
                        <div className="product__circle"></div>

                        <img src={product6} alt="" className="product__img"/>

                        <h3 className="product__title">Green Plant</h3>
                        <span className="product__price">₹118.99</span>

                        <button className="button--flex product__button">
                            <i className="ri-shopping-bag-line"></i>
                        </button>
                    </article>
                </div>
            </section>
    </div>
  )
}
