import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Signup from '../pages/Signup'
import GoldJwellerey from '../pages/goldjwellerey'
import Necklaces from '../pages/Necklaces'
import Earrings from '../pages/Earrings'
import Bracelets from '../pages/Bracelets'
import Cart from '../components/Cart'
import Login from '../pages/Login'
import ProtectRoute from '../context/ProtectRoute'
import Footer from '../components/Footer'
import ProductDetails from '../pages/ProductDetails'
import Wishlist from '../pages/Wishlist'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<ProtectRoute><Home/></ProtectRoute>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path ='/signin' element={<Signup/>}/>
        <Route path ='/goldjwellerey' element={<ProtectRoute><GoldJwellerey/></ProtectRoute>}/>
        <Route path= '/necklaces' element={<ProtectRoute><Necklaces/></ProtectRoute>}/> 
        <Route path = '/earrings' element={<ProtectRoute><Earrings/></ProtectRoute>}/>
        <Route path='/bracelets' element = {<ProtectRoute><Bracelets/></ProtectRoute>}/>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/footer' element = {<Footer/>}/>
        <Route path='/product/:category/:id' element = {<ProductDetails/>}/>
        <Route path = '/wishlist' element={<Wishlist/>}/>
    </Routes>
  )
}

export default AllRoutes