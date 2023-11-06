import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Ankit/Home'
import ProductSection from '../components/Ankit/ProductSection'
import AboutSection from '../components/Ankit/AboutSection'
import AdminSidebar from '../components/Ankit/AdminPage/AdminSidebar'
import ContactSection from '../components/Ankit/ContactSection'
import Login from '../components/Ankit/Login'
import Signup from '../components/Ankit/Signup'
import LoginPage from '../components/Ankit/LoginPage'
import SingleProductPage from '../components/Ankit/SingleProductPage'
import User from '../components/Ankit/User'
import Cart from '../components/Ankit/Cart'
import PrivateRoute from './PrivateRoute'
import Payment from '../components/Payment/Payment'
export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ProductSection/>} />
            <Route path='/about' element={<AboutSection/>} />
            <Route path='/contact' element={  
                 <PrivateRoute>
                   <Cart/>
                 </PrivateRoute>     
            } />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/loginPage' element={<Login/>} />
            <Route path='/user' element={<User/>} />
            <Route path='/admin' element={<AdminSidebar/>} />
            <Route path='/payment' element={<Payment/>} />
            <Route path='/cart' element={
              <PrivateRoute>
                <Cart/>
              </PrivateRoute>
            } />
            <Route path='/signlePage/:id' element={<SingleProductPage/>} />
            
        </Routes>
    </div>
  )
}
