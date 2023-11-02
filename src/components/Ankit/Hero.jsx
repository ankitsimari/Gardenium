import React from 'react'
// import HeroImg from "./assets/img/home.png"
import HeroImg from "./img/home.png"
import {useNavigate} from "react-router-dom"
import Try from "./img/Try3.png"

export default function Hero() {
    const navigate = useNavigate()

    const handleClick=()=>{
     navigate("/products")
    }
  return (
    <div>
             <section className="home" id="home">
                <div className="home__container container grid">
                    <img src={HeroImg} alt="" className="home__img" />
                    {/* <img src={Try} alt="" className="home__img"/> */}

                    <div className="home__data">
                        <h1 className="home__title">
                            {/* Plants will make <br/> your life better */}
                            Discover and Buy  <br/> Beautiful Plants 
                        </h1>
                        <p className="home__description">
                        Grow your world with our green treasures. Find your perfect plant companion today.
                        </p>
                        <a onClick={handleClick} className="button button--flex">
                            Explore <i className="ri-arrow-right-down-line button__icon"></i>
                        </a>
                    </div>

                    <div className="home__social">
                        <span className="home__social-follow">Follow Us</span>

                        <div className="home__social-links">
                            <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/ank_krs/" target="_blank" className="home__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ankit-kumar-747786235/" target="_blank" className="home__social-link">
                                <i className="ri-linkedin-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
