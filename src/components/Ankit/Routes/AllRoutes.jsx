import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import ProductSection from '../ProductSection'
import AboutSection from '../AboutSection'
import AdminSidebar from '../AdminPage/AdminSidebar'
import ContactSection from '../ContactSection'

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
