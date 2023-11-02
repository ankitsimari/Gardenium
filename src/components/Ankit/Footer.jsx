import React from 'react'
import card1 from "./img/card1.png"
import card2 from "./img/card2.png"
import card3 from "./img/card3.png"
import card4 from "./img/card4.png"

export default function Footer() {
  return (
    <div>
            <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content">
                    <a href="#" className="footer__logo">
                        <i className="ri-leaf-line footer__logo-icon"></i> Gardenium
                    </a>

                    <h3 className="footer__title">
                        Subscribe to our newsletter <br/> to stay update
                    </h3>

                    <div className="footer__subscribe">
                        <input type="email" placeholder="Enter your email" className="footer__input"/>

                        <button className="button button--flex footer__button">
                            Subscribe
                            <i className="ri-arrow-right-up-line button__icon"></i>
                        </button>
                    </div>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Our Address</h3>

                    <ul className="footer__data">
                        <li className="footer__information">Masai</li>
                        <li className="footer__information">Bangalore</li>
                        <li className="footer__information">123-456-789</li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Contact Us</h3>

                    <ul className="footer__data">
                        <li className="footer__information">+999888777</li>
                        
                        <div className="footer__social">
                            <a href="https://www.facebook.com/" className="footer__social-link">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/ank_krs/" className="footer__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ankit-kumar-747786235/" className="footer__social-link">
                                <i className="ri-linkedin-fill"></i>
                            </a>
                        </div>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">
                        We accept all credit cards
                    </h3>

                    <div className="footer__cards">
                        <img src={card1} alt="" className="footer__card"/>
                        <img src={card2} alt="" className="footer__card"/>
                        <img src={card3} alt="" className="footer__card"/>
                        <img src={card4} alt="" className="footer__card"/>
                    </div>
                </div>
            </div>

            <p className="footer__copy fw-bold">&#169;All rigths reserved to Ankit Kumar</p>
        </footer>
    </div>
  )
}
