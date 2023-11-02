import React from 'react'
import Hero from './Hero'
import About from './About'
import Steps from './Steps'
import Product from './Product'
import Capsule from './Capsule'
import Testi from './Testi'
import Navbar from './Navbar'


export default function Home() {
  return (
    <div>

        <Hero/>
        <About/>
        <Steps/>
        <Product/>
        <Capsule/>
        {/* <Testi/> */}
    </div>
  )
}
