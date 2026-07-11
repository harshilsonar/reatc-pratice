import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Signup from '../pages/Signup'
import GoldJwellerey from '../pages/goldjwellerey'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path ='/signin' element={<Signup/>}/>
        <Route path ='/goldjwellerey' element={<GoldJwellerey/>}/>
    </Routes>
  )
}

export default AllRoutes