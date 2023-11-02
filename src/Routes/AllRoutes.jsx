import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Ankit/Home'
import ProductSection from '../components/Ankit/ProductSection'
import AboutSection from '../components/Ankit/AboutSection'
import AdminSidebar from '../components/Ankit/AdminPage/AdminSidebar'
import ContactSection from '../components/Ankit/ContactSection'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ProductSection/>} />
            <Route path='/about' element={<AboutSection/>} />
            <Route path='/contact' element={<ContactSection/>} />
            
        </Routes>
    </div>
  )
}
